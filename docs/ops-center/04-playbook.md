# STS2 Guide 运营执行手册（Playbook）

> 用途：统一日常巡检、异常处理、发布后检查、社媒执行规则。
> 执行顺序：每日巡检 -> 异常定位 -> 动作执行 -> 闸门验证 -> 记录与决策。

## 每日固定动作
- 每天上午/下午各巡检一次
- 每次巡检必须覆盖 GSC + Vercel + Bing Webmaster + Google Trends
- 每次执行后更新 `docs/ops-center/01-daily-log.md` 与 `docs/ops-center/00-dashboard.md`
- 每天必须完成外链状态检查（发布/生效/补链）与评论巡检（Reddit / X / Steam）

## 外链与评论响应（强制）
- 外链动作记录最小字段：平台、发布时间、目标URL、锚文本、当前状态（已发/已收录/待跟进）
- 评论巡检最小字段：平台、评论链接、评论核心观点、回复状态、回复时间
- 回复优先级：先处理负反馈与高价值讨论，再处理一般问答
- SLA：24 小时内尽量完成回复；超时项自动进入次日 P0

## 并行执行策略（Subagent）
- 原则：任务可并行时默认拆分，避免单线程串行等待。
- 串行前置步骤：先由主线程完成“当日优先级判定与闸门判断”。
- 并行执行步骤：将互不依赖任务分发给独立 subagent，同时推进。

### 推荐分工（每日）
- Agent A（数据监控）：GSC + Vercel + Bing + Trends 数据拉取与异常摘要
- Agent B（社媒互动）：Reddit / X / Steam 评论巡检、回复草稿与已回复登记
- Agent C（增长机会）：长尾词发现、高展现低点击词池更新、候选选题清单
- Agent D（版本更新）：官方公告/Steam 新闻/SteamDB 巡检，识别受影响页面与数据更新需求
- Agent E（外链执行，可选）：仅在“有可发布新内容”时执行外链分发与补链

### 合并输出（主线程）
- 汇总所有 subagent 输出为 `DONE / P0 / P1 / SKIP`
- 回填到：
  - `docs/ops-center/00-dashboard.md`
  - `docs/ops-center/01-daily-log.md`
  - `docs/ops-center/03-roadmap.md`
- 若策略变化，新增决策 ID 到 `docs/ops-center/02-decisions.md`

## 闸门优先级
- 未过闸门时禁止扩量
- 默认先做词池、模板、内链微调

## 合并来源 A：SEO_EXECUTION_CHECKLIST.md

# SEO Execution Checklist (StS2 Launch Window)

Last updated: 2026-03-17

标记规范：
- 状态：`DONE`（已完成）/ `IN_PROGRESS`（进行中）/ `TODO`（待做）/ `BLOCKED`（受外部条件阻塞）
- 优先级：`P0`（最高）/ `P1`（高）/ `P2`（中）

## A. 已完成（DONE）
- [x] `DONE` [P0] Launch 页 FAQ 结构化数据（`FAQPage`）已添加
- [x] `DONE` [P1] Launch 页保留可见更新日志区块
- [x] `DONE` [P0] Google Search Console 已提交 sitemap
- [x] `DONE` [P0] Article 1 已发布：`Best Starter Character in Slay the Spire 2 (Early Access)`
- [x] `DONE` [P1] Article 1 已与 `/characters`、`/mechanics` 做内链
- [x] `DONE` [P0] Bing Webmaster Tools 已完成站点导入：`https://sts2guide.com/`
- [x] `DONE` [P0] Bing 已提交 sitemap：`https://sts2guide.com/sitemap.xml`（状态：Processing）
- [x] `DONE` [P0] IndexNow key 文件已上线：`/9b140331fdfef9def5d086169aa7aac2.txt`
- [x] `DONE` [P0] 站内 IndexNow 提交能力已接入（API route + submit script）
- [x] `DONE` [P0] 首页信息架构已重排（新增高意图查询快捷入口并前置）
- [x] `DONE` [P0] 高展现低 CTR 重点页面 metadata 已完成一轮改写（首页/新闻/角色/卡牌/指南 + 详情模板）
- [x] `DONE` [P0] 未索引页面分级处理（第一轮）已执行：6 个历史低价值新闻页改为 `noindex` 并移出 sitemap
- [x] `DONE` [P0] `guides` 详情路由已落地（`/guides/[slug]`，首批 10 页）
- [x] `DONE` [P0] `relics` 详情路由已落地（`/relics/[slug]`，含 alias：`prismatic_shard -> prismatic_gem`）
- [x] `DONE` [P0] `sitemap.xml` 已纳入 guides/relics 详情页 URL
- [x] `DONE` [P1] `/guides` 与 `/relics` 列表已补充详情页内链入口

## B. 阻塞项（BLOCKED）
- [ ] `BLOCKED` [P0] IndexNow 全站批量提交（543 URLs）
  - 现状：端点 `api.indexnow.org` 返回 `403 UserForbiddedToAccessSite`
  - 已验证：key 文件可访问（HTTP 200，内容正确）
  - 结论：当前为 Bing/IndexNow 侧授权状态未完成或同步延迟，待明天继续重试

## C. 待执行（TODO，按优先级）
### P0（先做）
- [ ] `IN_PROGRESS` [P0] 30 页验证批（首轮）执行：按 `cards/relics/mechanics/build` 分组上线，不追大词（已完成：A 批 15 页中 5 页）
- [x] `DONE` [P0] 30 页验证批映射表落地：`关键词/搜索量/KD/意图/目标URL/模板A-B/优先级`（见 `SEO_BATCH_30_EXECUTION_PLAN.md`）
- [x] `DONE` [P0] 30 页验证批追踪看板已建立（见 `SEO_BATCH_30_TRACKER.md`）
- [ ] `TODO` [P0] 14 天闸门验证：收录率 >= 60%，有曝光页占比 >= 40%，进入前 30 名页面 >= 6
- [ ] `TODO` [P0] 未索引页面分级处理（第二轮）：对高价值未收录页做“补强”而非扩量（优先 10 页）

### P1（高优先）
- [ ] `TODO` [P1] Article 2：`Top 10 First-Run Mistakes in Slay the Spire 2`
- [ ] `TODO` [P1] Launch 页新增“Known launch-day issues / workarounds”
- [ ] `TODO` [P1] 基于 GSC 实际查询继续增补 FAQ（问题导向）
- [ ] `TODO` [P1] X 二次分发（“what changed”版本）并回链最新页面
- [ ] `TODO` [P1] 首页/栏目内链重排：优先分发至验证批页面（每页至少 3-5 条上下游内链）
- [ ] `TODO` [P1] Reddit 分发节奏化：首发贴 -> 更新贴 -> 问答贴（每贴最多 1 链接）

