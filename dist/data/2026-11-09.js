window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA["2026-11-09"] = {
  "date": "2026-11-09",
  "generated_at": "2026-11-09T11:03:27Z",
  "updated_at": "2026-11-09T11:04:34.585Z",
  "collection_method": "independent_web_research",
  "search_count": 104,
  "editions": {
    "morning": {
      "item_ids": [
        "nvidia-board-independent-review-20261108",
        "gputaskman-macos-linux-amd-031",
        "filsim-graph-similarity",
        "intent-aware-prefix-cache",
        "foscar-affine-folding",
        "hasa-head-adaptive-attention",
        "wrong-user-personalization-control",
        "flowalign-target-space",
        "ttrl-vote-reliability",
        "human-agent-delegation-survey"
      ],
      "generated_at": "2026-11-09T11:03:27Z",
      "collection_window": {
        "start": "2026-11-06T11:03:27Z",
        "end": "2026-11-09T11:03:27Z",
        "timezone": "Asia/Shanghai"
      },
      "search_count": 68
    },
    "evening": {
      "item_ids": [
        "k-exaone-25-free-api",
        "nvidia-korean-startup-investments",
        "amp1-manipulation",
        "cpu-arc-reasoning-reuse",
        "radiology-tool-coverage",
        "bitdecoding-fp4",
        "protein-glp-interpretation",
        "parallel-agent-team-scaling",
        "causal-agent-intervention",
        "comoflow-protein-ensemble"
      ],
      "generated_at": "2026-11-09T11:03:27Z",
      "collection_window": {
        "start": "2026-11-06T11:03:27Z",
        "end": "2026-11-09T11:03:27Z",
        "timezone": "Asia/Shanghai"
      },
      "search_count": 36
    }
  },
  "items": [
    {
      "id": "nvidia-board-independent-review-20261108",
      "date": "2026-11-09",
      "title": "NVIDIA 董事会宣布启动独立调查",
      "summary": "NVIDIA 董事会于 11 月 8 日宣布，就涉及首席执行官的媒体报道启动独立调查。调查由独立董事组成的委员会监督，并由外部独立法律顾问协助。",
      "detail": "原文发布日期为 2026-11-08。读取 NVIDIA 董事会声明全文。声明表示，目前没有理由认为国家安全或公司机密受到损害，仍会审查所有可用信息。所涉媒体指称尚待调查，本条仅报道已公开的调查安排和董事会立场。\n\n为什么值得关注？作为主要 AI 算力供应商，NVIDIA 的治理安排和后续披露值得行业关注。此次可确认的新进展是董事会正式启动审查。",
      "url": "https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors",
      "source": "NVIDIA Board of Directors",
      "category": "funding",
      "tags": [
        "NVIDIA",
        "公司治理",
        "AI算力"
      ],
      "heat": 4,
      "published_at": "2026-11-08",
      "retrieved_at": "2026-11-08T23:04:29Z",
      "edition": "morning"
    },
    {
      "id": "gputaskman-macos-linux-amd-031",
      "date": "2026-11-09",
      "title": "GPU Taskman 增加 Apple Silicon 与原生 Linux AMD 支持",
      "summary": "GPU Taskman v0.3.1 加入 Apple Silicon 支持及原生 Linux AMD 显卡支持，并增加对两个 JSON 快照进行比较的命令。项目可用于查看 GPU 进程、显存和部分模型运行信息。",
      "detail": "近期精选补充。原版本发布于 2026-11-07 01:05:19 UTC。读取原仓库 README、v0.3.1 发布说明，并用 GitHub 发布元数据核对时间。项目初次发布更早，本条仅收录此次新增平台和快照比较能力。不同驱动与硬件暴露的计数器不同，未在本次执行安装或性能测试。\n\n为什么值得关注？新增平台覆盖与快照比较让开发者更容易在不同机器上排查模型加载、推理运行时和显存占用变化。",
      "url": "https://github.com/shanselman/gputaskman/releases/tag/v0.3.1",
      "source": "Scott Hanselman／GPU Taskman GitHub",
      "category": "opensource",
      "tags": [
        "GPU工具",
        "显存分析",
        "跨平台"
      ],
      "heat": 3,
      "published_at": "2026-11-07T01:05:19Z",
      "retrieved_at": "2026-11-08T23:04:29Z",
      "edition": "morning"
    },
    {
      "id": "filsim-graph-similarity",
      "date": "2026-11-09",
      "title": "FiLSim 将图相似性学习扩展到十五万节点以上",
      "summary": "FiLSim 简化图神经网络处理流程，并以连续图编辑构建带有图编辑距离标签的大规模数据集，研究大图相似度计算的准确性和扩展能力。",
      "detail": "原文首次提交时间为 2026-11-06T17:55:35Z。近期精选补充。本次晚间补齐早报缺额。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。作者在四个既有及四个新建大规模数据集上评估，报告超过十五万节点时仍能工作。性能限于其图对、硬件与评测设置，未复现。\n\n为什么值得关注？图匹配可用于化合物和程序依赖分析，大规模标签构建与显存开销是这类应用的重要限制。",
      "url": "https://arxiv.org/abs/2611.09805",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "图神经网络",
        "图相似度",
        "可扩展计算"
      ],
      "heat": 3,
      "published_at": "2026-11-06T17:55:35Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "morning"
    },
    {
      "id": "intent-aware-prefix-cache",
      "date": "2026-11-09",
      "title": "IAC 用对话意图预测前缀缓存的复用机会",
      "summary": "Intent-Aware Caching 将请求按意图分类，从近期服务日志学习续聊概率与轮次间隔，再据此决定淘汰哪些前缀 KV 状态，以减少重复预填充计算。",
      "detail": "原文首次提交时间为 2026-11-06T16:56:48Z。近期精选补充。本次晚间补齐早报缺额。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。作者在 WildChat 与 ShareChat 工作负载上报告 34.6% 缓存命中率，延迟改善随设置变化。论文标注 NeurIPS 2026，未运行所链接代码。\n\n为什么值得关注？缓存是否命中取决于用户何时继续对话，利用实际交互特征可以补充仅按最近访问顺序淘汰的策略。",
      "url": "https://arxiv.org/abs/2611.09715",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "前缀缓存",
        "推理服务",
        "对话负载"
      ],
      "heat": 3,
      "published_at": "2026-11-06T16:56:48Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "morning"
    },
    {
      "id": "foscar-affine-folding",
      "date": "2026-11-09",
      "title": "FOSCAR 用仿射折叠降低低比特 KV 缓存解码开销",
      "summary": "FOSCAR 将量化缩放与偏移操作移到矩阵乘法的另一操作数或输出端，并针对 H100 和 B200 构建 GPU 流水线，研究整数低比特缓存的实际加速。",
      "detail": "原文首次提交时间为 2026-11-06T17:00:25Z。近期精选补充。本次晚间补齐早报缺额。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。论文分别比较 INT2、INT4 与 BF16、FP8、NVFP4 基线，并接入 SGLang。性能因 GPU、量化格式和负载变化，本次未检查仓库实现或复现。\n\n为什么值得关注？压缩缓存后逐元素还原的指令开销可能吞掉收益，该工作把这一瓶颈拆成可测量的内核操作。",
      "url": "https://arxiv.org/abs/2611.09722",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "低比特缓存",
        "GPU内核",
        "SGLang"
      ],
      "heat": 3,
      "published_at": "2026-11-06T17:00:25Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "morning"
    },
    {
      "id": "hasa-head-adaptive-attention",
      "date": "2026-11-09",
      "title": "HASA 按注意力头的交互结构调整稀疏选择粒度",
      "summary": "HASA 从预训练注意力头的查询与键交互结构出发，在特征维度和上下文区间上分别调整选择分辨率，再用选中区域的完整 KV 状态计算注意力。",
      "detail": "原文首次提交时间为 2026-11-06T16:45:26Z。近期精选补充。本次晚间补齐早报缺额。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。方法无需额外训练。作者在 RULER、LongBench-Pro 和注意力速度测试中报告改善，摘要中的加速属于注意力环节，本次未测试端到端服务。\n\n为什么值得关注？不同注意力头未必适合相同的稀疏规则，按结构选择粒度为长上下文效率与准确性权衡提供新方法。",
      "url": "https://arxiv.org/abs/2611.09700",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "稀疏注意力",
        "长上下文",
        "推理优化"
      ],
      "heat": 3,
      "published_at": "2026-11-06T16:45:26Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "morning"
    },
    {
      "id": "wrong-user-personalization-control",
      "date": "2026-11-09",
      "title": "个性化评测研究指出换用户历史会混入主题差异",
      "summary": "研究在新闻分类任务中，用相近用户及按标签和文本相似度匹配的合成历史替代随机历史，检查所谓个性化收益有多少来自主题匹配。",
      "detail": "原文首次提交时间为 2026-11-06T15:34:02Z。近期精选补充。本次晚间补齐早报缺额。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。主要实验为 LaMP-2 新闻分类，采用两个用户划分与三个训练种子。未见用户上的相近历史对照优势为 0.65 个百分点，证据仍不确定。电影标注补充实验只有一个种子。\n\n为什么值得关注？更严格的对照能帮助区分识别个人偏好与利用内容主题的效果，改善长期记忆系统的评测设计。",
      "url": "https://arxiv.org/abs/2611.09609",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "个性化",
        "评测对照",
        "长期记忆"
      ],
      "heat": 4,
      "published_at": "2026-11-06T15:34:02Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "morning"
    },
    {
      "id": "flowalign-target-space",
      "date": "2026-11-09",
      "title": "FlowAlign 用训练时流场约束多模态表示对齐",
      "summary": "FlowAlign 将条件流匹配用于训练期对齐信号，既保持来源样本与目标样本的配对关系，也保留固定目标空间的整体结构，覆盖单细胞多组学和图文任务。",
      "detail": "原文首次提交时间为 2026-11-06T18:44:08Z。近期精选补充。本次晚间补齐早报缺额。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。论文标注 NeurIPS 2026。作者在合成数据、配对单细胞 multiome 与图文对齐中报告改进，本次未阅读全文、检查数据或复现实验。\n\n为什么值得关注？配对准确性和目标空间几何可能发生冲突，联合检查两者适合需要直接分析目标表征的科学应用。",
      "url": "https://arxiv.org/abs/2611.09863",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "多模态对齐",
        "单细胞组学",
        "流匹配"
      ],
      "heat": 3,
      "published_at": "2026-11-06T18:44:08Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "morning"
    },
    {
      "id": "ttrl-vote-reliability",
      "date": "2026-11-09",
      "title": "测试时强化学习研究按投票可靠性调整更新力度",
      "summary": "研究将多数投票伪标签的误差拆成整体偏差与有限采样波动，提出按提示中的投票可靠性重加权的 DPO，并用缓存减轻在线适配时的遗忘。",
      "detail": "原文首次提交时间为 2026-11-06T18:49:02Z。近期精选补充。本次晚间补齐早报缺额。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。作者在六项数学及知识推理基准、五个模型骨干上测试，三十种设置中二十四种达到或超过所选最强基线。该结果属于特定比较，未独立复现。\n\n为什么值得关注？自生成标签可能放大原有错误，区分可缓解的采样噪声与缺少外部监督时难识别的偏差，有助于解释适配边界。",
      "url": "https://arxiv.org/abs/2611.09872",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "测试时学习",
        "伪标签",
        "DPO"
      ],
      "heat": 3,
      "published_at": "2026-11-06T18:49:02Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "morning"
    },
    {
      "id": "human-agent-delegation-survey",
      "date": "2026-11-09",
      "title": "调查将 AI 委托偏好拆成执行、协作与最终权限",
      "summary": "一项情境调查邀请 289 名有 AI 使用经验的美国成年人，评估九类生活与工作领域的 45 种用例。开放回答显示，参与者常希望 AI 承担较多执行，同时保留人的监督或最终决定权。",
      "detail": "原文首次提交时间为 2026-11-06T17:06:41Z。近期精选补充。本次晚间补齐早报缺额。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。调查按每位受访者每领域一个情境采集重复测量，信任、预期节省与自动化偏好呈关联。样本限于有 AI 经验的美国成年人，未将关联解释为因果效应。\n\n为什么值得关注？单一自动化比例难以表达用户需求，将执行量与最终权限分开，可以支持更细致的智能体交互研究。",
      "url": "https://arxiv.org/abs/2611.09730",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "人机协作",
        "用户研究",
        "委托权限"
      ],
      "heat": 3,
      "published_at": "2026-11-06T17:06:41Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "morning"
    },
    {
      "id": "k-exaone-25-free-api",
      "date": "2026-11-09",
      "title": "LG AI Research 免费开放 K-EXAONE 2.5 API",
      "summary": "LG AI Research 宣布通过 EXAONE API Platform 免费提供 K-EXAONE 2.5。该技术验证模型在此前版本上继续训练，开发者、企业与研究机构可申请 API 密钥用于服务开发和研究。",
      "detail": "原文发布日期为 2026-11-09。读取 LG AI Research 韩文官方公告正文，包括开放方式、模型定位及自测说明。模型性能比较来自发布方，本次未调用 API 或独立测试。\n\n为什么值得关注？新增可直接调用的模型入口，方便开发者用自身编程和自动化任务检验能力与接入条件。",
      "url": "https://www.lgresearch.ai/news/view?seq=754",
      "source": "LG AI Research",
      "category": "product_release",
      "tags": [
        "模型API",
        "K-EXAONE",
        "智能体"
      ],
      "heat": 4,
      "published_at": "2026-11-09",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    },
    {
      "id": "nvidia-korean-startup-investments",
      "date": "2026-11-09",
      "title": "NVIDIA 披露 Point2 投资，并计划投资三家韩国 AI 企业",
      "summary": "NVIDIA 在与韩国科学技术信息通信部举办的创业合作论坛上，披露对 AI 互连企业 Point2 的投资，并表示计划进一步投资 Motif Technologies、RLWRLD 和 Upstage。",
      "detail": "原文发布日期为 2026-11-09。读取 NVIDIA 官方博客正文的投资状态与企业介绍。公告将 Point2 投资与另外三项计划分别表述，未披露金额，本条保留这一区别。\n\n为什么值得关注？投资对象覆盖互连、基础模型、机器人与文档智能，体现算力供应商参与多个 AI 技术环节的布局。",
      "url": "https://blogs.nvidia.com/blog/korean-startup-investments-msit/",
      "source": "NVIDIA",
      "category": "funding",
      "tags": [
        "韩国AI",
        "投资",
        "AI基础设施"
      ],
      "heat": 3,
      "published_at": "2026-11-09",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    },
    {
      "id": "amp1-manipulation",
      "date": "2026-11-09",
      "title": "AMP1 研究让通用模型直接控制多类机械臂",
      "summary": "研究提出 AMP1 执行框架，让通用 AI 模型随任务进展直接调整操作，覆盖单臂、双臂和移动操作。作者报告其在十二项任务、三个机器人实例的 108 次实体试验中完成 104 次。",
      "detail": "原文首次提交时间为 2026-11-06T18:59:34Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。上述结果为零样本、无任务专用训练条件下的作者报告，未独立验证实体效果。\n\n为什么值得关注？统一框架跨机器人形态执行任务，为比较通用推理与专用操作策略提供了可检查的实验方向。",
      "url": "https://arxiv.org/abs/2611.09892",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "机器人",
        "通用智能体",
        "实体试验"
      ],
      "heat": 4,
      "published_at": "2026-11-06T18:59:34Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    },
    {
      "id": "cpu-arc-reasoning-reuse",
      "date": "2026-11-09",
      "title": "CPU-ARC 将推理轨迹转为可在 CPU 上复用的执行缓存",
      "summary": "CPU-ARC 研究从语言模型推理轨迹中构造可在 CPU 上执行的推理缓存，使已经形成的解题过程可应用于新的问题实例，减少重复调用模型。",
      "detail": "原文首次提交时间为 2026-11-06T18:58:50Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。效果与成本比较限于作者所测数学和科学任务，摘要未给出完整成本核算配置，本条未引用通用降本比例。\n\n为什么值得关注？将解题过程与执行分开，提供了降低重复性数学和科学计算调用成本的具体思路。",
      "url": "https://arxiv.org/abs/2611.09891",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "推理复用",
        "CPU",
        "科学计算"
      ],
      "heat": 4,
      "published_at": "2026-11-06T18:58:50Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    },
    {
      "id": "radiology-tool-coverage",
      "date": "2026-11-09",
      "title": "放射学研究用模拟工具输出区分覆盖不足与编排失误",
      "summary": "研究构建模块化放射学报告框架，将获 FDA 许可设备可覆盖的发现类别与不受限工具目录对比。工具输出由参考报告模拟，以分别检查工具覆盖和智能体调用决策的影响。",
      "detail": "原文首次提交时间为 2026-11-06T18:23:14Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。研究在多模态报告语料上模拟生成报告，未测试实际设备误差或真实临床部署。在受限目录且只给临床指征的设置中，恢复的可行动发现不足三分之一。\n\n为什么值得关注？增加工具数量与提高编排能力可能解决不同的遗漏问题，这种受控设计有助于定位系统的能力瓶颈。",
      "url": "https://arxiv.org/abs/2611.09836",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "医学AI",
        "工具编排",
        "模拟评测"
      ],
      "heat": 4,
      "published_at": "2026-11-06T18:23:14Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    },
    {
      "id": "bitdecoding-fp4",
      "date": "2026-11-09",
      "title": "BitDecoding-FP4 联合优化量化算法与低精度解码内核",
      "summary": "BitDecoding-FP4 针对低精度 KV 缓存设计查询量化、概率缩放和离群值处理，并融合 softmax 与概率量化，研究如何兼顾长上下文解码速度和准确性。",
      "detail": "原文首次提交时间为 2026-11-06T18:13:54Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。作者在 NVIDIA B300、Qwen3-4B 和 Qwen3-30B-A3B 的端到端服务实验中报告，相对 BF16 KV 的峰值吞吐提高 2.4 至 3.0 倍。未复现该硬件和配置。\n\n为什么值得关注？缓存压缩只有转化为实际服务吞吐才有部署价值，算法与 GPU 内核联合评估能检查这一步是否成立。",
      "url": "https://arxiv.org/abs/2611.09825",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "低精度推理",
        "KV缓存",
        "GPU内核"
      ],
      "heat": 4,
      "published_at": "2026-11-06T18:13:54Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    },
    {
      "id": "protein-glp-interpretation",
      "date": "2026-11-09",
      "title": "蛋白质模型解释研究发现表征编辑仍受解码过程限制",
      "summary": "研究将生成式潜在先验应用于 ESM-2 激活，比较其作为概念探针和表征编辑先验的作用。部分探针表现改善，但多轮解码后生成序列的结构合理性出现下降。",
      "detail": "原文首次提交时间为 2026-11-06T18:06:39Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。研究使用 ESM-2-8M 与 ESM-2-650M，涉及 UniRef50 激活及 Swiss-Prot 概念评估。摘要将生成自然性问题主要归于重写覆盖和解码器，未执行湿实验。\n\n为什么值得关注？同时检查隐藏表征和最终序列，可帮助判断解释工具产生的变化能否保留到实际生物序列中。",
      "url": "https://arxiv.org/abs/2611.09818",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "蛋白质模型",
        "可解释性",
        "表征编辑"
      ],
      "heat": 4,
      "published_at": "2026-11-06T18:06:39Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    },
    {
      "id": "parallel-agent-team-scaling",
      "date": "2026-11-09",
      "title": "研究用多组小型智能体团队分配测试时计算",
      "summary": "研究将多次独立采样与团队协作结合，平行运行多个小团队，再由验证器选择成绩最好的方案，测试范围包括 GPU 算子、形式化证明等十二项长程任务。",
      "detail": "原文首次提交时间为 2026-11-06T17:53:07Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。在 27B 模型、总计 100 个智能体预算的设置中，十人小团队方案在十二项任务中的十项优于独立智能体。结论依赖能为每次尝试评分的验证器。\n\n为什么值得关注？团队规模与独立尝试次数共同决定计算预算的效果，这种对照设计有助于评估协作开销是否值得。",
      "url": "https://arxiv.org/abs/2611.09798",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "测试时计算",
        "智能体团队",
        "验证器"
      ],
      "heat": 4,
      "published_at": "2026-11-06T17:53:07Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    },
    {
      "id": "causal-agent-intervention",
      "date": "2026-11-09",
      "title": "因果评估研究估计智能体执行中何时值得介入",
      "summary": "研究提出基于随机干预轨迹的评估框架，估计核验、筛查或纠正智能体行为对最终结果的影响，并比较不同上下文和动作状态中的介入价值。",
      "detail": "原文首次提交时间为 2026-11-06T17:46:53Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。作者在 tau-bench Retail、ToolSandbox 与 ImpossibleBench 上应用方法，报告介入效果随动作和状态变化。未据此验证任意部署环境下的收益。\n\n为什么值得关注？静态成绩难以回答部署时该在哪一步审核，因果估计为分配人力和更昂贵模型的核验资源提供了研究方法。",
      "url": "https://arxiv.org/abs/2611.09792",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "因果推断",
        "智能体评估",
        "人工审核"
      ],
      "heat": 4,
      "published_at": "2026-11-06T17:46:53Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    },
    {
      "id": "comoflow-protein-ensemble",
      "date": "2026-11-09",
      "title": "CoMoFlow 显式建模集体运动，生成可控蛋白质构象集合",
      "summary": "CoMoFlow 从平衡结构构建蛋白质特定的集体变化模式，学习其在分子动力学构象集合中的系数分布，并用这些变化引导流匹配生成蛋白质骨架。",
      "detail": "原文首次提交时间为 2026-11-06T14:56:28Z。近期精选补充。仅读取 arXiv v1 摘要与提交记录，以下结论为作者报告。作者在 ATLAS 与从头设计蛋白质上对比流模型基线，报告分子动力学分布重建与集体变化改善。摘要所述验证为计算实验。\n\n为什么值得关注？蛋白质功能常与多个构象有关，显式控制协调运动有助于研究单一静态结构难以描述的变化。",
      "url": "https://arxiv.org/abs/2611.09548",
      "source": "arXiv／论文作者",
      "category": "research_paper",
      "tags": [
        "蛋白质构象",
        "流匹配",
        "分子动力学"
      ],
      "heat": 4,
      "published_at": "2026-11-06T14:56:28Z",
      "retrieved_at": "2026-11-09T11:03:27Z",
      "edition": "evening"
    }
  ],
  "total_count": 20,
  "categories": {
    "product_release": 1,
    "research_paper": 16,
    "opensource": 1,
    "funding": 2,
    "regulation": 0,
    "community_hot": 0
  }
};
