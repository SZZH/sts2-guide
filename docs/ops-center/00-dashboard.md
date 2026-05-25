# STS2 Guide 运营总览看板

> 用途：每日查看“今天状态如何、异常在哪里、现在该做什么”。
> 更新时间：每次关键动作后按时间戳更新（`YYYY-MM-DD HH:mm`）。

## 状态标记规范（强制）
- `DONE`：已完成并已记录结果
- `IN_PROGRESS`：正在执行
- `TODO`：待执行
- `BLOCKED`：受阻（需注明原因）
- `SKIP`：今日不做（需注明原因）

## 今日状态（2026-05-26 00:06）
- 站点可用性：`DONE`（`https://sts2guide.com/` 返回 `HTTP 200`，采集时间 `2026-05-25 22:32 CST`）
- 流量总览（Vercel）：`DONE`（浏览器登录态补采，`Last 7 Days / Production`：`388 Visitors (+11%) / 725 Page Views (+2%) / Bounce Rate 85% (+3%)`；Top Pages=`/cards 70`、`/ 60`、`/news/slay-the-spire-2-known-issues-and-fixes 43`、`/guides 29`、`/builds 24`；Top Referrer=`google.com 162`）
- 搜索总览（GSC）：`DONE`（3 个月 / Web：`1300 clicks / 9.51万 impressions / 1.4% CTR / 8.8 Avg position`，上次更新约 `4.5 小时前`；Top 查询含 `sts2 guide`、`sts2 guides`、`hammer time slay the spire 2`、`slay the spire 2 guide`）
- Bing 总览：`DONE`（3 个月：`219 clicks / 13.8K impressions / 1.59% CTR`；Top queries 含 `slay the spire 2 guide`、`slay the spire 2 tips`、`slay the spire 2 strategies`；Sitemap=`Success`，`794` URLs discovered，Last crawl=`2026-05-24`；IndexNow 最近 `14h=0`）
- 趋势总览（Google Trends）：`DONE`（US / 过去 12 个月 / Web Search：平均热度 `slay the spire 2=12`、`sts2=3`、`slay the spire 2 guide=0`；`2026-05-24` 周点位分别为 `23 / 12 / 0`；相关上升查询含 `the regent slay the spire 2`、`slay the spire 2 patch notes`、`sts2 tier list`）
- 生产发布总览：`DONE`（当前生产域名可访问；本轮未做新发布）
- 线上结构验证：`DONE`（已对 `/builds`、`/patches`、`/tier-lists`、最新 v0.105 patch news 做最小承接补强；本地浏览器验收通过）
- 游戏动态总览：`DONE`（本轮围绕当前官方 `v0.105.1 / v0.105.0` patch 口径完成主入口承接补强）
- 外链发布总览：`SKIP`（今天未发生新页面或新路由上线，无 IndexNow 差量提交）
- 社媒互动总览：`SKIP`（今天主线不是分发；先完成复盘决策）

## 闸门状态（当前批次）
- 收录率 >= 60%：`90.0%（27/30，代理口径，待 URL Inspection 全量复核）`
- 有曝光页面占比 >= 40%：`26.7%（8/30，2026-04-10 已复判）`
- 进入前30页面数 >= 6：`>=8（2026-04-10 页级复判仍达标）`
- 结论：`未通过`（当前仅允许词池/模板/内链调整，禁止扩量）

## 今日异常
- [ ] 无
- [x] 有（Vercel 脚本链路 `vercel.com:443` 连接超时；Bounce Rate 升至 `85%`；Google Trends 多关键词组合页曾报错，改用 3 词组合页补采）

