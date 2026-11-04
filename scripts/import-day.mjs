import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const directory = path.join(root, 'dist/data');
const categories = ['product_release', 'research_paper', 'funding', 'opensource', 'regulation', 'community_hot'];

export function validateDay(day) {
  if (!day || !/^\d{4}-\d{2}-\d{2}$/.test(day.date) || !Array.isArray(day.items)) throw new Error('需要 date 和 items 字段');
  const parsedDate = new Date(day.date + 'T00:00:00Z');
  if (!Number.isFinite(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== day.date) throw new Error('无效日期');
  const ids = new Set();
  for (const item of day.items) {
    if (!item.id || ids.has(String(item.id))) throw new Error('新闻编号缺失或重复');
    ids.add(String(item.id));
    if (typeof item.title !== 'string' || !item.title.trim()) throw new Error('新闻标题不能为空');
    if (typeof item.summary !== 'string') throw new Error('需要新闻摘要');
    if (typeof item.source !== 'string' || !item.source.trim()) throw new Error('需要来源名称');
    const url = new URL(item.url);
    if (!['https:', 'http:'].includes(url.protocol)) throw new Error('原文链接必须是网页地址');
    if (!categories.includes(item.category)) throw new Error('未知分类');
    if (!Number.isInteger(item.heat) || item.heat < 1 || item.heat > 5) throw new Error('热度应为 1 到 5');
    if (item.tags != null && (!Array.isArray(item.tags) || item.tags.some(tag => typeof tag !== 'string'))) throw new Error('标签应为文字数组');
    if (item.detail != null && typeof item.detail !== 'string') throw new Error('详情应为文字');
  }
}

export function rebuildManifest() {
  const dates = fs.readdirSync(directory).filter(name => /^\d{4}-\d{2}-\d{2}\.js$/.test(name)).map(name => name.slice(0, 10)).sort();
  const counts = {};
  const versions = {};
  for (const date of dates) {
    const context = { window: {} };
    vm.runInNewContext(fs.readFileSync(path.join(directory, date + '.js'), 'utf8'), context, { timeout: 1000 });
    const day = context.window.NEWS_DATA?.[date];
    validateDay(day);
    counts[date] = day.items.length;
    versions[date] = day.updated_at || day.generated_at || String(day.items.length);
  }
  const manifest = { dates, latest: dates.at(-1) || null, counts, versions };
  const target = path.join(directory, 'manifest.js');
  fs.writeFileSync(target + '.tmp', 'window.NEWS_MANIFEST = ' + JSON.stringify(manifest, null, 2) + ';\n');
  fs.renameSync(target + '.tmp', target);
  return manifest;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const source = process.argv[2];
  if (!source) throw new Error('用法：node scripts/import-day.mjs <新闻 JSON 文件> 或 --rebuild');
  if (source !== '--rebuild') {
    const day = JSON.parse(fs.readFileSync(path.resolve(source), 'utf8'));
    validateDay(day);
    const target = path.join(directory, day.date + '.js');
    if (fs.existsSync(target) && !process.argv.includes('--replace')) throw new Error('该日期已存在；确认覆盖时使用 --replace');
    day.items = day.items.map(item => ({ ...item, id: String(item.id), date: day.date, tags: item.tags || [] }));
    day.total_count = day.items.length;
    day.categories = Object.fromEntries(categories.map(category => [category, day.items.filter(item => item.category === category).length]));
    day.generated_at ||= new Date().toISOString();
    const script = 'window.NEWS_DATA = window.NEWS_DATA || {};\nwindow.NEWS_DATA[' + JSON.stringify(day.date) + '] = ' + JSON.stringify(day, null, 2) + ';\n';
    fs.writeFileSync(target + '.tmp', script);
    fs.renameSync(target + '.tmp', target);
  }
  const manifest = rebuildManifest();
  console.log(JSON.stringify({ days: manifest.dates.length, latest: manifest.latest, items: Object.values(manifest.counts).reduce((a, b) => a + b, 0) }));
}
