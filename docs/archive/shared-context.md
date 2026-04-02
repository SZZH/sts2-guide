# SHARED_CONTEXT

## 0) 项目规则（长期有效）

### 固定目标
- 当前阶段目标：验证可复制的自然 SEO 模型（收录 -> 曝光 -> 排名）。
- 未通过验证闸门前，不进入下一批扩量。

### 验证闸门（30 页批次）
- 收录率 >= 60%
- 有曝光页面占比 >= 40%
- 进入前 30 名页面数 >= 6

### 未过线时允许动作
- 只允许：词池、模板、内链优化
- 禁止：盲目扩量、以外链作为主驱动

### 数据调研口径（强制四端）
- GSC + Vercel + Bing Webmaster + Google Trends
- 必须输出跨平台综合结论，不能只看单平台曲线

### 内容站持续更新机制（强制）
- 站点定位为持续更新内容站，不是一次性静态站。
- 游戏发生更新时，必须及时抓取并发布新闻/解读文章，禁止长时间停更。
- 默认每日执行两次信息巡检（上午/下午），重点来源：官方公告、Steam 新闻、SteamDB、官方社媒。
- 更新发布后必须同步执行：IndexNow 提交、Bing URL Submission、站内相关内链补位。
- 新闻内容必须关联到对应实体页（cards/relics/guides），形成“新闻 -> 实体页”承接链路。

### 部署与提交流程
- 默认推送 main 后由 Vercel 自动部署
- 非紧急不手动执行 `vercel --prod`
- Git 提交信息默认使用中文

### GEO / 内容执行约束
- 无侵入优先，禁止隐藏文本和 cloaking
- 每次 GEO 改动后至少执行一次 lint + build 回归

---

## 1) 今日进展（按上下午压缩）

## 2026-03-22 上午
- Task: 四端复核最近 30 天流量、收录和趋势状态
- 结果: 确认 Vercel 有回撤，GSC 仍有稳定曝光与点击，Bing 仍未形成完整可用报表
- 数据信号: 主要瓶颈仍是已发现未收录；核心意图页已有起量信号
- 风险/阻塞: Bing 的 Sitemaps/IndexNow/报表回流未闭环
- 下一步: 继续在词池、模板、内链范围做小步可归因优化

## 2026-03-22 下午
- Task: 实施可确认的页面优化动作（入口页承接 + 意图内链）
- 结果: 已在 Mechanics/Characters 页面补充 Search Intent Shortcuts 并强化高意图跳转
- 数据信号: 目标提升查询词到落地页匹配，降低首跳错配
- 风险/阻塞: 需 48-72 小时观察回流，不能立即定性为长期改善
- 下一步: 固定同一时刻盯盘 3 天，完成 Batch A 全量页面级复核

## 2026-03-24 上午
- Task: 复核四端流量并推进 Bing 链路闭环
- 结果: 确认下滑主因仍为 Bing/DDG；Google 侧点击与曝光保持稳定
- 数据信号: Bing Sitemap 已重新提交并进入 Processing；IndexNow 仍返回 403 未授权
- 风险/阻塞: IndexNow 权限绑定未打通，需等待平台回流并复测
- 下一步: 继续走 URL Submission + URL Inspection 抽检，48 小时后复测 IndexNow

## 2026-03-24 下午
- Task: 执行可立即落地修复项（图片 alt 与提交链路）
- 结果: 修复全局背景图 alt 文案；确认 URL Submission 列表可用并保留批次 URL 记录；IndexNow key 已轮换并重新提交
- 数据信号: Bing URL Inspection 对核心页显示 indexed，但仍提示少量 SEO/GEO 细项
- 风险/阻塞: Bing Search Performance 回流仍弱，短时无法做细粒度归因
- 下一步: 完成 10-15 个核心页 URL Inspection 清单并在 SHARED_CONTEXT 中补全页级状态

