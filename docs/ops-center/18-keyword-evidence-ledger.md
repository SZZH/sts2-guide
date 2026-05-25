# STS2 Guide 关键词证据台账

> 建立时间：2026-05-08 10:30
> 规则：只记录有来源、时间和判断等级的关键词。没有数据证据的词不得作为 title / H1 / 首段 SEO 主目标。

## 1. 判断等级

- `CONFIRMED`：已有 GSC / Bing / Trends / Vercel / 历史日志中的明确查询、点击、曝光、趋势或 landing 证据。
- `WEAK_SIGNAL`：已有少量展示、少量点击、历史冒头或公开搜索可见信号，但不足以单独驱动结构改动。
- `CANDIDATE`：有竞品或公开搜索可见性，但本站暂无直接数据证据；只能观察，不能直接改 title / H1。
- `REJECTED`：当前未见独立搜索证据，或更适合做自然描述而非 SEO 目标词。

## 2. 当前关键词证据表

| 关键词 | 等级 | 来源与时间 | 当前主落地页 | 当前动作 | 下一次复核 |
|---|---|---|---|---|---|
| `sts2 guide` | `CONFIRMED` | GSC 2026-05-25：`131 clicks / 1,205 impressions`；GSC 2026-05-14：`115 clicks / 1,098 impressions`；GSC 2026-05-07：`92 clicks / 887 impressions` | `/` | 维持首页承接；止损模式下不再主动做 SEO 改写 | 2026-06-25 月度复盘 |
| `slay the spire 2 guide` | `CONFIRMED` | GSC 2026-05-25：`15 clicks / 1,034 impressions`；Bing 2026-05-14：`285 impressions / 32 clicks / 11.23% CTR / Avg Pos 2.93`；2026-03-05 日志：高展现低 CTR，展示上升、点击仍低 | `/`、`/guides` | 维持现有承接；止损模式下不再主动做结构性提质 | 2026-06-25 月度复盘 |
| `slay the spire 2 wiki` | `WEAK_SIGNAL` | 2026-03-05 日志：新增展示与少量点击信号；2026-05-08 竞品公开搜索可见；2026-05-14 四端复采未见足以新建 `/wiki` 的直接证据 | `/` | 暂由首页轻承接；不新建 `/wiki` | 触发 `/wiki` 条件时复议 |
| `slay the spire 2 builds` | `CONFIRMED` | Bing 2026-05-25：`1.6K impressions / 9 clicks / 0.58% CTR / Avg Pos 7.39`；Vercel 2026-05-25：`/builds` 近 7 天仅 `24 visitors`，未成为主承接页 | `/builds` | 2026-05-26 已补最小承接 CTA；不扩量，仅观察承接是否改善 | 2026-06-25 月度复盘 |
| `sts2 builds` | `CONFIRMED` | Bing 2026-05-14：`70 impressions / 1 click / 1.43% CTR / Avg Pos 5.01`；2026-04-14 Bing/GSC 历史日志与词页映射；与 builds 主词同路由 | `/builds` | 作为 builds close variant，不单独建页 | 2026-06-25 月度复盘 |
| `slay the spire 2 cards` | `CONFIRMED` | Vercel 2026-05-25：`/cards` 为近 7 天 Top Page `70 visitors`；Bing 2026-05-14：`25 impressions / 0 clicks / Avg Pos 9.28`；Google Trends 2026-05-14：`silent cards / defect cards / regent cards` 相关上升 | `/cards` | 维持现有承接；止损模式下不再主动提质 | 2026-06-25 月度复盘 |
| `card list` | `CONFIRMED` | Google Trends 2026-03-11：美国意图含 `card list / tier list` | `/cards` | 作为 cards 次级意图承接，不单独建页 | 2026-05-14 四端复采 |
| `slay the spire 2 tier list` | `CONFIRMED` | Google Trends 2026-05-25：`sts2 tier list` 继续出现在 rising queries；词页映射收口到 `/tier-lists` | `/tier-lists` | 2026-05-26 已更新到当前 v0.105 patch 口径，并补 patch/build/cards 分流 CTA | 2026-06-25 月度复盘 |
| `slay the spire 2 tier lists` / `tier lists` | `WEAK_SIGNAL` | Google Trends 2026-05-14：相关上升词继续出现 tier list 意图；2026-05-25 Trends 页面报错，暂无新证据 | `/tier-lists` | 作为 close variant，不单独建页 | 2026-06-25 月度复盘 |
| `slay the spire 2 patch notes` | `CONFIRMED` | Bing 2026-05-25：`sts 2 patch notes` 仍为可见查询；Google Trends 2026-05-25 rising queries 含 `slay the spire 2 patch notes`；2026-05-11 已同步官方 v0.105.1/v0.105.0 patch 内容 | `/patches` | 2026-05-26 已补 patch -> builds/tier/known issues 承接，不新增新页 | 2026-06-25 月度复盘 |
| `sts2 patch` | `WEAK_SIGNAL` | Bing 2026-05-14：close variant `sts 2 patch notes` 可见但无点击；词页映射与 patch 更新日志 | `/patches` | 作为 patch notes close variant，不单独建页 | 2026-06-25 月度复盘 |
| `slay the spire 2 relics` | `CONFIRMED` | 2026-03-17 历史关键词映射；2026-05-08 词页映射收口；当前 `/relics` 为查询页 | `/relics` | 继续观察，不扩量 | 2026-06-25 月度复盘 |
| `sts2 relics` | `WEAK_SIGNAL` | Bing 2026-05-14：`16 impressions / 0 clicks / Avg Pos 7.88`；词页映射与历史 SEO map | `/relics` | 作为 relics close variant，不单独建页 | 2026-06-25 月度复盘 |
| `hammer time slay the spire 2` / `sts2 hammer time` | `WEAK_SIGNAL` | GSC 2026-05-25：`hammer time slay the spire 2 (19 clicks / 473 impressions)`、`hammer time sts2 (11 / 269)` | 现有相关卡牌/攻略页 | 维持现有承接；止损模式下不新建页面 | 2026-06-25 月度复盘 |
| `book of five rings sts2` | `WEAK_SIGNAL` | GSC 2026-05-25：`sts2 book of five rings (13 clicks / 68 impressions)` | 现有相关遗物/攻略页 | 维持现有承接；止损模式下不新建页面 | 2026-06-25 月度复盘 |
| `stomp sts2` | `WEAK_SIGNAL` | GSC 2026-05-25：`sts2 stomp (12 clicks / 299 impressions)` | 现有相关卡牌/攻略页 | 维持现有承接；止损模式下不新建页面 | 2026-06-25 月度复盘 |
| `guide hub` | `REJECTED` | 2026-05-08 本地证据复核：未见独立搜索量证据 | 无 | 只能作为自然描述，不能作为 SEO 主目标 | 若 GSC/Bing/Trends 出现再复议 |
| `searchable database` | `REJECTED` | 2026-05-08 本地证据复核：未见独立搜索量证据 | 无 | 只能作为自然描述，不能作为 SEO 主目标 | 若 GSC/Bing/Trends 出现再复议 |

## 3. 首页相关结论

- 首页当前只确认承接 `sts2 guide` 与 `slay the spire 2 guide`。
- `slay the spire 2 wiki` 只有弱信号，允许轻承接，不允许新建 `/wiki` 或把 H1 改成 Wiki。
- `guide hub`、`searchable database` 没有独立搜索证据，不作为首页 SEO 目标词。
- 首页下一步不做结构改动；2026-05-25 已切换到止损模式，`/wiki` 仍不足以单独建页，且当前不再推进主动 SEO 调整。

## 4. 执行规则

1. 新增关键词前，先查本表。
2. 若关键词等级是 `REJECTED`，不得用于 title / H1 / 首段 SEO 主目标。
3. 若关键词等级是 `CANDIDATE` 或 `WEAK_SIGNAL`，只能轻承接或观察，不能触发结构改动。
4. 若关键词升级为 `CONFIRMED`，必须同步更新 `13-keyword-to-page-map.md` 和本表。
5. 每次四端复采后，必须更新本表等级或保留原等级并注明原因。
