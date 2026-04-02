# Daily Runbook（免提醒执行流）

> 使用方式：你只需说一句 `开始今天运营` 或 `看今天网站表现`。
> 目标：不依赖额外提醒，自动完成“评估 -> 执行 -> 记录 -> 决策”。

## 0. 自动触发意图
- 触发口令示例：
  - 开始今天运营
  - 看今天网站表现
  - 今天要做什么
  - 跑一遍今日巡检

## 1. 自动读取顺序（固定）
1. `docs/ops-center/NOW.md`
2. `docs/ops-center/INDEX.md`
3. `docs/ops-center/00-dashboard.md`
4. `docs/ops-center/02-decisions.md`
5. `docs/ops-center/03-roadmap.md`
6. `docs/ops-center/05-kpi-gates.md`

## 2. 自动并行任务（默认）
- Agent A：四端数据监控（GSC + Vercel + Bing + Trends）
- Agent B：评论巡检与回复（Reddit / X / Steam）
- Agent C：长尾词发现（新增查询 + 高展现低点击）
- Agent D：版本更新监测（官方公告/Steam 新闻/SteamDB）
- Agent E（条件触发）：外链发布与补链（仅当评估需要）

## 2.1 并行拆分前置检查（强制）
- 开工前必须先回答：当前是否存在 `>=2` 个互不依赖任务可并行？
- 若是：必须拆 subagent 执行，不允许直接单线程跳过。
- 若否：必须记录“不可并行原因”（强依赖串行或任务体量过小）。

## 2.2 Subagent 分工表（强制输出）
- 每次运行开头必须列出：
  - Agent ID / 名称
  - 负责范围
  - 交付物
  - 依赖关系（是否阻塞主线程）

## 3. 自动判定规则
- 外链不是每日必发：先评估“是否有可发布新内容 + 是否有目标页需要外部信号”
- 未过闸门：禁止扩量，仅允许词池/模板/内链优化
- 发现游戏更新：受影响页面与数据更新自动升级为当日 P0
- 评论积压超时（>24h）：次日 P0 优先处理，不新增分发动作

## 4. 自动落盘（每次都做）
- `docs/ops-center/00-dashboard.md`：今日状态与结论
- `docs/ops-center/01-daily-log.md`：执行过程与结果
- `docs/ops-center/03-roadmap.md`：当日 P0/P1/P2 与 SKIP 原因
- `docs/ops-center/02-decisions.md`：有策略变化时新增决策 ID
- `docs/ops-center/data-snapshots/YYYY-MM-DD-am|pm.json`：结构化快照
- 并行执行证据：记录“哪些任务由哪个 subagent 完成”

## 5. 输出格式（固定）
- DONE：今天已完成
- P0：今天必须做
- P1：今天建议做
- SKIP：今天不做（必须给理由）

## 5.1 状态完整性检查（强制）
- 每次运行结束前，必须补齐五类状态：`DONE / IN_PROGRESS / TODO / BLOCKED / SKIP`
- 任一状态为空时需显式写 `无`
- `BLOCKED / SKIP` 必须写原因与下一步处理时间
- 必须补齐“并行执行检查结果”：`已并行 / 未并行（原因）`

## 6. 周期性清算（防止计划烂尾）
- 每周一次历史计划清算：继续 / 降级 / 合并 / 废弃
- 超过 14 天未推进任务必须重新定性，不允许长期悬空