### P2（中优先）
- [ ] `TODO` [P2] Repost 一条 Launch 主题 X 线程（time + checklist + FAQ）
- [ ] `TODO` [P2] 建立稳定周报模板（渠道占比、关键词分层、页面优先级池）
- [ ] `TODO` [P2] IndexNow 提交闭环（先单 URL 成功，再批量）

## D. 数据调研执行清单（每次调研必须四端联动）
### GSC（必须）
- [ ] 点击、展现、CTR、平均排名
- [ ] 查询维度（品牌词/非品牌词、高展现低点击词）
- [ ] 页面维度（Top 页面、新页面、下滑页面）
- [ ] 国家/设备/搜索呈现
- [ ] 索引覆盖与结构化结果状态

### Vercel / 站内分析（必须）
- [ ] Visitors、PV、Bounce Rate
- [ ] Top Landing / Top Exit
- [ ] 时间序列波动与异常点
- [ ] 关键页面承接（首屏后跳转）

### Bing Webmaster（必须）
- [ ] Search Performance（点击/展现/查询/页面）
- [ ] Index Coverage（已索引/未索引）
- [ ] Sitemaps 处理状态
- [ ] URL Inspection 与抓取异常
- [ ] IndexNow 接收状态/失败原因

### Google Trends（必须）
- [ ] 核心词趋势（品牌词 + 需求词）
- [ ] 区域差异（重点国家）
- [ ] 时间窗口对比（7天/30天）
- [ ] Related Topics / Related Queries（选题输入）

## E. 防止关键词互抢（Cannibalization）
- Launch-time 精准意图固定在：
  - `/news/slay-the-spire-2-launch-time-us-china`
- 新增文章需分离意图簇：
  - starter character
  - first-run mistakes
  - launch-day issues

## F. 阶段重心迁移（2026-03-17 起）
- 当前阶段由“Launch 资讯主导”切换为“实体词长尾主导”（cards/relics/mechanics/build）。
- 验证批不过线（见 C.P0 闸门指标）时，暂停扩量，优先调整词池与模板，不做盲目上量。
- IndexNow/Bing 视为抓取加速器，不作为增长主引擎。

---

## 合并来源 B：STS2_LAUNCH_EXECUTION_CHECKLIST.md

# StS2 执行进度 Checklist

最后更新：2026-03-12（顺序执行版）

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
- [x] 角色卡支持图片区（不再纯文本卡片）
- [x] 角色卡改为“整卡可点击 + 手型光标”，点击热区覆盖整张卡
- [x] `Defect` 的角色入口统一到 `/characters/defect`（不再落到 card pool）

### 已完成：角色详情页
- [x] 角色详情页首屏收缩，不再是强海报感展示
- [x] 顶部改成更偏查询的结构：`Unlock Status / Card Pool / Best Next Query`
- [x] 去掉大段 `Playstyle & Strategy`
- [x] 改为更克制的 `Quick Read / Core Mechanics / Starting Deck`
- [x] 与对应 `card pool` 建立明确互链
- [x] 角色图改为大尺寸主视觉（约 640px 宽），并与右侧内容顶部对齐
- [x] 角色图按原始比例完整显示（避免裁切）

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

## 模块四-B：Relics / Potions 查询体系

为什么要加这块：
- 竞品导航已经把 `cards / characters / relics / potions` 分成四条查询线，用户意图也确实不同。
- 只做 cards 会导致站点在“资源数据库”心智上不完整。

目的：
- 先把 `relics / potions` 做成可搜索、可筛选的索引页，补齐资料站的核心入口。
- 后续再在数据和图片资源准备好后升级为更完整的详情体系。

希望达到的效果：
- 导航层完整：用户能直接按模块进入检索，而不是绕路到文章页。
- 形成统一的信息架构：`cards / characters / relics / potions` 都是查询页。

### 已完成
- [x] 重构 `/relics` 为查询页（搜索 + rarity + character 过滤）
- [x] 新增 `/potions` 查询页（搜索 + rarity + character 过滤）
- [x] 导航新增 `Potions`
- [x] 首页资源区新增 `Potions Database` 入口
- [x] sitemap 纳入 `/potions`

### 已验证
- [x] `pnpm build`
- [x] 本地路由可访问：`/relics`、`/potions`

### 资源盘点结论（图片）
- [x] 已盘点 `/Users/jiaojian/Desktop/sts2/sts2整理过的文件/sts2_site_asset_bundle_v2`
- [x] 当前包内有 `cards / characters / monsters / ancients` 图
- [x] 当前包内未发现独立 `relics`、`potions` 图片目录与命名映射
- [x] 现阶段 `relics / potions` 保持无图索引展示

### 当前判断
- 结构已补齐，当前短板是官方可用图源和更权威的数据映射，不是页面框架。

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

---

## 模块六：社媒发布攻略（Reddit / X / Steam，必读）

为什么单独写这一块：
- Reddit 对外链和自推广极其敏感，直接贴站点链接很容易触发 `Spam / Excessive self-promotion` 或站内过滤。
- 相同内容跨社区重复发布，也容易被判定为批量推广。

目标：
- 在尽量不触发风控的前提下获取真实讨论和有效引流。
- 先做社区价值，再做链接承接。

### 执行前检查（每次都要做）
- [ ] 先读本节完整策略（不可跳过）。
- [ ] 查看目标社区规则：是否允许自帖、是否允许外链、是否要求标签/标题格式。
- [ ] 检查最近 24 小时是否已在相邻社区发过同主题内容；若有，改角度再发。

### 发帖策略（默认）
- 主贴默认不放链接，先发讨论型文本帖。
- 一帖只讨论一个问题，不做“合集导流”。
- 标题避免营销词：`best/ultimate/full guide`。
- 首贴文案必须社区定制，禁止跨版块完全复用。
- 单日频率建议：1-2 帖（新号或低 karma 账号优先保守）。

### 链接策略（默认）
- 链接优先放在楼主评论，不放正文。
- 发布时间建议：主贴发出后 15-60 分钟，再补评论链接。
- 每个帖子最多 1 个外链，且只指向单一落地页。
- 外链前先给出可读摘要（例如：更新点、时间线、结论），避免“裸链”。

### 社区优先级（当前项目）
- 第一优先：`r/slaythespire`
- 第二优先：`r/roguelites`
- 第三优先：`r/Games`（讨论导向，规则严格）
- 谨慎：`r/pcgaming`、`r/gaming`（高风控，易触发广告检测）

