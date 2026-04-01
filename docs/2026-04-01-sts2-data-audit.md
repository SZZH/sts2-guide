# StS2 数据核对清单（2026-04-01）

## 目的

记录本次 `Slay the Spire 2` 官方补丁说明与本地站点数据的核对结果，只保留已确认结论，避免后续重复排查或误改。

执行规则：

- 只改已确认项
- 不确定项不执行
- 不确定项必须保留在本清单中
- 每完成一个独立任务单独提交一次 git，便于回滚

## 本地真实取数路径

### 卡牌

- 前台卡牌详情页读取 [`shared/cardsData.ts`](../shared/cardsData.ts)
- [`shared/cardsData.ts`](../shared/cardsData.ts) 组合来源：
  - [`shared/cardsData.generated.ts`](../shared/cardsData.generated.ts)
  - [`shared/cardsVerification.ts`](../shared/cardsVerification.ts)
  - [`shared/cardsWikiFallback.generated.ts`](../shared/cardsWikiFallback.generated.ts)

说明：

- `cardsData.generated.ts` 是基础结构化数据源
- `cardsVerification.ts` 会覆盖部分文案偏好
- `cardsWikiFallback.generated.ts` 会在模板占位文本异常时兜底替换

### 遗物 / 药水

- 前台遗物数据通过 [`shared/gameData.ts`](../shared/gameData.ts) 暴露
- [`shared/gameData.ts`](../shared/gameData.ts) 中：
  - `RELICS = RELICS_GENERATED`
  - `POTIONS = POTIONS_GENERATED`
- 实际结构化来源：
  - [`shared/relicPotionData.generated.ts`](../shared/relicPotionData.generated.ts)

说明：

- 当前仓库没有独立的药水详情页
- 药水列表页直接读取 `POTIONS`

## 当前数据基线

- 卡牌生成数据仍写为 `verifiedAt: '2026-03-10'`
- 遗物/药水图片与数据前缀仍为 `v20260310`
- 导入脚本仍指向旧本地 bundle 路径

结论：

- 当前本地实体数据不是最新版本
- 站内存在已确认过期项

## 官方确认来源

- 官方公告：`Steam Community :: Slay the Spire 2`
- 公告标题：`Beta Patch Notes - v0.101.0`
- 日期：`2026-03-26`

本清单仅根据官方公告中明确写出的变更来判断“可安全更新项”。

## 已确认可更新项

### 卡牌

- `arsenal`
  - 已确认变化：效果改为 `Whenever you create a card, gain 1 Strength.`
- `cinder`
  - 已确认变化：现在改为从手牌中 Exhaust 一张随机牌
- `tremble`
  - 已确认变化：现在带 `Exhaust`
- `guiding_star`
  - 已确认变化：抽牌改为立刻生效，不再是下回合
- `sword_sage`
  - 已确认变化：不再提高 `Sovereign Blade` 费用
- `voltaic`
  - 已确认变化：费用从 `2 -> 3`

### 遗物

- `pendulum`
  - 已确认变化：效果从“洗牌时抽一张”改为“每 3 回合抽 1 张”
- `tiny_mailbox`
  - 已确认变化：稀有度 `Common -> Uncommon`
  - 已确认变化：休息时药水数量 `1 -> 2`
- `permafrost`
  - 已确认变化：稀有度 `Common -> Uncommon`
- `bag_of_marbles`
  - 已确认变化：稀有度 `Uncommon -> Common`
- `red_mask`
  - 已确认变化：稀有度 `Uncommon -> Common`
- `bellows`
  - 已确认变化：稀有度 `Uncommon -> Rare`
- `lasting_candy`
  - 已确认变化：稀有度 `Rare -> Uncommon`
- `vexing_puzzlebox`
  - 已确认变化：措辞改为 `Free to Play`
  - 已确认变化：只持续到回合结束

## 已确认需要复核展示链后再改的项

这些项官方明确变了，但当前站内展示是否有足够字段承接，还不能直接下改动。

- `celestial_might`
- `serpent_form`
- `falling_star`
- `glitterstream`
- `parry`
- `refine_blade`

原因：

- 部分页面存在模板占位文本与 fallback 文本混用
- 仅凭 patch note 不能安全确认站内每个展示字段该如何调整

## 待核实项

这些项当前不允许直接修改，必须先核实。

- `book_of_five_rings`
  - 官方本次补丁未提及，不能据此判断“确认没变”
- `liquid_memories`
  - 官方公告明确提到，但本地未直接检出对应条目，需先确认 slug/映射
- `crossbow tanx`
  - 官方写法与本地 `crossbow` 是否为同一项，当前不能 100% 确认
- `spoils_of_war`
  - 官方公告提到变化，但本轮尚未完成本地逐项核对
- `prepared`
- `capture_spirit`
- `borrowed_time`
  - 官方为 revert/rework 项，本轮未完成本地逐项核对

## 建议执行顺序

1. 先做一批“已确认可更新项”的结构化数据修正
2. 单独验证卡牌页与遗物页是否真实显示更新后的值
3. 再处理“需要复核展示链后再改的项”
4. 待核实项继续保持挂起，直到获得更强确认来源
