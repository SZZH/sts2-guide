# STS2 Guide 运营路线图

> 用途：统一管理“未来要做什么”，并绑定优先级与验收标准。

## 本周目标
- O1: 完成 STS2 Guide 站点系统级重构的止血与 IA 基线，明确旧页治理范围、主入口重构方向、Builds/Tier Lists/Patch 主线
- O2: 在不扩量前提下，优先改善高曝光低点击与高跳出入口页的承接质量
- O3: 执行量化 SEO 方案，确保每个动作都有指标、DDL、验收和决策记录

## Backlog（按优先级）

> 每条任务必须写状态：`DONE / IN_PROGRESS / TODO / BLOCKED / SKIP`
> `BLOCKED/SKIP` 必须附原因。

### P0（必须先做）
- [x] `DONE` 入口页轻改量化执行（Owner: Codex，完成: 2026-05-08 10:14，验收: `/builds`、`/cards`、`/tier-lists`、`/patches`、`/relics` 已完成 title/H1/首段/内链轻改，`pnpm lint` / `pnpm build` 通过，IndexNow 提交 7 URL）
- [x] `DONE` 关键词证据清单（Owner: Codex，完成: 2026-05-08 10:30，验收: `18-keyword-evidence-ledger.md` 已建立，核心词均标注证据等级、来源、主落地页和下一步动作）
- [ ] `TODO` 四端中期复采（Owner: Codex，DDL: 2026-05-14，验收: GSC + Vercel + Bing Webmaster + Google Trends 均标清 `DONE/BLOCKED`，并与 2026-05-07 基线对比）
- [ ] `TODO` 完成旧页治理表（Owner: Codex，DDL: 今日，验收: 高风险页已完成 `KEEP/REFRESH/DEMOTE/MERGE/REMOVE_OR_REDIRECT` 分级）
- [ ] `TODO` 完成首页 / `guides` / `characters` / `builds` 新 IA 蓝图（Owner: Codex，DDL: 今日，验收: 已形成模块级重构方案与执行顺序）
- [x] `SKIP` 社媒未回复清理（Reddit/X/Steam）（Owner: Codex，日期: 2026-05-07，原因: 旧帖已跨期太久，继续补回复价值低；已改为新内容轻分发）
- [ ] `TODO` 外链生效复核与补链登记（Owner: ，DDL: 今日，验收: 已发链接状态完整可追踪）
- [ ] `BLOCKED` 闸门关键口径补齐：曝光页面占比全量复核（Owner: Codex，DDL: 今日，验收: 得到可复算口径与结论；原因: 2026-05-07 Bing Webmaster 服务不可达，GSC 今日仅完成总览与可见页级复核，未完成 30 页全量复算）
- [x] `DONE` 同步 `v0.104.0` patch 口径（Owner: Codex，完成: 2026-05-07 14:55，验收: 已补 `/news/slay-the-spire-2-beta-patch-v0-104-0-analysis`，同步 `/patches` 与主入口页，`pnpm lint` / `pnpm build` 通过，并提交 IndexNow 13 URL；Bing URL Submission 因平台不可达仍 BLOCKED）

### P1（重要但不阻塞）
- [ ] `BLOCKED` v0.104.0 新内容轻分发（Owner: Codex，DDL: 今日或明早，验收: 仅选择 X 或 Reddit 其中一个发布，发后 30-60 分钟复查互动并回填链接；原因: 2026-05-07 15:09 X compose 导航超时，Reddit/Steam 不建议无复查窗口硬发）
- [ ] `TODO` 高展现低点击新词提质（仅改现有页词池/模板/内链，不扩量）（Owner: ，DDL: 今日，验收: 完成一轮页面级改写清单）
- [ ] `TODO` 当日日志与看板收口（Owner: ，DDL: 今日，验收: 00-dashboard + 01-daily-log 完整）
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
- 今日未处理 P0：Bing Webmaster / Google Trends 补采；Batch-30 零曝光 22 页微调
- 今日未处理 P1：v0.104.0 新内容择一平台发布；高展现低点击新词提质清单落地；当日日志与看板二次收口（如晚间再跑一轮）
- 今日未处理 P2：
- 今日计划完成：已完成 GSC / Vercel 登录态采集、游戏动态巡检、v0.104.0 官方 patch 口径同步、IndexNow 提交、v0.104.0 社媒轻分发草稿
- 今日 `SKIP`（含原因）：旧社媒未回复清理（Reddit/X/Steam 已跨期太久，改为新内容轻分发）

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
- 主策略：泛词页做骨架，长尾页拿点击；未过闸门前不扩量
- 近期 DDL：
  - 2026-05-10：入口页轻改完成（已于 2026-05-08 10:14 提前完成）
  - 2026-05-14：四端中期复采
  - 2026-05-16：词页映射复核
  - 2026-05-21：继续 / 止损 / 小范围恢复投入决策

## 已合并计划来源
- `docs/archive/seo-batch-30-execution-plan.md`
- `docs/ops-center/2026-04-02-sts2-3-topic-content-implementation-plan.md`
