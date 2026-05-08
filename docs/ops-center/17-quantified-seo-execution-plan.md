# STS2 Guide 量化 SEO 执行方案

> 生效日期：2026-05-08
> 适用周期：2026-05-08 ~ 2026-05-21
> 当前原则：泛词页做骨架，长尾页拿点击；未过闸门前不扩量。

## 0. SEO 数据证据硬规则

- SEO 关键词必须以真实数据为准，禁止凭“听起来合理”或页面定位直接当作目标词。
- 可作为关键词执行依据的数据源：
  - GSC 查询 / 页面数据
  - Bing Webmaster 查询 / 页面数据
  - Google Trends 相关查询 / 相关主题
  - 站内 Vercel landing / referrer 数据
  - 已记录的历史日志或数据快照
  - 明确可复查的竞品公开搜索结果
- 不能作为主关键词依据：
  - 单纯主观判断
  - 只因为文案自然就写入目标词
  - 只因为竞品页面这样命名
  - 未标注时间和来源的历史印象
- 若关键词没有数据证据，只能标为 `候选词` 或自然描述，不能写入 title / H1 / 首段作为 SEO 主目标。
- 每次新增、替换或强化关键词时，必须同步写明来源、时间和判断等级：`CONFIRMED`、`WEAK_SIGNAL`、`CANDIDATE`、`REJECTED`。

## 1. 当前状态

### 1.1 已做到的程度

基线日期：2026-05-07

- `DONE` 搜索侧基线：GSC `866 clicks / 6.31万 impressions / CTR 1.4% / 平均排名 8.9`
- `DONE` 站内流量基线：Vercel `Visitors 2,087 / PV 4,675 / Bounce Rate 79%`
- `DONE` 内容时效：已同步官方 `v0.104.0 beta` patch，并提交 IndexNow
- `DONE` 页面骨架：已有 `/builds`、`/cards`、`/tier-lists`、`/patches`、`/relics` 等泛词入口
- `DONE` 验证批部分闸门：收录率与前 30 名页面数曾达到基线
- `BLOCKED` Bing Webmaster：2026-05-07 服务不可达，Search Performance / URL Submission 未能实时补采
- `BLOCKED` Google Trends：2026-05-07 触发 `/sorry` 人机验证，趋势信号未能实时补采
- `TODO` 关键缺口：有曝光页面占比仍低于 `40%`，入口页是否能承接泛词还未被数据证明

### 1.2 当前不做的事

- 不做大批量新增页面
- 不做站点级重构
- 不立即新增 `/wiki`
- 不把竞品泛词路线当作主攻方向
- 不在无证据时重写大量长尾页

## 2. 目标与指标

### 2.1 周期目标

到 2026-05-21 复盘时，验证“泛词入口 + 长尾主攻”是否值得继续轻维护。

### 2.2 量化指标

| 指标 | 当前基线 | 2026-05-14 检查线 | 2026-05-21 决策线 | 数据源 |
|---|---:|---:|---:|---|
| GSC clicks | 866 | >= 900 | >= 996（+15%） | GSC |
| GSC impressions | 6.31万 | 不低于 6.31万 | >= 6.94万（+10%） | GSC |
| CTR | 1.4% | >= 1.4% | >= 1.5% | GSC |
| 平均排名 | 8.9 | <= 9.2 | <= 8.9 | GSC |
| Vercel Visitors | 2,087 | 跌幅 <= 10% | 跌幅 <= 5% 或止跌 | Vercel |
| Bounce Rate | 79% | <= 79% | <= 75% | Vercel |
| 泛词入口承接 | 未证明 | `/builds`、`/patches`、`/tier-lists` 任一出现改善 | 至少 1 个进入 GSC Top Page 或 Vercel Top Landing 明显上升 | GSC / Vercel |
| 有曝光页面占比 | 26.7%（8/30，历史口径） | >= 30% | >= 40% | GSC |
| Bing Search Performance | BLOCKED | 平台恢复后完成补采 | 恢复后不下滑 | Bing Webmaster |
| Trends 意图词 | BLOCKED | 平台恢复后完成补采 | 至少能映射到现有主入口 | Google Trends |

## 3. 关键词分层

### 3.1 泛词入口层

目标：建立主题骨架，不以短期排名第一为目标。

| 关键词簇 | 主落地页 | 证据等级 | 证据来源 | 验收标准 |
|---|---|---|---|---|
| slay the spire 2 builds | `/builds` | `CONFIRMED` | Bing/GSC 历史日志与词页映射 | Title / H1 / 首段命中；链接到具体 build / patch 影响页 |
| slay the spire 2 cards | `/cards` | `CONFIRMED` | Google Trends 历史记录与查询页规划 | Title / H1 / 首段命中；链接到关键卡牌与 patch 变动 |
| slay the spire 2 tier list | `/tier-lists` | `CONFIRMED` | Google Trends 历史记录与词页映射 | Title / H1 / 首段命中；说明版本适用范围 |
| slay the spire 2 patch notes | `/patches` | `CONFIRMED` | GSC/Bing 日志与 patch 内容更新记录 | Title / H1 / 首段命中；最新 patch 可见 |
| slay the spire 2 relics | `/relics` | `CONFIRMED` | 查询页规划与 GSC/Bing 历史日志 | Title / H1 / 首段命中；链接到关键遗物与角色关系 |
| slay the spire 2 wiki | `/` | `WEAK_SIGNAL` | 2026-03-05 日志记录新增展示与少量点击信号 | 暂由首页轻承接；未触发数据条件前不新建 `/wiki` |
| guide hub / searchable database | 无主落地页 | `REJECTED` | 2026-05-08 复核未见独立搜索量证据 | 只能作为自然描述，不能作为 SEO 主关键词 |