### 异常处理
- 若出现 `Post Check` 或疑似广告提示：先改成“求反馈/求建议”语气，再提交。
- 若出现 `Removed by Reddit filters`：
  - 不重复立即重发同文案；
  - 24h 后改标题、改结构、降推广感再试；
  - 优先转到更垂直社区。
- 若社区为私密或需审批成员：记录并更换公开社区，不强行继续。

### 可复用文案骨架（低风控）
- 开场：我在做一个用于 Early Access 追踪的小工具/页面，想听玩家反馈。
- 中段：明确 2-3 个想解决的问题（例如补丁时间线、玩家趋势解释）。
- 结尾：问一个具体问题（例如“你最想先看到哪个指标？”）。
- 备注：默认不在主贴放链接；需要时在评论补单链接。

### X（Twitter）发布注意事项
- 目标：先拿互动和收藏，再拿点击；避免看起来像硬广。
- 首帖结构：`一句结论 + 1个关键数据/观察 + 1个问题`。
- 外链策略：默认每条推文只放 1 个链接；更推荐做 2-3 条串帖，链接放末条。
- 语气策略：少用营销词（`best/ultimate/must read`），多用“正在验证/欢迎纠错”。
- 频率建议：同主题 24 小时内不重复刷屏；改角度再发。
- 配图建议：优先数据截图、更新对比图；不要无关配图。
- 风险规避：避免机械化重复文案、避免连续只发外链不互动。

### Steam 社区发帖注意事项
- 先读目标讨论区版规和置顶帖（每个游戏社区标准不同）。
- 标题要可检索：包含游戏名、版本、问题关键词或主题关键词。
- 一帖只讲一件事：`现象 -> 复现步骤 -> 期望结果 -> 实际结果 -> 版本/设备`。
- 先搜索是否已有同主题高质量帖；能补充就优先补充，减少重复发帖。
- 外链策略：正文先给完整信息，外链仅作补充参考，不做导流式裸链。
- 语气策略：保持建设性，避免情绪化攻击和引战表达。
- 证据优先：截图、日志片段、时间点、系统配置能显著提高回复质量。

### 跨平台通用执行清单（Reddit / X / Steam）
- [ ] 发帖前确认：本条内容的唯一目的是什么（求反馈 / 报告问题 / 分享更新）。
- [ ] 发帖前确认：是否能在“无链接”情况下让用户读懂核心信息。
- [ ] 发帖前确认：每帖最多 1 个链接，且链接直达单一落地页。
- [ ] 发帖后 30-60 分钟内，至少做 1 次回复互动（不是只发不回）。
- [ ] 每日运维：固定两次评论区巡检（上午 / 下午），覆盖 Reddit / X / Steam 的相关帖，优先回复高质量评论。
- [ ] 每日运维：完成巡检后记录当日互动结果（已回复条数、链接、风险点、待跟进项）到运维日志。
- [ ] 若被风控/移除：记录触发平台、触发文案、处理结果，禁止原文立即重发。
- [x] 给 `/cards/[slug]` 接入 breadcrumb + collection schema

### SEO 外链执行 SOP（验证期受控版）

为什么加这段：
- 外链策略不能再靠临场发挥，需要可交接、可复盘、可控风险的固定动作。
- 在验证闸门未通过前，只允许小规模、可归因外链试验，禁止盲目扩量。

目的：
- 把“竞品外链并集 -> 分层优先级 -> 小批量执行 -> 指标复盘”固化成日常流程。

希望达到的效果：
- 外链动作既能推动抓取/排名，又不破坏当前验证节奏和风控基线。

- [ ] 每周一次：导出 3 个代表竞品外链源并取并集（`sts2.wiki`、`sts2.untapped.gg`、`spire-codex.com`）
- [ ] 并集去重后按三维打分：`可获得性`、`主题相关性`、`风险等级`
- [ ] 仅执行高相关低风险源（社区讨论、资料页引用、专题页补充），禁做批量垃圾外链
- [ ] 每周执行上限：仅做“小批量试验”（建议 5-10 条），做完等待 7 天观测
- [ ] 记录落地日志：来源、目标页、锚文本、发布时间、是否存活
- [ ] 7 天后复盘：看 GSC 曝光/排名是否改善；无改善则停同类源并改策略

验收标准：
- [ ] 每次外链动作都能在日志中追溯“做了什么、为什么做、结果如何”
- [ ] 闸门未过线阶段，外链动作始终保持“小规模、可归因、可回滚”

### 48 小时出词排障清单（强制）

为什么要做：
- 新页面上线后 24-48 小时无出词，往往是技术或语义匹配问题，不应继续盲目加内容。

目的：
- 用统一清单快速定位是“索引问题”还是“内容/匹配问题”。

希望达到的效果：
- 48 小时内给出明确诊断与下一步动作，而不是长期等待。

- [ ] 索引状态：GSC URL Inspection 确认是否 `已收录/已发现/已抓取未收录`
- [ ] 可抓取性：确认 `HTTP 200`、无 `noindex`、canonical 指向正确
- [ ] 收录入口：确认已在 `sitemap.xml`，且有至少 2 条站内内链指向该页
- [ ] 语义对齐：检查 `title/H1/首段` 是否明确覆盖目标词簇与用户意图
- [ ] 页面渲染：确认核心正文可被抓取（避免仅前端渲染导致正文缺失）
- [ ] 提交流程：执行 IndexNow + Bing URL Submission + GSC Request Indexing（若配额允许）
- [ ] 归因记录：在运维日志记录该页排障结论（技术/内容/外链/配额阻塞）

判定规则：
- [ ] 若 48h 仍无出词，先修 `词池/模板/内链`，不进入下一批扩量
- [ ] 若已有出词但偏离目标词，优先改页面语义与内链锚文本，不先加量

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

### GSC 7 天效果补充（2026-03-11）
- [x] 总点击 `76`，总曝光 `3,417`，CTR `2.2%`，平均排名 `8.3`
- [x] 查询词头部已出现明确品牌+意图组合：`sts2 guide`、`sts2 tips`、`slay the spire 2 guide`
- [x] 页面点击头部仍集中在：`/`、`/mechanics`、`first-run`、`best-starter-character`
- [x] 国家/地区点击头部：美国 `25`、加拿大 `11`、英国 `6`（7 天）
- [x] 设备结构：移动点击更高（`48`），桌面曝光更高（`2,169`）
- [x] 搜索结果呈现暂无独立类型数据，当前主线仍是基础网页结果竞争

### GSC 页面索引结论（2026-03-10 补充）
- [x] 已检查 GSC「网页索引编制」：已编入索引 `7`，未编入索引 `20`
- [x] 未索引原因仅 2 类：
  - `已发现 - 尚未编入索引`：`19`
  - `已抓取 - 尚未编入索引`：`1`（`/manifest.json`）
