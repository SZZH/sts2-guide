# STS2 Guide KPI 与验证闸门

## A. 日常巡检核心指标
- GSC：点击、展现、CTR、平均排名、查询、页面、国家/地区、设备、搜索呈现、索引覆盖、Rich Results
- Vercel：Visitors、PV、Bounce Rate、Top Landing/Exit、页面趋势、异常时间段
- Bing Webmaster：Search Performance、Index Coverage、Sitemaps、URL Inspection、Crawl/Index 异常、IndexNow 接收状态
- Google Trends：核心词/品牌词/意图词趋势、区域差异、时间窗口变化、相关主题、相关查询
- 外链执行：当日外链发布数量、有效链接占比、平台分布、引流落地页分布
- 社媒互动：新评论数、回复率、24小时内回复率、未回复积压数

## B. 30页验证批闸门
- 收录率 >= 60%
- 有曝光页面占比 >= 40%
- 进入前30页面数 >= 6

## C. 闸门规则
- 未过闸门：不得扩量推进，只允许调整词池、模板、内链。
- 过闸门：可进入下一批页面扩量或升级执行阶段。

## D. 代码改动附加门禁（GEO）
- 每次 GEO 相关改动后至少执行一次 `lint + build`。

## E. 社媒响应门禁（运营）
- 评论回复率目标：>= 90%
- 24小时内回复率目标：>= 80%
- 若未达标：次日 P0 优先处理回复，不新增分发动作