### 3.2 长尾主攻层

目标：继续拿真实点击与低竞争排名。

- Patch 长尾：`v0.104.0 patch notes`、`beta patch analysis`
- 卡牌长尾：`Conflagration`、`Drum of Battle`、`Parry`
- 敌人与机制长尾：`Doormaker`、`Ascension tuning`
- Build 长尾：`Ironclad build`、`Ancient build`、`beginner build`
- 问题长尾：`what changed`、`is it nerfed`、`best after patch`

## 4. 执行矩阵

### 4.1 P0：入口页轻改

时间：2026-05-08 ~ 2026-05-10

范围：

- `/builds`
- `/cards`
- `/tier-lists`
- `/patches`
- `/relics`

动作：

- 调整 title / H1 / 首段，使泛词和当前版本范围明确
- 增加到长尾页的语义内链
- 从 v0.104.0 新闻页反链到对应入口页
- 从入口页反链回最新 patch

验收：

- `pnpm lint` 通过
- `pnpm build` 通过
- 新增或改动 URL 已在 sitemap 内
- IndexNow 提交受影响 URL
- 变更记录写入 `01-daily-log.md`

### 4.2 P0：四端复采

时间：2026-05-14

动作：

- GSC：复采 clicks / impressions / CTR / position / queries / pages / countries / devices / search appearance / indexing / rich results
- Vercel：复采 Visitors / PV / Bounce / Top Landing / Top Exit / referrers / countries / devices
- Bing：复采 Search Performance / Index Coverage / Sitemaps / URL Submission / URL Inspection / IndexNow
- Trends：复采核心词、品牌词、意图词、区域差异、相关主题与相关查询

验收：

- 四端完成项标 `DONE`
- 无法采集项标 `BLOCKED`，写明原因、影响范围、补采时间
- 不用历史快照冒充实时结果

### 4.3 P1：词页映射复核

时间：2026-05-14 ~ 2026-05-16

动作：

- 检查泛词是否落到唯一主落地页
- 检查长尾页是否回链到主入口
- 对抢词页执行 `KEEP / REFRESH / DEMOTE / MERGE / REMOVE_OR_REDIRECT` 分级

验收：

- 更新 `13-keyword-to-page-map.md`
- 若涉及旧页治理，更新 `11-page-governance-table.md`
- 每个调整必须有数据或内容时效证据

### 4.4 P1：决策复盘

时间：2026-05-21

动作：

- 对照本方案第 2 节指标复盘
- 判断继续轻维护、进入止损、或允许小范围恢复投入

继续轻维护条件：

- 满足 `15-maintenance-and-stoploss-plan.md` 任意 2 条继续投入线

止损条件：

- 触发 `15-maintenance-and-stoploss-plan.md` 任意 2 条止损线

验收：

- 新增决策 ID
- 更新 `00-dashboard.md`、`01-daily-log.md`、`03-roadmap.md`、`NOW.md`

## 5. 决策记录规则

以下情况必须新增或更新决策日志：

- 改变主攻方向，例如从长尾主攻改为泛词主攻
- 新增 `/wiki` 或其他结构性入口
- 扩量新增页面
- 进入止损模式
- 从轻维护恢复到更高投入
- 修改 2026-05-21 复盘指标或止损线

以下情况只写执行日志，不新增决策：

- 单个入口页 title / H1 / 首段轻改
- 单次 IndexNow 提交
- 单次四端采集结果
- 平台暂时 `BLOCKED`

## 6. `/wiki` 触发条件

当前不新建 `/wiki`。

只有满足以下任意 2 条，才允许进入 `/wiki` 方案讨论：

- GSC 出现 `wiki` 相关查询且 impressions >= 300
- 首页承接 `wiki` 相关查询但 CTR < 1.0%
- `/builds`、`/cards`、`/tier-lists`、`/patches` 中至少 2 个入口页进入 GSC Top Pages
- 竞品 `sts2-wiki.org` 在公开搜索中持续压住核心泛词，且我们已有页面无法承接

即使触发，也必须先写方案与决策，不得直接改结构。

## 7. 执行看板

| 任务 | 状态 | DDL | 验收 |
|---|---|---|---|
| 入口页轻改方案落地 | TODO | 2026-05-10 | 5 个入口页完成轻改，lint/build 通过，IndexNow 提交 |
| 四端中期复采 | TODO | 2026-05-14 | DONE/BLOCKED 状态完整，不能复用历史口径 |
| 词页映射复核 | TODO | 2026-05-16 | `13-keyword-to-page-map.md` 完成更新 |
| 2026-05-21 决策复盘 | TODO | 2026-05-21 | 新增决策 ID，判断继续/止损/小范围恢复 |
