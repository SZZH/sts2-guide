# STS2 Guide 运营与维护入口

本仓库是已上线站点 `sts2guide.com` 的持续维护仓库。

## 1. 每日从这里开始
- 线程统一入口：`docs/ops-center/INDEX.md`
- 当前生效上下文：`docs/ops-center/NOW.md`
- 总览看板：`docs/ops-center/00-dashboard.md`
- 每日巡检日志：`docs/ops-center/01-daily-log.md`
- 决策日志：`docs/ops-center/02-decisions.md`
- 未来路线图：`docs/ops-center/03-roadmap.md`
- 执行手册（SOP）：`docs/ops-center/04-playbook.md`
- KPI 与闸门：`docs/ops-center/05-kpi-gates.md`

## 2. 巡检与执行节奏（按需）
- 按任务与数据变化触发巡检
- 涉及“数据调研/复盘/增长分析”时，覆盖四端：`GSC + Vercel + Bing Webmaster + Google Trends`
- 有新内容或积压信号时，再补充：外链状态检查 + 评论巡检与回复（Reddit/X/Steam）
- 执行后更新相关文档（按本轮动作决定）：
  - `docs/ops-center/01-daily-log.md`
  - `docs/ops-center/00-dashboard.md`

## 3. 决策留痕规则
- 任何策略变化必须写入 `docs/ops-center/02-decisions.md`
- 决策条目至少包含：背景、备选方案、最终决策、数据依据、风险、回滚条件

## 4. 闸门规则（当前批次）
- 收录率 `>= 60%`
- 有曝光页面占比 `>= 40%`
- 进入前30页面数 `>= 6`
- 未过线：只允许调词池/模板/内链，不允许盲目扩量

## 5. 开发常用命令
```bash
pnpm dev
pnpm lint
pnpm build
```

## 6. 目录说明
- `app/`：Next.js 路由与页面
- `components/`：UI 组件
- `shared/`：站点内容数据与共享逻辑
- `scripts/`：数据处理、校验、发布脚本
- `docs/ops-center/`：运营主文档（当前有效入口）
- `docs/archive/`：历史文档归档（只读参考）
- `ops-logs/`：历史执行日志与截图/清单