- [x] `已发现 - 尚未编入索引` 示例已覆盖核心入口页（`/characters`、部分角色详情、`/guides`、`/news`），说明当前主要是抓取/索引节奏问题，不是页面报错型问题
- [x] GSC 站点地图状态为成功，`/sitemap.xml` 已被读取（上次读取：`2026-03-10`，已发现网页：`536`）

### 基于索引现状的直接动作
- [ ] 先对核心查询页发起手动请求索引：`/cards`、`/characters`、`/relics`、`/potions`
- [ ] 对 5 个角色详情页发起手动请求索引
- [ ] 持续提升查询页之间内链密度（尤其首页与角色页到 cards/relics/potions 的导流）
- [ ] 以 7 天为周期复查索引变化，目标是先把核心页从「已发现」推进到「已抓取/已编入」

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

## 模块八：代表竞品基线（精简版）

为什么只保留少量竞品：
- 竞品过多会分散判断标准，且很多站点稳定性和数据质量不一致。
- 只保留“类型清晰、可长期参考”的代表站，更利于落地执行。

目的：
- 给当前站点建立明确对标基线，而不是泛泛“看竞品”。
- 让每一轮优化都能回答：是在追哪个维度，补了什么差距。

希望达到的效果：
- 竞品分析从“看起来不错”变成“可复用动作清单”。
- 后续新增模块（cards / characters / relics / potions）有统一验收标准。

### 代表竞品（保留 3 个）
- [x] `https://sts2.wiki/`（资料库型，对标信息架构与完整度）
- [x] `https://sts2.untapped.gg/`（工具产品型，对标筛选体验与可信背书）
- [x] `https://spire-codex.com/`（数据广度型，对标实体覆盖与数据维度）

### 可直接借鉴的点
- [x] 统一四大入口：`characters / cards / relics / potions`
- [x] 列表页都支持可组合筛选（搜索 + 多维过滤 + 可恢复状态）
- [x] 每条数据尽量有可索引详情页或稳定落地页
- [x] 公开“数据来源 / 更新时间 / 版本”的可信信号
- [x] 列表页与攻略页互链，形成“查询 -> 决策”闭环

### 明确不跟的点
- [x] 不盲目照搬竞品视觉层堆叠内容区块
- [x] 不为凑页面数量而扩不稳定数据源
- [x] 不在数据未确认前展示“已验证”类高风险表述

---

## 模块九：暂缓项

为什么现在不做：
- 这些方向重要，但当前阶段投入产出不如 `cards` 数据准确性。

### 暂缓
- [ ] 角色解锁问题页单独拆文，例如 `How to Unlock All Characters in Slay the Spire 2`
- [ ] 本地游戏资源解包后的官方数据替换
- [ ] 卡图正式接入
- [ ] cards / characters 的更重型工具化功能
- [ ] tier list 体系

---

## 模块十：中文站推进计划（英文主站稳定后启动）

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

## 模块十一：按顺序执行路线图（不按时间）

为什么按顺序而不是按天：
- 当前阶段的瓶颈不是“开发速度”，而是“数据可信度 + 查询闭环质量”。
- 顺序执行能避免多个模块并行导致回滚和返工。

目的：
- 每一步都先补当前最大短板，减少无效工作。

希望达到的效果：
- 每完成一步就能明确判断是否达标，再进入下一步。

### 顺序 1：先修技术基线与抓取风险
- [x] 修复 `robots.txt` 校验问题（已精简规则，移除重复分组与 `_next` 屏蔽）
- [x] 统一检查 `cards / characters / relics / potions` 的 metadata 与 canonical 一致性（含动态详情页；首页使用 layout 级 canonical）
- [x] 校验 sitemap 中新增模块的更新频率与实际更新节奏匹配（`/cards` 改为按实际卡数据最新日期；`/relics` 与 `/potions` 使用当前模块更新时间）

### 顺序 2：完成 cards 的高价值数据复核闭环
- 最新校验（2026-03-11）：
  - `cardsChecked=504`
  - `missingOfficial=0`
  - `nameMismatch=0`
  - `descriptionMismatch=90`（当前首要风险）
  - `imageHashMismatch=160`（来源差异，不等于错误；待官方图完全落地后再收口）
- [~] 当前阶段暂不处理（按当前决策先不推进卡片人工复核）
- [~] 继续复核 `/cards` 默认第一页所有卡（暂缓）
- [~] 继续复核每个角色全部 starter 卡（暂缓）
- [~] 继续复核角色卡池页首屏展示卡（暂缓）
- [~] 建立“已人工核过卡片清单”（后续官方数据替换优先集，暂缓）

### 顺序 3：补齐 relics / potions 的数据可信度
- 最新校验（2026-03-11）：
  - `relics total=290`，`filenameStemMismatch=0`，`hasImageButFileNotExists=0`
  - `potions total=64`，`filenameStemMismatch=0`，`hasImageButFileNotExists=0`
  - 结论：名称/slug/图片文件存在性链路完整，可先进入内容文本准确性抽检阶段
- [ ] 建立 `relics / potions` 最小可用准确性清单（名称、稀有度、效果）
- [ ] 在页面加入版本与更新时间信号（不夸大权威性）
- [ ] 暂不接图，等确认到可用官方素材后统一上 R2

### 顺序 4：强化四大查询入口的内链闭环
- [x] `cards` 增加到对应角色、relics、potions 的推荐路径
- [x] `characters` 增加到对应卡池与关键新手指南的双向入口
- [x] `relics / potions` 增加回流到 cards 与角色页面的入口
- [x] 首页和导航维持四入口并给出明确使用场景

### 顺序 5：再做增量内容扩展
- [ ] 仅在前四步稳定后，新增高意图专题页（starter / first-run / class-specific）
- [ ] 中文站保持暂缓，待英文主站稳定后按模块十启动

### 顺序 6：GSC 索引推进（执行状态）
- 为什么要做：
  - 当前主要瓶颈是“页面未收录/收录慢”，不是页面不存在。
- 目的：
  - 把已完成的核心查询页和高意图词页尽快送入抓取优先队列。
- 希望达到的效果：
  - 缩短新页面进入搜索结果的时间，尽快验证 impressions 与点击。
