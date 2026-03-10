# StS2 执行进度 Checklist

最后更新：2026-03-09

## 总目标
- 先把 `sts2guide.com` 做成一个能承接发售周搜索流量的内容站。
- 再把 `cards / characters` 做成真正可查询、可长期积累的资料型入口。
- 当前阶段优先复用现有结构，避免无必要的新工具和大重构。

---

## 模块一：发售周高意图内容

为什么先做这个：
- 发售后的第一波搜索最强，用户先搜的是补丁、报错、联机、Steam Deck，而不是深度 build。
- 这些词时效性最强，越早上线价值越高。

目的：
- 先吃到发售周最强的一波问题型搜索流量。
- 让首页、`/news`、launch hub 都能把用户导向“立刻有答案”的页面。

希望达到的效果：
- 网站先建立“这个站能解决发售周实际问题”的认知。
- 不是只有栏目页，而是有一批真正能承接搜索的落地页。

### 已完成
- [x] 发布 `/news/slay-the-spire-2-hotfix-patch-notes`
- [x] 发布 `/news/slay-the-spire-2-known-issues-and-fixes`
- [x] 发布 `/news/slay-the-spire-2-co-op-guide-how-it-works`
- [x] 发布 `/news/slay-the-spire-2-steam-deck-performance-guide`
- [x] 更新 `/news/slay-the-spire-2-launch-time-us-china`
- [x] 在 launch hub 增加 `Updated Today` 区块
- [x] 在首页增加发售周入口区块
- [x] 在 `/news` 列表页提升发售周重点文章展示
- [x] 让发售周页面之间形成基础互链
- [x] 修复首页 `LATEST NEWS` 没有优先展示新文章的问题

### 已验证
- [x] 浏览器走查首页、`/news`、launch hub、重点详情页
- [x] `pnpm lint`
- [x] `pnpm build`

### 当前判断
- 已达成实现层目标。
- 尚未完成的只剩外部数据验证，例如 GSC 展现、CTR、点击。

---

## 模块二：新手决策内容

为什么接着做这个：
- 发售后第二波搜索会从“能不能玩”转成“怎么玩更顺”“先别踩什么坑”“选谁开荒”。
- 这批词生命周期比第一波救火词更长。

目的：
- 把第一波流量继续导向更长一点的新手决策内容。
- 让站点不只吃短期问题流量，也能吃新手教程流量。

希望达到的效果：
- 用户从发售周问题页进来后，还有明确的下一步阅读路径。
- `/mechanics`、`/characters` 不再只是静态资料页，而是中转页。

### 已完成
- [x] 更新 `/news/best-starter-character-slay-the-spire-2-early-access`
- [x] 补充纯新手推荐内容
- [x] 补充 co-op 角色建议
- [x] 发布 `/news/slay-the-spire-2-top-10-beginner-mistakes`
- [x] 发布 `/news/slay-the-spire-2-what-to-upgrade-first`
- [x] 强化 `/mechanics` 的新手导流
- [x] 强化 `/characters` 到 starter / beginner pages 的导流

### 已验证
- [x] `pnpm lint`
- [x] `pnpm build`
- [x] 页面已进入静态生成

### 当前判断
- 已形成“发售周问题页 -> 新手决策页”的第二层内容闭环。

---

## 模块三：Cards 数据库体系

为什么现在做这个：
- `cards` 不是普通文章，是未来长期长尾流量的底盘。
- 对标竞品后，真正有价值的不是“先把卡堆上去”，而是做出可查、可筛、可分页的数据库入口。

目的：
- 建立 `总卡库页 -> 角色卡池页 -> 单卡页` 的结构。
- 为后续图片、tier list、角色构筑页提供稳定底座。

希望达到的效果：
- 用户能把 `/cards` 当查询工具用，而不是当文章页。
- 这条线以后能持续长，而不是发售周过后就失效。

### 已完成：基础结构
- [x] 新建 `/cards`
- [x] 新建 `/cards/[slug]`
- [x] 新建 `/cards/character/[slug]`
- [x] 导航增加 `Cards`
- [x] sitemap 纳入 cards 相关页面
- [x] 桌面端实现左筛选、右列表独立滚动
- [x] 列表页支持搜索、筛选、排序、分页、URL 参数同步
- [x] 单卡页支持详情、相关推荐、返回筛选上下文
- [x] 角色卡池页支持 starter cards、type split、rarity spread

