# STS2 Guide 运营总览看板

> 用途：每日查看“今天状态如何、异常在哪里、现在该做什么”。
> 更新时间：每次关键动作后按时间戳更新（`YYYY-MM-DD HH:mm`）。

## 状态标记规范（强制）
- `DONE`：已完成并已记录结果
- `IN_PROGRESS`：正在执行
- `TODO`：待执行
- `BLOCKED`：受阻（需注明原因）
- `SKIP`：今日不做（需注明原因）

## 今日状态（2026-05-11 16:34）
- 站点可用性：`DONE`（`https://sts2guide.com/`、`/sitemap.xml`、`/builds`、`/patches`、`/news/slay-the-spire-2-beta-patch-v0-104-0-analysis` 均返回 `HTTP 200`）
- 流量总览（Vercel）：`TODO`（今天不提前执行四端中期复采；按 `19-midpoint-recheck-checklist-2026-05-14.md` 保持 2026-05-14 复采窗口，避免 2026-05-08 入口页改动归因混乱）
- 搜索总览（GSC）：`TODO`（今天不提前执行四端中期复采；2026-05-07 基线仍只作为历史对比，不冒充今日实时数据）
- Bing 总览：`TODO`（今天未登录 Bing Webmaster 实时采集；待 2026-05-14 按四端 checklist 复采，若平台不可用再标 `BLOCKED`）
- 趋势总览（Google Trends）：`TODO`（今天未执行 Trends 实时采集；待 2026-05-14 按四端 checklist 复采）
- 生产发布总览：`IN_PROGRESS`（已完成本地 v0.105.1/v0.105.0 内容同步、`pnpm lint`、`pnpm build`；待提交并推送 `main` 后由 Vercel 自动部署）
- 线上结构验证：`DONE`（本轮仅做内容时效最小同步：新增 v0.105.1/v0.105.0 新闻页，更新首页与 `/patches` 当前版本文案，更新 sitemap；未新建 `/wiki`、未扩量）
- 游戏动态总览：`DONE`（Steam 官方 RSS 确认 `Beta Patch Notes - v0.105.0`，2026-05-08 00:53:30 UTC；`Beta Hotfix Notes - v0.105.1`，2026-05-09 03:14:26 UTC）
- 外链发布总览：`TODO`（待代码推送并线上 URL 生效后，提交 IndexNow：新 v0.105 新闻页、`/patches`、首页、`/sitemap.xml`）
- 社媒互动总览：`SKIP`（今天主线是官方 patch 时效同步；不做 Reddit / X / Steam 分发，避免需要额外互动窗口）

## 闸门状态（当前批次）
- 收录率 >= 60%：`90.0%（27/30，代理口径，待 URL Inspection 全量复核）`
- 有曝光页面占比 >= 40%：`26.7%（8/30，2026-04-10 已复判）`
- 进入前30页面数 >= 6：`>=8（2026-04-10 页级复判仍达标）`
- 结论：`未通过`（当前仅允许词池/模板/内链调整，禁止扩量）

## 今日异常
- [ ] 无
- [x] 有（官方 beta 已推进到 v0.105.1/v0.105.0，站内 v0.104.0 口径存在时效风险；Bing/GSC/Vercel/Trends 中期复采仍保持 2026-05-14 窗口）

## 今日动作状态（必须完整）
- `DONE`: 2026-05-11 16:31 正式域名基础可用性验证：`/`、`/sitemap.xml`、`/builds`、`/patches`、v0.104.0 新闻页均返回 `HTTP 200`
- `DONE`: 2026-05-11 16:32 Steam 官方 RSS 巡检发现新增 `Beta Patch Notes - v0.105.0` 与 `Beta Hotfix Notes - v0.105.1`
- `DONE`: 2026-05-11 16:34 新增 `/news/slay-the-spire-2-beta-patch-v0-105-0-aeonglass-bestiary-hotfix`，并同步首页、`/patches`、`app/sitemap.ts`
- `DONE`: 2026-05-11 16:34 `pnpm lint` 通过（0 errors，4 个既有 warnings）
- `DONE`: 2026-05-11 16:34 `pnpm build` 通过，成功生成 `811` 个页面
- `TODO`: 2026-05-11 提交并推送 `main`，等待 Vercel 自动生产部署
- `TODO`: 2026-05-11 线上新 URL 生效后提交 IndexNow（新 v0.105 新闻页、`/patches`、首页、`/sitemap.xml`）
- `TODO`: 2026-05-14 四端中期复采（按 `19-midpoint-recheck-checklist-2026-05-14.md` 执行）
- `TODO`: 2026-05-21 继续 / 止损 / 小范围恢复投入决策

