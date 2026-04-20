# Slay the Spire 2 三主题内容实施方案（可直接执行）

> 说明：本方案只覆盖当前确认可做的 3 个方向，已锁定内容来源、写作边界、内链规则、执行顺序，用于避免执行时靠猜。

## 项目目标

围绕已经出现真实搜索意图、且当前不依赖待核实实体真值的 3 个主题，做一组小而稳的内容网络：

1. Exhaust 主指南
2. Necrobinder Common Cards 聚合页
3. Celestial Might 指南强化版

### 这轮不做

- `book of five rings`
- `defy`
- `undying sigil`
- 任何需要继续核实实体映射或 patch 真值的页面

## 一、执行总原则

所有内容只允许写三种句子：

- 可直接确认的事实
- 玩家讨论中的常见观点
- 编辑部不下结论、只说明争议点

禁止写：

- “玩家公认”“普遍认为”“必带”“核心”“最强”“稳定收益”
- 未核实的数值、概率、强度排序
- 把高热度玩家说法写成官方口径
- 标题或锚文本先于正文承诺过度

执行中一旦出现下面情况，立即停：

- 需要引用未确认 patch 数值
- 需要把玩家经验写成定论
- 发现目标词会和现有页抢词
- 发现内链只能靠待核实实体页才能成立

## 二、先锁 3 篇文章

### 1）Exhaust 主指南

建议标题：

`What Is Exhaust in Slay the Spire 2? When to Use It, When to Stop, and What Players Mean by "Remove Exhaust"`

主承接词：

- `sts2 exhaust`
- `sts2 remove exhaust`
- `slay the spire 2 exhaust build`

主落地页：

- 直接强化现有 `exhaust-mechanic-explained`

这篇只回答：

- Exhaust 是什么
- 什么时候该用
- 什么时候 thinning 会过头
- “remove exhaust” 这类搜索大多真正想问什么
- 什么样的牌组才算在围绕 Exhaust 运作

这篇不回答：

- 哪张 Exhaust 卡当前版本最强
- 哪个 Exhaust build 是版本答案
- 任何未确认 patch 数值判断

参考来源：

- 官方：
  - Steam 官方公告 / patch notes
  - <https://steamcommunity.com/app/2868840/announcements/>
- 站内：
  - `guidesData.ts`
  - `page.tsx`
- 玩家参考：
  - <https://www.reddit.com/r/slaythespire/comments/1rru9on/how_do_you_play_ironclad_in_either_game_but/>
  - <https://www.reddit.com/r/slaythespire/comments/1s77k6c/hi_looking_for_some_guidance_on_ironclad_exhaust/>
  - <https://www.reddit.com/r/slaythespire/comments/1rsh8lk/sts2_ironclad_infinites_are_game_breaking/>
  - <https://steamcommunity.com/app/2868840/discussions/0/802341195824185596/>
  - <https://www.reddit.com/r/slaythespire/comments/1rp6jwl/is_ironclad_undertuned/>

玩家参考只用于：

- 新手误区
- 为什么 thinning 太快会崩
- 为什么玩家会把 Exhaust 和小牌库/循环放在一起谈
- 什么时候 Exhaust 真的是 build，而不是几张散卡效果

固定结构：

1. 开头直答
2. Exhaust 的核心作用
3. 什么时候该用
4. 什么时候别急着用
5. “remove exhaust” 真正想问什么
6. 什么才算 Exhaust build
7. 结尾导流

### 2）Necrobinder Common Cards 聚合页

建议标题：

`Necrobinder Common Cards in Slay the Spire 2: Which Ones Stabilize Early Runs and Which Ones Only Support Synergy`

主承接词：

- `necrobinder common cards`

主落地页：

- 新建一篇唯一主落地页
- `/cards/character/necrobinder` 只做辅助页，不抢主词

这篇只回答：

- 当前 Necrobinder common cards 该怎么读
- common 更适合怎么分类理解
- 哪些更偏 early stability
- 哪些更偏 Doom / Osty / Soul 支撑
- common 不等于必拿，也不等于低价值

这篇不回答：

- tier list
- 必抓前三
- 最强 common
- 未确认 patch 后真值变化

参考来源：

- 事实层：
  - `cardsData.generated.ts`
  - `cardsData.ts`
  - `page.tsx`
  - `gameData.ts`
- 玩家参考：
  - <https://steamcommunity.com/app/2868840/discussions/0/802341528343193540/>
  - <https://www.reddit.com/r/slaythespire/comments/1rpx2kt/what_am_i_missing_with_the_necrobinder/>
  - <https://www.reddit.com/r/slaythespire/comments/1rm1owr/necrobinder/>
  - <https://www.reddit.com/r/SlayTheSpire2/comments/1s8lm1g/any_necrobinder_tips_i_cannot_seem_to_get_the/>
  - <https://steamcommunity.com/app/2868840/discussions/0/802341528343330558/>
  - <https://steamcommunity.com/app/2868840/discussions/0/802341195824167945/>

玩家参考只用于：

- 开荒阶段如何理解 Necrobinder
- Souls / Doom / Osty 三条线的常见理解
- 新手容易误读 common cards 的地方
- 为什么 common cards 更适合承担稳定和桥接，而不是直接被写成强度榜

固定结构：

1. 开头直答
2. 先解释这里的 common cards 指什么
3. 当前 common cards 按类型分组
4. 再按功能分组
5. 读 common cards 的顺序
6. 常见误区
7. 结尾导流