### 已完成：数据和校验基础设施
- [x] 引入 cards 数据层：`shared/cardsData.ts`
- [x] 引入生成数据文件：`shared/cardsData.generated.ts`
- [x] 引入交叉核对结果：`shared/cardsCrosscheck.generated.ts`
- [x] 引入校验层：`shared/cardsVerification.ts`
- [x] 生成交叉核对脚本：`scripts/generate-cards-crosscheck.mjs`
- [x] 生成 cards 数据脚本：`scripts/generate-cards-data.mjs`
- [x] 生成校验报告：`cards-verification-report.md`

### 已完成：当前阶段数据策略
- [x] 当前阶段默认交叉参考 `sts2.wiki` 与 `sts2.untapped.gg`
- [x] 核心字段一致时，先作为过渡可信数据使用
- [x] 92 张正文差异卡，当前优先采用 `sts2.wiki` 的正文版本
- [x] 不在前台暴露 `cross-checked / reconciled / high-risk` 状态
- [x] 页面仍保持 `Early Access` 过渡数据定位，不假装官方最终版

### 已完成：高价值卡首轮复核
- [x] 各角色基础 `Strike / Defend / 入门卡`
- [x] 基础高频卡，如 `Bash`
- [x] 单卡页和角色卡池页首屏示例卡的一部分首轮复核
- [x] 优先核对 6 个核心字段：`name / character / cost / type / rarity / text`

### 已验证
- [x] `pnpm lint`
- [x] `pnpm build`
- [x] 浏览器检查 `/cards`
- [x] 浏览器检查 `/cards/[slug]`
- [x] 浏览器检查 `/cards/character/[slug]`

### 当前能继续做的动作
- [ ] 继续复核 `/cards` 默认第一页会露出的全部卡
- [ ] 继续复核每个角色 starter rarity 的全部卡
- [ ] 继续复核角色卡池页首屏展示卡
- [ ] 把“已人工核过的卡”整理成稳定清单，便于后续接本地游戏资源时继续替换

### 当前判断
- 结构已经够用，当前最大短板不是页面，而是数据权威性。
- 这条线下一步最值钱的不是继续改布局，而是继续做高价值卡二次复核。

---

## 模块四：Characters 查询体系

为什么要单独做这一块：
- `characters` 和 `cards` 是两种不同搜索意图。
- `characters` 应该解决“角色是谁、怎么解锁、适合谁、下一步去哪看”，而不是变成另一个卡库。

目的：
- 把角色页从营销式展示，收成更像查询和导航入口。
- 让 `guide` 和 `card pool` 分工明确，但彼此互链。

希望达到的效果：
- 用户点角色卡先进 `guide`
- 真正要查卡的人，再进 `card pool`
- `characters` 这条线既能承接 roster / unlock 词，也能把用户继续送到卡池页

### 已完成：角色列表页
- [x] `/characters` 重构为查询页，不再按发售周营销块组织
- [x] 支持搜索
- [x] 支持 `Starter / Unlocking` 筛选
- [x] 列表页改为整卡点击进入 `guide`
- [x] 卡片内保留 `Open card pool` 辅助入口
- [x] 去掉 `Click the card to open the guide` 这类多余提示
- [x] 补入 `Defect` 到当前五人 roster 查询页

### 已完成：角色详情页
- [x] 角色详情页首屏收缩，不再是强海报感展示
- [x] 顶部改成更偏查询的结构：`Unlock Status / Card Pool / Best Next Query`
- [x] 去掉大段 `Playstyle & Strategy`
- [x] 改为更克制的 `Quick Read / Core Mechanics / Starting Deck`
- [x] 与对应 `card pool` 建立明确互链

### 已完成：角色数据收口
- [x] 单独建立 `shared/characterIndexData.ts`
- [x] 列表页只展示当前更容易交叉核对的角色字段
- [x] 角色 roster 以官方 `5 playable characters` 为硬事实
- [x] 当前 unlock 顺序参考官方 + `sts2.wiki` + `Untapped` 的公开一致信息

### 已验证
- [x] `pnpm lint`
- [x] `pnpm build`
- [x] 浏览器检查 `/characters`
- [x] 浏览器检查 `/characters/[slug]`

### 当前判断
- 角色页结构已经从“展示型”过渡到“查询型”。
- 剩余更重要的问题不是布局，而是角色事实字段未来还要继续对账。

---

## 模块五：SEO 结构补强

为什么做这一步：
- 页面结构有了之后，下一步不是继续堆内容，而是让搜索引擎更清楚理解这些页各自是什么。
- 同时要避免 metadata 还停留在旧页面语气，导致关键词错配。

目的：
- 让 `cards / characters` 这两条线在搜索引擎眼里更像“集合页、索引页、角色页、单卡页”，而不是混成普通文章。

希望达到的效果：
- 页面主题更清楚
- CTR 和落地相关性更好
- `cards` 与 `characters` 的层级关系更稳定

