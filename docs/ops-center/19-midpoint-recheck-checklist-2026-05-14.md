# 2026-05-14 四端中期复采 Checklist

> 建立时间：2026-05-08 10:39
> 复采日期：2026-05-14
> 目的：验证 2026-05-08 入口页轻改是否开始产生真实承接信号。复采前不继续改页面，避免数据归因混乱。

## 1. 执行前规则

- 必须先读取：
  - `00-dashboard.md`
  - `01-daily-log.md`
  - `17-quantified-seo-execution-plan.md`
  - `18-keyword-evidence-ledger.md`
  - 本文件
- 四端必须同时尝试采集：`GSC + Vercel + Bing Webmaster + Google Trends`
- 任一平台不可用，必须标 `BLOCKED`，写明原因、影响范围、补采时间。
- 禁止用历史快照冒充 2026-05-14 实时结果。
- 禁止在复采前或复采中追加页面改动。

## 2. 基线

基线日期：2026-05-07

| 指标 | 基线 |
|---|---:|
| GSC clicks | 866 |
| GSC impressions | 6.31万 |
| GSC CTR | 1.4% |
| GSC 平均排名 | 8.9 |
| Vercel Visitors | 2,087 |
| Vercel PV | 4,675 |
| Vercel Bounce Rate | 79% |
| 有曝光页面占比 | 26.7%（8/30，历史口径） |

2026-05-14 检查线：

- GSC clicks `>= 900`
- GSC impressions 不低于 `6.31万`
- CTR `>= 1.4%`
- 平均排名 `<= 9.2`
- Vercel Visitors 跌幅 `<= 10%`
- Bounce Rate `<= 79%`
- 有曝光页面占比 `>= 30%`
- `/builds`、`/patches`、`/tier-lists` 任一出现 GSC 或 Vercel 改善

## 3. GSC 复采

### 3.1 必采维度

- 效果总览：clicks / impressions / CTR / average position
- 查询：Top queries，重点导出或记录以下词：
  - `sts2 guide`
  - `slay the spire 2 guide`
  - `slay the spire 2 wiki`
  - `slay the spire 2 builds`
  - `sts2 builds`
  - `slay the spire 2 cards`
  - `card list`
  - `slay the spire 2 tier list`
  - `slay the spire 2 patch notes`
  - `slay the spire 2 relics`
- 页面：重点记录：
  - `/`
  - `/builds`
  - `/cards`
  - `/tier-lists`
  - `/patches`
  - `/relics`
  - `/news/slay-the-spire-2-beta-patch-v0-104-0-analysis`
- 国家 / 地区
- 设备
- 搜索结果呈现
- 索引覆盖
- Rich Results / Breadcrumbs / FAQ

### 3.2 判定

- 若 `/builds`、`/cards`、`/tier-lists`、`/patches`、`/relics` 任一进入 GSC Top Page 或点击/曝光明显上涨，标 `入口承接改善`。
- 若首页 `/` 继续承接大部分 guide/wiki 查询，但 CTR 低于 `1.0%`，标 `首页 snippet 风险`，但仍不得直接改，需先写动作建议。
- 若 `wiki` impressions `>= 300`，更新 `18-keyword-evidence-ledger.md`，并检查是否满足 `/wiki` 触发条件。

## 4. Vercel 复采

### 4.1 必采维度

- Visitors
- Page Views
- Bounce Rate
- Top Landing Pages
- Top Exit Pages
- Referrers
- Countries
- Devices
- 异常时间段

### 4.2 重点页面

- `/`
- `/guides`
- `/builds`
- `/cards`
- `/tier-lists`
- `/patches`
- `/relics`
- `/news/slay-the-spire-2-beta-patch-v0-104-0-analysis`

### 4.3 判定

- 若 `/builds`、`/cards`、`/tier-lists`、`/patches`、`/relics` 任一 Top Landing 明显上升，标 `入口页站内承接改善`。
- 若 Bounce Rate 仍 `>= 80%`，标 `承接质量风险`。
- 若 Singapore 占比仍异常偏高，继续标 `数据噪音风险`，不得把 Visitors 增减直接当作用户真实增长。

## 5. Bing Webmaster 复采

### 5.1 必采维度

- Search Performance
- Keywords
- Pages
- Index Coverage
- Sitemaps
- URL Submission
- URL Inspection
- IndexNow 接收状态

### 5.2 重点词

- `slay the spire 2 builds`
- `slay the spire 2 guide`
- `slay the spire 2 cards`
- `slay the spire 2 tier list`
- `slay the spire 2 patch notes`
- `slay the spire 2 relics`

### 5.3 判定

- 若 Bing 仍不可达，标 `BLOCKED`，保留 Ref / 错误时间。
- 若 URL Submission 恢复，补提交 2026-05-08 改过的 5 个入口页和最新 patch 页。
- 若 IndexNow 有接收记录，记录最近提交时间和 URL 数。

## 6. Google Trends 复采

### 6.1 必采词组

时间窗建议：US / past 30 days；必要时补 US / past 12 months。

- `slay the spire 2`
- `sts2`
- `sts2 guide`
- `slay the spire 2 guide`
- `slay the spire 2 wiki`
- `slay the spire 2 builds`
- `slay the spire 2 cards`
- `slay the spire 2 tier list`
- `slay the spire 2 patch notes`

### 6.2 必看输出

- Interest over time
- Regional interest
- Related topics
- Related queries
- Rising / Breakout 查询

### 6.3 判定

- 只把 Trends 中出现的词升级为 `WEAK_SIGNAL` 或 `CONFIRMED`，未出现的词不升级。
- 若 `wiki` 相关词仍无明显趋势，只维持 `WEAK_SIGNAL`，不得建 `/wiki`。
- 若出现新高意图词，先写入 `18-keyword-evidence-ledger.md` 为 `CANDIDATE` 或 `WEAK_SIGNAL`，不得当天直接改页面。

## 7. 关键词证据台账更新

复采后必须更新 `18-keyword-evidence-ledger.md`：

- 保留或更新每个词的等级
- 新增来源和时间
- 若降级，写明原因
- 若升级，写明触发指标
- 若仍缺证据，维持 `CANDIDATE` / `REJECTED`

## 8. 输出格式

复采结果必须按以下顺序输出：

1. 当前情况分析
2. 原因判断（含置信度）
3. 建议动作（含预期收益与不执行代价）
4. DONE / BLOCKED / TODO 清单
5. 关键词证据等级变化
6. 是否允许页面动作

## 9. 页面动作闸门

复采后只有满足以下任一条件，才允许提出页面改动：

- 某个 `CONFIRMED` 词有曝光但 CTR 明显低于同组基线
- 某个主落地页有曝光增长但 landing / bounce 明显差
- 某个 `WEAK_SIGNAL` 词达到升级条件
- patch 内容出现官方新版本，触发内容时效更新

仍禁止：

- 无数据猜词
- 新建 `/wiki`
- 大批量扩页
- 同时改多个不相关页面导致归因混乱
