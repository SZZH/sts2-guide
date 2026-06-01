# STS2 Guide 运营路线图

> 用途：统一管理“未来要做什么”，并绑定优先级与验收标准。

## 本周目标
- O1: 维持 STS2 Guide 的版本时效与站点可用性
- O2: 把主动投入降到最低，只处理明确问题和官方 patch 同步
- O3: 以月度复盘替代高频运营动作，避免继续在低承接质量上追加投入

## Backlog（按优先级）

> 每条任务必须写状态：`DONE / IN_PROGRESS / TODO / BLOCKED / SKIP`
> `BLOCKED/SKIP` 必须附原因。

### P0（必须先做）
- [x] `DONE` cards 承接优化上线（Owner: Codex，完成: 2026-06-01，验收: `/cards` 与 `/cards/[slug]` 已新增真实 build / patch / guide 承接；`pnpm lint` / `pnpm build` 通过；已推送 `main` 并确认正式站命中新文案）
- [ ] `TODO` cards 承接观察窗复盘（Owner: Codex，DDL: `T+3` 与 `T+7`，验收: 复查 `/cards` 入口位次、`/builds|/guides|/patches` 承接变化、Bounce 走势、`Singapore` 噪音是否继续影响判断）
- [x] `DONE` 入口页轻改量化执行（Owner: Codex，完成: 2026-05-08 10:14，验收: `/builds`、`/cards`、`/tier-lists`、`/patches`、`/relics` 已完成 title/H1/首段/内链轻改，`pnpm lint` / `pnpm build` 通过，IndexNow 提交 7 URL）
- [x] `DONE` 关键词证据清单（Owner: Codex，完成: 2026-05-08 10:30，验收: `18-keyword-evidence-ledger.md` 已建立，核心词均标注证据等级、来源、主落地页和下一步动作）
- [x] `DONE` 2026-05-14 四端复采 checklist（Owner: Codex，完成: 2026-05-08 10:39，验收: `19-midpoint-recheck-checklist-2026-05-14.md` 已建立，覆盖 GSC / Vercel / Bing / Trends 指标、判定、输出格式和页面动作闸门）
- [x] `DONE` 四端中期复采（Owner: Codex，完成: 2026-05-14 18:27，验收: GSC / Bing Webmaster / Google Trends 已完成当日采集，Vercel API 明确标清 `BLOCKED`，并已与 2026-05-07 / 2026-04-20 基线对比）
- [x] `DONE` 2026-05-21 继续 / 止损 / 小范围恢复投入决策（Owner: Codex，完成: 2026-05-25 22:32，验收: 已新增 `DEC-20260525-01`，结论为切换到最低成本保活模式）
- [x] `DONE` patch / build / tier 最小承接补强（Owner: Codex，完成: 2026-05-26 00:06，验收: `/builds`、`/patches`、`/tier-lists`、最新 v0.105 patch news 已补当前版本口径与下一步 CTA；`pnpm lint` / `pnpm build` 通过，本地浏览器验收通过）
- [ ] `TODO` 官方 patch / hotfix / newsletter 巡检（Owner: Codex，DDL: 按需每日，验收: 如有新增，完成最小时效同步与日志留痕）
- [ ] `TODO` 明确问题修复（Owner: Codex，DDL: 按需，验收: 仅处理 404 / sitemap / IndexNow / 版本口径错误等可验证问题）
- [x] `SKIP` 社媒未回复清理（Reddit/X/Steam）（Owner: Codex，日期: 2026-05-07，原因: 旧帖已跨期太久，继续补回复价值低；已改为新内容轻分发）
- [ ] `TODO` 外链生效复核与补链登记（Owner: ，DDL: 今日，验收: 已发链接状态完整可追踪）
- [x] `SKIP` 旧页治理表（Owner: Codex，日期: 2026-05-25，原因: 已切换到止损模式，不再推进主动 SEO 治理）
- [x] `SKIP` 首页 / `guides` / `characters` / `builds` 新 IA 蓝图（Owner: Codex，日期: 2026-05-25，原因: 已切换到止损模式，不做结构重构）
- [x] `SKIP` 闸门关键口径补齐：曝光页面占比全量复核（Owner: Codex，日期: 2026-05-25，原因: 本轮已不再以“是否继续投入”作为扩量前提，而是直接切到保活模式）
- [x] `DONE` 同步 `v0.104.0` patch 口径（Owner: Codex，完成: 2026-05-07 14:55，验收: 已补 `/news/slay-the-spire-2-beta-patch-v0-104-0-analysis`，同步 `/patches` 与主入口页，`pnpm lint` / `pnpm build` 通过，并提交 IndexNow 13 URL；Bing URL Submission 因平台不可达仍 BLOCKED）

