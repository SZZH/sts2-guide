# STS2 Guide 每日运营日志

> 用途：只记录事实与执行结果，避免信息散落在多个文件。
> 频率：按任务触发记录，至少保证关键动作均有时间戳留痕。

## 状态标记规范（强制）
- `DONE`：已完成
- `IN_PROGRESS`：进行中
- `TODO`：待执行
- `BLOCKED`：阻塞（必须写原因）
- `SKIP`：今日不做（必须写原因）

## 时间戳记录规则（强制）
- 所有记录必须使用真实本地时间戳：`YYYY-MM-DD HH:mm`。
- 同一天内允许多次更新，按时间倒序追加。
- 每条更新至少包含：已完成事项、未完成事项、下一步动作。

### 2026-04-02 17:25
- 观察：执行“未完成差量”二次核验，闸门状态无改善；核心短板仍是曝光页占比。
- 数据（四端）：
  - GSC：总览口径仍为 `553 clicks / 3.61万 impressions / 1.5% CTR / 平均排名 8.8`（3 个月，页面显示上次更新约 3.5 小时前）。
  - Vercel：复用 17:14 快照（最近 7 天 `562 visitors / 1,710 page views / 63% bounce rate`），本轮未新增异常波动。
  - Bing Webmaster：复用 17:14 快照（`46 clicks / 2.4K impressions`；Sitemap/IndexNow 状态无新增异常）。
  - Google Trends：复用 17:14 快照（`slay the spire 2` 美国近周值仍为 `46`）。
- 表现对比（vs 17:14）：持平（四端核心指标未见结构性变化）。
- 变化原因（上涨/下滑驱动）：本轮为闸门复核动作，非新增分发或内容上线窗口，短时指标维持稳定属预期。
- 建议动作（含优先级）：
  - `P0` 继续维持不扩量，只允许词池/模板/内链微调。
  - `P0` 补齐 GSC 验证批 30 页全量导出（CSV/API 任一可复算口径）以替换当前 8/30 复算口径。
  - `P1` 完成 Steam/Reddit 待回复并回填链接，减少社媒积压。
- 异常与影响：闸门关键项“有曝光页面占比”仍为 `8/30 = 26.7%`，低于 `>=40%`，故不得推进下一批扩量。
- 外链发布与收录跟进：
  - 当日外链动作（平台/链接/目标页）：复用 17:14 记录（IndexNow 首页提交已完成）。
  - 已生效与未生效：`IN_PROGRESS`（待外链生效复核与补链登记）。
- 评论与回复（Reddit / X / Steam）：
  - 新评论数：复用 17:14 记录（Steam 待处理 `1+`）。
  - 已回复数：`0`（本轮以闸门复核为主，未执行回帖动作）。
  - 待回复数：`2+`（Steam + Reddit）。
  - 重点评论与回复链接：
    - Steam: `https://steamcommunity.com/app/2868840/discussions/0/798965575663499797/`
    - Reddit: `https://www.reddit.com/r/slaythespire/comments/1s4swab/v01010_feels_like_a_direction_reset_not_just_a/`
- 执行动作状态：
  - `DONE`：读取并复算 Batch-30 页级追踪表，确认曝光页占比 `26.7%`；同步更新运营看板。
  - `IN_PROGRESS`：社媒待回复处理；外链生效复核。
  - `TODO`：GSC 30 页全量页级导出补齐；社媒回复落地与回填。
  - `BLOCKED`：GSC 页面维度在当前会话下未拿到稳定全量导出链路（仅可见总览与有限行表格）。
  - `SKIP`：无。
- 验证结果：闸门维持 `未通过`（仅允许词池/模板/内链调整）。
- 下一步：补全 GSC 全量页级口径后再次复核闸门；并行清理社媒待回复积压。

### 2026-04-02 17:30
- 观察：完成社媒待回复差量清理（Steam + Reddit 各 1 条），均采用“先引用原话再回复”的结构。
- 数据（四端）：
  - GSC：复用 17:25 口径，无新增变动。
  - Vercel：复用 17:25 口径，无新增变动。
  - Bing Webmaster：复用 17:25 口径，无新增变动。
  - Google Trends：复用 17:25 口径，无新增变动。
