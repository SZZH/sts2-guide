# Ops Center Index（线程统一入口）

> 目标：无论在哪个线程启动优化工作，都先从本页拿到同一份上下文。

## 0. 首读顺序（强制）
1. `docs/ops-center/NOW.md`
2. `docs/ops-center/00-dashboard.md`
3. `docs/ops-center/02-decisions.md`
4. `docs/ops-center/03-roadmap.md`
5. `docs/ops-center/05-kpi-gates.md`

## 1. 当前状态速览（手动更新）
- 当前阶段：30页验证批
- 当前目标：通过验证闸门后再扩量
- 当前风险：数据延迟 / 平台状态延迟 / 抓取波动
- 当前 P0：见 `docs/ops-center/NOW.md`

## 2. 核心文档导航
- 总览看板：`docs/ops-center/00-dashboard.md`
- 每日巡检：`docs/ops-center/01-daily-log.md`
- 决策日志：`docs/ops-center/02-decisions.md`
- 路线图：`docs/ops-center/03-roadmap.md`
- 执行手册：`docs/ops-center/04-playbook.md`
- KPI闸门：`docs/ops-center/05-kpi-gates.md`
- 决策索引：`docs/ops-center/decision-register.md`
- 数据快照目录：`docs/ops-center/data-snapshots/`
- 免提醒执行流：`docs/ops-center/RUNBOOK.md`

## 3. 线程启动检查清单
- [ ] 已读取 `NOW.md`
- [ ] 已确认最近 3 条决策与当前任务不冲突
- [ ] 已确认当前闸门是否允许推进下一阶段
- [ ] 已将本次动作写入 `01-daily-log.md`
- [ ] 已检查外链发布状态与评论回复积压
- [ ] 已补齐五类状态标记（DONE/IN_PROGRESS/TODO/BLOCKED/SKIP）
- [ ] 已完成并行拆分前置检查（可并行则必须拆 subagent）
- [ ] 已输出 subagent 分工表与并行执行证据

## 4. 并行任务派发建议
- 可并行任务：
  - 数据监控（四端）
  - 评论巡检与回复
  - 长尾词挖掘
  - 版本更新监测与受影响页面识别
- 条件并行任务：
  - 外链发布（仅当评估为“今天需要发布”）