- 已完成（2026-03-11）：
  - [x] 已请求编入索引：`/cards`
  - [x] 已请求编入索引：`/characters`
  - [x] 已请求编入索引：`/relics`
  - [x] 已请求编入索引：`/potions`
  - [x] 已请求编入索引：`/news`
  - [x] 已请求编入索引：`/guides`
  - [x] 已请求编入索引：`/news/slay-the-spire-2-steam-charts-player-count`
  - [x] 已请求编入索引：`/news/slay-the-spire-2-steamdb-patch-tracker`
  - [x] 已请求编入索引：`/characters/ironclad`
  - [x] 已请求编入索引：`/characters/regent`
  - [x] 已请求编入索引：`/characters/defect`
  - [x] 已请求编入索引：`/cards/character/ironclad`
  - [x] 已请求编入索引：`/cards/character/silent`
  - [x] 已请求编入索引：`/cards/character/regent`
  - [x] 已请求编入索引：`/cards/character/defect`
  - [x] 已核验：首页 `/` 在 GSC 显示“网址已收录到 Google”
  - [x] 已核验：`/mechanics` 在 GSC 显示“网址已收录到 Google”
  - [x] 已核验：`/news/slay-the-spire-2-launch-time-us-china` 在 GSC 显示“网址已收录到 Google”
  - [x] 已核验：`/characters/silent` 在 GSC 显示“网址已收录到 Google”
- 已完成增量（2026-03-12）：
  - [x] 已请求编入索引：`/news/slay-the-spire-2-hotfix-patch-notes`（状态：已发现未收录 -> 已提交抓取队列）
  - [x] 已请求编入索引：`/news/slay-the-spire-2-steam-deck-performance-guide`（状态：已发现未收录 -> 已提交抓取队列）
  - [x] 已核验：`/news/slay-the-spire-2-known-issues-and-fixes` 在 GSC 显示“网址已收录到 Google”
  - [x] 已核验：`/cards/character/necrobinder` 在 GSC 显示“网址已收录到 Google”
  - [x] 已核验：`/characters/necrobinder` 在 GSC 显示“网址已收录到 Google”
- 待完成：
  - [ ] 批量继续提交剩余核心 URL（news 其余高意图页 + 其余角色详情 + 其余角色卡池页）
  - [ ] 复查 `Google 无法识别此网址` 的页面是否被 sitemap/内链覆盖（重点：`/potions`）
- 阻塞说明：
  - [x] 已出现 GSC 频率限制提示（“出了点问题，请过几个小时再试”），需分批继续提交
  - [x] 本轮已在限流窗口内追加成功提交 2 条高意图 news URL，说明可继续采用“小批量 + 间隔”策略
  - [x] 角色页继续提交时再次出现频率限制（示例：`/characters/defect` 提交时报错），需下一轮重试
  - [x] 今日触发 GSC 硬上限（`超出了配额`：今日已超每日配额），后续提交需在明天继续
- `/potions` 复查结论（2026-03-11）：
  - [x] 线上返回 `HTTP 200`，无 `noindex` 信号
  - [x] canonical 正确：`https://sts2guide.com/potions`
  - [x] 已在 `sitemap.xml` 中
  - [x] 已有导航与查询页内链，且首页 Database 主行动区新增 `/potions` 直链
  - [ ] 判定为索引节奏问题，等待 GSC 下一轮抓取验证
  - [x] 提交日志：`ops-logs/gsc-submission-log-2026-03-11.md`
  - [x] 提交日志：`ops-logs/gsc-submission-log-2026-03-12.md`
  - [x] 索引体检日志：`ops-logs/indexability-audit-2026-03-11.md`

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

---

## 模块十二：Google Trends 国家与查询意图驱动方案

为什么要加这一块：
- 现在站点已经有可用结构，下一步瓶颈不是“有没有页面”，而是“页面是否精准接住用户正在搜的词”。
- Trends 已经证明：当前主流需求词不等于品牌词（`sts2 guide`），而是 `steam / multiplayer / steam charts / card list / tier list` 这类问题词。

目的：
- 用真实查询意图反推页面优先级，而不是继续平均发力。
- 在不打乱当前英文主站节奏的前提下，规划下一步国家/语种扩量。

希望达到的效果：
- 新增页面上线后能更快拿到 impressions，不再依赖品牌词自然增长。
- 英文主站先稳住美国查询需求，再按信号推进繁中扩展。

### Google Trends 关键结论（2026-03-11）
- [x] 时间窗口：过去 30 天
- [x] 主查询：`slay the spire 2, sts2, sts2 guide, slay the spire 2 tier list, slay the spire 2 cards`
- [x] 美国查询意图最完整：`multiplayer`、`steam charts`、`card list / tier list`、`regent / defect`
- [x] 台湾出现明显繁中词：`殺戮 尖塔 2`、`slay the spire 2 攻略`、`巴哈`、`slay the spire 2 steam`
- [x] 俄罗斯存在热度，但查询更偏 `steamdb / steam / скачать`，意图杂讯更高
- [x] 当前品牌词 `sts2 guide` 仍低量，现阶段应继续以需求词抢量

### 与当前实现的匹配判断
- [x] 现有 `/cards`、`/characters`、`/relics`、`/potions` 可承接数据库型词
- [x] 现有 `/news/[slug]` 架构适合快速扩展 Trends 词页
- [x] 当前缺口是高意图词页不够精准（尤其 `steam charts`、`steamdb`、`multiplayer`、`release date`）

### 立即执行（英文主站）

为什么先做这批：
- 这些词在 Trends 已经出现稳定上升，且可直接由现有 `news` 模块承接，不需要新架构。

目的：
- 先把高意图查询落到专页，提升相关性和收录效率。

希望达到的效果：
- 让首页、`/news`、数据库页都能把用户导向“词与页完全对应”的落地页。

- 当前状态说明（2026-03-11）：
  - [x] 已有并可承接：`/news/slay-the-spire-2-steam-charts-player-count`
  - [x] 已有并可承接：`/news/slay-the-spire-2-steamdb-patch-tracker`
  - [x] 已有并可承接（同主题）：`/news/slay-the-spire-2-co-op-guide-how-it-works`
  - [x] 已新增：`/news/slay-the-spire-2-release-date`
- [x] 新增并上线以下英文落地页（标题/H1 精确包含目标词）：
  - [x] `/news/slay-the-spire-2-multiplayer-coop-guide`
  - [x] `/news/slay-the-spire-2-steam-charts-player-count`
  - [x] `/news/slay-the-spire-2-steamdb-patch-tracker`
  - [x] `/news/slay-the-spire-2-release-date`