### P1（重要但不阻塞）
- [x] `SKIP` v0.104.0 新内容轻分发（Owner: Codex，日期: 2026-05-25，原因: 已切换到止损模式，不再主动做社媒分发）
- [x] `SKIP` 高展现低点击新词提质（Owner: Codex，日期: 2026-05-25，原因: 已切换到止损模式，不再做主动 SEO 提质）
- [x] `DONE` 当日日志与看板收口（Owner: Codex，完成: 2026-05-25 22:32，验收: `00-dashboard.md` + `01-daily-log.md` + `NOW.md` 已回填）
- [ ] `TODO` 月度复盘前补采 Bing / Trends（Owner: Codex，DDL: 2026-06-25 前，验收: 至少恢复一次可复核口径）
- [x] `DONE` 建立“关键词 -> 主落地页 -> 支撑页 -> 禁止抢词页”映射表（Owner: Codex，DDL: 本轮重构后，验收: builds/tier list/patch/beginner 关键词有唯一主页面）

### P2（观察项/优化项）
- [ ] `TODO` 任务标题（Owner: ，DDL: ，验收: ）
- [x] `DONE` 建立证据优先的内容写作规则与来源池（Owner: Codex，DDL: 本轮，验收: 攻略/玩法/patch/build/tier 内容均绑定官方/社区/工具来源）
- [x] `DONE` 固化重构 subagent 架构模板（Owner: Codex，DDL: 本轮，验收: 后续批次可按 Agent A-E + 主线程执行）
- [x] `DONE` 建立重构验证闭环（Owner: Codex，DDL: 本轮，验收: 已定义 CTR/bounce/二跳/patch 联动的复检规则）

## 历史任务清算
- `DONE`：2026-04-10 四端实时采集；社媒未回复巡检；外链生效复核；30 页曝光占比复判
- `IN_PROGRESS`：
- `BLOCKED`（含原因）：Bing `Sitemaps` 明细页异常显示 `0 rows`，无法复用发现量实时口径
- `SKIP`（含原因）：

## 今日执行队列（运维后必填）
- 今日未处理 P0：官方游戏动态巡检；如无新增 patch，则无需内容动作
- 今日未处理 P1：Bing / Trends 恢复后补采一次，作为月度复盘参考
- 今日未处理 P2：
- 今日计划完成：已完成 GSC / Vercel 登录态采集、`2026-05-21` 复盘补做、止损决策登记、当日日志与看板收口
- 今日 `SKIP`（含原因）：旧页治理、IA 蓝图、高展现低点击提质、社媒分发，原因均为项目已切换到止损后的最低成本保活模式

## 当前执行批次
- 批次名称：30页验证批
- 闸门：
  - 收录率 >= 60%
  - 有曝光页面占比 >= 40%
  - 前30页面 >= 6
- 未过闸门时只允许：词池/模板/内链调整

## 当前量化 SEO 方案
- 方案文件：`docs/ops-center/17-quantified-seo-execution-plan.md`
- 生效周期：`2026-05-08 ~ 2026-05-21`
- 主策略：该周期已完成复盘，结论为止损；后续不再继续执行该量化方案
- 近期 DDL：
  - 2026-05-25：补做继续 / 止损 / 小范围恢复投入决策（已完成，结论：止损）
  - 2026-06-25：下一次月度复盘

## 已合并计划来源
- `docs/archive/seo-batch-30-execution-plan.md`
- `docs/ops-center/2026-04-02-sts2-3-topic-content-implementation-plan.md`
