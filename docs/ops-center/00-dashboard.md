# STS2 Guide 运营总览看板

> 用途：每日查看“今天状态如何、异常在哪里、现在该做什么”。
> 更新时间：每次关键动作后按时间戳更新（`YYYY-MM-DD HH:mm`）。

## 状态标记规范（强制）
- `DONE`：已完成并已记录结果
- `IN_PROGRESS`：正在执行
- `TODO`：待执行
- `BLOCKED`：受阻（需注明原因）
- `SKIP`：今日不做（需注明原因）

## 今日状态（2026-04-20 18:13）
- 站点可用性：`DONE`（`https://sts2guide.com` 返回 `HTTP 200`）
- 流量总览（Vercel）：`DONE`（登录态 `Last 7 Days`：`Visitors 550 / PV 1,252 / Bounce Rate 77%`；Top Landing=`/ 100`、`/guides 74`、`/builds 65`；Top Referrer 仍为搜索；`Singapore 47%` 依旧异常偏高）
- 搜索总览（GSC）：`DONE`（3 个月：`624 clicks / 4.56万 impressions / CTR 1.4% / 平均排名 9.2`；上次更新约 `3 小时前`，数据截止 `2026-04-18`；Top Page 已是 `/ 103 / 2789`、`/relics/book_of_five_rings 70 / 1059`、`/guides/exhaust-mechanic-explained 52 / 4774`）
- Bing 总览：`DONE`（3 个月：`173 clicks / 9.6K impressions`；Sitemaps=`1`、URLs discovered=`792`、`Last crawl=2026-04-18 Success`；IndexNow 最近 `10h=0`；URL Submission=`No pages found`）
- 趋势总览（Google Trends）：`DONE`（美国过去 12 个月平均值 `10 / 2 / 0`；最近一周约 `49 / 16 / 0`；相关上升词继续包括 `slay the spire 2 patch`、`sts2 cards`、`sts2 tier list`）
- 生产发布总览：`SKIP`（今日未触发新发布）
- 线上结构验证：`DONE`（重构后的主线承接已出现：Vercel Top Landing 中 `/builds=65`，说明新主线页不再只是结构壳）
- 游戏动态总览：`DONE`（近窗最新明确官方口径已推进到 `重大更新1号 - v0.103.2（2026-04-17）`；`Neowsletter - April 2026` 已上线）
- 外链发布总览：`DONE`（已补提 `IndexNow`：`/` `/builds` `/cards` `/patches`）
- 社媒互动总览：`SKIP`（本轮优先处理四端与 patch 动态；今日未重跑社媒巡检）

## 闸门状态（当前批次）
- 收录率 >= 60%：`90.0%（27/30，代理口径，待 URL Inspection 全量复核）`
- 有曝光页面占比 >= 40%：`26.7%（8/30，2026-04-10 已复判）`
- 进入前30页面数 >= 6：`>=8（2026-04-10 页级复判仍达标）`
- 结论：`未通过`（当前仅允许词池/模板/内链调整，禁止扩量）

## 今日异常
- [ ] 无
- [x] 有（Bing URL Submission 页面 `No pages found` 持续；Vercel `Singapore 47%` 占比异常；站内多处 patch 文案仍停留在 `v0.103.0`）

## 今日动作状态（必须完整）
- `DONE`: 2026-04-20 18:13 站点可用性校验（`HTTP 200`）
- `DONE`: 2026-04-20 18:13 四端实时采集（GSC / Vercel 登录态 / Bing 登录态 / Google Trends）
- `DONE`: 2026-04-20 18:13 GSC `网页 / 国家 / 设备 / FAQ / Breadcrumbs` 复核（`已编入索引 83`、`未编入索引 717`、`FAQ 7 有效`、`Breadcrumbs 17 有效`）
- `DONE`: 2026-04-20 18:13 Bing `Search Performance / Sitemaps / IndexNow / URL Submission` 细项复核（`Sitemaps` 已恢复 `Success`，`URL Submission` 仍 `No pages found`）
- `DONE`: 2026-04-20 18:13 近窗游戏动态巡检（Steam 新闻确认最近公开口径已到 `v0.103.2`，并有 `Neowsletter - April 2026`）
- `DONE`: 2026-04-20 18:13 `IndexNow` 提交 `/` `/builds` `/cards` `/patches`（脚本回执成功）
- `IN_PROGRESS`: 按 `14-rebuild-verification-loop.md` 继续回流窗复检（主词迁移 + `/` 与 `/guides` bounce + 新主线承接）
- `TODO`: 针对 `slay the spire 2 builds`、`sts2 cards`、`sts 2 patch notes` 做标题 / 摘要 / 内链补位方案
- `DONE`: 修正主入口仍停留在 `v0.103.0` 的 patch 口径，并补做 `/` `/builds` `/cards` `/patches` 的 `IndexNow`
- `TODO`: 复核 Vercel `Singapore 47%` 是否为 Bot / 统计噪音
- `BLOCKED`: Bing URL Submission 页面 `No pages found`
- `SKIP`: 今日未重跑社媒巡检（本轮优先完成 patch 口径与提交流程闭环）

## 今日决策
- 关联决策日志：`docs/ops-center/02-decisions.md`
- 决策编号：`DEC-20260402-03（继续维持不扩量，待全量口径补齐前不推进下一批）`

## 明日优先事项（最多3个）
- P0: 先完成 `v0.103.2` 口径同步，至少修正首页 / `/builds` / `/patches` / `/cards` 等仍写 `0.103.0` 的主入口文案
- P0: 延续 `14-rebuild-verification-loop.md` 回流复检，重点盯 `/builds` 承接增长是否继续放大，并压 `/` 与 `/guides` 跳出
- P0: 观察 `/` `/builds` `/cards` `/patches` 本轮 `IndexNow` 回流后，继续补 `slay the spire 2 builds`、`sts2 cards`、`sts 2 patch notes` 的标题/摘要/内链
- P1: 继续排障 Bing URL Submission `No pages found`，并复核 Vercel `Singapore` 异常流量