- [x] 首页增加上述页面入口（趋势专题位）
- [x] `/news` 列表提升上述页面曝光优先级
- [x] 在 `/cards`、`/characters` 增加到上述页面的相关查询入口
- [~] 发布后立即提交 sitemap 与 URL 检查（GSC）（已提交首批；2026-03-12 对两篇新 news 页重提时出现“索引编制请求遭拒”，待 sitemap/内链被抓取后重试）
- [x] 已确认阻塞根因：两篇新页线上当前返回 `HTTP 404`（未部署），在上线前重复提交 GSC 无效
- [x] 已完成线上部署后复提（2026-03-12）：两篇新页线上 `HTTP 200`，`release-date` 已进入抓取优先队列，`multiplayer-coop-guide` 已触发请求但仍待 GSC 发现信号刷新
- [x] 2026-03-12 已核验：`/cards`、`/cards/character/necrobinder`、`/characters/necrobinder` 当前显示“网址已收录到 Google”
- [x] 提交日志补充：`ops-logs/gsc-submission-log-2026-03-12.md`
- [ ] 7 天复查：这 4 页 impressions / query 覆盖是否起量

### 国家/语种扩量顺序

为什么这样排：
- 美国词包最完整，英文页可直接承接，投入产出最高。
- 台湾已出现明显繁中攻略词，具备中文化的明确收益信号。
- 俄罗斯词意图更偏平台数据与下载词，先观察比立刻全量翻译更稳妥。

目的：
- 控制资源投入，把多语种动作放在有明确信号的市场上。

希望达到的效果：
- 扩量不是“多做语言”，而是“先做最可能带来新增点击的语言”。

- [x] 优先级 1：美国（继续英文深耕）
- [x] 优先级 2：台湾（繁中 MVP）
- [ ] 优先级 3：俄罗斯（先小样本验证，不做全站）

### 繁中 MVP 触发与范围（与模块十联动）
- [ ] 触发条件：英文四个高意图页在 7~14 天内出现稳定 impressions
- [ ] 首批仅做高意图页，不做全站翻译
- [ ] 关键词优先：`殺戮尖塔 2`、`攻略`、`Steam`、`多人/联机`、`卡牌列表`
- [ ] 上线后加 `hreflang` 与英文互链

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

---

## 模块十三：GEO（Generative Engine Optimization）可落地执行方案

为什么现在要做 GEO：
- 现阶段站点已经有 `cards / characters / relics / potions / news` 的结构基础，SEO 在持续起量，但 AI 搜索与答案引擎（Google AI Overviews、ChatGPT、Perplexity 等）对流量分配影响会继续变大。
- GEO 的核心不是“换一套 SEO 词表”，而是让页面更容易被模型抽取为“可引用的答案片段”，从而拿到推荐入口与品牌曝光。

目的：
- 让已有内容在“AI 生成答案场景”里更容易被抓取、理解、引用。
- 用最小改动先跑通 GEO 基础设施，再逐步扩大到更多查询页。

希望达到的效果：
- 高意图问题词页面在 AI 搜索中出现被引用/被总结的概率提升。
- 页面从“仅被索引”升级到“可被模型直接消费”的结构化内容形态。

### 执行前提（与当前路线衔接）
- [x] 站点已具备基础 sitemap / robots / schema 能力
- [x] 四大查询模块已上线（`/cards`、`/characters`、`/relics`、`/potions`）
- [~] 卡片/遗物/药水的数据持续复核中（按模块九暂缓策略推进）

### 第一阶段：GEO 基础层（优先做，低风险高收益）

为什么先做这一层：
- 基础层改动小、上线快、不会改变页面主结构，但能明显提高可机器读取性。

目的：
- 把站点内容从“可读网页”变成“可抽取知识单元”。

希望达到的效果：
- 模型在抓取页面时能稳定定位：这页回答什么问题、证据是什么、更新时间是什么。

- [x] 新增 `llms.txt`（站点级）  
  执行动作：在根路径提供站点说明、核心栏目、抓取建议、主要 URL 清单（英文主站优先）。
  验收标准：`/llms.txt` 可访问返回 `200`，内容无中文混入、无失效链接。
- [~] 四大查询页短答案块已调整为“无侵入模式”（不新增可见 GEO 文案块）  
  执行动作：撤销页面可见 GEO 引导块，保留 `llms.txt`、页面原生正文、schema 的机器可读层。
  验收标准：用户阅读路径不被 GEO 模块打断，同时抓取层仍有可消费信号。
- [~] 关键 news 页改为“无侵入 GEO”（结构化保留，页面不加额外导读块）  
  执行动作：移除新增的显式 GEO 卡片与证据折叠块，保留 Article JSON-LD 的 `abstract / citation / about / inLanguage`。
  验收标准：页面阅读体验与改造前一致，结构化数据字段仍可读取。
- [ ] 统一页面更新时间与数据版本说明  
  执行动作：在查询页展示 `Last verified` 与数据版本（不展示内部校验细节）。
  验收标准：四大查询页都有可见更新时间字段，且与实际数据更新时间一致。

### 第二阶段：GEO 结构层（在第一阶段完成后执行）

为什么做这一层：
- 只有文本还不够，模型更依赖结构化关系（实体、属性、对比、来源）。

目的：
- 明确告诉模型“这个实体是什么、有哪些属性、和什么对象相关”。

希望达到的效果：
- 角色、卡片、遗物、药水的实体关系在答案引擎里更稳定，减少误读和错配。

- [ ] 扩展 JSON-LD：为实体页补充更明确字段  
  执行动作：在现有 schema 基础上，补充名称、类别、版本、更新时间、来源链接等字段。
  验收标准：Rich Results / Schema 校验无报错，核心字段完整。
- [x] 建立“问题导向”内链锚文本  
  执行动作：把“点击这里/了解更多”替换为问题式锚文本（例如 `Best starter character in Slay the Spire 2`）。
  验收标准：首页、news、四大查询页至少各有 3 条问题导向锚文本内链。
- [x] 增加模块级 FAQ（仅高价值问题）  
  执行动作：每个模块补 3~5 个真实查询问题及简答，避免模板化堆砌。
  验收标准：FAQ 与页面主题强相关，不出现关键词硬塞。

### 第三阶段：GEO 观测层（持续迭代）

为什么要做观测：
- GEO 很难用单一指标判断，必须结合抓取、索引、查询词变化和实际引荐来源。

目的：
- 建立“改动 -> 抓取/索引 -> 查询词 -> 点击”的闭环，避免盲目改版。

希望达到的效果：
- 每次 GEO 动作都能在 7~14 天内判断是否有效，决定继续放大还是回退。

- [x] 新增 GEO 观测日志（周更）  
  执行动作：在 `ops-logs/` 新建 GEO 周报，记录新增问题词页、结构改动、索引状态、CTR 变化。
  验收标准：每周至少 1 条记录，能追溯每次改动影响。
- [ ] 跟踪 AI/搜索来源占比变化  
  执行动作：在现有分析面板中单独观察 referrer（Google / Bing / DuckDuckGo / ChatGPT 等）趋势。
  验收标准：能按周对比来源占比，不再只看总访客。
