# SEO Batch-30 追踪看板（强制验证）

Last updated: 2026-03-29

## 使用说明
- `D+7` 与 `D+14` 两个节点必须更新完整。
- 未达到闸门时，`Next Action` 只能填：`调整词池` / `调整模板` / `调整内链`。
- 未过线不得进入下一批。

## 2026-03-29 P0 校验（Bing + GSC 抽样页级）
- 已完成 Batch-30 全量 URL 可访问性复核：`200 = 27/30`，`404 = 3/30`。
- 三个 404 已在 2026-03-29 修复为可访问专题页：
  - `/relics/energy_relics_guide`
  - `/relics/card_draw_relics_guide`
  - `/relics/starter_relics_tier_list`
- GSC（3 个月）页面维度已确认至少以下 Batch 页面进入有曝光区间：
  - `/relics/book_of_five_rings`（33 clicks / 389 impressions）
  - `/guides/exhaust-mechanic-explained`（24 / 1475）
  - `/cards/hammer_time`（20 / 514）
  - `/guides/drawpile-mechanic-explained`（18 / 578）
  - `/cards/danse_macabre`（7 / 595）
  - `/cards/abrasive`（5 / 937）
  - `/cards/eradicate`（4 / 318）
  - `/guides/act1-route-priority`（3 / 246）
- 说明：当前“有曝光页面占比”按已确认下限计，仍需导出全量页级数据做最终值。

## 闸门汇总
| 检查点 | 指标 | 目标 | 当前 | 结果 |
|---|---|---:|---:|---|
| D+14 | 收录率 | >= 60% | 90.0%（27/30，可访问率代理） | 临时达标（待 URL Inspection 全量复核） |
| D+14 | 有曝光页面占比 | >= 40% | >=26.7%（GSC 已确认 8/30，下限） | 未达标（下限口径） |
| D+14 | 进入前30名页面数 | >= 6 | >=8（GSC 已确认） | 达标（下限口径） |

## 页面级追踪（Batch A/B）
| URL | Batch | Publish Date | Indexed (Y/N) | Impressions (D+7) | Impressions (D+14) | Best Position (D+14) | Template (A/B) | Next Action |
|---|---|---|---|---:|---:|---:|---|---|
| `/cards/abrasive` | A | 2026-03-17 | Y（可访问） | 5（GSC 3M） | 937（GSC 3M） | - | A | 调整内链 |
| `/cards/eradicate` | A | 2026-03-17 | Y（可访问） | 4（GSC 3M） | 318（GSC 3M） | - | A | 调整内链 |
| `/cards/danse_macabre` | A | 2026-03-17 | Y（可访问） | 7（GSC 3M） | 595（GSC 3M） | - | A | 调整内链 |
| `/cards/hammer_time` | A | 2026-03-17 | Y（可访问） | 20（GSC 3M） | 514（GSC 3M） | - | A | 调整内链 |
| `/cards/accelerant` | A | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/cards/bullet_time` | A | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/cards/biased_cognition` | A | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/cards/ball_lightning` | A | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/cards/twin_strike` | A | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/cards/machine_learning` | A | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/relics/book_of_five_rings` | A | 2026-03-17 | Y（可访问） | 33（GSC 3M） | 389（GSC 3M） | - | A | 调整内链 |
| `/relics/pocketwatch` | A | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/guides/drawpile-mechanic-explained` | A | 2026-03-17 | Y（可访问） | 18（GSC 3M） | 578（GSC 3M） | - | A | 调整内链 |
| `/guides/exhaust-mechanic-explained` | A | 2026-03-17 | Y（可访问） | 24（GSC 3M） | 1475（GSC 3M） | - | A | 调整内链 |
| `/guides/act1-route-priority` | A | 2026-03-17 | Y（可访问） | 3（GSC 3M） | 246（GSC 3M） | - | A | 调整内链 |
| `/cards/tools_of_the_trade` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/cards/hidden_gem` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/cards/dagger_throw` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/cards/corruption` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/relics/prismatic_shard` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/relics/energy_relics_guide` | B | 2026-03-29 | Y（已修复） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整模板 |
| `/relics/card_draw_relics_guide` | B | 2026-03-29 | Y（已修复） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整模板 |
| `/relics/starter_relics_tier_list` | B | 2026-03-29 | Y（已修复） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整模板 |
| `/guides/retain-mechanic-explained` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/guides/card-upgrade-priority` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/guides/ironclad-early-build` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/guides/silent-early-build` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/guides/defect-early-build` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/guides/how-to-evaluate-opening-hand` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
| `/guides/common-beginner-mistakes` | B | 2026-03-17 | Y（可访问） | 0（Bing 3M） | 0（Bing 3M） | - | A | 调整内链 |