### 已完成
- [x] 调整 `characters/[slug]` metadata，使之对齐 `unlock / mechanics / card pool`
- [x] 调整 `cards/character/[slug]` metadata，使之更贴近 `all X cards`
- [x] 调整部分内链文案，使之更接近真实搜索语言
- [x] 新增 `CollectionPageSchema`
- [x] 新增 `ItemListSchema`
- [x] 给 `/characters` 接入 breadcrumb + collection + item list schema
- [x] 给 `/cards` 接入 breadcrumb + collection + item list schema
- [x] 给 `/cards/character/[slug]` 接入 breadcrumb + collection + item list schema
- [x] 给 `/cards/[slug]` 接入 breadcrumb + collection schema

### 当前判断
- 结构型 SEO 该补的核心点已经基本补齐。
- 接下来更值钱的，不是继续抠 title，而是等本地游戏资源后，把数据权威性再抬高一层。

---

## 模块六：当前已知问题修复

为什么单独列出来：
- 当前这条线已经开始进入真实可用阶段，运行时小报错会直接影响判断。

目的：
- 及时修掉会暴露给用户或开发环境的实际问题。

希望达到的效果：
- 主链路能稳定工作，不因为小的 key、路由、交互问题影响使用。

### 已完成
- [x] 修复 `app/news/[slug]/page.tsx` 中 `relatedLinks` 的重复 key 报错

---

## 模块七：当前流量表现判断

为什么要单独加这一块：
- 执行计划不能只看“做了什么”，还要看“哪些页面已经被市场验证有流量反馈”。
- 当前方向是否继续加码，应该由真实来源和页面表现来决定。

目的：
- 根据已有流量数据，判断接下来该继续强化哪条线。
- 避免平均用力，把精力放在已经被证明有效的入口上。

希望达到的效果：
- 文档里不仅有待办，也有“为什么现在优先做这个”的数据依据。

### 当前观察
- [x] 搜索引擎流量已经开始稳定进入：`google.com`、`duckduckgo.com`、`bing.com` 都已成为主要 referrer
- [x] 当前表现更好的不是深度 build，而是入口型页面：
  - `/characters`
  - `/mechanics`
  - `/news/slay-the-spire-2-first-run-guide-act-1-priorities`
  - `/news/best-starter-character-slay-the-spire-2-early-access`
- [x] 说明当前最有效的还是“角色 / 机制 / 新手决策”这类入口意图
- [x] `cards` 结构已经搭好，但从当前观测看还没成为最强流量前排页

### 结论
- [x] 当前方向是对的，不需要换策略
- [x] `/characters`、`/mechanics`、`first-run guide`、`best starter character` 这些入口页，已经证明值得继续强化
- [x] `cards` 这条线当前更像基础设施刚搭好，下一步不该急着继续扩页面，而应该继续补数据可信度

### 基于当前流量的下一步重点
- [x] 保持角色、机制、新手决策页作为站内主入口
- [x] 继续把内链更多导向这几个已起量页面
- [x] `cards` 继续做数据准确性，而不是继续优先做新栏目
- [ ] 后续如果流量里 `unlock order` 类问题词开始明显出现，再单独拆角色解锁问题页

---

## 模块八：暂缓项

为什么现在不做：
- 这些方向重要，但当前阶段投入产出不如 `cards` 数据准确性。

### 暂缓
- [ ] 角色解锁问题页单独拆文，例如 `How to Unlock All Characters in Slay the Spire 2`
- [ ] 本地游戏资源解包后的官方数据替换
- [ ] 卡图正式接入
- [ ] cards / characters 的更重型工具化功能
- [ ] tier list 体系

---

## 模块九：中文站推进计划（英文主站稳定后启动）

为什么现在先不立刻做中文：
- 当前英文入口页（`characters / mechanics / starter guides`）已出现搜索来源和访问反馈，先把这条线做稳，能避免双语并行导致节奏被打乱。
- `cards / characters` 数据仍在持续校验期，若现在并行上中文，会把校对和维护成本直接放大。

目的：
- 在不影响英文主站节奏的前提下，提前明确中文站启动条件和实施顺序。
- 等英文结构与数据稳定后，以最小风险切入中文流量。

希望达到的效果：
- 中文上线时不是“试试看”，而是有清晰触发条件、有明确首批页面范围。
- 上线后可以快速判断：中文流量是否形成新增量，而不是分散现有英文维护资源。

### 当前状态
- [x] 已确认策略：英文主站稳定后再启动中文
- [ ] 尚未开始中文页面开发（按当前策略暂缓）

