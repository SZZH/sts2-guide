# STS2 Guide 运营总览看板

> 用途：每日查看“今天状态如何、异常在哪里、现在该做什么”。
> 更新时间：每次关键动作后按时间戳更新（`YYYY-MM-DD HH:mm`）。

## 状态标记规范（强制）
- `DONE`：已完成并已记录结果
- `IN_PROGRESS`：正在执行
- `TODO`：待执行
- `BLOCKED`：受阻（需注明原因）
- `SKIP`：今日不做（需注明原因）

## 今日状态（2026-06-01 18:02）
- 站点可用性：`DONE`（`https://sts2guide.com/` 返回 `HTTP 200`，采集时间 `2026-06-01 17:39 CST`）
- 流量总览（Vercel）：`DONE`（浏览器登录态补采，`Last 7 Days / Production`：`689 Visitors (+77%) / 1,034 Page Views (+42%) / Bounce Rate 84% (-1%)`；时间范围可见 `May 25, 15:00 - Jun 1, 15:59`；Top Pages=`/cards 258`、`/ 80`、`/builds 31`、`/guides 31`、`/news/slay-the-spire-2-steam-deck-performance-guide 31`、`/news/slay-the-spire-2-known-issues-and-fixes 21`、`/cards/hammer_time 19`；Countries=`Singapore 69% / United States 13% / People's Republic of China 3%`；Devices=`Desktop 87% / Mobile 13%`；Top Referrers=`google.com 143`、`search.brave.com 5`、`bing.com 4`）
- 搜索总览（GSC）：`BLOCKED`（`2026-06-01 18:00 CST` 浏览器登录态下直连 `search.google.com/search-console?resource_id=sc-domain:sts2guide.com` 仍报 `ERR_CONNECTION_CLOSED`；影响：今日无法取得 Google Search Console 实时点击/展现/CTR/国家/页面口径）
- Bing 总览：`DONE`（3 个月 / Search Performance：`219 clicks / 13.8K impressions / 1.58% CTR`；Top queries 仍由 `slay the spire 2 guide`、`tips`、`strategies`、`build guide` 等高意图词支撑；Country 维度头部为 `United States 7.3K / 127`、`Rest of World 3.2K / 39`、`United Kingdom 985 / 17`、`Canada 839 / 9`、`Germany 479 / 8`、`France 347 / 6`、`People's Republic of China 245 / 6`；未见 Singapore 出现在当前国家列表）
- 趋势总览（Google Trends）：`DONE`（US / 过去 12 个月 / Web Search：平均热度 `slay the spire 2=12`、`sts2=3`、`slay the spire 2 guide=0`；`2026-05-31` 周点位分别为 `22 / 10 / 0`；相关上升查询含 `regent`、`patch`、`cards`、`silent guide`、`ironclad guide`、`mods`）
- 生产发布总览：`DONE`（当前生产域名可访问；本轮未做新发布）
- 线上结构验证：`DONE`（本轮主任务是流量归因排查，无新增页面结构改动）
- 游戏动态总览：`DONE`（未发现需要打断当前判断的新官方口径）
- 外链发布总览：`SKIP`（今天没有新页面或新路由上线）
- 社媒互动总览：`SKIP`（今天主线是流量异常归因，不是分发）

## 闸门状态（当前批次）
- 收录率 >= 60%：`90.0%（27/30，代理口径，待 URL Inspection 全量复核）`
- 有曝光页面占比 >= 40%：`26.7%（8/30，2026-04-10 已复判）`
- 进入前30页面数 >= 6：`>=8（2026-04-10 页级复判仍达标）`
- 结论：`未通过`（当前仅允许词池/模板/内链调整，禁止扩量）

## 今日异常
- [ ] 无
- [x] 有（Vercel 仍出现 `Singapore 69%` 的访问占比，且 GSC 当日链路 `ERR_CONNECTION_CLOSED`、Bing Country 维度仍未出现 Singapore；Vercel API 仍 `403`）