- [x] 设定 GEO 阶段 KPI（先用趋势指标）  
  执行动作：定义 3 个指标：高意图页 impressions、非品牌词覆盖、四大查询页点击占比。
  验收标准：每两周复盘一次，保留“继续/暂停/回滚”决策结论。

### 结合当前代码的建议执行顺序（可直接开工）
- [~] 步骤 1：上线 `llms.txt`，并将查询页 GEO 改造成“无侵入可读层”方案（当天可完成）
- [~] 步骤 2：高意图 news 页采用“结构化增强 + 页面无额外打扰”方案（1~2 天）
- [x] 步骤 3：补 FAQ 与问题导向锚文本内链（FAQ 仅做 JSON-LD，不新增可见内容）
- [x] 步骤 4：建立 GEO 周报与双周复盘节奏（持续）

### 当前判定（2026-03-12）
- [x] 已有 SEO 基础设施，具备 GEO 改造条件
- [x] GEO 基础层与结构层首轮已落地（采用无侵入可读层方案）
- [x] 下一步优先级切换为“步骤 4：GEO 周报与双周复盘”
- [x] 观测机制已建：`ops-logs/geo-weekly-log-2026-03-12.md`、`ops-logs/geo-biweekly-review-template.md`

---

## 模块十四：多引擎增长 + GEO 联动执行清单（精准落地版）

为什么要加这个模块：
- 现阶段流量来源已证明不是只有 Google，`Bing / DuckDuckGo` 已经有实际访问贡献。
- Google 收录起量相对慢，如果只押单引擎，会错过当前可立刻放大的增量。
- GEO 已有基础设施，但还缺“按指标触发动作”的闭环。

目的：
- 把“SEO + GEO + 多引擎”从概念变成统一执行系统。
- 让每一步都有明确输入、输出、阈值，不靠感觉推进。

希望达到的效果：
- 4 条查询主线（`cards / characters / relics / potions`）稳定承接非品牌词。
- 高意图新闻页持续吃到 `steam charts / steamdb / multiplayer / release date` 相关流量。
- 形成“数据观测 -> 决策 -> 动作 -> 再观测”的周循环机制。

### 执行顺序 A：统一指标面板（先做，不做这步后面都会失真）

为什么先做：
- 现在能看到访问，但缺少统一口径，导致动作优先级容易偏。

目的：
- 建立可比较的统一指标，保证后续每次调整都能判断有效性。

希望达到的效果：
- 每周复盘时可以直接回答：哪个引擎涨了、哪个页面掉了、该加码哪条线。

- [ ] 统一主观测指标（固定 6 项）：`总点击`、`总曝光`、`CTR`、`平均排名`、`非品牌词点击占比`、`四大查询页点击占比`
- [ ] 按引擎拆分来源（至少）：`google / bing / duckduckgo / brave / ecosia`
- [ ] 建立页面分组看板：`首页组`、`查询组（cards/characters/relics/potions）`、`高意图 news 组`
- [ ] 记录口径到周报模板，禁止中途改口径

验收标准：
- [ ] 周报里可以同时看到“按页面组”和“按来源引擎”的两张趋势表
- [ ] 任意一周都可追溯上周同口径数据，不出现字段变更导致不可比

### 执行顺序 B：多引擎技术可达性体检（再做，确保抓取无硬阻塞）

为什么做：
- 内容再好，若抓取路径不稳定，Google 慢、Bing 也不会快。

目的：
- 确保四大查询页与高意图页在主流搜索引擎都可抓、可索引、可复抓。

希望达到的效果：
- 减少“已发现未收录”的积压，缩短新页进入结果页的时间。

- [ ] 逐页核验 `HTTP 200 / canonical / indexability / sitemap 覆盖`（范围：四大查询页 + 5 个角色详情 + 4 个高意图 news）
- [ ] 检查 `robots.txt` 对爬虫是否存在误伤规则（重点看 query 路径与参数页）
- [ ] 复查 sitemap 新鲜度策略是否与实际更新一致（避免虚假高频更新时间）
- [ ] 对未收录核心页按“小批量 + 间隔”继续提交 GSC（并行记录 Bing Webmaster 的提交状态）

验收标准：
- [ ] 核心页不存在 `noindex`、canonical 错指、404/软 404
- [ ] 新增或更新页 72 小时内至少完成一次抓取状态刷新
- [ ] `已发现未收录` 的核心页数量连续两周下降

### 执行顺序 C：关键词与落地页一一对齐（核心增长动作）

为什么做：
- 当前最大机会是“高意图词已出现，但词页映射还可更精准”。

目的：
- 让引擎明确知道每个词该落到哪个页面，降低关键词内耗。

希望达到的效果：
- 提升非品牌词覆盖与点击，不再过度依赖首页和品牌词。

- [ ] 固定主攻词簇（英文）：`slay the spire 2 cards`、`slay the spire 2 relics`、`slay the spire 2 potions`、`slay the spire 2 characters`
- [ ] 固定高意图 news 词簇：`steam charts`、`steamdb`、`multiplayer/co-op`、`release date`
- [ ] 对每个词簇指定唯一主落地页 + 2 个辅助内链页（写入映射表，避免冲突）
- [ ] 主落地页 title/H1/intro 首段统一表达该词意图，但避免关键词堆砌
- [ ] 内链锚文本统一改为问题式或任务式，减少泛词（`learn more`）

验收标准：
- [ ] 每个词簇只有 1 个主落地页，不出现 2 个页面抢同一主词
- [ ] 7~14 天内非品牌词曝光占比提升，且点击不下降
- [ ] 高意图 news 页至少 2 页进入各自目标词前 20 名区间（先求进入，再求前 10）

### 执行顺序 D：四大查询页的 GEO 无侵入增强（不影响用户阅读）

为什么做：
- 已确认显性 GEO 文案会影响体验，必须走“用户无感、机器可读”路线。

目的：
- 在不新增阅读负担的前提下，提高 LLM/答案引擎可抽取性。

希望达到的效果：
- 页面对真实用户保持干净，对模型保持结构化可读。

- [ ] 保持 `FAQ` 仅走 JSON-LD，不新增显性段落
- [ ] 强化实体关系 schema：`character -> card pool`、`relic/potion -> rarity/character`
- [ ] 保持 `llms.txt` 与 sitemap 内容一致，新增入口时同步更新
- [ ] 每个查询页维持可读的更新时间字段（仅 1 处，不重复堆叠）
- [ ] 保持“无侵入”原则：不新增影响首屏可操作区域的 GEO 内容块