### 启动条件（满足后再开工）
- [ ] 英文主入口页保持稳定：`/characters`、`/mechanics`、核心新手文无严重回退
- [ ] `cards` 高价值卡二次复核达到当前文档的完成标准
- [ ] 连续观察到搜索流量稳定，具备扩语言版本的运维余量

### 启动后的首批范围（MVP）
- [ ] 建立 `/zh/` 路径与基础 `hreflang` 互指
- [ ] 先做中文高意图查询页：`/zh/cards`、`/zh/characters`
- [ ] 先做中文高价值决策内容：starter / first-run / beginner mistakes
- [ ] 不做全站一次性翻译，先覆盖高流量入口页

---

## 当前最值得继续做的事

为什么现在是这个优先级：
- `cards` 结构已经搭好，真正短板是数据准确性。
- `characters` 结构已经收顺，短期再改架构收益不大。

目的：
- 把现有 `cards` 从“能用”推进到“更可信的过渡版”。

希望达到的效果：
- 后续接本地游戏资源时，只是替换数据，不推翻页面。

### 下一步建议
- [ ] 继续复核 `/cards` 默认第一页所有卡
- [ ] 继续复核每个角色全部 starter 卡
- [ ] 继续复核角色卡池页首屏展示卡
- [ ] 建立“已人工核过卡片清单”，作为后续官方资源替换的第一批优先对象

### 当前可执行的复核顺序

为什么这样排：
- 不是所有卡都同等重要。当前阶段最容易影响用户信任和搜索表现的，是首页会露出、角色卡池页会露出、以及最常被拿来理解角色的 starter 卡。

目的：
- 先把最容易曝光、最容易被搜索到、最容易被用户拿来对照的卡做准。

希望达到的效果：
- `/cards`、角色卡池页、单卡页这三类页面里，用户最容易看到的卡先可靠。

#### 第一批：`/cards` 默认第一页
- [ ] `Abrasive`
- [ ] `Accelerant`
- [ ] `Accuracy`
- [ ] `Acrobatics`
- [ ] `Adaptive Strike`
- [ ] `Adrenaline`
- [ ] `Afterimage`
- [ ] `Afterlife`
- [ ] `Aggression`
- [ ] `Alchemize`
- [ ] `Alignment`
- [ ] `All for One`
- [ ] `Anger`
- [ ] `Anointed`
- [ ] `Anticipate`
- [ ] `Armaments`
- [ ] `Arsenal`
- [ ] `Ashen Strike`
- [ ] `Assassinate`
- [ ] `Astral Pulse`
- [ ] `Automation`
- [ ] `Backflip`
- [ ] `Backstab`
- [ ] `Ball Lightning`

#### 第二批：各角色 starter / 基础卡
- [ ] `Ironclad: Strike`
- [ ] `Ironclad: Defend`
- [ ] `Ironclad: Bash`
- [ ] `Silent: Strike`
- [ ] `Silent: Defend`
- [ ] `Silent: Neutralize`
- [ ] `Silent: Survivor`
- [ ] `Defect: Strike Defect`
- [ ] `Defect: Defend Defect`
- [ ] `Defect: Zap`
- [ ] `Defect: Dualcast`
- [ ] `Necrobinder: Strike`
- [ ] `Necrobinder: Defend`
- [ ] `Necrobinder: Blight Strike`
- [ ] `Necrobinder: Bodyguard`
- [ ] `Regent: Strike`
- [ ] `Regent: Defend`
- [ ] `Regent: Forge`
- [ ] `Regent: Starlight`

#### 第三批：角色卡池页首屏卡
- [ ] `Ironclad card pool` 首屏展示卡
- [ ] `Defect card pool` 首屏展示卡
- [ ] `Silent card pool` 首屏展示卡
- [ ] `Regent card pool` 首屏展示卡
- [ ] `Necrobinder card pool` 首屏展示卡

#### 第四批：正文差异风险最高的卡
- [ ] `Adaptive Strike`
- [ ] `All for One`
- [ ] `Charge Battery`
- [ ] `Energy Surge`
- [ ] `Feral`
- [ ] `Sunder`
- [ ] `Turbo`
- [ ] `Scavenge`
- [ ] `Subroutine`
- [ ] `Supercritical`

### 每张卡复核时要看什么
- [ ] 卡名
- [ ] 所属角色
- [ ] 费用
- [ ] 类型
- [ ] 稀有度
- [ ] 正文效果文本

### 复核完成标准
- [ ] 至少完成 `/cards` 默认第一页全部卡的二次核对
- [ ] 至少完成 5 个角色 starter / 基础卡的二次核对
- [ ] 至少完成 `Ironclad` 和 `Defect` 角色卡池页首屏卡的二次核对
- [ ] 建立一份“已人工复核卡片名单”，后续拿到本地游戏资源后继续沿用
