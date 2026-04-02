# STS2 Guide 每日运营日志

> 用途：只记录事实与执行结果，避免信息散落在多个文件。
> 频率：每天至少两次（上午/下午）。

## 状态标记规范（强制）
- `DONE`：已完成
- `IN_PROGRESS`：进行中
- `TODO`：待执行
- `BLOCKED`：阻塞（必须写原因）
- `SKIP`：今日不做（必须写原因）

## 记录模板

### 2026-04-02（上午）
- 观察：站点在线，搜索与自然流量仍主要由首页与少数高表现内容页承接；闸门关键短板仍是“有曝光页面占比”。
- 数据（四端）：
  - GSC：3 个月口径 `553 clicks / 3.61万 impressions / 1.5% CTR / 平均排名 8.8`；索引概览显示 `72 indexed / 721 not indexed`。
  - Vercel：最近 7 天 `561 visitors / 1,708 page views / 63% bounce rate`；Top Landing 页含 `/`（181）、`/news/slay-the-spire-2-beta-patch-v0-101-0-analysis`（131）、`/guides`（107）。
  - Bing Webmaster：Search Performance（2026-01-02 至 2026-04-01）`46 clicks / 2.4K impressions`；Sitemap：`1`、`0 errors`、`0 warnings`、`788 URLs discovered`；IndexNow 最近 8 小时提交 `0`。
  - Google Trends：`slay the spire 2`（US, 12 months）在 `2026-03-08` 周达到 `100` 峰值，`2026-03-29` 周为 `46`；相关上升词包含 `slay the spire 2 patch notes`（Breakout）。
- 异常与影响：闸门口径下“有曝光页面占比”仍未过线（参考下限 `>=26.7%`），继续限制扩量；IndexNow 日内提交为 0，可能影响新页抓取加速。
- 外链发布与收录跟进：
  - 当日外链动作（平台/链接/目标页）：`TODO`（今日上午未新增发布）
  - 已生效与未生效：`TODO`（下午按平台做生效复核并补链）
- 评论与回复（Reddit / X / Steam）：
  - 新评论数：`1+`（Steam 留言通知页显示 1 条；Reddit 收件箱可见近期评论回复通知；X 通知流可访问）
  - 已回复数：`0`（上午未执行回复）
  - 待回复数：`2+`（Steam 1 条 + Reddit 至少 1 条高价值讨论）
  - 重点评论与回复链接：
    - Steam: `https://steamcommunity.com/app/2868840/discussions/0/798965575663499797/`
    - Reddit: `https://www.reddit.com/r/slaythespire/comments/1s4swab/v01010_feels_like_a_direction_reset_not_just_a/`
- 执行动作状态：
  - `DONE`：完成上午四端巡检；完成站点可用性检查；完成闸门状态初判并同步看板；完成 Reddit/X/Steam 巡检。
  - `IN_PROGRESS`：社媒待回复条目处理。
  - `TODO`：下午二次巡检；补齐曝光页占比全量口径；外链生效核验与补链登记；按闸门结果决定是否登记新决策。
  - `BLOCKED`：无。
  - `SKIP`：无。
- 验证结果：闸门结论 `未通过`（按当前可得口径：收录率达标、前30页数达标、曝光页占比未达标）；继续执行“仅词池/模板/内链调整”。
- 下一步：下午巡检优先补齐页级曝光全量数据与社媒回复清单，若仍未过线则在决策日志登记“继续不扩量”。

### 2026-04-02（下午）
- 观察：
- 数据（四端）：
  - GSC：
  - Vercel：
  - Bing Webmaster：
  - Google Trends：
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