## 今日动作状态（必须完整）
- `DONE`: 2026-05-25 22:32 执行前历史核对（`01-daily-log.md` + `00-dashboard.md` + `ops-logs`），确认上一轮完整闭环停留在 `2026-05-14`，`2026-05-21` 决策复盘已过期，今天必须重做实时采集后再判断继续/止损
- `DONE`: 2026-05-25 22:32 正式域名可用性验证：`https://sts2guide.com/` 返回 `HTTP 200`
- `BLOCKED`: 2026-05-25 22:32 执行 `node scripts/monitor-vercel.mjs` 失败，报错 `Connect Timeout Error (attempted address: vercel.com:443, timeout: 10000ms)`（影响：脚本化 Vercel 采集链路不可用）
- `DONE`: 2026-05-25 22:32 Vercel 浏览器登录态补采（`Last 7 Days / Production`：`388 Visitors / 725 PV / 85% Bounce`；Top Pages / Referrers / Countries / Devices / Operating Systems 已回填）
- `DONE`: 2026-05-25 22:32 GSC 实时采集（3 个月 / Web：`1300 clicks / 9.51万 impressions / 1.4% CTR / 8.8 Avg position`；Top 查询已回填）
- `DONE`: 2026-05-25 23:18 Bing Webmaster 实时采集补齐（3 个月：`219 clicks / 13.8K impressions / 1.59% CTR`；Sitemap=`Success`，`794` URLs discovered，Last crawl=`2026-05-24`；IndexNow 最近 `14h=0`）
- `DONE`: 2026-05-25 23:18 Google Trends 实时采集补齐（US / 过去 12 个月 / Web Search：`slay the spire 2=12`、`sts2=3`、`slay the spire 2 guide=0`；上升查询与区域差异已回填）
- `DONE`: 2026-05-25 23:18 基于四端完整口径重做 `2026-05-21` 继续 / 止损复盘，结论调整为“保守轻维护，不恢复投入，也暂不升级为硬止损”
- `DONE`: 2026-05-26 00:06 完成 `/builds`、`/patches`、`/tier-lists`、`/news/slay-the-spire-2-beta-patch-v0-105-0-aeonglass-bestiary-hotfix` 最小承接补强：只补当前 patch 版本口径、下一步 CTA、patch -> builds/tier/cards 分流，不新增路由
- `DONE`: 2026-05-26 00:06 `pnpm lint` 通过（0 errors，4 个既有 warnings）与 `pnpm build` 通过（成功生成 `811` 个页面）
- `DONE`: 2026-05-26 00:06 本地浏览器验收通过：`/builds`、`/patches`、`/tier-lists`、最新 v0.105 patch news 新增区块与跳转正常
- `DONE`: 2026-05-14 17:47 执行前历史核对（`01-daily-log.md` + `00-dashboard.md` + `ops-logs`），确认跨天后四端实时采集必须重跑，不能复用 2026-05-13 口径
- `DONE`: 2026-05-14 17:47 正式域名可用性验证：`https://sts2guide.com/` 返回 `HTTP 200`
- `DONE`: 2026-05-14 17:47 执行 `node scripts/monitor-vercel.mjs`，落盘 `ops-logs/vercel/2026-05-14/2026-05-14T09-47-13-810Z.json` 与 `ops-logs/2026-05-14.md`
- `BLOCKED`: 2026-05-14 17:47 Vercel API 全端点 `403`（影响：Visitors/PV/Bounce 及 referrer/path 当日实时口径不可得）
- `DONE`: 2026-05-14 18:27 GSC 实时采集（3 个月 / Web：`1160 clicks / 8.43万 impressions / 1.4% CTR / 8.8 Avg position`；Top 查询已回填日志）
- `DONE`: 2026-05-14 18:27 Bing Webmaster 实时采集（Search Performance / Sitemaps / IndexNow / URL Inspection：`214 clicks / 13.3K impressions / 1.61% CTR`，Sitemap `Success`，URLs discovered `794`，IndexNow 最近 10 小时 `0`，首页已索引）
- `DONE`: 2026-05-14 18:27 Google Trends 实时采集（美国 90 天核心词、相关上升查询、区域差异已回填日志）
- `DONE`: 2026-05-14 18:59 Vercel 浏览器登录态补采（`Last 7 Days / Production`：`344 Visitors / 673 PV / 83% Bounce`；Top Pages / Referrers / Countries / Devices 已回填日志）
- `DONE`: 2026-05-13 16:48 执行前历史核对（`01-daily-log.md` + `00-dashboard.md` + `ops-logs`），确认跨天后四端实时采集必须重跑，不能复用 2026-05-11 口径
- `DONE`: 2026-05-13 16:48 正式域名可用性验证：`https://sts2guide.com/` 返回 `HTTP 200`
- `DONE`: 2026-05-13 16:48 执行 `node scripts/monitor-vercel.mjs`，落盘 `ops-logs/vercel/2026-05-13/2026-05-13T08-48-41-802Z.json` 与 `ops-logs/2026-05-13.md`
- `BLOCKED`: 2026-05-13 16:48 Vercel API 全端点 `403`（影响：Visitors/PV/Bounce 及 referrer/path 当日实时口径不可得）
- `TODO`: 2026-05-13 GSC 实时采集（点击/展现/CTR/平均排名/查询/页面/国家/设备/索引覆盖/Rich Results）
- `TODO`: 2026-05-13 Bing Webmaster 实时采集（Search Performance/Index Coverage/Sitemaps/URL Inspection/IndexNow）
- `TODO`: 2026-05-13 Google Trends 实时采集（核心词/品牌词/意图词趋势、区域差异、相关主题与相关查询）
- `DONE`: 2026-05-11 16:31 正式域名基础可用性验证：`/`、`/sitemap.xml`、`/builds`、`/patches`、v0.104.0 新闻页均返回 `HTTP 200`
- `DONE`: 2026-05-11 16:32 Steam 官方 RSS 巡检发现新增 `Beta Patch Notes - v0.105.0` 与 `Beta Hotfix Notes - v0.105.1`
- `DONE`: 2026-05-11 16:34 新增 `/news/slay-the-spire-2-beta-patch-v0-105-0-aeonglass-bestiary-hotfix`，并同步首页、`/patches`、`app/sitemap.ts`
- `DONE`: 2026-05-11 16:34 `pnpm lint` 通过（0 errors，4 个既有 warnings）
- `DONE`: 2026-05-11 16:34 `pnpm build` 通过，成功生成 `811` 个页面
- `DONE`: 2026-05-11 16:38 提交并推送 `main`，commit=`40e0e8e`
- `DONE`: 2026-05-11 16:38 Vercel 自动部署后，新 URL `/news/slay-the-spire-2-beta-patch-v0-105-0-aeonglass-bestiary-hotfix` 返回 `HTTP 200` 且正文命中 `v0.105.1 / Aeonglass / Bestiary`
- `DONE`: 2026-05-11 16:39 IndexNow 提交 4 URL：新 v0.105 新闻页、`/patches`、首页、`/sitemap.xml`
- `DONE`: 2026-05-14 四端中期复采（按 `19-midpoint-recheck-checklist-2026-05-14.md` 执行；Vercel API 明确标为 `BLOCKED`）
- `DONE`: 2026-05-21 继续 / 止损 / 小范围恢复投入决策（已于 2026-05-25 22:32 补做，结论：止损）

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
- 决策编号：`DEC-20260525-01（30页验证批复盘后维持保守轻维护，不恢复投入）`
- 今日判断：四端补齐后，搜索侧仍是正增长：GSC 点击较 `2026-05-14` 约 `+12%`，Bing 点击较 `2026-05-14` 约 `+2%`、展现约 `+4%`；但站内承接继续走弱，Bounce 升到 `85%`，`/builds`、`/patches`、`/tier-lists` 仍未成为明确主承接页。结论不再是“信息不足下的硬止损”，而是“继续保守轻维护、只做 patch 和明确问题修复，不恢复新增投入”。

## 明日优先事项（最多3个）
- P0: 维持保守轻维护节奏：只保留官方 patch / hotfix / newsletter 巡检与必要同步
- P0: 将本轮承接补强发布到生产，并验证正式域名 4 个目标 URL 的内容已生效
- P1: 记录 Google Trends 多关键词组合页异常；下次复盘时优先复查 `patch notes / tier list / regent` 三类 rising terms
