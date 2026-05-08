# STS2 Guide 运营总览看板

> 用途：每日查看“今天状态如何、异常在哪里、现在该做什么”。
> 更新时间：每次关键动作后按时间戳更新（`YYYY-MM-DD HH:mm`）。

## 状态标记规范（强制）
- `DONE`：已完成并已记录结果
- `IN_PROGRESS`：正在执行
- `TODO`：待执行
- `BLOCKED`：受阻（需注明原因）
- `SKIP`：今日不做（需注明原因）

## 今日状态（2026-05-08 17:21）
- 站点可用性：`DONE`（2026-05-08 入口页部署后验证：`/builds`、`/cards`、`/tier-lists`、`/patches`、`/relics`、`/news/slay-the-spire-2-beta-patch-v0-104-0-analysis` 均返回 `HTTP 200`）
- 流量总览（Vercel）：`TODO`（今日不重采实时流量；等待 2026-05-14 按 `19-midpoint-recheck-checklist-2026-05-14.md` 四端复采，避免改动当天归因混乱）
- 搜索总览（GSC）：`TODO`（今日不重采实时搜索；2026-05-07 基线仍为 `866 clicks / 6.31万 impressions / CTR 1.4% / 平均排名 8.9`，下一次复采为 2026-05-14）
- Bing 总览：`BLOCKED`（沿用 2026-05-07 平台阻塞：Bing Webmaster 返回 `services could not be reached`；待 2026-05-14 重新尝试，不用历史口径冒充今日实时结果）
- 趋势总览（Google Trends）：`BLOCKED`（沿用 2026-05-07 Google `/sorry` 人机验证阻塞；待 2026-05-14 重新尝试）
- 生产发布总览：`DONE`（入口页 SEO 轻改已提交并推送 `main`：`3d94eef feat: 优化SEO入口页泛词承接`；正式域名目标页均 `HTTP 200`）
- 线上结构验证：`DONE`（已完成 `/builds`、`/cards`、`/tier-lists`、`/patches`、`/relics` title/H1/首屏/内链轻改；未新增页面、未新建 `/wiki`、未扩量）
- 游戏动态总览：`SKIP`（今日未执行新的官方动态巡检；本日主线为 SEO 入口页轻改与复采准备，下一轮如继续运营需先查官方 Steam / SteamDB / 官方社媒）
- 外链发布总览：`DONE`（IndexNow 已提交 7 URL：`/builds`、`/cards`、`/tier-lists`、`/patches`、`/relics`、最新 v0.104.0 新闻页、`/sitemap.xml`；未做额外外链发布）
- 社媒互动总览：`SKIP`（今日未执行 Steam / Reddit / X 分发；SEO 已进入观察窗，不用社媒动作干扰当前归因）

## 闸门状态（当前批次）
- 收录率 >= 60%：`90.0%（27/30，代理口径，待 URL Inspection 全量复核）`
- 有曝光页面占比 >= 40%：`26.7%（8/30，2026-04-10 已复判）`
- 进入前30页面数 >= 6：`>=8（2026-04-10 页级复判仍达标）`
- 结论：`未通过`（当前仅允许词池/模板/内链调整，禁止扩量）

## 今日异常
- [ ] 无
- [x] 有（Bing Webmaster 与 Google Trends 仍待 2026-05-14 复采确认；Vercel `Singapore 42%` 噪音风险仍需继续观察；SEO 入口页改动后进入观察窗，今日不再追加页面动作）

## 今日动作状态（必须完整）
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
- `TODO`: 2026-05-14 四端中期复采（按 `19-midpoint-recheck-checklist-2026-05-14.md` 执行）
- `TODO`: 2026-05-21 继续 / 止损 / 小范围恢复投入决策

## 昨日动作状态（保留）
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
- 决策编号：`DEC-20260508-01（采用量化 SEO 方案执行泛词骨架与长尾主攻）`
- 决策编号：`DEC-20260508-02（SEO 关键词执行必须以数据证据为准）`

## 明日优先事项（最多3个）
- P0: 不继续改页面，等待 2026-05-14 四端中期复采
- P0: 若发生新的官方 patch / hotfix / newsletter，先做官方动态巡检并按 patch 轻维护规则处理
- P1: 若需要继续运营，只做非页面动作或证据整理；任何关键词动作先查 `18-keyword-evidence-ledger.md`