## 2026-03-25 上午
- Task: 抓取近两周官方更新并批量产出新闻草稿
- 结果: 新增 5 篇近两周新闻/更新文章（03-24、03-20、03-17、03-14、03-13）
- 数据信号: 覆盖 Steam 官方公告与 Mega Crit 官方通讯，新闻列表按日期倒序展示
- 风险/阻塞: SteamDB 历史页存在 ASN 风控，暂无法抓取更细粒度日志
- 下一步: 等用户确认稿件内容后再执行提交与上线

## 2026-03-27 上午
- Task: 上线并分发 `v0.101.0` 深度英文新闻稿，推进发布后提交链路
- 结果: 新增并上线 `/news/slay-the-spire-2-beta-patch-v0-101-0-analysis`；已确认线上 `HTTP 200`；已完成 IndexNow、GSC Request Indexing、Bing URL Submission
- 数据信号: IndexNow 提交成功；GSC 返回“已请求编入索引”；Bing URL Submission 当日计数 `1`、额度从 `100` 降至 `99`
- 风险/阻塞: Reddit 帖子处于版主审批中；X 发帖按钮 `disabled` 未成功发布；Steam 发帖结果需二次核验 URL
- 下一步: 24h/72h 复查 GSC/Bing 收录状态与 Vercel 引荐承接数据

## 2026-03-27 下午
- Task: 社媒互动承接（Reddit + Steam），目标是“维持讨论热度 + 降低对抗强度”
- 关键决策:
  - 回帖策略采用“先引用对方核心观点，再给建设性回复”，避免直接站队或情绪对冲。
  - 语气统一为温和、可讨论、机制导向；允许“短期 workaround + 长期平衡反馈并行”的中间立场。
  - 执行节奏按“少量高质量回复 + 观察增量再补”，降低刷屏感与风控风险。
- 执行结果:
  - Reddit：已确认 OP 身份回复成功 1 条（评论 `ocqawiv`，可在帖内与用户评论页看到）。
  - Steam：本轮新增并确认 4 条回复，楼层 `#29`、`#31`、`#32`，以及后续一条待观测提交（输入框草稿保留用于下一轮）。
  - Steam 总评论数从 `27` -> `32`，互动延续性增强。
- 规则落地:
  - 已把“先引用再回复”写入项目强制规则：`AGENTS.md` 新增 `社媒回帖格式规则（强制）`。
  - 已把“每日两次评论区巡检 + 日志记录”写入执行清单：`STS2_LAUNCH_EXECUTION_CHECKLIST.md`。
- 风险/阻塞:
  - X 仍未成功发帖（compose disabled 问题未解）。
  - Steam 在连续快速提交时偶发提交反馈不明显，需用楼层号和页码二次核验。
- 下一步:
  - 继续按日常运维执行两次巡检（上午/下午），优先回复新增高质量评论。
  - 每次回复后记录：平台、目标楼层/链接、回复摘要、是否成功落地、待跟进点。

## 2026-03-27 晚上
- Task: 对标外部 SEO 方法论，收敛为本项目可执行策略
- 对标对象: `https://new.web.cafe/tutorial/detail/nb6ztk9dm3`
- 关键结论:
  - 我们与对方在“关键词先行 + GSC 出词验证 + 页面级优化”方向一致。
  - 差异在于：对方更偏进攻型外链扩张；我们更偏验证闸门与风控优先。
  - 决策为“融合策略”：保留闸门与四端验证不变，补齐外链 SOP 与 48h 出词排障模板。
- 已执行落地:
  - 已在 `STS2_LAUNCH_EXECUTION_CHECKLIST.md` 新增 `SEO 外链执行 SOP（验证期受控版）`。
  - 已在 `STS2_LAUNCH_EXECUTION_CHECKLIST.md` 新增 `48 小时出词排障清单（强制）`。
  - 两项新增均明确了：执行动作、验收标准、未过线阶段的约束与回滚逻辑。
- 风险控制:
  - 闸门未过线期间，外链只允许小批量试验（建议每周 5-10 条）并做 7 天复盘。
  - 48h 无出词不得直接扩量，必须先修 `词池/模板/内链`。
- 下一步:
  - 按新增 SOP 开始首周外链并集清单与分层打分。
  - 对新上线页面严格执行 48h 出词排障，形成可交接日志。

