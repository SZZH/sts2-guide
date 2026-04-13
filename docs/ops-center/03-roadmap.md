# STS2 Guide 运营路线图

> 用途：统一管理“未来要做什么”，并绑定优先级与验收标准。

## 本周目标
- O1: 完成 STS2 Guide 站点系统级重构的止血与 IA 基线，明确旧页治理范围、主入口重构方向、Builds/Tier Lists/Patch 主线
- O2: 在不扩量前提下，优先改善高曝光低点击与高跳出入口页的承接质量

## Backlog（按优先级）

> 每条任务必须写状态：`DONE / IN_PROGRESS / TODO / BLOCKED / SKIP`
> `BLOCKED/SKIP` 必须附原因。

### P0（必须先做）
- [ ] `TODO` 完成旧页治理表（Owner: Codex，DDL: 今日，验收: 高风险页已完成 `KEEP/REFRESH/DEMOTE/MERGE/REMOVE_OR_REDIRECT` 分级）
- [ ] `TODO` 完成首页 / `guides` / `characters` / `builds` 新 IA 蓝图（Owner: Codex，DDL: 今日，验收: 已形成模块级重构方案与执行顺序）
- [ ] `TODO` 社媒未回复清理（Reddit/X/Steam）（Owner: ，DDL: 今日，验收: 24h 超时项清零）
- [ ] `TODO` 外链生效复核与补链登记（Owner: ，DDL: 今日，验收: 已发链接状态完整可追踪）
- [ ] `TODO` 闸门关键口径补齐：曝光页面占比全量复核（Owner: ，DDL: 今日，验收: 得到可复算口径与结论）

### P1（重要但不阻塞）
- [ ] `TODO` 任务标题（Owner: ，DDL: ，验收: ）
- [ ] `TODO` 高展现低点击新词提质（仅改现有页词池/模板/内链，不扩量）（Owner: ，DDL: 今日，验收: 完成一轮页面级改写清单）
- [ ] `TODO` 当日日志与看板收口（Owner: ，DDL: 今日，验收: 00-dashboard + 01-daily-log 完整）

### P2（观察项/优化项）
- [ ] `TODO` 任务标题（Owner: ，DDL: ，验收: ）

## 历史任务清算
- `DONE`：2026-04-10 四端实时采集；社媒未回复巡检；外链生效复核；30 页曝光占比复判
- `IN_PROGRESS`：
- `BLOCKED`（含原因）：Bing `Sitemaps` 明细页异常显示 `0 rows`，无法复用发现量实时口径
- `SKIP`（含原因）：

## 今日执行队列（运维后必填）
- 今日未处理 P0：Batch-30 零曝光 22 页微调；Bing sitemap / URL submission 明细异常排查
- 今日未处理 P1：高展现低点击新词提质清单落地；当日日志与看板二次收口（如晚间再跑一轮）
- 今日未处理 P2：
- 今日计划完成：四端实时采集、社媒评论巡检、外链生效复核、闸门复判
- 今日 `SKIP`（含原因）：

## 当前执行批次
- 批次名称：30页验证批
- 闸门：
  - 收录率 >= 60%
  - 有曝光页面占比 >= 40%
  - 前30页面 >= 6
- 未过闸门时只允许：词池/模板/内链调整

## 已合并计划来源
- `docs/archive/seo-batch-30-execution-plan.md`
- `docs/ops-center/2026-04-02-sts2-3-topic-content-implementation-plan.md`
