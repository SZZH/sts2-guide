# Update Verification Checklists（更新核对单）

> 用途：在“官方更新 -> 站点内容/数据修改”之间加一道强核对闸门。
> 规则：本页只做核对，不直接执行内容或数据改动。只有当核对结论明确、无疑问时，后续执行线程才可以改页面或改数据。

## 使用方式（强制）
- 先确认官方口径是否已经落地，不能只凭 SteamDB 信号或社媒口风直接改数据/正文。
- 再列受影响页面清单，逐条核对当前站内承接情况。
- 每条待改项都要有证据来源；没有证据就保持 `待确认`。
- 改动后还要回查，避免把旧版本信息和新版本信息混写。

## 核对单 A：`v0.101.0` 受影响页面复查

### 官方口径状态
- 状态：`已落地，可核对`
- 官方口径来源：
  - Steam News：`Slay the Spire 2 - Beta Patch Notes - v0.101.0`
  - SteamDB：Build `22526470`
- 当前结论：
  - 可以合法进入“受影响页面复查”阶段
  - 但不代表所有受影响页面都可以直接改，仍需逐页核对站内现状

### 本轮已确认的重要变化
- `Prepared` 回退到更接近旧版的形态
- `Capture Spirit` 回退并增强
- `Borrowed Time` 回退并增强
- `Doormaker` 重做，且随机性下降
- `Elites can no longer spawn on floor 6`
- `Improved map generation consistency`
- 一批角色 / relic / potion / encounter 调整

### 待核对页面清单
- `Prepared` 相关页面
  - 类型：卡牌页 / 可能关联 Silent guide
  - 核对点：当前正文、FAQ、相关新闻承接是否已体现“回退 + 原因说明”
  - 当前证据：`/news/slay-the-spire-2-beta-patch-v0-101-0-analysis` 已明确把 `Prepared` 列为代表性案例之一
  - 状态：`已部分承接，卡牌页本体仍待复查`
- `Borrowed Time` 相关页面
  - 类型：卡牌页 / Necrobinder 相关 guide
  - 核对点：当前站内文本是否仍停留在旧数值或旧判断
  - 当前证据：`/news/slay-the-spire-2-beta-patch-v0-101-0-analysis` 已明确写到 `Borrowed Time` 回退并增强
  - 状态：`已部分承接，卡牌页/guide 本体仍待复查`
- `Capture Spirit` 相关页面
  - 类型：卡牌页 / Necrobinder 相关 guide
  - 核对点：描述是否已更新，是否需要从新闻页回链
  - 当前证据：`/news/slay-the-spire-2-beta-patch-v0-101-0-analysis` 已明确写到 `Capture Spirit` 回退并增强
  - 状态：`已部分承接，卡牌页/guide 本体仍待复查`
- `Doormaker` 相关页面
  - 类型：guide / news / mechanics 承接位
  - 核对点：是否已有“重做、随机性下降”的承接入口
  - 当前证据：`/news/slay-the-spire-2-beta-patch-v0-101-0-analysis` 已把 Doormaker 作为代表性变化写入
  - 状态：`新闻已承接，实体页/入口页仍待复查`
- `Act 1 route / map generation` 相关 guide
  - 类型：`/guides/act1-route-priority`
  - 核对点：是否需要补一条版本变化提示或相关新闻入口
  - 当前证据：现有 `v0.101.0` patch analysis 已明确提到 `floor 6 elite` 和 `map consistency`
  - 状态：`patch 新闻已承接，guide 页入口仍待复查`
- `Regent / Ironclad / Defect / relic` 受影响实体页
  - 类型：角色页 / relic 页 / card 页
  - 核对点：是否已有版本更新承接，不要求立刻改正文，但要确认是否缺“相关新闻 / patch context”入口
  - 当前证据：站内首页、mechanics、cards、relics 文案均已出现“confirmed v0.101.0 updates”表述；但并未证明所有受影响实体页均已逐条承接
  - 状态：`存在总入口承接，逐页承接仍待复查`

### 允许执行的后续动作（前提：逐页核对完成）
- 发或补 `v0.101.0` 新闻页与相关内链
- 对已确认受影响的实体页补版本承接入口
- 对已确认变更的卡 / relic / 机制说明做最小内容修正

### 当前不允许直接做的事
- 未逐页核对前，直接批量修改受影响卡牌 / relic 正文
- 用高热度玩家理解替代官方 patch notes 口径

### 本轮阶段性核对结论
- `已确认承接`
  - `/news/slay-the-spire-2-beta-patch-v0-101-0-analysis` 已承接本轮 patch 的核心变化
  - 首页、`/mechanics`、`/cards`、`/relics` 已出现 “confirmed v0.101.0 updates” 总入口表述
