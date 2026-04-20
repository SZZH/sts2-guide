# STS2 Guide 站点重构：旧页治理清单 + 新 IA 蓝图

> 目的：把站点从“内容可查”重构成“当前版本下的决策型攻略中枢”。
> 范围：本文件只定义治理与 IA 基线，不直接替代具体页面 PRD 或文案稿。
> 生效前提：以最新 `main` 为基线执行，先止血，再重构入口，再建立主线，最后清洗支撑层。

## 1. 结论先行

当前站点的系统性问题不是“流量不够”，而是以下四层错位叠加：

1. 搜索需求已经往 `builds / tier list / patch / beginner decision` 迁移，但站点主入口仍偏 `mechanic / reference / launch-week explainer`。
2. 首页与栏目页承担了过多“内容陈列”职能，没有优先完成“任务分流”。
3. 部分公开高意图页仍保留预发布 / 过时口径，会直接伤害信任。
4. Patch 驱动的更新、受影响页面回填、IndexNow / Bing 提交还没有形成固定闭环。

因此，本次重构目标不是“再多做一些内容”，而是：

- 让搜索用户 5 秒内找到当前版本下最需要的答案入口。
- 让高意图词拥有唯一主落地页，而不是被多个解释型页面分流。
- 让首页、`/guides`、`/characters` 先帮助用户做决定，再把资料页作为证据层补上。

## 2. 证据基线

### 2.1 站内数据证据

- GSC：`413 clicks / 2.82万 impressions` -> `471 / 3.29万` -> `518 / 3.64万`
- Bing：`102 / 5.1K` -> `119 / 6.5K` -> `140 / 7.6K`
- Vercel：最近 7 天 `640 Visitors / 1,188 PV / Bounce Rate 80%`

解释：

- 搜索可见性与点击都在上升，说明上游获取不是主问题。
- 高跳出发生在搜索增长的同时，说明问题集中在“点击后承接”而不是“没有流量”。

### 2.2 外部证据

- 官方 Steam 页强调 Early Access 持续更新、多人合作、后续内容扩充：
  - <https://store.steampowered.com/app/2868840/Slay_the_Spire_2/>
- 竞品 `builds` 入口直接按角色与 archetype 给答案，而不是先讲背景：
  - <https://slaythespire-2.com/builds>
- 竞品 `best builds` 页面把“best builds / character tier list / FAQ / universal tips”组织成清晰决策入口：
  - <https://sts2-wiki.org/en/best-builds-slay-the-spire-2>
- 社区高热反馈之一是“搜索出来的很多攻略不像真正高层玩家写的”，说明用户对“泛 guide、弱实战”的耐心很低：
  - <https://www.reddit.com/r/slaythespire/comments/1s5tfso/where_to_find_sts2_guides/>
- 社区高热工具贴表明用户更偏好“能辅助当前 run 决策”的产品形态，而不是纯文章堆叠：
  - <https://www.reddit.com/r/slaythespire/comments/1seyj93/slay_the_spire_2_tools_update_now_works_live/>

### 2.3 站点承诺与现实差异

- 首页公开承诺：
  - `Updated daily`
  - `Top Builds Right Now`
  - `Latest Balance Notes`
- 但已知公开页中仍存在：
  - `Based on STS1 card data`
  - `within 24-48 hours of launch`
  - 其他预发布 / 待上线确认口径

这类差异不是“文案不准”，而是系统性的信任问题。

## 3. 治理原则

所有旧页先按以下原则治理，再决定是否重写：

1. 一个意图只保留一个主落地页。
2. 首屏必须先给当前版本下的结论，再给解释。
3. 任何高意图页都必须明确适用版本与最近复核时间。
4. 任何仍保留预发布/过时口径的高意图页，优先止血。
5. 资料页不再承担主入口角色，只做支撑层。

## 4. 旧页治理状态定义

- `KEEP`
  - 内容仍有效，继续保留为主入口或主资产页，仅做增强。
- `REFRESH`
  - 主题正确，但结构、版本、口径或承接方式需要重写。
