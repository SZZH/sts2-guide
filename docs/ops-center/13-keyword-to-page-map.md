# STS2 Guide 关键词映射表

> 目的：把高价值搜索意图固定到唯一主落地页，避免旧页面继续抢词。
> 规则：每个主关键词只允许 1 个主落地页；其余页面只能作为支撑页或解释页存在。

## 1. 核心主线关键词

| 关键词 | 主落地页 | 支撑页 | 禁止抢词页 | 备注 |
| --- | --- | --- | --- | --- |
| `slay the spire 2 builds` | `/builds` | `/guides` `/characters` `/cards` `/relics` | `co-op` 页、`release-date` 页、纯 mechanics 页 | 这是当前最高优先级主词之一 |
| `slay the spire 2 build guide` | `/builds` | `/guides` `/characters` | 旧 launch-week news、reference 页 | 由 `/builds` 承接，`/guides` 做任务支撑 |
| `sts2 builds` | `/builds` | `/guides` `/characters` | 旧 news / co-op / release-date | 与主 builds 词同路由处理 |
| `slay the spire 2 tier list` | `/tier-lists` | `/builds` `/characters` `/cards` | 旧 `cards-tier-list` 页面（重写前不能继续抢词） | tier 主词统一收口到 `/tier-lists` |
| `sts2 tier list` | `/tier-lists` | `/builds` `/characters` | co-op / release-date / patch 时间线页 | 与主 tier 词同路由 |
| `slay the spire 2 patch notes` | `/patches` | `/news/slay-the-spire-2-steamdb-patch-tracker` `/news/slay-the-spire-2-hotfix-patch-notes` | 首页、`release-date`、co-op | `/patches` 是决策入口，news 页是证据层 |
| `sts2 patch` | `/patches` | `/news/slay-the-spire-2-steamdb-patch-tracker` | 旧 launch-time/release-date | patch 主词统一到 `/patches` |
| `slay the spire 2 beginner guide` | `/guides` | `/news/slay-the-spire-2-first-run-guide-act-1-priorities` `/news/best-starter-character-slay-the-spire-2-early-access` | co-op、release-date、cards/relics 列表页 | beginner 主意图先到 guide hub，再分流 |
| `best starter character slay the spire 2` | `/news/best-starter-character-slay-the-spire-2-early-access` | `/characters` `/guides` | `/builds` `/cards` `/relics` | 角色选择是单独主资产页 |
| `slay the spire 2 first run` | `/news/slay-the-spire-2-first-run-guide-act-1-priorities` | `/guides` `/characters` | 旧 launch page、co-op page | 用 first-run 主资产页承接 |

## 2. 角色与 archetype 关键词

| 关键词类型 | 主落地页 | 支撑页 | 禁止抢词页 | 备注 |
| --- | --- | --- | --- | --- |
| `ironclad build` / `silent build` / `regent build` / `necrobinder build` / `defect build` | `/builds` | `/characters` `/cards/character/[slug]` | 纯 patch 页、release-date、co-op | 当前先由 `/builds` 总入口承接，后续可拆角色 build 子页 |
| `character tier list` | `/tier-lists` | `/characters` `/builds` | 旧 tier list 页 | 不单独抢词到 `/characters` |
| `archetype tier list` | `/tier-lists` | `/builds` | cards/relics/reference 页 | archetype 先不单独新建路由 |

## 3. Reference 支撑关键词

| 关键词 | 主落地页 | 支撑页 | 禁止抢词页 | 备注 |
| --- | --- | --- | --- | --- |
| `sts2 cards` / `slay the spire 2 cards` | `/cards` | `/builds` `/tier-lists` `/characters` | release-date、co-op、patch hub hero | reference 词保留，但不再抢主决策词 |
| `sts2 relics` / `slay the spire 2 relics` | `/relics` | `/builds` `/tier-lists` `/patches` | co-op/release-date | relic 词由 reference 层承接 |
| `sts2 potions` | `/potions` | `/builds` `/cards` `/relics` | 首页 hero、news hero | potions 做支撑词 |
| `exhaust sts2` / `drawpile sts2` / `retain sts2` | `/mechanics` 或对应 `/guides/[slug]` | `/builds` `/guides` | 首页 hero、release-date、co-op | mechanics 词只能是支撑层词，不抢 builds/tier/patch |

## 4. 已降权关键词

| 关键词 | 当前策略 | 原因 |
| --- | --- | --- |
| `slay the spire 2 co-op` / `slay the spire 2 multiplayer` | 保留搜索资产，但降为 support，不再当主入口 | 当前主站问题不是 co-op 承接不足 |
| `slay the spire 2 release date` | 保留搜索资产，但降为 support 页 | 需求已过热，不应继续占主入口 |
| `slay the spire 2 launch time` | 同上 | 时效性已过去 |

## 5. 使用规则

1. 新写页面前，先查本表是否已有主落地页
2. 若已有主落地页，新页面只能做支撑，不得重新抢主词
3. 若主词发生变化，先更新本表，再改页面
4. 任何旧页面若仍在抢主词，必须在治理表中标记并处理

