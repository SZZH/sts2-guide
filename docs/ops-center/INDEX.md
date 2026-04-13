# Ops Center Index（线程统一入口）

> 目标：无论在哪个线程启动优化工作，都先从本页拿到同一份上下文。

## 0. 建议首读顺序
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
- 游戏动态情报台账：`docs/ops-center/08-game-dynamics-intel.md`
- 更新核对单：`docs/ops-center/09-update-verification-checklists.md`
- 站点重构基线：`docs/ops-center/10-site-rebuild-governance-and-ia-blueprint.md`
- 页面级治理表：`docs/ops-center/11-page-governance-table.md`
- 入口页蓝图：`docs/ops-center/12-entry-blueprints.md`
- 决策索引：`docs/ops-center/decision-register.md`
- 数据快照目录：`docs/ops-center/data-snapshots/`
- 免提醒执行流：`docs/ops-center/RUNBOOK.md`

## 3. 线程启动检查（按需）
- [ ] 已读取 `NOW.md` 与最新 `daily-log/dashboard`
- [ ] 若本轮涉及游戏动态，已先读取 `08-game-dynamics-intel.md`
- [ ] 已区分：哪些已完成、哪些还缺口
- [ ] 本轮仅选择需要执行的动作（非全量模板）
- [ ] 若识别到 `>=3` 个独立任务，已决定是否并行并说明原因
- [ ] 已将本轮新增结果写入日志

## 4. 并行任务派发建议
- 可并行任务：
  - 数据监控（四端）
  - 评论巡检与回复
  - 长尾词挖掘
  - 版本更新监测与受影响页面识别
- 条件并行任务：
  - 外链发布（仅当评估为“今天需要发布”）