- `DEMOTE`
  - 内容仍有参考价值，但不应继续在首页或一级入口高曝光。
- `MERGE`
  - 与其他页面意图重叠，应合并到更强主资产页。
- `REMOVE_OR_REDIRECT`
  - 已明显误导、过时或无独立价值，需要下线或 301。

## 5. 旧页治理清单

### 5.1 一级入口层

#### 首页 `/`
- 状态：`REFRESH`
- 问题：
  - 当前更像内容陈列页，不像任务分流页。
  - 高跳出背景下，首页仍是主要入口，说明入口分流失败。
  - 强承诺模块过多，且未全部兑现。
- 处理：
  - 重做首页首屏信息架构。
  - 删除或降级不能兑现的强承诺模块。
  - 改成任务型分流：新手 / Builds / Patch / 查资料。

#### `/guides`
- 状态：`REFRESH`
- 问题：
  - 当前更像 guide 列表，不像任务导航。
  - 容易把用户留在“找内容”而不是“找到答案”的状态。
- 处理：
  - 按任务重组：Beginner、Builds、Patch、Route、Mechanics。
  - 每组只暴露最强入口，不再平铺。

#### `/characters`
- 状态：`REFRESH`
- 问题：
  - 需要从“角色资料页入口”升级为“角色决策页入口”。
  - 当前与 starter / build / patch 关系不够直接。
- 处理：
  - 总览页首屏直接回答“谁适合新手、当前版本谁强、各角色推荐 build”。
  - 每个角色页补“适合谁 / 当前版本最稳路线 / patch 影响 / 下一步推荐”。

### 5.2 高意图决策页

#### `best-starter-character-slay-the-spire-2-early-access`
- 状态：`REFRESH`
- 问题：
  - 词本身高价值，但 `early-access` 命名与当前长期资产定位不完全匹配。
  - 应升级为稳定“新手角色选择页”。
- 处理：
  - 升级为 Beginner 主线资产页。
  - 保留原有搜索资产，必要时以新版页面接管或 canonical。

#### `slay-the-spire-2-first-run-guide-act-1-priorities`
- 状态：`REFRESH`
- 问题：
  - 是当前高价值入口页，但首屏应更强地先回答“第一局先做什么”。
  - 应成为新手决策主线，而非一篇孤立新闻型 guide。
- 处理：
  - 升级为 Beginner 主资产页之一。
  - 明确下一跳：starter character / route priority / current patch adjustments。

#### `slay-the-spire-2-steamdb-patch-tracker`
- 状态：`KEEP`
- 问题：
  - 价值在于“patch timeline 与 changelog 聚合”，不是最终解释页。
- 处理：
  - 继续保留，但定位为 Patch 主线的时间轴资产。
  - 前链给 `Latest Patch Impact`，后链给受影响角色/build 页面。

#### `slay-the-spire-2-known-issues-and-fixes`
- 状态：`KEEP`
- 问题：
  - 当前版本里仍有搜索需求，但不应占首页核心入口位。
- 处理：
  - 保留为“异常/排障”专项页。
  - 从首页主任务路径降级到 Patch/Support 次级入口。

#### `slay-the-spire-2-steam-deck-performance-guide`
- 状态：`KEEP`
- 问题：
  - 有明确搜索意图，但属于设备专项。
- 处理：
  - 保留，但不参与首页核心路径。
  - 归入 Support / Device 侧边入口。

### 5.3 Co-op / Multiplayer 页族

#### `slay-the-spire-2-multiplayer-coop-guide`
#### `slay-the-spire-2-co-op-guide-how-it-works`
- 状态：`MERGE`
- 问题：
  - 两页明显重叠，且当前站内多处把 co-op 当成高频主入口在引用。
  - 现在站点主问题不是 co-op 信息缺失，而是决策入口不清。
- 处理：
  - 合并为一个权威 co-op hub。
  - 其余页面 301 或 canonical 到主页。
  - 从首页和核心栏目页高优先导流中降级。

#### 所有栏目页中指向 co-op 的高频 CTA
- 位置：
  - `app/cards/page.tsx`
  - `app/relics/page.tsx`
  - `app/potions/page.tsx`
  - `app/characters/page.tsx`
