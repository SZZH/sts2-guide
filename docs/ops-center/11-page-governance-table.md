# STS2 Guide 页面级旧页治理表

> 目的：把关键页面逐一映射到 `KEEP / REFRESH / DEMOTE / MERGE / REMOVE_OR_REDIRECT`，作为后续代码与内容改造的执行清单。
> 使用方式：先处理 `P0`，再处理 `P1`，最后处理 `P2`。每完成一项，需要回填“执行状态 / 负责人 / 时间戳 / 结果”。

## 状态定义

- `KEEP`：继续保留为主资产页，仅做增强
- `REFRESH`：主题正确，但结构/承接/版本说明需要重写
- `DEMOTE`：保留搜索或参考价值，但从主入口降级
- `MERGE`：内容重叠，合并到更强主资产页
- `REMOVE_OR_REDIRECT`：停止分发并下线或 301

## P0 页面（必须先处理）

| 页面 / slug | 当前角色 | 状态 | 核心风险 | 处理动作 | 路由动作 | 首页/导航动作 |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 主入口 | `REFRESH` | 内容陈列大于任务分流；高跳出背景下仍承接最大量入口；多个强承诺模块未完全兑现 | 重做首屏为任务型分流；增加版本与来源信任条；删除不能兑现的“Top Builds / Latest Balance Notes”式模块 | 不改 URL | 重新设计 hero、任务卡、精选区；移除旧 launch-week 堆叠模块 |
| `/guides` | 栏目页 | `REFRESH` | 目录感太强，用户需要自己找答案；缺少任务型路径 | 改成按任务分组：Beginner / Builds / Patch / Route / Mechanics | 不改 URL | 继续作为一级入口，但只展示任务入口，不展示大杂烩列表 |
| `/characters` | 栏目页 | `REFRESH` | 更像角色百科，不像角色决策中心；与 build/patch 关系弱 | 重写为角色选择与角色 build 分发页 | 不改 URL | 继续保留一级入口，但改文案与首屏逻辑 |
| `best-starter-character-slay-the-spire-2-early-access` | 新手决策页 | `REFRESH` | 词价值高，但 slug 和口径偏“过渡期”；结论不够强 | 升级为 Beginner 主资产页，明确当前版本推荐顺序与适用对象 | 保留 slug，必要时后续 canonical 到新版路径 | 从首页与 `/guides` 持续引流 |
| `slay-the-spire-2-first-run-guide-act-1-priorities` | 新手决策页 | `REFRESH` | 流量高但仍偏“launch-week 文章”；首屏没先回答“第一局先干嘛” | 升级为 Beginner 决策主资产，明确下一跳到 starter/build/route | 保留 slug | 首页与 `/guides` 重点引流 |
| `cards-tier-list.html` | 高意图旧页 | `REFRESH` | 公开口径仍带 `Based on STS1` / `24-48h after launch`，直接伤信任 | 重写为当前版本 tier list 体系；先去掉所有预发布表述 | 视重写路径决定是否 canonical；暂不删 | 先从强曝光入口降权，待重写完成后再恢复 |
| `slay-the-spire-2-multiplayer-coop-guide` | co-op 内容页 | `MERGE` | 与其他 co-op 页重复；仍占高价值入口位 | 与 `slay-the-spire-2-co-op-guide-how-it-works` 合并为单一 co-op hub | 301 到保留页 | 从首页、`/guides`、`/characters` 核心入口降级 |
| `slay-the-spire-2-co-op-guide-how-it-works` | co-op 内容页 | `MERGE` | 与上页重叠，分散搜索与内链信号 | 合并到单一 co-op hub | 301 到保留页 | 退出核心入口 |
| `slay-the-spire-2-release-date` | 过热历史页 | `DEMOTE` | 需求已满足，继续放在 hero 模块会浪费入口位 | 保留事实答案，但首屏只做“日期 + 去现在该看什么” | 不改 URL | 从首页 hero/主路径移除，降到 support/footer |

## P1 页面（入口重构后立即处理）

