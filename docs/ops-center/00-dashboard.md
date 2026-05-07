# STS2 Guide 运营总览看板

> 用途：每日查看“今天状态如何、异常在哪里、现在该做什么”。
> 更新时间：每次关键动作后按时间戳更新（`YYYY-MM-DD HH:mm`）。

## 状态标记规范（强制）
- `DONE`：已完成并已记录结果
- `IN_PROGRESS`：正在执行
- `TODO`：待执行
- `BLOCKED`：受阻（需注明原因）
- `SKIP`：今日不做（需注明原因）

## 今日状态（2026-05-07 15:09）
- 站点可用性：`DONE`（`https://sts2guide.com` 返回 `HTTP 200`，Vercel cache=`HIT`）
- 流量总览（Vercel）：`DONE`（登录态 `Last 30 Days`：`Visitors 2,087 / PV 4,675 / Bounce Rate 79%`；Top Pages=`/ 388`、`/guides 282`、`/builds 188`、`/cards 159`、`/characters 138`；Top Referrer=`google.com 488`、`duckduckgo.com 157`、`bing.com 97`；国家=`Singapore 42% / US 22% / China 7%`；设备=`Desktop 79% / Mobile 20%`；本地 token API 仍 `403`，仅作 `BLOCKED` 证据）
- 搜索总览（GSC）：`DONE`（3 个月：`866 clicks / 6.31万 impressions / CTR 1.4% / 平均排名 8.9`；上次更新 `11小时前`，图表窗口 `2026-03-16 ~ 2026-05-04`；Top Page=`/ 172 / 4,344`、`/relics/book_of_five_rings 92 / 1,485`、`/cards/hammer_time 67 / 2,257`、`/guides/exhaust-mechanic-explained 64 / 7,120`）
- Bing 总览：`BLOCKED`（登录入口可打开，但 Bing Webmaster 返回 `services could not be reached`；Ref C=`2026-05-07T03:25:16Z`，无法实时采集 Search Performance / Sitemaps / URL Submission / IndexNow 明细）
- 趋势总览（Google Trends）：`BLOCKED`（访问 Trends 时进入 Google `/sorry` 人机验证页，无法实时读取核心词/品牌词/意图词趋势）
- 生产发布总览：`SKIP`（今日未触发新发布）
- 线上结构验证：`DONE`（`/builds` 在 Vercel 30 天窗口为 `188 visitors`，继续是真实 landing 页；但 GSC Top Page 仍由首页、实体页和机制页主导，主词迁移仍需复检）
- 游戏动态总览：`DONE`（Steam 官方新闻确认 `Beta Patch Notes - v0.104.0（2026-04-24）`；已补 `/news/slay-the-spire-2-beta-patch-v0-104-0-analysis` 并同步首页、patch hub、builds、cards、relics、potions、tier-lists、characters、mechanics、news、llms 与 sitemap）
- 外链发布总览：`DONE`（IndexNow 已提交 13 个 URL：新 v0.104.0 新闻页、`/patches`、首页、`/builds`、`/cards`、`/relics`、`/potions`、`/tier-lists`、`/characters`、`/mechanics`、`/news`、`/llms.txt`、`/sitemap.xml`；Bing URL Submission 仍因 Bing Webmaster `BLOCKED` 无法执行）
- 社媒互动总览：`SKIP`（旧 Reddit/X/Steam 待回复已跨期太久，今天不追旧帖；已改为 v0.104.0 新内容轻分发草稿，见 `16-v104-social-distribution-pack.md`）

## 闸门状态（当前批次）
- 收录率 >= 60%：`90.0%（27/30，代理口径，待 URL Inspection 全量复核）`
- 有曝光页面占比 >= 40%：`26.7%（8/30，2026-04-10 已复判）`
- 进入前30页面数 >= 6：`>=8（2026-04-10 页级复判仍达标）`
- 结论：`未通过`（当前仅允许词池/模板/内链调整，禁止扩量）

## 今日异常
- [ ] 无
- [x] 有（Bing Webmaster 服务不可达；Google Trends 人机验证阻塞；Vercel `Singapore 42%` 占比仍异常；v0.104.0 口径已同步，后续只需观察收录与点击回流）

## 今日动作状态（必须完整）
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
- 决策编号：`DEC-20260402-03（继续维持不扩量，待全量口径补齐前不推进下一批）`

## 明日优先事项（最多3个）
- P0: 补采 Bing Webmaster / Google Trends；若平台恢复，补齐今天缺口并复判闸门
- P0: 若稍后 X 可访问，再发布 v0.104.0 短串并预留 30-60 分钟互动复查；Reddit/Steam 今天不硬发
- P1: 观察 v0.104.0 内容同步后的收录、点击与 `/patches` / `/builds` 回流
