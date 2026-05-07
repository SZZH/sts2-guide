# STS2 Guide 轻维护与止损方案

> 生效日期：2026-05-07
> 当前定位：从“增长项目”降级为“验证型维护项目”。
> 核心原则：继续做，但降低投入；先验证真实承接，不再盲目扩量。

## 1. 维护周期

- 本轮观察周期：`2026-05-07 ~ 2026-05-21`
- 周期长度：`14 天`
- 周期内禁止动作：
  - 不扩量新增大批页面
  - 不新开大专题
  - 不做站点级重构
  - 不做“感觉可以优化一下”的非必要改动

## 2. 投入上限

- 每周投入上限：`3-5 小时`
- 若单周超过 `5 小时`，必须先停下复盘，不继续加码。
- 超时后只允许继续处理：
  - 官方 patch / hotfix / newsletter 同步
  - 404 / sitemap / IndexNow / 版本号过时等明确问题
  - 已经产生真实异常证据的问题

## 3. 只做四类动作

### 3.1 Patch 轻维护

- 官方有新 patch / hotfix / newsletter 时，更新：
  - `/patches`
  - 首页相关入口
  - `/builds`
  - `/tier-lists`
  - `/cards`
  - `/relics`
  - `/characters`
- 必要时补 `1` 篇新闻页，但不追求大而全。
- 新闻页发布后必须同步：
  - `app/sitemap.ts`
  - `IndexNow`
  - Bing URL Submission（若平台可用）
  - 站内相关内链

### 3.2 主入口维护

- 只维护以下已有承接价值入口：
  - `/builds`
  - `/patches`
  - `/tier-lists`
  - `/cards`
- 其他长尾页暂时不主动改，除非出现明确数据证据或明显错误。

### 3.3 每周一次数据复盘

- 固定覆盖四端：
  - GSC
  - Vercel
  - Bing Webmaster
  - Google Trends
- 若 Bing / Trends 不可实时采集，必须标记 `BLOCKED`，不得复用历史口径冒充实时结果。
- 复盘输出仍按固定顺序：
  - 当前情况分析
  - 原因判断（含置信度）
  - 建议动作（含优先级）

### 3.4 明显问题修复

只修明确问题：

- 版本号过时
- 404
- sitemap 缺 URL
- IndexNow 未提交
- 主入口标题 / 首屏文案明显不匹配当前 patch
- 搜索高展现低点击但已有主页面可承接的问题

## 4. 继续投入线

到 `2026-05-21` 复盘时，满足以下任意 `2` 条，继续轻维护：

- GSC clicks 较 `866` 上涨 `>= 15%`
- Vercel 30 天 Visitors 止跌，或跌幅缩到 `-5%` 以内
- `/builds`、`/patches`、`/tier-lists` 至少一个进入 GSC Top Page，或在 Vercel Top Landing 明显上升
- Bounce Rate 从 `79%` 降到 `75%` 以下
- Bing 恢复后 Search Performance 继续增长

继续轻维护不等于恢复重投入；仍按每周 `3-5 小时` 上限执行。

## 5. 止损线

到 `2026-05-21` 复盘时，出现以下任意 `2` 条，进入止损：

- GSC clicks 没涨，或跌回 `800` 以下
- Vercel Visitors 继续下降 `> 15%`
- Bounce Rate 仍 `>= 80%`
- `/builds`、`/patches`、`/tier-lists` 没有任何承接改善
- 新 patch 内容更新后 `7 天` 内没有带来任何搜索或 landing 改善

## 6. 止损后模式

止损不等于关站，而是改为最低成本保活：

- 每周巡检一次官方 patch
- 有 patch 才更新
- 每月复盘一次数据
- 不再新增大批页面
- 不再做社媒分发
- 不再做大规模 SEO 改造

## 7. 当前基线

基线日期：`2026-05-07`

- GSC：`866 clicks / 6.31万 impressions / CTR 1.4% / 平均排名 8.9`
- Vercel：`Visitors 2,087 / PV 4,675 / Bounce Rate 79%`
- Vercel 异常：`Singapore 42%`，仍需按噪音风险处理
- Bing：`BLOCKED`，Bing Webmaster 服务不可达
- Google Trends：`BLOCKED`，Google `/sorry` 人机验证
- 内容风险：`v0.104.0` 口径已于 2026-05-07 14:55 同步，后续主要风险转为收录/点击回流与 Bing URL Submission 阻塞

## 8. 默认执行口径

后续所有运营任务默认按本方案执行：

1. 先查 `NOW.md`、`00-dashboard.md`、`01-daily-log.md` 和本方案。
2. 先判断是否在观察周期内。
3. 若用户要求扩量或大改，先检查是否满足继续投入线。
4. 若未满足继续投入线，只允许做轻维护动作。
5. 若触发止损线，自动切换到最低成本保活模式。