## 2026-05-08 动作状态（保留）
- `DONE`: 2026-05-08 10:04 制定量化 SEO 执行方案：新增 `17-quantified-seo-execution-plan.md`，设定指标、DDL、验收和决策记录规则
- `DONE`: 2026-05-08 10:14 执行入口页轻改：`/builds`、`/cards`、`/tier-lists`、`/patches`、`/relics`
- `DONE`: 2026-05-08 10:14 `pnpm lint` 通过（0 errors，4 既有 warnings）与 `pnpm build` 通过（810 页）
- `DONE`: 2026-05-08 10:14 IndexNow 提交 7 URL
- `DONE`: 2026-05-08 10:14 推送入口页轻改到 `main`，commit=`3d94eef`
- `DONE`: 2026-05-08 10:14 正式域名验证 6 个目标 URL 均 `HTTP 200`
- `DONE`: 2026-05-08 10:23 固化 SEO 关键词数据证据规则，commit=`4699dae`
- `DONE`: 2026-05-08 10:30 建立 `18-keyword-evidence-ledger.md` 关键词证据台账，commit=`d199cb2`
- `DONE`: 2026-05-08 10:39 建立 `19-midpoint-recheck-checklist-2026-05-14.md` 四端复采清单，commit=`42674f6`
- `SKIP`: 2026-05-08 首页关键词改动（原因：缺少新的首页关键词数据证据；`guide hub` / `searchable database` 已标为 `REJECTED`）
- `SKIP`: 2026-05-08 新建 `/wiki`（原因：`slay the spire 2 wiki` 仅为 `WEAK_SIGNAL`，未满足触发条件）
- `SKIP`: 2026-05-08 社媒分发（原因：当前 SEO 进入观察窗，且社媒需要互动跟进窗口）

## 2026-05-07 动作状态（保留）
- `DONE`: 2026-05-07 11:26 站点可用性校验（`HTTP 200`）
- `DONE`: 2026-05-07 11:26 GSC `效果 / 网页 / 国家 / 设备 / 搜索结果呈现 / 索引覆盖 / Breadcrumbs / FAQ` 复核
- `DONE`: 2026-05-07 11:26 Vercel 登录态 Analytics 30 天窗口复核；本地 token API 仍 `403`
- `DONE`: 2026-05-07 11:26 近窗游戏动态巡检，发现官方 beta 新口径 `v0.104.0`
- `BLOCKED`: 2026-05-07 11:26 Bing Webmaster 实时采集（服务不可达，Ref C=`2026-05-07T03:25:16Z`）
- `BLOCKED`: 2026-05-07 11:26 Google Trends 实时采集（Google `/sorry` 人机验证）
- `DONE`: 2026-05-07 14:55 基于官方 Steam `Beta Patch Notes - v0.104.0` 发布独立新闻页，并同步 `/patches`、首页、`/builds`、`/cards`、`/relics`、`/potions`、`/tier-lists`、`/characters`、`/mechanics`、`/news`、`/llms.txt`、`app/sitemap.ts`
- `DONE`: 2026-05-07 14:55 `pnpm lint`（0 errors，4 既有 warnings）与 `pnpm build`（成功生成 810 页）
- `DONE`: 2026-05-07 14:55 IndexNow 提交 13 个 URL
- `BLOCKED`: 2026-05-07 14:55 Bing URL Submission（Bing Webmaster 服务不可达，沿用 Ref C=`2026-05-07T03:25:16Z`）
- `SKIP`: 2026-05-07 15:09 旧社媒未回复清理（Reddit/X/Steam 已跨期太久，继续追旧帖价值低）
- `DONE`: 2026-05-07 15:09 新增 v0.104.0 社媒轻分发草稿（Reddit / X / Steam 三端差异化文案，默认低链接、低推广感）
- `BLOCKED`: 2026-05-07 15:09 X 实际发布（`https://x.com/compose/post` 导航超时并进入 Chrome error 页，未发布）

## 今日决策
- 关联决策日志：`docs/ops-center/02-decisions.md`
- 决策编号：沿用 `DEC-20260508-01（采用量化 SEO 方案执行泛词骨架与长尾主攻）`
- 决策编号：沿用 `DEC-20260508-02（SEO 关键词执行必须以数据证据为准）`
- 今日判断：v0.105.1/v0.105.0 属于官方内容时效更新，允许最小 patch/news 同步；不代表 SEO 闸门通过，也不允许扩量或新建 `/wiki`

## 明日优先事项（最多3个）
- P0: 推送 v0.105.1/v0.105.0 内容同步后，确认 Vercel Production `Ready` 与新 URL `HTTP 200`
- P0: 线上生效后提交 IndexNow，并回填今日日志
- P1: 继续等待 2026-05-14 四端中期复采；任何关键词动作先查 `18-keyword-evidence-ledger.md`
