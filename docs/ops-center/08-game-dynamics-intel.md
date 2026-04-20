# Game Dynamics Intel（近期动态情报台账）

> 用途：沉淀“已经关注过的近期游戏动态”，避免下次巡检重复找同一批新闻/patch/社媒信号。
> 使用规则：每次做“近期游戏动态巡检”前，先看本页；只补新增增量，不重复整理已记录条目。
> 记录粒度：只记会影响站点动作的动态，不记纯噪音。

## 记录字段（强制）
- `日期`：事件发生或公开时间
- `来源`：官方公告 / Steam 新闻 / SteamDB / 官方社媒
- `标题`：事件名称
- `摘要`：一句话说明发生了什么
- `影响判断`：对站点意味着什么
- `内容动作`：发新闻页 / 补内链 / 提交 IndexNow / 继续观察
- `状态`：`NEW` / `TRACKING` / `ACTIONED` / `SKIP`
- `链接`：原始来源链接

## 当前已关注情报

### 2026-04 近窗

| 日期 | 来源 | 标题 | 摘要 | 影响判断 | 内容动作 | 状态 | 链接 |
|---|---|---|---|---|---|---|---|
| 2026-04-18 | Steam 新闻 | `Neowsletter - April 2026` | 官方月报明确过去一个月重点都在修重大问题、改反馈系统、打磨美术，并承接到最近一轮 live patch 后的持续打磨。 | 这是比单条 patch notes 更高层的方向信号，说明近期内容不该只盯数值改动，还要同步修正文案里对“当前阶段”的描述。 | 补进 patch/news 语境；后续写 patch 解读时引用为背景，不单独抢发新页。 | `TRACKING` | https://store.steampowered.com/news/app/2868840/view/798967297093116494 |
| 2026-04-17 | Steam 新闻 | `重大更新1号 - 版本0.103.2` | 过去一个月 beta 分支累计的改动、修复与平衡调整已正式并入主分支。 | 这已经把“最新明确补丁口径”从 `v0.103.0` 推进到 `v0.103.2`；站内首页、builds、patch、cards 等当前仍写 `0.103.0` 的内容出现过时风险。 | `P0` 更新站内 patch 口径与相关摘要；补新闻页或 patch hub 承接，并在完成后提交 IndexNow。 | `NEW` | https://store.steampowered.com/news/app/2868840/view/798967297093041491 |
| 2026-04-16 | Steam 新闻 | `Beta Hotfix Patch Notes - v0.103.1` | `0.103.0` 后紧接着又有一轮 beta hotfix。 | 说明 `0.103.x` 这一波不是单点 patch，而是连续修正链；做内容时不能停留在 `0.103.0` 单版本视角。 | 作为 `0.103.2` 的前置脉络保留，不单独起稿。 | `TRACKING` | https://store.steampowered.com/news/app/2868840/view/798967297092965705 |
| 2026-04-10 | SteamDB | `v0.103.0` 信号出现 | SteamDB 近期轨迹已指向 `Beta Patch Notes - v0.103.0`，但正式 patch notes 仍未在可核验官方页面落地。 | 高优先级跟踪信号；值得提前准备受影响实体页和新闻结构，但还不适合抢发模糊新闻。 | 继续观察；正式 patch notes 一落地就发新闻页，并补受影响实体页内链 + IndexNow。 | `TRACKING` | https://steamdb.info/app/2868840/patchnotes/ |
| 2026-04-03 | SteamDB | Build `22629137` | `public-beta` 分支出现新 build，说明 beta 仍在持续推进。 | 说明近窗内仍有静默变动，站点巡检不能只盯 Steam 正式新闻。 | 继续观察；等待是否转成正式 patch notes。 | `TRACKING` | https://steamdb.info/patchnotes/22629137/ |

### 2026-03 近窗

| 日期 | 来源 | 标题 | 摘要 | 影响判断 | 内容动作 | 状态 | 链接 |
|---|---|---|---|---|---|---|---|
| 2026-03-27 | SteamDB / 官方 patch notes | `Beta Patch Notes - v0.101.0` | 一轮高价值 beta patch，包含平衡调整、地图生成修正、多个角色/卡/relic 改动。 | 高价值内容源；适合拆新闻页和受影响实体页补链。 | 已有相关内容基础；后续复查哪些实体页仍未承接到位。 | `ACTIONED` | https://steamdb.info/patchnotes/22526470/ |
| 2026-03-14 | SteamDB / 官方 patch notes | `Beta Hotfix Patch Notes - v0.99.1` | beta 分支热修，说明开发团队在快速接反馈。 | 说明 beta 分支节奏快，后续应持续盯 patch note 链。 | 保留跟踪，不单独重复起稿。 | `SKIP` | https://steamdb.info/patchnotes/22340209/ |
| 2026-03-13 | SteamDB / 官方 patch notes | `Beta Patch Notes - v0.99` | `public-beta` 正式进入一轮试验性 patch 节奏。 | 是当前 beta 链的起点信号，适合作为后续 patch 追踪起点。 | 记录基线，不重复产出。 | `SKIP` | https://steamdb.info/patchnotes/22321696/ |
| 2026-03 | Steam News | `The Neowsletter - March 2026` | 官方月度长文，通常会埋后续 patch / 设计方向线索。 | 中高价值背景资料，适合为后续新闻和解读补上下文。 | 后续写新闻或解读时引用，不单独重复整理。 | `TRACKING` | https://store.steampowered.com/news/app/2868840/view/502852451136700526 |
| 2026-03 | 官方社媒 | `first BIG balance pass` | Mega Crit 官方 X 明确表示第一轮大平衡已上 beta branch，并提到 `Phobia Mode`、大量 bug/crash fixes、art/VFX 更新。 | 这类社媒信息容易被漏，但对内容动作很关键，说明正式 patch notes 可能很快跟进。 | 继续观察；若后续有正式 patch note，优先补“平衡轮次”相关新闻。 | `TRACKING` | https://x.com/MegaCrit/status/2034809941241077810 |

## 下次巡检前必读
- 先看本页 `状态=TRACKING/NEW` 的条目，优先判断是否出现“已落地官方口径”。
- 若本次发现的只是旧条目补证据，不要重复记一遍；直接更新原条目的 `摘要 / 影响判断 / 内容动作 / 状态`。
- 只有当事件对站点动作有新增影响时，才新增新条目。