- 表现对比（vs 17:25）：社媒执行进度提升（待回复由 `2+` 降至 `1+`）；搜索与流量指标持平。
- 变化原因（上涨/下滑驱动）：本轮为互动清积压，不涉及新增内容发布，故站点侧指标短时持平。
- 建议动作（含优先级）：
  - `P0` 继续补齐 GSC 30 页全量页级导出口径。
  - `P1` 继续清理剩余社媒待回复（重点看 Steam 新增通知）。
  - `P1` 完成外链生效复核登记（浏览器证据 + HTTP 证据双轨）。
- 异常与影响：
  - Reddit 公开链接使用 `curl` 复核返回 `HTTP 403`（平台反爬限制），但登录浏览器会话内页面与回复均可见，按“会话可见”为主判定可访问。
- 外链发布与收录跟进：
  - 当日外链动作（平台/链接/目标页）：`DONE` Steam 讨论串回帖、Reddit 评论回复各 1 条。
  - 已生效与未生效：`IN_PROGRESS`（Steam 讨论页与站内落地页 `HTTP 200`；Reddit 链接需以浏览器会话证据复核）。
- 评论与回复（Reddit / X / Steam）：
  - 新评论数：复用 17:25 记录。
  - 已回复数：`2`（Steam 1 + Reddit 1）。
  - 待回复数：`1+`（仍需后续巡检确认）。
  - 重点评论与回复链接：
    - Steam 回复：`https://steamcommunity.com/app/2868840/discussions/0/798965575663499797/?ctp=5#c798966028860229734`
    - Reddit 回复：`https://www.reddit.com/r/slaythespire/comments/1s4swab/v01010_feels_like_a_direction_reset_not_just_a/oduq01t/`
- 执行动作状态：
  - `DONE`：Steam 回帖 1 条（#73）；Reddit 回复 1 条（permalink 已生成）；外链可访问性快检（Steam/站内 200）。
  - `IN_PROGRESS`：外链生效复核登记；社媒剩余待回复清理。
  - `TODO`：GSC 30 页全量页级导出补齐。
  - `BLOCKED`：Reddit 非登录请求受反爬限制（`curl 403`），需用登录态浏览器证据补位。
  - `SKIP`：无。
- 验证结果：闸门结论不变，仍 `未通过`。
- 下一步：继续社媒 24h SLA 清积压，并补齐外链生效登记与 GSC 全量口径。

### 2026-04-02 17:33
- 观察：GSC 导出链路已打通，已拿到“网页维度”全量导出并完成 30 页逐条匹配；闸门关键项精确口径确认仍未过线。
- 数据（四端）：
  - GSC：通过导出包 `https___sts2guide.com_-Performance-on-Search-2026-04-02.zip` 中 `网页.csv` 完成验证批复算，曝光页 `8/30 = 26.7%`。
  - Vercel：复用 17:30 口径，无新增异常。
  - Bing Webmaster：复用 17:30 口径，无新增异常。
  - Google Trends：复用 17:30 口径，无新增异常。
- 表现对比（vs 17:30）：核心变化是“口径可信度提升”（从复算下限升级为导出全量匹配）；结果值不变（仍 26.7%）。
- 变化原因（上涨/下滑驱动）：本轮属于数据口径补齐动作，不是流量增长动作，因此数值本身不变。
- 建议动作（含优先级）：
  - `P0` 继续维持不扩量，按词池/模板/内链做小步优化。
  - `P1` 基于 22 个零曝光 URL 做内链与标题意图修正优先队列。
  - `P1` 收口外链生效登记（以登录态浏览器证据为准）。
- 异常与影响：
  - 精确口径下曝光页占比仍未达闸门（26.7% < 40%），仍禁止推进下一批扩量。
  - Reddit 公开请求存在反爬 403，非登录链路不稳定。
- 外链发布与收录跟进：
  - 当日外链动作（平台/链接/目标页）：复用 17:30 记录。
  - 已生效与未生效：`IN_PROGRESS`（Steam/站内可直接复核；Reddit 依赖登录态证据）。
- 评论与回复（Reddit / X / Steam）：
  - 新评论数：Steam 通知页当前仍显示 `1` 条历史通知项（线程存量）。
  - 已回复数：`2`（Steam 1 + Reddit 1）。
  - 待回复数：`1+`（继续滚动巡检）。
  - 重点评论与回复链接：
    - Steam 回复：`https://steamcommunity.com/app/2868840/discussions/0/798965575663499797/?ctp=5#c798966028860229734`
    - Reddit 回复：`https://www.reddit.com/r/slaythespire/comments/1s4swab/v01010_feels_like_a_direction_reset_not_just_a/oduq01t/`