### 3）Celestial Might 指南强化版

建议标题：

`Celestial Might in Slay the Spire 2: When It Wins Runs, When It Is Bait, and When Regent Should Skip It`

主承接词：

- `celestial might sts2`

主落地页：

- 强化现有 `celestial-might-regent-guide`

这篇只回答：

- Celestial Might 是什么定位
- 玩家为什么会搜它
- 什么时候看起来强但其实是 bait
- 什么时候它真是 payoff
- 为什么不能把它当通用早抓牌

这篇不回答：

- 未确认升级态变化
- 未确认数值真值
- 当前版本最强搭配
- patch 后到底变强还是变弱

参考来源：

- 站内：
  - `guidesData.ts`
  - `cardsData.generated.ts`
  - `page.tsx`
- 玩家参考：
  - <https://www.reddit.com/r/slaythespire/comments/1s1qwsr/3_tips_to_winning_with_the_regent/>
  - <https://www.reddit.com/r/slaythespire/comments/1s1e3lf/i_need_help_with_regent_0w176l/>
  - <https://www.reddit.com/r/slaythespire/comments/1rmrrk9/am_i_missing_something_or_is_the_regent_very_bad/>
  - <https://steamcommunity.com/app/2868840/discussions/0/806845425982376418/>
  - <https://www.reddit.com/r/slaythespire/comments/1s7jftd/regent_insights_for_climbing_to_ascension_10/>

玩家参考只用于：

- 什么时候它像 payoff card
- 什么时候它更像 win-more / bait
- Stars vs Forge 的玩家体感
- 什么时候值得拿，什么时候应该跳过

固定结构：

1. 开头直答
2. 它真正解决什么问题
3. 什么时候值得拿
4. 什么时候会变成 bait
5. 升级/使用顺序怎么想
6. FAQ
7. 结尾导流

## 三、写作时的“句型权限”

### Exhaust

可写：

- “Exhaust 通常被玩家理解为……”
- “在长战中，玩家常把它当作……”
- “如果只从玩家讨论看，最常见误区是……”

禁写：

- “Exhaust build 当前版本最强”
- “某张 Exhaust 牌是核心必拿”

### Necrobinder Common Cards

可写：

- “很多玩家会先用 Doom / Osty / Souls 三条线来理解 Necrobinder”
- “common cards 更适合被看成稳定和桥接工具”

禁写：

- “这几张 common 一定要拿”
- “这是最强 Necrobinder common 组合”

### Celestial Might

可写：

- “玩家讨论里常把它当成 payoff card”
- “如果当前壳子还没稳，它经常会被描述成 bait”

禁写：

- “Celestial Might 当前版本很强/很弱”
- “这是 Regent 的核心牌”

## 四、内链建设方案

内链只做“解释补充”和“阅读顺序引导”，不做硬 SEO 铺链。

总规则：

- 每个入口页最多给一个主链接
- 每篇正文最多链出 2 到 3 个页面
- 三篇主落地页彼此最多只允许 1 条自然互链
- 不新增“为了 SEO 而存在”的聚合页

### 1）Exhaust 的内链

导入它的页面：

- 首页 `/`
- `/mechanics`
- `/guides`
- `v0.101.0 patch analysis`

导出的页面：

- `/mechanics`
- `/guides/ironclad-early-build`
- `/cards`

锚文本：

- `Exhaust mechanic explained`
- `how Exhaust works in Slay the Spire 2`
- `when to Exhaust cards`
- `Exhaust build guide`

### 2）Necrobinder Common Cards 的内链

导入它的页面：

- `/cards/character/necrobinder`
- `/characters`
- `/cards`

导出的页面：

- `/cards/character/necrobinder`
- 相关具体卡牌页
- `/characters`
- `/mechanics`

锚文本：

- `Necrobinder common cards`
- `full Necrobinder common card pool`
- `how to read Necrobinder common cards`

### 3）Celestial Might 的内链

导入它的页面：

- 首页 `/`
- `/guides`
- Regent 相关页
- `/cards/celestial_might`

导出的页面：

- `/cards/celestial_might`
- `/guides/regent-stars-vs-forge-build-path`
- `/cards/character/regent`
- `/mechanics`

锚文本：

- `Celestial Might guide`
- `when to draft Celestial Might`
- `should Regent take Celestial Might`

## 五、执行顺序

按下面顺序做，风险最低：

1. 先写 Exhaust
2. 再写 Celestial Might
3. 最后写 Necrobinder Common Cards
4. 最后统一补内链

原因：

- Exhaust 最稳，先做模板
- Celestial Might 有现成页，改造成本低
- Necrobinder Common Cards 最容易滑向伪卡表，最后做更稳

## 六、提交拆分建议

继续保持“一任务一提交”。

建议拆成 7 个任务：

1. 锁 3 篇的词表与禁用词表
2. 改 Exhaust 正文
3. 补 Exhaust 内链
4. 改 Celestial Might 正文
5. 补 Celestial Might 内链
6. 新建 Necrobinder Common Cards
7. 补 Necrobinder Common Cards 内链

## 七、最终一句话

这套实施方案的核心不是“写得多”，而是：

用 3 篇高确定性内容，分别吃机制词、聚合词、专题词；事实层只用已确认来源，打法理解层参考高热度玩家讨论，再用克制的内链把它们接进现有站内结构。