- 状态：`DEMOTE`
- 问题：
  - 过多栏目页把 co-op 当作共用 CTA，会挤占更高价值的 build / patch / beginner 入口。
- 处理：
  - 替换为更贴近当前用户任务的 CTA。
  - co-op 保留为次级入口或 footer / support 模块。

### 5.4 Release-date / launch-week 过渡页

#### `slay-the-spire-2-release-date`
- 状态：`DEMOTE`
- 问题：
  - 发布日期需求已经被解决，持续作为高入口资产价值有限。
- 处理：
  - 保留搜索资产，但从首页主模块降级。
  - 首屏只做“事实快速回答 + 立刻转向现在该看什么”。

### 5.5 机制解释与资料层

#### 机制解释页
- 典型：
  - `exhaust`
  - `drawpile`
  - 其他 mechanics 入口
- 状态：`DEMOTE`
- 问题：
  - 这些页在搜索侧仍有价值，但不应再承担主决策入口角色。
- 处理：
  - 保留长尾价值。
  - 加强对 Builds / Beginner / Patch 的反链。
  - 从首页核心入口退到支撑层。

#### 实体资料页（卡牌 / relic / potion）
- 状态：`DEMOTE`
- 问题：
  - 继续有长尾价值，但应成为“证据层”而不是“导航层”。
- 处理：
  - 每页增加：
    - 当前版本定位
    - 常见 build 场景
    - 推荐相关决策页
  - 不再把这类页当首页强入口。

### 5.6 明确高风险审计规则

以下页面一旦命中任一条件，优先进入 `REFRESH` 或 `REMOVE_OR_REDIRECT`：

- 仍保留 `Based on STS1`、`check back at launch`、`within 24-48 hours of launch` 等口径
- 标题承诺“best / top / updated daily / latest”，但正文仍是旧版本结构
- 首页、`/guides`、`/characters` 当前仍在强推
- 搜索意图明显是决策型，但正文主要在解释定义或历史背景

## 6. 新 IA 蓝图

### 6.1 一级导航

建议一级结构固定为：

1. `Start Here`
2. `Builds`
3. `Tier Lists`
4. `Patch & Meta`
5. `Reference`

### 6.2 一级导航职责

#### `Start Here`
- 用户：第一次来站、刚进 Early Access、回坑用户
- 目标：30 秒内分流
- 一级卡片：
  - I am new, what should I do first?
  - Best builds right now
  - Latest patch impact
  - Look up cards / relics / mechanics

#### `Builds`
- 用户：明确在找 build、路线、强势 archetype 的人
- 目标：成为第一增长主线
- 子结构：
  - Best Builds Right Now
  - Ironclad Builds
  - Silent Builds
  - Regent Builds
  - Necrobinder Builds
  - Defect Builds
  - Archetype pages

#### `Tier Lists`
- 用户：在找“优先级/推荐顺序”的人
- 目标：接 `tier list` 类意图，不做大杂烩总表
- 子结构：
  - Character Tier List
  - Beginner-Friendly Tier List
  - Archetype Tier List
  - Card Tier List by Character

#### `Patch & Meta`
- 用户：在找“现在变了什么、怎么改判断”的人
- 目标：把 patch 流量从新闻消费转成决策消费
- 子结构：
  - Latest Patch Impact
  - Patch Notes Hub
  - What Changed This Patch
  - Outdated Advice After Patch
  - Meta Shift Pages

#### `Reference`
- 用户：在查具体卡牌 / relic / 机制资料
- 目标：做支撑层与证据层
- 子结构：
  - Cards
  - Relics
  - Potions
  - Mechanics
  - Character data

### 6.3 首页蓝图

首页首屏固定五块：

1. Hero
  - 当前版本下站点价值一句话
  - 示例信息结构：
    - Current-patch builds
    - Beginner route
    - Patch impact
    - Character picks

2. Task Split
  - 四个大按钮：
    - Best Builds Right Now
    - Beginner Path
    - Latest Patch Impact
    - Look Up Cards / Relics / Mechanics