- 执行动作状态：
  - `DONE`：GSC 全量导出与 30 页逐条匹配；曝光页精确口径确认 `8/30`。
  - `IN_PROGRESS`：外链生效复核登记；社媒剩余待回复巡检。
  - `TODO`：零曝光 22 页优化队列落盘（内链/模板/标题）。
  - `BLOCKED`：Reddit 非登录链路 `curl 403`。
  - `SKIP`：无。
- 验证结果：闸门维持 `未通过`，策略保持不扩量。
- 下一步：按零曝光 22 页执行微调优先队列，并在下个采样窗复测。

### 2026-04-02 17:40
- 观察：已基于全量口径产出“零曝光 22 页逐页优化表”，可直接按优先级执行。
- 数据（四端）：
  - GSC：复用 17:33 口径（`8/30=26.7%`）。
  - Vercel：复用 17:33 口径。
  - Bing Webmaster：复用 17:33 口径。
  - Google Trends：复用 17:33 口径。
- 表现对比（vs 17:33）：数据不变；执行层新增可落地优化清单。
- 建议动作（含优先级）：
  - `P0` 按新清单先执行 10 页（实体页）最小改动。
  - `P1` 执行 8 页 guide 的内链与问句化。
  - `P2` 对 3 个 3/29 修复页做轻量增强并观察。
- 执行动作状态：
  - `DONE`：新增优化清单 `docs/ops-center/06-zero-exposure-22-optimization-2026-04-02.md`。
  - `IN_PROGRESS`：外链生效复核登记；社媒剩余待回复巡检。
  - `TODO`：按清单进入 P0 页面改动执行。
  - `BLOCKED`：Reddit 非登录链路 `curl 403`。
  - `SKIP`：无。

### 2026-04-02 17:43
- 观察：已完成零曝光 P0 首批 10 页的“最小改动”执行（9 卡 + 1 relic），并补了 `/cards` 的高意图直达入口。
- 数据（四端）：
  - GSC：复用 17:33 口径（`8/30=26.7%`，本轮为结构优化，非即时流量动作）。
  - Vercel：复用 17:33 口径。
  - Bing Webmaster：复用 17:33 口径。
  - Google Trends：复用 17:33 口径。
- 表现对比（vs 17:40）：无即时流量变化；页面可索引语义与站内导流入口显著增强。
- 变化原因（上涨/下滑驱动）：本轮集中修复“标题/首段意图 + 内链入口”缺口，属于中短周期生效项。
- 建议动作（含优先级）：
  - `P1` 按清单继续执行 8 页 guides 微调（问句化 + 内链补位）。
  - `P1` 维持不扩量并等待下个采样窗复测 22 页变化。
- 执行动作状态：
  - `DONE`：`app/cards/[slug]/page.tsx` 新增 9 张零曝光卡的 SEO/intro/question links 覆盖。
  - `DONE`：`app/relics/[slug]/page.tsx` 新增 `pocketwatch` 的 SEO/intro/question links 覆盖。
  - `DONE`：`app/cards/page.tsx` 新增 “High-Intent Card Routes”（桌面 + 移动）入口导流块。
  - `DONE`：`pnpm lint` 通过（仅既有脚本/生成文件 warning，无新增 error）。
  - `IN_PROGRESS`：外链生效复核登记；社媒剩余待回复巡检。
  - `TODO`：执行 P1 8 页 guides 微调。
  - `BLOCKED`：Reddit 非登录链路 `curl 403`。
  - `SKIP`：无。

### 2026-04-02 17:45
- 观察：已完成零曝光优化清单的 `P1`（8 个 guides 页面）最小改动执行，重点是问句化与内链补位。
- 数据（四端）：
  - GSC：复用 17:33 口径（`8/30=26.7%`）。
  - Vercel：复用 17:43 口径。
  - Bing Webmaster：复用 17:43 口径。
  - Google Trends：复用 17:43 口径。
- 表现对比（vs 17:43）：无即时流量变化；guides 页面意图对齐度与导流链路增强。
- 建议动作（含优先级）：
  - `P2` 执行 3 个 3/29 修复聚合页轻量增强并观察。
  - `P1` 下个采样窗复测 22 页中是否出现首批 `0 -> >0`。