验收标准：
- [ ] 四大查询页在移动端首屏可直接操作筛选或列表
- [ ] 结构化校验无错误，无新增可见 GEO 干扰文案
- [ ] GEO 改造后页面停留与交互不出现明显回退（对比上周）

### 执行顺序 E：按引擎差异化加码（不是一套动作打所有引擎）

为什么做：
- 目前来源结构里 `Bing / DuckDuckGo` 占比已不低，说明可单独优化。

目的：
- 根据引擎差异分配动作，让增长更快更稳。

希望达到的效果：
- Google 慢爬期间，Bing/DDG 先放大；Google 追平后再做结构补位。

- [ ] Google 侧：持续做索引推进 + query/page 精准映射，优先保住 `mechanics/characters/news` 主入口
- [ ] Bing 侧：在 Bing Webmaster 跟进抓取/索引反馈，对高意图 news 与查询页优先重抓
- [ ] DuckDuckGo 侧：保持页面语义清晰与内链简洁，避免过度模板化标题
- [ ] 统一复盘标准：按引擎看“点击增长率 + 查询词新增数”，不只看总访问

验收标准：
- [ ] 任一引擎单周回落超过 30% 时，48 小时内有排查结论与修复动作
- [ ] 2 周内至少一个非 Google 引擎来源占比提升并稳定

### 执行顺序 F：风险阈值与回滚规则（防止越做越乱）

为什么做：
- 当前模块多、改动快，必须有“何时暂停/何时回滚”的硬规则。

目的：
- 控制风险，避免在错误方向持续投入。

希望达到的效果：
- 每次迭代可控，问题出现能快速止损。

- [ ] 回滚阈值 1：核心页 5xx/4xx 异常率上升，立即暂停内容扩展，先修可用性
- [ ] 回滚阈值 2：改版后 7 天内核心页点击下降 > 25%，且曝光未增，回退最近一轮信息架构改动
- [ ] 回滚阈值 3：移动端筛选交互受阻（首屏不可操作），立即回退 UI 侵入改动
- [ ] 暂缓阈值：若数据权威性未提升，暂停扩充新目录，优先做数据复核与映射修正

验收标准：
- [ ] 每次回滚/暂停都有记录（问题、触发阈值、处理结果、恢复时间）
- [ ] 不再出现“改了很多但无法判断是否有效”的状态

### 当前阶段下一步（按优先级）
- [ ] P0：完成“执行顺序 A+B”的统一看板与可达性复查（本周必须完成）
- [ ] P1：执行“顺序 C”的关键词-URL 唯一映射，并补齐冲突修正
- [ ] P1：执行“顺序 D”的 schema 与更新时间一致性补全
- [ ] P2：执行“顺序 E”的引擎分流加码与双周复盘

### 完成判定（你可直接据此判断是否达标）
- [ ] 技术层：核心页可抓取/可索引/可访问稳定
- [ ] 语义层：核心词簇与落地页一一对应，无关键词内耗
- [ ] 增长层：非品牌词与多引擎来源至少有一条连续两周上升曲线
- [ ] 体验层：GEO 优化不影响用户阅读和筛选操作

---

## 合并来源 C：docs/2026-04-01-sts2-content-execution-rules.md

# StS2 内容执行规则（2026-04-01）

## 适用范围

本规则仅适用于当前确认可执行的 3 个主题：

1. `Exhaust`
2. `Necrobinder Common Cards`
3. `Celestial Might`

不适用于待核实实体词、版本真值未确认内容、以及需要新增官方映射的数据页。

## 全局规则

- 只写已确认事实、玩家常见观点、或编辑部明确标注为争议点的内容
- 不写未核实数值、概率、强度排序、覆盖范围
- 不把高热度玩家说法写成官方口径
- 不写“版本答案”“最强”“核心”“必带”“稳定收益”这类强结论
- 不为了内链新增没有真实承接价值的聚合页

## 句型权限

所有句子只能属于以下 3 类之一：

1. 可直接确认的事实
2. 玩家讨论中的常见观点
3. 编辑部不下结论、仅说明争议

不属于这 3 类的句子，不进入正文。

## 主题词表

### Exhaust

- 主词：
  - `Exhaust`
  - `exhaust mechanic`
  - `sts2 exhaust`
- 允许说法：
  - `Exhaust build`
  - `remove exhaust`（仅用于解释搜索意图，不可暗示游戏内存在该系统机制）
  - `deck thinning`
- 禁用说法：
  - `best exhaust build`
  - `meta exhaust build`
  - `current strongest exhaust cards`

### Necrobinder Common Cards

- 主词：
  - `Necrobinder common cards`
  - `Necrobinder card pool`
- 允许说法：
  - `early stability`
  - `Doom line`
  - `Osty line`
  - `Soul support`
- 禁用说法：
  - `best Necrobinder commons`
  - `must-pick common cards`
  - `tier list`
  - `complete best list`

### Celestial Might

- 主词：
  - `Celestial Might`
  - `celestial might guide`
  - `celestial might sts2`
- 允许说法：
  - `payoff card`
  - `bait`
  - `Stars shell`
  - `Forge shell`
- 禁用说法：
  - `buffed in the current patch`
  - `nerfed in the current patch`
  - `best Regent payoff`
  - `must-take`

## 每篇文章只回答什么

### Exhaust

- 只解释机制、节奏作用、误区、以及搜索词 `remove exhaust` 的真实意图
- 不做版本真值判断

### Necrobinder Common Cards

- 只做 common cards 的阅读框架、分类理解、以及早期稳定性认知
- 不做卡表排行和强度定论

### Celestial Might

- 只做单卡定位说明、争议点整理、何时值得拿/跳过的条件判断
- 不做未确认升级态和数值判断

## 参考来源规则

### 事实层

仅允许使用：

- 官方公告 / 官方 patch notes
- 当前已确认的站内结构化数据
- 游戏内可复现文本

### 玩家观点层

仅允许使用：

- Reddit / Steam 等高互动讨论
- 这些来源只能用于：
  - 误区
  - 打法理解
  - 条件判断
  - 玩家争议点

禁止用玩家来源直接证明：

- 数值真值
- 版本强度
- 最优构筑
- 官方设计意图

## 内链规则

- 每个入口页最多给一个主链接
- 每篇正文最多链出 2 到 3 个页面
- 三篇主落地页彼此最多只允许 1 条自然互链
- 锚文本只用直接意图词，不用夸张词

## 停止条件

执行中一旦出现下面任一情况，立即停止：

- 需要引用未确认 patch 数值
- 需要把玩家经验写成定论
- 发现目标词会和现有页面抢词
- 发现某个结论必须依赖待核实实体页