| 页面 / slug | 当前角色 | 状态 | 核心风险 | 处理动作 | 路由动作 | 导航动作 |
| --- | --- | --- | --- | --- | --- | --- |
| `/builds`（新建） | Build 主线入口 | `NEW` | 当前没有唯一的 builds 主资产页，`builds` 意图被分散消耗 | 新建角色 build hub + archetype 分发结构 | 新建路径 | 加入一级导航 |
| `/tier-lists`（新建） | Tier 主线入口 | `NEW` | tier list 需求没有被系统接住；现有页容易伤信任 | 新建 Characters / Beginner / Archetypes / Cards 四层结构 | 新建路径 | 加入一级导航 |
| `/patches`（新建或重构自 `/news` patch hub） | Patch 决策入口 | `NEW` | patch 流量目前主要落在新闻页，缺少“影响解释中心” | 建 patch hub，连接 patch timeline、影响页、被更新页面 | 新建路径或从 `/news` 派生 | 加入一级导航 |
| `slay-the-spire-2-steamdb-patch-tracker` | Patch 时间轴页 | `KEEP` | 当前价值清晰，但不能单独承担 patch 主入口 | 作为 patch hub 的时间轴资产保留；补影响页 CTA | 不改 URL | 从首页 hero 降到 patch hub 内部 |
| `slay-the-spire-2-hotfix-patch-notes` | Patch 解释页 | `KEEP` | 仍有价值，但不能占顶层入口 | 保留并补“what changed now / what to update now” | 不改 URL | 从首页 hero 降级 |
| `slay-the-spire-2-known-issues-and-fixes` | support 页 | `KEEP` | 搜索意图仍存在，但不属于主分流路径 | 保留为 support / troubleshooting 资产页 | 不改 URL | 从首页主任务路径降到 patch/support 次级入口 |
| `slay-the-spire-2-steam-deck-performance-guide` | device 页 | `KEEP` | 有设备专项价值，但不应抢主入口 | 保留为 device/support 页 | 不改 URL | 降到 support/device |
| `/cards` | reference 页 | `DEMOTE` | 参考层不该继续抢主路径 | 保留长尾价值，改成“build 支撑层” | 不改 URL | 从首页 hero 移除 |
| `/mechanics` | reference 页 | `DEMOTE` | 机制页有价值，但主入口优先级过高 | 保留并做“Need background?” 补充层 | 不改 URL | 从首页 hero 降级 |
| `/news` | 新闻总览 | `REFRESH` | 当前承接了过多长期意图；patch/news/support 混在一起 | 重构为“更新信息流 + patch hub 分发” | 不改 URL | 从一级导航调整为 Patch & Meta 的下层 |

## P2 页面（支撑层清洗）

| 页面类型 | 当前角色 | 状态 | 核心风险 | 处理动作 |
| --- | --- | --- | --- | --- |
| 卡牌详情页 `/cards/[slug]` | reference 深页 | `DEMOTE` | 长尾价值高，但与 build 场景关系没明确暴露 | 补“在哪些 build 中强 / 当前版本定位 / 相关决策页” |
| relic 详情页 `/relics/[slug]` | reference 深页 | `DEMOTE` | 仍偏资料页 | 补“适合谁 / 当前版本场景 / build 反链” |
| potion 详情页 `/potions` / 相关页 | reference 深页 | `DEMOTE` | 高层导航价值低 | 保留支撑价值，统一反链到角色与 build 页 |
| mechanics explainers | guide/reference 中层 | `DEMOTE` | 容易继续抢主入口 | 移到 `/guides` 的 Mechanics 分组末尾，并强化回流到 build/patch |
| 旧 launch-week 新闻页 | 历史信息页 | `DEMOTE` / `REMOVE_OR_REDIRECT` | 时效性弱、还可能误导新用户 | 逐篇判断：保留搜索价值的降级，不保留的下线或 301 |

## 风险审计规则（逐页打标）

命中以下任一条件，优先进入 `REFRESH` 或更严厉状态：

1. 页面仍带 `Based on STS1`、`check back at launch`、`within 24-48 hours of launch`
2. 页面标题承诺 `best / top / latest / updated daily`，但正文未兑现
3. 页面当前仍被首页、`/guides`、`/characters` 高位推荐
4. 搜索意图明显是决策型，但正文主要是背景说明或旧时效内容
5. 页面与其他 slug 存在明显重叠，导致搜索与内链分散

## 执行顺序

1. 先处理所有 `P0`
2. 再做 `P1` 的新入口与主资产页
3. 最后清洗 `P2` 支撑层

## 回填字段（执行时补）

| 页面 / slug | Owner | 执行状态 | 执行时间 | 结果摘要 | 后续验证 |
| --- | --- | --- | --- | --- | --- |
|  |  | `TODO / IN_PROGRESS / DONE / BLOCKED / SKIP` |  |  |  |