- 执行动作状态：
  - `DONE`：`shared/guidesData.ts` 完成 8 个 guides 的标题/描述/FAQ/relatedLinks 微调。
  - `DONE`：`pnpm lint` 通过（0 error，仅仓库既有 warning）。
  - `IN_PROGRESS`：外链生效复核登记；社媒剩余待回复巡检。
  - `TODO`：执行 P2 3 页轻量增强；等待采样窗数据回流。
  - `BLOCKED`：Reddit 非登录链路 `curl 403`。
  - `SKIP`：无。

### 2026-04-02 17:47
- 观察：已完成零曝光优化清单 `P2`（3 个 3/29 修复聚合页）轻量增强，维持“无侵入、小改动”原则。
- 数据（四端）：
  - GSC：复用 17:33 口径（`8/30=26.7%`）。
  - Vercel：复用 17:45 口径。
  - Bing Webmaster：复用 17:45 口径。
  - Google Trends：复用 17:45 口径。
- 表现对比（vs 17:45）：无即时流量变化；3 个聚合页意图语义与零曝光页导流链路增强。
- 建议动作（含优先级）：
  - `P1` 保持不扩量并等待下个采样窗复测（重点看 22 页是否出现首批转正）。
  - `P1` 继续外链生效登记与社媒剩余待回复巡检收口。
- 执行动作状态：
  - `DONE`：`app/relics/[slug]/page.tsx` 完成 `energy_relics_guide`、`card_draw_relics_guide`、`starter_relics_tier_list` 轻量增强（描述/首段/relatedLinks）。
  - `DONE`：`pnpm lint` 通过（0 error，仅仓库既有 warning）。
  - `IN_PROGRESS`：外链生效复核登记；社媒剩余待回复巡检。
  - `TODO`：进入观察窗并在下个采样点复核 22 页曝光变化。
  - `BLOCKED`：Reddit 非登录链路 `curl 403`。
  - `SKIP`：无。

### 2026-04-02 17:14
- 观察：完成一轮实时复核，GSC/Bing/Trends 主指标与上一版记录一致；Bing IndexNow 已从 0 恢复到 1（最近 9 小时）。
- 数据（四端）：
  - GSC：3 个月口径 `553 clicks / 3.61万 impressions / 1.5% CTR / 平均排名 8.8`（属性：`https://sts2guide.com/`，页面显示上次更新约 3.5 小时前）。
  - Vercel：最近 7 天 `562 visitors / 1,710 page views / 63% bounce rate`；Top Landing 继续由 `/`、`/news/slay-the-spire-2-beta-patch-v0-101-0-analysis`、`/guides` 承接。
  - Bing Webmaster：Search Performance（3 个月）`46 clicks / 2.4K impressions`；Sitemaps `1`、errors `0`、warnings `0`、URLs discovered `788`；IndexNow 最近 9 小时 `1`（`https://sts2guide.com/`，17:14 提交）。
  - Google Trends：`slay the spire 2`（US, 12 months）峰值仍为 `2026-03-08 = 100`，最近周 `2026-03-29 = 46`；相关上升查询仍含 `slay the spire 2 patch notes`（Breakout）。
- 异常与影响：闸门短板仍是“有曝光页面占比”全量口径未补齐；在补齐前仍按未过闸门处理，不扩量。
- 外链发布与收录跟进：
  - 当日外链动作（平台/链接/目标页）：`DONE` IndexNow 提交首页 `https://sts2guide.com/`（17:14）。
  - 已生效与未生效：`IN_PROGRESS`（Reddit/Steam 历史分发贴存活，X 新帖未执行）。
- 评论与回复（Reddit / X / Steam）：
  - 新评论数：`1+`（Steam 留言通知页显示总 1 条待处理项）。
  - 已回复数：`0`（本轮仅巡检，未发新回复）。
  - 待回复数：`2+`（Steam 讨论串 + Reddit 历史讨论延续）。
  - 重点评论与回复链接：
    - Steam: `https://steamcommunity.com/app/2868840/discussions/0/798965575663499797/`
    - Reddit: `https://www.reddit.com/r/slaythespire/comments/1s4swab/v01010_feels_like_a_direction_reset_not_just_a/`
- 执行动作状态：
  - `DONE`：站点可用性检查（HTTP 200）；四端复核（GSC/Vercel/Bing/Trends）；Vercel 监控快照落盘；IndexNow 提交；社媒巡检（Reddit/X/Steam）。
  - `IN_PROGRESS`：社媒待回复条目处理；外链生效复核。
  - `TODO`：补齐验证批“有曝光页面占比”全量页级口径；完成今日社媒回复落地并补登记。
  - `BLOCKED`：无。
  - `SKIP`：无。