## 2026-03-29 上午
- Task: 延续社媒运维，完成 Steam 待发送草稿并补一条 Reddit 低风险回复
- 执行结果:
  - Steam：`ctp=4` 页面成功提交 1 条新回复，楼层从 `#50` 增至 `#51`（回复对象 `FIGBird`，采用 quote -> reply 结构）
  - Reddit：成功提交并落地 1 条新回复（评论 `od4q0e4`，对象 `Ankoria`，可在用户评论页看到）
- 数据信号:
  - Steam 当前总评论数升至 `51`
  - Reddit 新评论已出现在 `u/Any-Atmosphere5917/comments` 的最新位置
- 风险/阻塞:
  - Reddit 页面端偶发“点击提交后无即时反馈”，需要以用户评论页最终可见结果作为判定标准
- 下一步:
  - 当日下午仅做巡检，不强行追加高频回复；优先等新增评论出现后再补 1-2 条高质量回复
  - 继续遵循“先引用再回复 + 低推广感”规则

---

## 2) 待办优先级
- P0: 连续 3 天固定时点监控（GSC 24h + Vercel 来源/承接/跳出）
- P0: 完成 Batch A 全量页面级状态表（收录/曝光/前 30）
- P0: 补齐 Bing 基础链路（Sitemap 入库 + IndexNow 可观测）
- P0: 完成 10-15 个核心页 Bing URL Inspection 清单（收录/抓取/问题）
- P1: 对已有曝光但低 CTR 页面做标题与描述小范围 A/B
- P2: 周度闸门判定复盘（D+7）

## 3) 交接句（一句话）
- 下一位同学先看 P0 三项：盯盘、Batch A 页级复核、Bing 链路闭环，再决定是否继续模板微调。

## 4) 给下一智能体的直接操作指令
- 先读规则文件：`AGENTS.md`（重点看“社媒回帖格式规则（强制）”）+ `STS2_LAUNCH_EXECUTION_CHECKLIST.md`（重点看跨平台每日运维项）。
- Steam 执行优先级：优先回帖到已有高讨论串，默认格式 `quote -> reply`，避免连续 5 分钟内多条硬发。
- Reddit 执行优先级：优先回复已有人互动的评论，保持 1-3 条/轮，先确认可见再继续。
- 记录规范：每轮结束补一条日志（平台、链接、楼层号、是否成功、后续动作）。

## 2026-03-30 AdSense 决策记录
- 当前阶段决策：暂不接入 AdSense。
- 接入阈值（满足 5 条中的至少 4 条才进入灰度）：
  - 连续 14 天日 UV >= 800（或周 UV >= 5000）
  - 当前 SEO 验证闸门已过线并稳定 2 周
  - 全站跳出率 <= 65%
  - 核心入口页至少一类跳出率 <= 60%
  - 持续有曝光页面 30-50 个
- 达标后的执行方式：先灰度 10%-20% 页面，仅在 news 长文页底部放 1 个广告位；不放首屏，不放 `/cards`、`/relics`、`/guides` 查询页；观察 14 天后再决定是否扩大。
- 运营要求：每日观测数据，达到阈值时主动提醒“可进入 AdSense 灰度测试”。

## 2026-03-30 下午
- Task: 延续 Steam 社媒运维，完成“至少 5 条高质量回复”目标。
- 执行前置: 已先阅读 `STS2_LAUNCH_EXECUTION_CHECKLIST.md` 模块六，并按 `quote -> reply` 规则执行。
- 执行结果:
  - 在同一目标帖 `https://steamcommunity.com/app/2868840/discussions/0/798965575663499797/?ctp=5` 连续完成 5 条高质量英文回复。
  - 本轮新增回复楼层：`#61`、`#62`、`#63`、`#64`、`#65`（其中 `#65` 引用对象为 `Dr.Monarch`）。
  - 页面计数由“正在显示第 `61-64` 条，共 `64` 条留言”更新为“正在显示第 `61-65` 条，共 `65` 条留言”。
