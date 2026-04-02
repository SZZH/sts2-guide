# 零曝光 22 页优化清单（2026-04-02）

## 结论先行
- 数据来源：GSC 导出包 `https___sts2guide.com_-Performance-on-Search-2026-04-02.zip` 的 `网页.csv` + 验证批 30 页清单逐条匹配。
- 当前结果：`8/30` 有曝光，`22/30` 零曝光，曝光页占比 `26.7%`（未达闸门 `>=40%`）。
- 执行原则：仅做词池/模板/内链微调，不扩量。

## 优化依据（强制）
- 依据 A（页级证据）：仅优化本次识别出的 22 个零曝光 URL。
- 依据 B（意图匹配）：优先修复标题/H1/首段与目标查询不一致页面。
- 依据 C（权重分发）：优先补高权重入口页到零曝光页的上下文内链。
- 验收口径：下个采样窗内，至少 `4` 个零曝光页从 `0 -> >0 impressions`，并推动验证批曝光页占比提升。

## 优先级与分批
- `P0`（先做，10 页）：优先“可快速吃到长尾实体词”的卡牌/遗物实体页。
- `P1`（第二批，8 页）：机制/开荒 guide 页，做模板首段与 FAQ 问句化。
- `P2`（第三批，4 页）：3/29 新修复聚合页，轻改并观察。

## 逐页动作表（22 页）
| URL | 优先级 | 主要问题假设 | 最小改动动作（仅差量） | 验收信号 |
|---|---|---|---|---|
| `/cards/accelerant` | P0 | 实体词匹配弱，入口导流不足 | 从 `/cards`、对应角色卡池页补 3 条问题导向内链；首段补“what it does/when to pick”一句 | 7 天内 impressions > 0 |
| `/cards/bullet_time` | P0 | 同义词意图未覆盖 | 标题/首段增加同义查询短语（不改 URL）；补 3 条内链 | 7 天内 impressions > 0 |
| `/cards/biased_cognition` | P0 | 卡牌名竞争强，站内权重不足 | 从高流量 news/guide 各补 1 条上下文内链；FAQ 增 1 个“is it still good”问句 | 7-14 天内 > 0 |
| `/cards/ball_lightning` | P0 | 基础卡词泛，缺意图锚文本 | 增加“early pick / orb tempo”问句锚文本内链 3 条 | 7 天内 > 0 |
| `/cards/twin_strike` | P0 | 查询词泛，缺差异化语义 | 首段加“why pick over X”对比句；补 3 条内链 | 7-14 天内 > 0 |
| `/cards/machine_learning` | P0 | 缺“when to skip/take”决策语义 | FAQ 增“when to take/skip”2 问；补 3 条内链 | 7-14 天内 > 0 |
| `/relics/pocketwatch` | P0 | relic 实体页入口不足 | 从 `/relics` 与 2 个相关 guide 补 3-5 条内链 | 7 天内 > 0 |
| `/cards/tools_of_the_trade` | P0 | Silent 相关查询承接弱 | 从 silent build 页与 discard 相关页补 3 条内链 | 7-14 天内 > 0 |
| `/cards/hidden_gem` | P0 | 词义歧义高 | 首段加“Slay the Spire 2 card”强限定；补 3 条内链 | 7-14 天内 > 0 |
| `/cards/dagger_throw` | P0 | 高竞争通用词 | 标题中补角色/机制限定词；补 3 条内链 | 7-14 天内 > 0 |
| `/cards/corruption` | P1 | 旧作词竞争强 | FAQ 增“StS2 vs StS1 differences”问句；补 3 条内链 | 14 天内 > 0 |
| `/relics/prismatic_shard` | P1 | alias/命名差异可能分流 | 页内首段显式声明别名映射（prismatic shard/gem）；补 3 条内链 | 14 天内 > 0 |
| `/guides/retain-mechanic-explained` | P1 | 机制词入口少 | 从 `/mechanics`、`/guides` 补入口卡片；FAQ 问句化 | 14 天内 > 0 |
| `/guides/card-upgrade-priority` | P1 | 主题泛，缺场景限定 | 标题副句补“early access / act1”限定；补 3 条内链 | 14 天内 > 0 |
| `/guides/ironclad-early-build` | P1 | 角色 build 入口不强 | 从 `/characters/ironclad`、`/guides`、相关 news 各补 1 条 | 14 天内 > 0 |
| `/guides/silent-early-build` | P1 | 同上 | 同上（silent 专属入口） | 14 天内 > 0 |
| `/guides/defect-early-build` | P1 | 同上 | 同上（defect 专属入口） | 14 天内 > 0 |
| `/guides/how-to-evaluate-opening-hand` | P1 | 查询表达多样，语义未覆盖 | FAQ 增“opening hand bad start怎么办”问句；补 3 条内链 | 14 天内 > 0 |
| `/guides/common-beginner-mistakes` | P1 | 与已有新手页竞争 | 首段加差异化定位（mistakes vs first-run priorities）；补 3 条内链 | 14 天内 > 0 |
| `/relics/energy_relics_guide` | P2 | 3/29 新修复，时间窗短 | 只做轻量内链增强（3 条）+ 首段意图句，不重写 | 下个采样窗 > 0 优先观察 |
| `/relics/card_draw_relics_guide` | P2 | 同上 | 同上 | 下个采样窗 > 0 优先观察 |
| `/relics/starter_relics_tier_list` | P2 | 同上 | 同上 | 下个采样窗 > 0 优先观察 |

## 执行顺序（建议）
1. 先做 P0 10 页：只改内链 + 首段一句 + 1-2 个 FAQ 问句。
2. 再做 P1 8 页：按角色与机制页入口补链。
3. 最后做 P2 3 页：轻改后观察，不做大改。

## 风险与边界
- 不改 URL，不做大改版，不跨模块重构。
- 不新增依赖，不做无关格式化。
- 若 7-14 天仍持续 0 曝光，再进入“模板结构二次调整”（单独立项）。

## 本次产出证据
- 30 页匹配中零曝光列表（22）：`/tmp/batch30_zero_22.txt`
- 匹配明细：`/tmp/batch30_match.tsv`