- 验证结果：闸门结论维持 `未通过`（当前仍仅允许词池/模板/内链调整）。
- 下一步：优先补齐曝光页占比全量口径；若仍未过线，继续维持不扩量并登记决策。

## 记录模板

### 2026-04-02（历史记录迁移）
- 观察：站点在线，搜索与自然流量仍主要由首页与少数高表现内容页承接；闸门关键短板仍是“有曝光页面占比”。
- 数据（四端）：
  - GSC：3 个月口径 `553 clicks / 3.61万 impressions / 1.5% CTR / 平均排名 8.8`；索引概览显示 `72 indexed / 721 not indexed`。
  - Vercel：最近 7 天 `561 visitors / 1,708 page views / 63% bounce rate`；Top Landing 页含 `/`（181）、`/news/slay-the-spire-2-beta-patch-v0-101-0-analysis`（131）、`/guides`（107）。
  - Bing Webmaster：Search Performance（2026-01-02 至 2026-04-01）`46 clicks / 2.4K impressions`；Sitemap：`1`、`0 errors`、`0 warnings`、`788 URLs discovered`；IndexNow 最近 8 小时提交 `0`。
  - Google Trends：`slay the spire 2`（US, 12 months）在 `2026-03-08` 周达到 `100` 峰值，`2026-03-29` 周为 `46`；相关上升词包含 `slay the spire 2 patch notes`（Breakout）。
- 异常与影响：闸门口径下“有曝光页面占比”仍未过线（参考下限 `>=26.7%`），继续限制扩量；IndexNow 日内提交为 0，可能影响新页抓取加速。
- 外链发布与收录跟进：
  - 当日外链动作（平台/链接/目标页）：`TODO`（本次更新未新增发布）
  - 已生效与未生效：`TODO`（下次更新按平台做生效复核并补链）
- 评论与回复（Reddit / X / Steam）：
  - 新评论数：`1+`（Steam 留言通知页显示 1 条；Reddit 收件箱可见近期评论回复通知；X 通知流可访问）
  - 已回复数：`0`（本次更新未执行回复）
  - 待回复数：`2+`（Steam 1 条 + Reddit 至少 1 条高价值讨论）
  - 重点评论与回复链接：
    - Steam: `https://steamcommunity.com/app/2868840/discussions/0/798965575663499797/`
    - Reddit: `https://www.reddit.com/r/slaythespire/comments/1s4swab/v01010_feels_like_a_direction_reset_not_just_a/`
- 执行动作状态：
  - `DONE`：完成四端巡检；完成站点可用性检查；完成闸门状态初判并同步看板；完成 Reddit/X/Steam 巡检。
  - `IN_PROGRESS`：社媒待回复条目处理。
  - `TODO`：下一次巡检；补齐曝光页占比全量口径；外链生效核验与补链登记；按闸门结果决定是否登记新决策。
  - `BLOCKED`：无。
  - `SKIP`：无。
- 验证结果：闸门结论 `未通过`（按当前可得口径：收录率达标、前30页数达标、曝光页占比未达标）；继续执行“仅词池/模板/内链调整”。
- 下一步：下次巡检优先补齐页级曝光全量数据与社媒回复清单，若仍未过线则在决策日志登记“继续不扩量”。

### 2026-04-02 HH:mm（模板）
- 观察：
- 数据（四端）：
  - GSC：
  - Vercel：
  - Bing Webmaster：
  - Google Trends：
- 表现对比（vs 上次/近7天）：
- 变化原因（上涨/下滑驱动）：
- 建议动作（含优先级）：
- 异常与影响：
- 外链发布与收录跟进：
  - 当日外链动作（平台/链接/目标页）：
  - 已生效与未生效：
- 评论与回复（Reddit / X / Steam）：
  - 新评论数：
  - 已回复数：
  - 待回复数：
  - 重点评论与回复链接：
- 执行动作状态：
  - `DONE`：
  - `IN_PROGRESS`：
  - `TODO`：
  - `BLOCKED`：
  - `SKIP`：
- 验证结果：
- 下一步：

---

## 历史日志（已合并来源）
- 原始日志目录：`ops-logs/`
- 历史文档：`docs/archive/ops-logs-snapshots/`