- 数据信号:
  - 回复文本均为机制讨论导向，未使用对抗式语气；每条最多一个观点焦点，便于后续继续讨论。
  - Steam 提交存在偶发无即时反馈现象，但本轮通过楼层号与总评论数双重核验均已落地。
- 风险/阻塞:
  - 平台端“主题详情”区域的“回复数”字段与楼层统计偶发不同步，需以后者（楼层 + 分页统计）为主。
- 下一步:
  - 转入低频巡检模式（上午/下午各 1 次），优先回复新增高质量评论，不做短时高频刷屏。
  - 24-72 小时后回看该讨论串新增互动质量，再决定是否补充 1-2 条延展回复。

## 2026-04-01 线程切换交接（关键执行快照）

### DONE｜已完成动作（代码 + 平台）
- 新增 3 篇 Regent 高质量攻略并上线（由 `shared/guidesData.ts` 驱动 `app/guides/[slug]/page.tsx` 动态路由）：
  - `/guides/regent-card-pool-priority`
  - `/guides/regent-stars-vs-forge-build-path`
  - `/guides/celestial-might-regent-guide`
- 已把 Regent 攻略入口补到角色承接链路：
  - `app/characters/[slug]/page.tsx`（Regent 角色页新增 deep guide links）
  - `app/cards/character/[slug]/page.tsx`（Regent 卡池页新增 high-intent guide routes）
  - `app/guides/page.tsx`（Guides intent shortcuts 新增 Regent 入口）
- 已把高曝光 news 页补到 Regent 攻略分发链路（news -> guide）：
  - 修改文件：`shared/gameData.ts`
  - 追加内链的新闻 slug：
    - `slay-the-spire-2-beta-patch-v0-101-0-analysis`
    - `best-starter-character-slay-the-spire-2-early-access`
    - `slay-the-spire-2-first-run-guide-act-1-priorities`
- 已完成索引提交三件套：
  - IndexNow API：3 条 URL 提交成功（返回 `ok=true`）
  - Bing URL Submission：3 条 URL 已出现在今日提交列表，`URLs submitted today=3`，额度从 `100` 到 `97`
  - GSC URL Inspection：3 条 URL 均执行“请求编入索引”，均出现“已请求编入索引”确认弹窗
- 回归验证：两轮改动后均通过 `pnpm lint && pnpm build`（仅既有 warning，无 error）

### DONE｜本轮关键提交（已 push main）
- `ab12a27`：新增 Regent 专题攻略并打通角色/卡池/guides 的站内承接
- `988f0fa`：补充高曝光 news 页到 Regent 攻略的分发内链
- 远端状态：`main` 已包含以上提交（Vercel 自动部署链路生效）

### P0｜当前事实与判断
- 仍处于验证阶段：闸门未确认过线前，继续只做“词池/模板/内链”，不做扩量。
- Regent 相关关键词已有 GSC 信号（如 `regent card pool`、`regent rare cards`、`the regent sts2`、`celestial might regent`），但点击仍偏低，属于“有曝光待转化”阶段。
- 现阶段重点不是再大批量发文，而是让新页先被抓取、被展示、被点击。

### P0｜下一线程直接执行清单（可复制）
- 第 1 步（T+48h）：四端复核一次页级数据（GSC + Vercel + Bing + Trends），重点看 3 个新攻略页的收录/曝光/CTR。
- 第 2 步（T+72h）：若“有曝光低 CTR”，仅小步改 `title + 首段一句 + 1 条问题导向锚文本`，不要重写正文。
- 第 3 步（T+72h）：继续从 2-3 个高曝光 news 页补 1 条到 Regent 攻略的上下文内链（保持低噪音）。
- 第 4 步（周复盘）：输出闸门状态（收录率/曝光页占比/前30页数）后，再决定是否开 Defect 批次。

### 线程接手提示
- 当前工作区仍有 `SHARED_CONTEXT.md` 本地未提交改动（用于持续交接日志）。
- 接手时优先读：`AGENTS.md`、`STS2_LAUNCH_EXECUTION_CHECKLIST.md`、本文件本节。
