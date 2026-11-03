# AI 资讯日报

这是 AI News Daily 的个人复现版本。保留原站的布局、搜索、分类、热度筛选、详情展开、主题切换和日期归档。

## 当前状态

- 名称暂定为「AI 资讯日报」。编辑 `dist/js/site-config.js` 即可修改页面名称和副标题。
- 截至 2026-11-03 的历史数据来自参考站公开仓库，不代表已逐条核验；按站主要求保留。
- 已设置 ChatGPT 云端定时任务：每天北京时间 07:00 开始独立搜索、整理、核验并发布新一期。首期独立日报日期为 2026-11-04。07:00 是开始时间，并非保证上线时间。任务直接通过 GitHub 连接操作仓库，不依赖站主电脑开机；需要云端工具连接有效且有可用额度。原 Codex 本地任务已暂停。
- 新增日报的搜索、来源和发布规则见 [AUTOMATION.md](AUTOMATION.md)。当前未接入另行计费的模型 API。
- 此版本通过 GitHub Pages 发布。仓库：https://github.com/yiesacarl/ai-news-daily 。网站部署状态请查看仓库 Actions。

## 本地查看

直接打开 `dist/index.html`，或在本目录运行 `python3 -m http.server 8080 --directory dist` 后访问 `http://localhost:8080`。

## 更新内容

将新一期整理为 JSON，包含 `date`（YYYY-MM-DD）和 `items` 数组。每条包含 `id`、`title`、`summary`、`url`、`source`、`category`、`tags`、`heat`，可选 `detail`。

分类可选：`product_release`、`research_paper`、`funding`、`opensource`、`regulation`、`community_hot`。热度为 1–5。

运行 `node scripts/import-day.mjs /绝对路径/当天新闻.json`。程序检查数据、生成当天文件并重建日期目录。已有日期默认拒绝覆盖，确认替换时加 `--replace`。之后重新发布网站，新内容才会上线。

只重新计算目录和条目数时运行 `node scripts/import-day.mjs --rebuild`。

## 来源

原项目：https://github.com/fuxin9257/ai-news-daily

原作者：fuxin9257。原仓库 README 声明 MIT；本复现保留来源，新闻内容版权归相应原作者所有。未复制原作者的邮件地址、本地路径或定时任务账户配置。

## 本版修正

- 重建日期目录，修正最新一期条目数量的位置。
- 修复数据尚未全部加载时搜索结果不完整、快速切换日期时旧请求覆盖新日期的问题。
- 增加可见的标签筛选清除入口和键盘可操作的详情按钮。
- 明确标注历史数据来源及自动更新状态。

## GitHub Pages 发布

将本目录内容推送到自己的仓库 main 分支。在 Settings → Pages 中选择 GitHub Actions。发布流程仅上传 dist 中的网站文件，不上传脚本和说明文件。后续向 main 提交内容会重新发布网站。GitHub Actions 负责部署；每日搜索由站主 ChatGPT 中单独设置的云端定时任务触发，仅复制本仓库不会复制该定时任务。