- `仍需补核`
  - `Prepared / Borrowed Time / Capture Spirit / Doormaker` 的实体页本体
  - `/guides/act1-route-priority` 与相关角色 build guides 是否需要版本上下文入口
  - 受影响 relic / card / character pages 是否已经从 patch analysis 回链

## 核对单 B：`v0.103.0` 预备发布清单

### 官方口径状态
- 状态：`未完全落地，只能预备，不能正式改内容`
- 当前证据：
  - SteamDB 近期轨迹已指向 `Beta Patch Notes - v0.103.0`
  - `2026-04-03` 的 build `22629137` 已出现，且下一条更新提示指向 `2026-04-10 Beta Patch Notes - v0.103.0`
  - 当前还没有拿到可核验的完整官方 patch notes 正文
- 当前结论：
  - 可以做“预备发布”
  - 不可以做“正式内容更新”或“数据修改”

### 预备阶段可以做什么
- 预写新闻页骨架
  - 标题候选
  - 摘要模板
  - 版本变化占位结构
- 预列受影响页面候选
  - cards / relics / mechanics / guides / news
- 预列动作链
  - patch notes 落地后：发新闻页 -> 补内链 -> 提 IndexNow

### 预备阶段不可以做什么
- 不可把 `v0.103.0` 信号写成“已确认官方更新”
- 不可直接改站内卡牌 / relic / 机制数据
- 不可抢发正式 patch 解读页

### 落地触发条件
- 至少命中其一：
  - Steam News 正式 patch notes 页面可读
  - 官方公告 / 官方社区页完整正文可读
  - 官方社媒给出足够完整、可核验的正式更新内容

### 一旦落地，第一批动作
- 发新闻页
- 从受影响实体页补新闻入口
- 提交 IndexNow
- 再进入“逐条数据 / 内容修正核对”

### 本轮已完成的预备结论
- 候选标题：
  - `Slay the Spire 2 Beta Patch Notes v0.103.0: What Changed and What to Recheck First`
  - `Slay the Spire 2 v0.103.0 Patch Analysis: First Retests, Build Impact, and What Matters`
  - `Slay the Spire 2 v0.103.0 Update: Balance Changes, Build Risks, and Next Pages to Check`
- 优先补位页面顺序：
  - `news -> mechanics -> high intent guides -> 被 patch 明确点名的 cards/relics/character pages`
- 当前明确不能写：
  - 完整 patch 内容
  - 具体数值改动
  - `Phobia Mode` 规格
  - 任何把 SteamDB 信号写成官方已确认内容的表述

## 核对单 C：`prismatic_shard` sitemap / slug 链路

### 当前现象
- `https://sts2guide.com/sitemap.xml` 返回 `HTTP 200`
- live sitemap 已确认包含：
  - `/guides/common-beginner-mistakes`
  - `/relics/pocketwatch`
- live sitemap 当前未命中：
  - `/relics/prismatic_shard`

### 当前已知上下文
- 站内 relic 详情页存在 alias 体系
- 现有代码中出现 `prismatic_shard: 'prismatic_gem'` 映射线索
- 这意味着问题可能不是“页面不存在”，而是“slug / alias / sitemap 生成口径不一致”

### 必须核对的问题
- 页面真实 canonical URL 是什么？
  - `/relics/prismatic_shard`
  - 还是 `/relics/prismatic_gem`
- sitemap 生成逻辑最终产出的 URL 是哪一个？
- 站内入口、详情页、schema、sitemap 是否使用同一口径？
- Bing / GSC 当前看到的是哪个 URL？

### 允许执行的后续动作（前提：口径确认后）
- 若确认 alias 正常：统一文档和巡检口径，避免继续误判
- 若确认 sitemap 漏了：修 sitemap 生成逻辑
- 若确认 slug / canonical 不一致：先统一 URL 规范，再重提相关 URL

### 当前不允许直接做的事
- 在未确认 canonical / alias / sitemap 口径前，直接改正文或强行重复提交多个 URL
- 把“sitemap 未命中”直接解释成“该页面未收录”

### 本轮核对结论（已确认）
- 真实 owner URL 当前应为：`/relics/prismatic_gem`
- `/relics/prismatic_shard` 当前是 alias URL，不是 canonical
- live sitemap 没有 `/relics/prismatic_shard` 是当前实现的预期结果，不是单独 sitemap 漏发
- 当前真正的问题是：站内部分内链和 SEO override 仍把 alias 当主 URL 用，导致入口口径、canonical 口径、sitemap 口径不统一

### 后续动作前置条件
- 必须先决定 canonical owner 要保留 `prismatic_gem` 还是切到 `prismatic_shard`
- 决策没定之前，不进入任何内容改写或重复提交动作

## 本轮核对结论
- `v0.101.0`：官方口径已足够明确，可以进入“逐页承接复查”
- `v0.103.0`：只能做预备发布，不可正式改内容或数据
- `prismatic_shard`：当前优先查清 URL 口径，再决定是否修 sitemap / canonical / alias
