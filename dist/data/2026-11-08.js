window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA["2026-11-08"] = {
  "date": "2026-11-08",
  "generated_at": "2026-11-07T23:00:46Z",
  "updated_at": "2026-11-08T11:05:29.260Z",
  "collection_method": "independent_web_research",
  "search_count": 73,
  "editions": {
    "morning": {
      "item_ids": [
        "psi-aaronson-ambainis",
        "nist-insight-indoor",
        "envopt-stationary-environments",
        "agent-code-representations",
        "vhrbench-geospatial",
        "cxr-ehr-leakage-audit",
        "npcbench-carepath",
        "referclaw-intent-clarification",
        "worldmodel-navigation-distillation",
        "opd-learning-dynamics"
      ],
      "generated_at": "2026-11-07T23:00:46Z",
      "collection_window": {
        "start": "2026-11-04T22:58:13Z",
        "end": "2026-11-07T22:58:13Z",
        "timezone": "Asia/Shanghai"
      },
      "search_count": 27
    },
    "evening": {
      "item_ids": [
        "reprobridge-reproducible-artifacts",
        "cheme-as-code-platform",
        "scientist-world-executable-environments",
        "ampersand-vercel-gateway",
        "frameboy-atlas-realtime",
        "xbow-fall-2026-cost-evaluation",
        "sophos-obfuscated-skills-detection",
        "meta-commercial-terms-paused",
        "loss-of-control-behavioural-framework",
        "langford-ai-frontiers-account"
      ],
      "generated_at": "2026-11-08T11:03:28Z",
      "collection_window": {
        "start": "2026-11-05T11:03:28Z",
        "end": "2026-11-08T11:03:28Z",
        "timezone": "Asia/Shanghai"
      },
      "search_count": 46
    }
  },
  "items": [
    {
      "id": "psi-aaronson-ambainis",
      "date": "2026-11-08",
      "title": "PSI 公布 Aaronson–Ambainis 猜想证明与 Lean 形式化材料",
      "summary": "PSI 宣布，其内部研究系统使用未公开的 Anthropic 模型获得 Aaronson–Ambainis 猜想证明，并公开论文、Lean 形式化和检查说明。",
      "detail": "原文发布日期为 2026-11-06。近期精选补充。读取 11 月 6 日官方公告与原仓库 README 的定理、状态和验证说明，并与 Business Insider 交叉核验发布。Lean 通过与外部专家反馈均按发布方表述记录。本次未审阅整篇证明或运行 Lean，也未独立确认数学正确性。\n\n为什么值得关注？公开数学陈述、形式化边界与检查方法，使研究者有机会分别审查推理、定理翻译和复现过程。",
      "url": "https://psi.inc/research/aaronson-ambainis/",
      "source": "Physical Superintelligence",
      "category": "research_paper",
      "tags": [
        "形式化证明",
        "量子计算",
        "科研复现"
      ],
      "heat": 5,
      "published_at": "2026-11-06",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "nist-insight-indoor",
      "date": "2026-11-08",
      "title": "NIST 测试将室内扫描转为救援规划数据的 INSIGHT",
      "summary": "NIST 正在测试 INSIGHT 自动化流程，用几何和语义信息将建筑扫描转为可供救援准备与导航使用的结构化数据，并将检测路径间的分歧交给人工审核。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。读取 NIST 11 月 5 日公告的适用范围、扫描处理和验证段落。当前工作集中在事前准备阶段，实时追踪仍是未来方向。未把测试方案写成已部署的灾害现场系统。\n\n为什么值得关注？室内地图需要描述通行条件与安全设施，识别结果能否被核查会直接影响这类数据的实用性。",
      "url": "https://www.nist.gov/news-events/news/2026/11/building-intelligence-first-responders-foundation-models-interoperable",
      "source": "NIST",
      "category": "research_paper",
      "tags": [
        "室内建图",
        "应急响应",
        "人工审核"
      ],
      "heat": 4,
      "published_at": "2026-11-05",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "envopt-stationary-environments",
      "date": "2026-11-08",
      "title": "EnvOpt 将智能体的信息环境作为优化对象",
      "summary": "EnvOpt 针对多个任务共享的文档、数据源等相对稳定环境，自动调整信息组织方式，研究在模型和执行框架之外降低智能体成本的方法。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。仅读取 arXiv v1 摘要与提交记录。作者在 AutomationBench 上报告 Haiku 4.5 成本下降 72.7%；结果依赖所用环境、任务和框架，未独立复现。\n\n为什么值得关注？智能体找信息的路径会影响调用量与成功率，这提供了可与模型升级分别测试的优化方向。",
      "url": "https://arxiv.org/abs/2611.07372",
      "source": "arXiv／EnvOpt 作者",
      "category": "research_paper",
      "tags": [
        "智能体环境",
        "成本评估",
        "信息组织"
      ],
      "heat": 4,
      "published_at": "2026-11-05T03:16:52Z",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "agent-code-representations",
      "date": "2026-11-08",
      "title": "研究比较代码地图对编程智能体的帮助与代价",
      "summary": "研究比较语法树、调用图、模块依赖、文档检索与混合视图。结果显示，代码表示可在部分定位任务中节省 token，但写补丁和测试的收益随任务变化。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。仅读取 arXiv v1 摘要和提交记录。实验使用 Claude Code 与 Haiku 4.5，在 LinuxFLBench、SWE-bench Pro、SWT-bench 和 SecBench 上比较。SWE-bench Pro 的解决率接近基线，而 token 降低 17% 至 26%，部分任务延迟增加。\n\n为什么值得关注？代码检索更省资源并不必然提高修复成功率，比较两者有助于决定是否值得增加工具复杂度。",
      "url": "https://arxiv.org/abs/2611.07286",
      "source": "arXiv／代码表示研究作者",
      "category": "research_paper",
      "tags": [
        "编程智能体",
        "代码检索",
        "评测"
      ],
      "heat": 4,
      "published_at": "2026-11-05T01:08:43Z",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "vhrbench-geospatial",
      "date": "2026-11-08",
      "title": "VHR-Bench 比较地理基础模型对高分辨率影像的迁移",
      "summary": "VHR-Bench 汇集十个分辨率为 1.5 米或更精细的数据集，比较不同预训练路线在高分辨率遥感任务中的表现。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。仅读取 arXiv v1 摘要与提交记录。比较十二个编码器，冻结骨干并采用两档标注比例。SkySense 在少标注条件下领先，完整标注条件下 DINOv3 ViT-L 略优；这些结论限于所用输入和协议。\n\n为什么值得关注？常用卫星预训练数据的尺度与建筑、道路识别差别很大，基准能帮助检查预训练优势是否适用于目标分辨率。",
      "url": "https://arxiv.org/abs/2611.08003",
      "source": "arXiv／VHR-Bench 作者",
      "category": "research_paper",
      "tags": [
        "遥感",
        "基础模型",
        "迁移评估"
      ],
      "heat": 4,
      "published_at": "2026-11-05T13:28:19Z",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "cxr-ehr-leakage-audit",
      "date": "2026-11-08",
      "title": "胸片与病历评测审计发现患者泄漏和标签错配",
      "summary": "研究审计一个含 10479 名患者、29083 张胸片的多模态分类基准，发现记录级切分与复制标签可能夸大模型和类别不平衡处理策略的表现。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。仅读取 arXiv v1 摘要与提交记录。作者在八个诊断目标上重建患者隔离评测，报告多项原有结论不再成立。结论针对所审计数据和配置，属于预印本结果。\n\n为什么值得关注？按患者隔离与对齐实际就诊标签，是判断医学模型是否能泛化到新患者的关键检查。",
      "url": "https://arxiv.org/abs/2611.07950",
      "source": "arXiv／胸片与病历评测审计作者",
      "category": "research_paper",
      "tags": [
        "数据泄漏",
        "医学AI",
        "基准审计"
      ],
      "heat": 4,
      "published_at": "2026-11-05T12:47:38Z",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "npcbench-carepath",
      "date": "2026-11-08",
      "title": "NPCBench 将医学问答扩展到同一患者的诊疗路径",
      "summary": "NPCBench 围绕鼻咽癌构建知识、病例规划、纵向复查和咨询任务，检验模型能否在患者的多步诊疗路径中保持证据与决策一致。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。仅读取 arXiv v1 摘要与提交记录。包含 4777 个组成与咨询项目，以及 100 名患者的 417 项诊疗任务。在 21 个多模态模型中，严格 CarePath 联合成功率最高为 23%，限于该基准。\n\n为什么值得关注？单题成绩可能掩盖连续决策中的组合错误，患者级评估提供了不同的观察角度。",
      "url": "https://arxiv.org/abs/2611.08369",
      "source": "arXiv／NPCBench 作者",
      "category": "research_paper",
      "tags": [
        "临床路径",
        "多模态评测",
        "肿瘤"
      ],
      "heat": 4,
      "published_at": "2026-11-05T17:48:55Z",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "referclaw-intent-clarification",
      "date": "2026-11-08",
      "title": "ReferClaw 让第一视角助手先澄清指代再回答",
      "summary": "ReferClaw 用合作智能体识别第一视角视频问答中的候选含义，在“它在哪里”等无法唯一确定意图的问题上先请求澄清，再生成有视觉依据的回答。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。仅读取 arXiv v1 摘要和提交记录。评测采用扩充后的第一视角问答基准，并报告跨数据集零样本迁移。摘要没有证明其在任意真实佩戴场景中均有效。\n\n为什么值得关注？明确提问的成本与猜错的成本，有助于改进需要持续观察和交互的助手。",
      "url": "https://arxiv.org/abs/2611.07683",
      "source": "arXiv／ReferClaw 作者",
      "category": "research_paper",
      "tags": [
        "第一视角助手",
        "意图澄清",
        "视频问答"
      ],
      "heat": 3,
      "published_at": "2026-11-05T09:10:14Z",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "worldmodel-navigation-distillation",
      "date": "2026-11-08",
      "title": "导航研究将世界模型的前瞻能力蒸馏到快速策略",
      "summary": "研究利用两个世界模型在训练时评估候选动作，分别预测邻近人群互动与后续场景语义，部署时移除世界模型，由策略单次前向计算动作。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。仅读取 arXiv v1 摘要及提交记录。作者在五个留出场景中报告安全性和群体协调性改善，并进行观察者评价。未在本次验证机器人现场部署。\n\n为什么值得关注？把预测开销放在训练阶段，提供了研究导航响应速度与前瞻行为之间权衡的具体方法。",
      "url": "https://arxiv.org/abs/2611.07730",
      "source": "arXiv／世界模型导航研究作者",
      "category": "research_paper",
      "tags": [
        "世界模型",
        "导航",
        "策略蒸馏"
      ],
      "heat": 3,
      "published_at": "2026-11-05T09:42:12Z",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "opd-learning-dynamics",
      "date": "2026-11-08",
      "title": "在线蒸馏研究分析学生轨迹如何改变后续学习",
      "summary": "研究把 on-policy 蒸馏分为监督信号转成参数更新，以及更新改变后续生成分布两个阶段，分析为何更贴近教师的局部更新仍可能使生成退化。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。仅读取 arXiv v1 摘要和提交记录。作者指出离线准备可能在尚未显著提高即时测试准确率时改善后续在线蒸馏效果；本次未读取完整实验配置或复现。\n\n为什么值得关注？蒸馏效果受学生自身产生的数据影响，检查反馈过程可帮助解释训练稳定性和准备阶段的作用。",
      "url": "https://arxiv.org/abs/2611.08016",
      "source": "arXiv／在线蒸馏动力学研究作者",
      "category": "research_paper",
      "tags": [
        "模型蒸馏",
        "训练动力学",
        "后训练"
      ],
      "heat": 3,
      "published_at": "2026-11-05T13:38:26Z",
      "retrieved_at": "2026-11-07T23:00:46Z",
      "edition": "morning"
    },
    {
      "id": "reprobridge-reproducible-artifacts",
      "date": "2026-11-08",
      "title": "ReproBridge 把复现实验的操作知识整理成可交接材料",
      "summary": "ReproBridge 将代码修订、环境配置、实验启动器与复现指南打包，让全新会话中的智能体重新执行实验。研究构建了覆盖 36 篇论文、387 项实验的 1029 个任务，并由独立审计环节检查执行证据。",
      "detail": "原文首次提交时间为 2026-11-05T18:45:36Z。近期精选补充。读取 arXiv 摘要、提交记录及 HTML 正文的摘要部分。四个被测模型的平均复现成功率由 76.4% 升至 92.6%，属于该任务与审计协议下的预印本结果，本次未运行复现。\n\n为什么值得关注？保存已经解决的环境与配置问题，有助于后续研究者把时间用于核查实验本身，也让复现流程更容易审计。",
      "url": "https://arxiv.org/abs/2611.08452",
      "source": "arXiv／ReproBridge 作者",
      "category": "research_paper",
      "tags": [
        "科研复现",
        "研究产物",
        "执行审计"
      ],
      "heat": 4,
      "published_at": "2026-11-05T18:45:36Z",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    },
    {
      "id": "cheme-as-code-platform",
      "date": "2026-11-08",
      "title": "ChemE-as-Code 将化工设计文件、计算和检查接入 Git",
      "summary": "ChemE-as-Code 提供面向化学工程智能体的开源环境，把流程图、设备数据、布局和评估材料保存为关联的机器可读文件。计算由外部工具执行，数值记录来源，自动检查定位不一致和过期结果。",
      "detail": "原文首次提交时间为 2026-11-05T12:45:28Z。近期精选补充。仅读取论文摘要与提交记录，另读原项目 GitHub 组织 README 的文件格式、检查流程、状态和许可说明。氨工艺示例尚未经过独立工程师评审，项目为研究预览，未执行代码或验证设计。\n\n为什么值得关注？工程计算和来源追踪分离后，研究者可以逐项检查智能体修改了什么，以及哪些计算需要重做。",
      "url": "https://arxiv.org/abs/2611.07947",
      "source": "arXiv／TU Delft ChemE-as-Code",
      "category": "opensource",
      "tags": [
        "化学工程",
        "可追溯计算",
        "开源工具"
      ],
      "heat": 4,
      "published_at": "2026-11-05T12:45:28Z",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    },
    {
      "id": "scientist-world-executable-environments",
      "date": "2026-11-08",
      "title": "Scientist World 将论文问题转为 1000 个可执行研究环境",
      "summary": "Scientist World 从论文提取开放研究问题，并复现论文方法作为基线，供 AI 科研系统提出方案与执行比较。作者公布首批 1000 个经过其验证的环境，并汇集 6400 小时的研究过程记录。",
      "detail": "原文首次提交时间为 2026-11-05T18:58:17Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录。环境数量与过程时长均为作者披露，属于预印本报告。本次未检查任务包或独立确认基线复现质量。\n\n为什么值得关注？把问题、基线和执行过程放进同一环境，便于检查科研智能体提出的改进能否在明确条件下重现。",
      "url": "https://arxiv.org/abs/2611.08478",
      "source": "arXiv／Scientist World 作者",
      "category": "research_paper",
      "tags": [
        "科研智能体",
        "可执行环境",
        "研究记录"
      ],
      "heat": 4,
      "published_at": "2026-11-05T18:58:17Z",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    },
    {
      "id": "ampersand-vercel-gateway",
      "date": "2026-11-08",
      "title": "群聊协作模型 Ampersand 接入 Vercel AI Gateway",
      "summary": "Vercel 宣布 Humans& 的 Ampersand 接入 AI Gateway。模型针对多人对话训练，逐条读取消息并决定发言或等待，可通过调用方定义的 send_message 与 pass 工具参与协作。",
      "detail": "原文发布日期为 2026-11-06。近期精选补充。读取 Vercel 更新公告的模型背景、群聊示例、工具协议和调用示例。基于 GLM 5.3 的训练背景为公告说明，本次未调用模型或验证长期协作表现。\n\n为什么值得关注？群聊助手需要同时处理个人目标、共同任务与发言时机，这种接口设计让等待也成为可明确记录的动作。",
      "url": "https://vercel.com/changelog/humans-and-ampersand-now-available-on-ai-gateway",
      "source": "Vercel",
      "category": "product_release",
      "tags": [
        "多人协作",
        "群聊模型",
        "工具调用"
      ],
      "heat": 4,
      "published_at": "2026-11-06",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    },
    {
      "id": "frameboy-atlas-realtime",
      "date": "2026-11-08",
      "title": "World Labs 发布 Frameboy，以最高 15 帧每秒探索生成场景",
      "summary": "World Labs 发布 Frameboy 研究预览，把优化后的 Atlas 放在云端 GPU 上运行，并向浏览器实时传送生成画面。用户可控制相机探索精选场景，Viewfinder 也加入实时流式叠加模式。",
      "detail": "原文发布日期为 2026-11-05。近期精选补充。读取官方博客的发布、场景生成、Viewfinder 与运行限制段落。最高 15 帧每秒为厂商口径，Viewfinder 仍为封闭测试，服务依赖云端 GPU。本次未运行演示或测量延迟。\n\n为什么值得关注？实时反馈可以缩短场景探索与调整镜头的等待过程，为研究生成式空间交互提供具体演示。",
      "url": "https://www.worldlabs.ai/blog/atlas-realtime",
      "source": "World Labs",
      "category": "product_release",
      "tags": [
        "世界模型",
        "空间智能",
        "实时交互"
      ],
      "heat": 4,
      "published_at": "2026-11-05",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    },
    {
      "id": "xbow-fall-2026-cost-evaluation",
      "date": "2026-11-08",
      "title": "XBOW 按预算比较安全测试模型，发现领先者随成本变化",
      "summary": "XBOW 更新自主安全测试评估，在冻结为含漏洞版本的开源项目中，比较不同模型随支出增加的任务解决率。报告认为，低预算下较便宜的模型可完成更多探索，较大模型的优势会在更高预算时出现。",
      "detail": "原文发布日期为 2026-11-06。近期精选补充。读取 XBOW 原始评估的任务设置、成本曲线说明与模型比较。结果限于 XBOW 的任务和编排环境，本次未复现，未把结果推广为通用模型排名。\n\n为什么值得关注？统一预算能让安全团队区分单次推理能力与整体测试效率，避免只依据一个最终成功率选择系统。",
      "url": "https://xbow.com/blog/top-ai-models-for-offensive-security-fall-2026",
      "source": "XBOW",
      "category": "research_paper",
      "tags": [
        "安全评测",
        "推理成本",
        "预算比较"
      ],
      "heat": 4,
      "published_at": "2026-11-06",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    },
    {
      "id": "sophos-obfuscated-skills-detection",
      "date": "2026-11-08",
      "title": "Sophos 用确定性解码与小模型检查混淆技能代码",
      "summary": "Sophos 介绍混合检测流程，先用确定性程序恢复技能代码中的混淆信息并保留记录，再让小型语言模型判断行为是否符合声明用途。实验覆盖正常和恶意技能的多种混淆变体。",
      "detail": "原文发布日期为 2026-11-06，由官方博客列表核对。近期精选补充。读取原文的流程、实验与限制段落。测试采用合成技能集，按基础技能隔离训练与测试，静态扫描器比较未启用其可选 LLM 功能。详细结果仍待发布，本次未运行检测。\n\n为什么值得关注？把解码证据和意图判断分开，有助于审计检测依据，也可减少小模型同时处理混淆与行为推断的负担。",
      "url": "https://www.sophos.com/en-us/blog/killing-ill-willed-skills-sophos-ai-at-bsides-sydney",
      "source": "Sophos AI",
      "category": "research_paper",
      "tags": [
        "智能体技能",
        "供应链安全",
        "小模型"
      ],
      "heat": 4,
      "published_at": "2026-11-06",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    },
    {
      "id": "meta-commercial-terms-paused",
      "date": "2026-11-08",
      "title": "Meta 暂停原定 11 月 20 日生效的商业与生成式 AI 条款更新",
      "summary": "Meta 向路透社确认暂停商业条款、商品目录条款、自助广告条款和广告创意生成式 AI 条款更新。公司表示将继续与相关方沟通，目前沿用现有条款。",
      "detail": "原文发布时间为 2026-11-06T12:14:00Z。近期精选补充。读取路透社正文中的公司直接回应，并与 Ars Technica 报道交叉核验。此条记录 11 月 6 日确认的暂停状态。\n\n为什么值得关注？条款是否生效影响发布者和企业对内容授权范围的判断，暂停消息提供了明确的实施状态。",
      "url": "https://www.reuters.com/business/meta-pauses-planned-terms-updates-keeps-existing-rules-place-2026-11-06/",
      "source": "Reuters",
      "category": "regulation",
      "tags": [
        "内容授权",
        "AI条款",
        "发布者"
      ],
      "heat": 4,
      "published_at": "2026-11-06T12:14:00Z",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    },
    {
      "id": "loss-of-control-behavioural-framework",
      "date": "2026-11-08",
      "title": "研究将 AI 失控风险拆成动机、能力与规避监测三项",
      "summary": "研究者提出行为评估框架，将失控风险分解为目标偏离、造成危害的能力与规避监测，并以 13 个维度、29 项任务构建综合分数，研究它与受控长程风险场景中失败率的关系。",
      "detail": "原文首次提交时间为 2026-11-05T12:49:20Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录。作者在 13 个模型上报告分数与受控场景失败率相关系数 r=0.84，属于预印本的实验关联，本次未审阅完整任务或独立验证预测能力。\n\n为什么值得关注？分解风险来源可以帮助设计针对性的评估和缓解实验，进一步检查安全分数是否能预测后续任务行为。",
      "url": "https://arxiv.org/abs/2611.07953",
      "source": "arXiv／失控风险行为框架作者",
      "category": "research_paper",
      "tags": [
        "行为评估",
        "长期智能体",
        "AI安全"
      ],
      "heat": 4,
      "published_at": "2026-11-05T12:49:20Z",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    },
    {
      "id": "langford-ai-frontiers-account",
      "date": "2026-11-08",
      "title": "John Langford 发文宣布离开微软，回顾 AI Frontiers 重组",
      "summary": "John Langford 在个人博客宣布离开微软，回顾约 50 人的 AI Frontiers 团队在 9 月并入 Microsoft AI 的经历，并表达对研究组织与规模化路线的看法。微软实验室页面仍记载该团队转入 Microsoft AI。",
      "detail": "原文发布于 2026-11-06，页面另显示 11 月 7 日更新。近期精选补充。读取个人博客正文，并核对微软 AI Frontiers 官方页面。离职与个人经历按本人陈述记录，对管理路线和团队结束的判断归于作者，机构页面未提供关闭公告。\n\n为什么值得关注？研究人员的一手说明与机构公开页面可分别审查，有助于观察基础研究团队如何经历组织调整。",
      "url": "https://hunch.net/?p=13764006",
      "source": "John Langford／Machine Learning (Theory)",
      "category": "community_hot",
      "tags": [
        "科研组织",
        "Microsoft AI",
        "研究者观点"
      ],
      "heat": 3,
      "published_at": "2026-11-06",
      "retrieved_at": "2026-11-08T11:03:28Z",
      "edition": "evening"
    }
  ],
  "total_count": 20,
  "categories": {
    "product_release": 2,
    "research_paper": 15,
    "opensource": 1,
    "funding": 0,
    "regulation": 1,
    "community_hot": 1
  }
};