## 今日动作状态（必须完整）
- `DONE`: 2026-06-01 17:39 执行前历史核对（`01-daily-log.md` + `00-dashboard.md`），确认上一轮完整闭环停留在 `2026-05-29 14:02`，今天跨天后必须重跑实时采集
- `DONE`: 2026-06-01 17:39 正式域名可用性验证：`https://sts2guide.com/` 返回 `HTTP 200`
- `DONE`: 2026-06-01 17:49 Vercel 浏览器登录态补采（`Last 7 Days / Production`：`689 Visitors / 1,034 PV / 84% Bounce`；Top Pages / Referrers / Countries / Devices / Operating Systems 已回填）
- `DONE`: 2026-06-01 17:55 Google Trends 实时采集（US / 过去 12 个月 / Web Search：平均热度 `12 / 3 / 0`；`2026-05-31` 周点位 `22 / 10 / 0`；上升查询含 `regent`、`patch`、`cards`、`silent guide`、`ironclad guide`、`mods`）
- `DONE`: 2026-06-01 17:58 Bing Webmaster Search Performance 与 Country 维度补采完成（`219 clicks / 13.8K impressions / 1.58% CTR`；Country 头部=`United States 7.3K / 127`、`Rest of World 3.2K / 39`、`United Kingdom 985 / 17`、`Canada 839 / 9`、`Germany 479 / 8`；未见 Singapore）
- `BLOCKED`: 2026-06-01 18:00 GSC 浏览器登录态补采失败，`search.google.com/search-console?resource_id=sc-domain:sts2guide.com` 返回 `ERR_CONNECTION_CLOSED`（影响：今日 Google Search Console 实时口径缺失）
- `DONE`: 2026-05-29 13:41 执行前历史核对（`01-daily-log.md` + `00-dashboard.md` + `ops-logs`），确认上一轮完整流量闭环停留在 `2026-05-25/26`，今天跨天后必须重跑实时采集
- `DONE`: 2026-05-29 13:41 正式域名可用性验证：`https://sts2guide.com/` 返回 `HTTP 200`
- `BLOCKED`: 2026-05-29 13:41 执行 `node scripts/monitor-vercel.mjs` 仅获得 `403 You don't have permission to access this resource`，已落盘 `ops-logs/vercel/2026-05-29/2026-05-29T05-41-56-032Z.json`
- `DONE`: 2026-05-29 13:50 Vercel 浏览器登录态补采（`Last 24 Hours / Production`：`97 Visitors / 123 PV / 88% Bounce`；Countries=`Singapore 76%`、`United States 15%`；Devices=`Desktop 93%`；OS=`Windows 90%`）
- `DONE`: 2026-05-29 13:56 GSC 实时采集（3 个月 / Web：`1170 clicks / 8.77万 impressions / 1.3% CTR / 8.8 Avg position`）
- `DONE`: 2026-05-29 13:58 GSC 国家/地区补采（Top 国家=`美国 461`、`英国 85`、`加拿大 84`、`德国 60`、`澳大利亚 54`、`荷兰 32`；新加坡未进入当前头部）
- `DONE`: 2026-05-29 13:59 Google Trends 实时采集（US / 过去 12 个月 / Web Search：平均热度 `11 / 3 / 0`；上升查询含 `regent`、`patch`、`cards`、`build guide`）
- `DONE`: 2026-05-29 14:09 Bing Webmaster Search Performance 与 Country 维度补采完成（`219 clicks / 13.8K impressions / 1.59% CTR`；国家头部=`United States 7.3K / 127`、`Rest of World 3.2K / 39`、`United Kingdom 968 / 17`、`Canada 839 / 9`、`Germany 478 / 8`；未见 Singapore）
- `DONE`: 2026-05-29 14:18 Vercel `country=SG` 过滤复查：Pages 几乎被 `/cards 44` 和一串 card detail 页吃满，Referrers=`No data for active filter`，Devices=`Desktop 100%`，OS=`Windows 100%`
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
- 今日判断：`2026-06-01` 这轮四端补采里，Bing 与 Trends 继续支持“需求还在，但集中在 patch / regent / build guide 这类具体意图词”；Vercel 总量较 `2026-05-25` 明显抬升，但 `Singapore 69% + Desktop 87% + Windows 83% + /cards 258` 的异常结构依旧存在。由于 GSC 当日链路阻塞，本轮关于 Google 搜索侧的判断置信度降为中等，但仍不足以把 Singapore 解释成真实新增市场。
- 今日判断：`Singapore 76%` 这波访问更像“少量真实搜索点击 + 大量非搜索噪音访问”的混合体，但主导部分仍然是噪音。GSC 前 10 可见列表里虽有 `新加坡 26 / 1,486`，说明 Google Search 不是完全没有新加坡用户；但这个量级与 Vercel 访问层完全不匹配，且 Bing 侧无对应国家信号，Vercel `SG` 过滤后又呈现 `Desktop 100% / Windows 100% / card detail 页扎堆 / 无 referrer` 的异常结构。当前仍应继续用 GSC/Bing 判断搜索市场，不把这波新加坡访问当成 SEO 正向信号。
- 处理口径：暂不拦截；从后续统计开始，默认把 `Vercel Singapore` 高占比标记为“数据噪音风险”，除非 `GSC/Bing` 也出现同量级新加坡搜索增长。

## 明日优先事项（最多3个）
- P0: 补做 GSC 实时采集，优先排查 `search.google.com` 在当前网络/代理环境下的 `ERR_CONNECTION_CLOSED`
- P0: 继续观察 `Vercel Countries + Devices + Top Pages` 是否维持 `Singapore 高占比 + Desktop/Windows 极端集中 + /cards 异常高浏览`
- P1: 下次复盘继续核对 GSC/Bing 国家维度，确认新加坡仍只存在于访问层、未进入搜索层