3. Trust Strip
  - `Updated for vX.X.X`
  - `Last reviewed`
  - `Based on official patch notes + community + site testing`

4. This Week
  - 只放 3 个最值得看的入口

5. Quick Routes
  - 新手
  - 回坑
  - 看 patch
  - 查资料

首页禁止项：

- 大量并列内容卡片
- 把 deep reference 页当主入口推
- 重复推 co-op、release-date、launch-time 这类已过热词

### 6.4 `/guides` 蓝图

`/guides` 改成任务型导航：

- Beginner & First 10 Runs
- Character Choice & Build Path
- Patch Adjustments
- Route / Elite / Upgrade Decisions
- Mechanics Explained

每组只露出最强 3-5 篇，并附“适合谁/解决什么问题”。

### 6.5 `/characters` 蓝图

总览页：

- Current patch character picks
- Best beginner character
- Safest solo picks
- Best co-op anchors
- 每个角色的一条主 build 入口

角色页：

- 这个角色适合谁
- 当前版本推荐 build
- 新手最稳路线
- Patch 影响
- 常见误区
- 深层卡牌/机制资料入口

### 6.6 `/builds` 蓝图

新增或重构 `/builds`：

- Hero：当前版本最值得看的 build
- 按角色分区
- 每张 build 卡只回答：
  - 适合谁
  - 强度
  - 核心玩法
  - 核心卡 / relic
  - 成型信号
  - 详情页

### 6.7 `/tier-lists` 蓝图

不要上来做统一“大总表”，应拆分：

- `/tier-lists/characters`
- `/tier-lists/beginner`
- `/tier-lists/archetypes`
- `/tier-lists/cards/[character]`

每页都必须声明：

- 适用版本
- 适用对象
- 是否有争议
- 与 patch 的关系

### 6.8 `/patches` 蓝图

新增或重构 patch hub：

- Latest patch summary
- Patch timeline
- Impact by character
- Impact by build
- Outdated advice list
- Updated pages this patch

## 7. 内容模板标准

所有主资产页统一要求：

- 明确适用版本
- 明确最近复核时间
- 一句话结论
- 适合对象
- 当前版本判断
- 核心建议
- 边界条件
- 来源说明
- 下一步推荐阅读

## 8. 分阶段执行顺序

### 阶段 1：止血
- 审计高风险公开页
- 首页下线/降级不兑现承诺模块
- 合并 co-op 重复页

### 阶段 2：入口重构
- 重做首页
- 重做 `/guides`
- 重做 `/characters`

### 阶段 3：主线建立
- 建立 `/builds`
- 建立 `/tier-lists`
- 建立 `/patches`

### 阶段 4：支撑层清洗
- reference 页统一补“当前版本定位 + 反链”
- 清洗低价值旧新闻和重复页

## 9. 验收门禁

### 页面级门禁
- 首页首屏是否完成任务分流
- 每个高意图主页是否有明确版本与结论
- 每个资料页是否有指向主决策页的反链

### 数据级门禁
- 高意图词 CTR 是否上升
- 首页与 `/guides` 跳出是否下降
- 入口页到二跳主页的流转是否上升
- Patch 页是否能带动角色/build 页流量联动

## 10. 下一步执行资产

本文件之后，必须继续产出两份执行资产：

1. 页面级旧页治理表
  - `slug`
  - 当前状态
  - 风险
  - 处理动作
  - 是否 301 / canonical / 下线 / 保留

2. 入口页模块线框
  - 首页
  - `/guides`
  - `/characters`
  - `/builds`

## 11. 证据优先内容规则（强制）

后续凡是涉及以下内容，不允许临场发挥或仅凭模型记忆写结论：

- 攻略
- build 建议
- tier list
- patch 影响
- 角色推荐
- 新手路线

### 11.1 来源优先级

必须按以下优先级组织证据：

1. 官方一手来源
  - Steam 商店页
  - Steam News / 官方 patch notes
  - Mega Crit 官方内容
2. 高质量社区经验
  - 高水平玩家 / 纪录保持者 / 高信噪比长帖
  - 社区对“哪些攻略不靠谱”的反向反馈
