# STS2 Guide 入口页模块蓝图

> 目的：为首页、`/guides`、`/characters`、`/builds`、`/tier-lists`、`/patches` 提供可直接落代码的模块级线框。
> 原则：先帮助用户做决定，再提供资料与证据。

## 1. 首页 `/`

### 页面目标
- 把首页从“内容展示页”改成“当前版本决策入口”

### 用户任务
- 我是新手，先看什么
- 当前版本有哪些 build 值得看
- 最新 patch 改了什么
- 我想查卡牌 / relic / mechanic

### 首屏必须有的模块
1. Hero
   - 一句话主宣：当前版本 builds、patch impact、beginner path、lookup
2. Task Split Cards
   - Beginner Path
   - Best Builds Right Now
   - Latest Patch Impact
   - Look Up Cards / Relics / Mechanics
3. Trust Strip
   - 当前版本号
   - 最近复核时间
   - 来源说明（official + community + site review）
4. This Week
   - 只放 3 个最该看的入口
5. Quick Routes
   - 新手 / 回坑 / 看 patch / 查资料

### 必须删除或降级的旧模块
- Launch-week 堆叠列表
- Generic news grid
- 重复 co-op CTA
- 无版本说明的 “Top Builds” 卡片
- release-date 作为高位 hero 入口

### CTA 流向
- Hero CTA -> `/builds`
- Task cards -> `/guides`、`/patches`、`/characters`、`/cards`
- Trust strip -> `/patches` 或对应数据解释页

## 2. `/guides`

### 页面目标
- 变成问题/任务分流 hub，而不是文章列表

### 用户任务
- 首局怎么打
- 当前版本 build 怎么选
- patch 后哪些判断变了
- 路线/elite/upgrade 怎么定
- 某机制具体怎么理解

### 首屏必须有的模块
1. Task Nav Banner
   - 4-5 条路径按钮 + 一句话说明
2. Beginner Window
   - first-run
   - starter character
   - first upgrade / route basics
3. Builds & Archetype
   - Build hub 入口 + 角色 build 快速入口
4. Patch Adjustments
   - latest patch impact
   - outdated advice
5. Mechanics Quick Explainers
   - 只放最常用的 3-4 个机制
6. Still Unsure?
   - 去 `/cards` / `/characters` / `/patches`

### 必须删除或降级的旧模块
- 无版本、弱结论的热门 guide 列表
- 重复 co-op guide CTA
- 高频 news grid

### CTA 流向
- Beginner -> `best-starter-character...` / `first-run-guide...`
- Builds -> `/builds`
- Patch -> `/patches`
- Mechanics -> `/mechanics`

## 3. `/characters`

### 页面目标
- 变成角色决策中心，而不是角色百科

### 用户任务
- 我该选哪个角色
- 哪个角色适合新手
- 当前版本谁强
- 这个角色推荐什么 build

### 首屏必须有的模块
1. Character Recommendation Matrix
   - 新手友好度
   - 当前版本强度
   - solo / co-op 适配
2. Quick Pick
   - starter vs unlockable
3. Patch Impact Callouts
   - 本版本角色变化摘要
4. Filters + FAQ
   - availability
   - search
   - shortcuts
5. Per-character Next Step
   - 直接去角色 build 或角色 cards

### 必须删除或降级的旧模块
- 过多指向 co-op / launch / release 的 CTA
- 高浮动 news 模块

### CTA 流向
- 角色矩阵卡 -> `/builds/[role]` 或 `/tier-lists/characters`
- patch callout -> `/patches`
- character detail -> `/cards/character/...`

## 4. `/builds`

### 页面目标
- 成为当前版本 build 主线入口

### 用户任务
- 当前最强/最稳 build 是什么
- 某角色该走什么 archetype
- 关键卡和 relic 是什么
- patch 后哪些 build 变化最大

### 首屏必须有的模块
1. Hero Summary
   - 当前版本最值得看的 build
2. Build Tiles by Character
   - Ironclad / Silent / Regent / Necrobinder / Defect
3. Archetype Hub
   - 每个角色 2-4 个 archetype
4. Patch Adjustment Strip
   - 这次 patch 改动最大的 build
5. Need More Data?
   - 去 `/patches` / `/cards`

### 每张 build 卡必须回答
- 适合谁
- 当前版本强度
- 核心玩法
- 核心卡
- 核心 relic
- 成型信号
- 详情入口

### 必须删除或降级的旧模块
- 过度解释型段落
- 无版本说明的 theorycraft

## 5. `/tier-lists`

### 页面目标
- 统一承接 tier list 需求，但拆成可执行子页，不做大总表

### 用户任务
- 角色强度怎么排
- 新手该选谁
- archetype 哪些最稳
- 角色内卡牌优先级怎么分

### 首屏必须有的模块
1. Tab Switch
   - Characters
   - Beginner
   - Archetypes
   - Cards
2. Dynamic Summary
   - Current patch tier baseline
3. Stability Signals
   - 哪些判断稳定
   - 哪些仍有争议
4. CTA
   - 去 `/builds`
   - 去 `/cards`

### 必须删除或降级的旧模块
- flat total card rank list
- 任何 `STS1` 迁移口径

## 6. `/patches`

### 页面目标
- 让 patch 页面成为“决策更新中心”，不是单纯新闻聚合

### 用户任务
- 最新 patch 改了什么
- 对角色/build 的影响是什么
- 哪些旧建议失效了
- 现在应该去更新看哪些页

### 首屏必须有的模块
1. Patch Hub Summary
   - 最新 patch + 关键影响
2. Patch Timeline
   - 历史 patch 列表
3. Impact Sections
   - 谁变强了
   - 谁变弱了
   - 哪些旧建议失效了
4. Updated Assets
   - 受影响 builds / characters / tier pages
5. Report / Feedback
   - support / known issues / bug route

### 必须删除或降级的旧模块
- 把 release-date/co-op timeline 放在 hero 位

### CTA 流向
- `/builds`
- `/tier-lists`
- `/characters`
- support / known issues