3. 高质量工具 / 数据站
  - 可复现、可解释、非低质量 SEO 套壳页
4. 站内自己的真实数据
  - GSC
  - Vercel
  - Bing Webmaster
  - Google Trends

### 11.2 写作约束

- 没有官方或高质量社区证据，不下强结论。
- 有争议的结论，必须写明“适用条件 / 争议点 / 版本范围”。
- tier list 不能伪装成绝对真理，必须标版本、样本、边界。
- build 建议至少结合以下三类证据中的两类：
  - 官方 patch / 更新说明
  - 高质量社区经验
  - 站内数据 / 行为信号
- 新手内容必须优先回答真实玩家问题，不允许空泛术语堆叠。

### 11.3 可直接复用的证据池

- 官方：
  - <https://store.steampowered.com/app/2868840/Slay_the_Spire_2/>
- 社区：
  - <https://www.reddit.com/r/slaythespire/comments/1s5tfso/where_to_find_sts2_guides/>
  - <https://www.reddit.com/r/slaythespire/comments/1sa33d3/regent_tierlist_by_navegreed_sts1_world_record/>
  - <https://www.reddit.com/r/slaythespire/comments/1s63nb4/slaying_the_second_spire_a_vaguely_uncrunchy/>
  - <https://www.reddit.com/r/slaythespire/comments/1seyj93/slay_the_spire_2_tools_update_now_works_live/>
- 竞品/工具：
  - <https://slaythespire-2.com/builds>
  - <https://sts2-wiki.org/en/best-builds-slay-the-spire-2>

## 12. 剩余重构批次执行顺序

在已完成治理基线、Batch 1 止血、Batch 2 主线入口页、Batch 3 co-op/release 路由收口后，剩余批次固定为：

### Batch 4：旧页治理落地
- co-op 内容真正合并到单一 canonical 页面
- `cards-tier-list` 等高风险旧页治理
- `release-date` 内容降级重写
- 清理仍带预发布/旧口径的高意图页

### Batch 5：入口页完整重构
- 首页完整改造成任务型分流
- `/guides` 完整改造成任务型 hub
- `/characters` 完整改造成角色决策中心

### Batch 6：Builds 主线内容实体化
- 为每个角色建立真实 build 资产页
- 补 archetype 级内容
- 让 `/builds` 从 hub 升级为完整主线

### Batch 7：Tier Lists 主线内容实体化
- Characters / Beginner / Archetypes / Cards 四层 tier 体系
- 迁移/收口旧 tier list 搜索资产

### Batch 8：Patch & Meta 闭环
- patch 页面模板固定
- patch -> builds / characters / guides / reference 更新闭环建立

### Batch 9：Reference 层重构
- `/cards` `/relics` `/potions` `/mechanics` 统一变成支撑层
- 补当前版本定位与反链

### Batch 10：关键词映射与验证闭环
- 关键词 -> 主落地页 -> 支撑页 -> 禁止抢词页 映射表
- CTR / bounce / 二跳流转 验证模板

## 13. Subagent 架构（默认模板）

后续重构默认按以下角色拆分：

### Agent A：证据研究
- 负责官方 / 社区 / 工具站内容检索
- 输出：证据摘要、来源链接、冲突点、适用条件

### Agent B：旧页治理
- 负责页面盘点、301/canonical/降级/合并建议
- 输出：治理表、风险说明、路由动作

### Agent C：入口页与 IA
- 负责首页、`/guides`、`/characters`、`/builds`、`/tier-lists`、`/patches` 的模块设计与实现

### Agent D：内容主线
- 负责 Beginner / Builds / Tier Lists / Patch 的正文资产页
- 必须以 Agent A 提供的证据池为输入，不得自由发挥

### Agent E：Reference 支撑层
- 负责 cards / relics / potions / mechanics 的当前版本定位与反链补齐

### 主线程
- 统一标准与优先级
- 审查 subagent 改动范围
- 执行 lint/build/smoke checks
- 分批提交
- 回填 ops-center 文档
