# SEO Execution Checklist (StS2 Launch Window)

Last updated: 2026-03-16

标记规范：
- 状态：`DONE`（已完成）/ `IN_PROGRESS`（进行中）/ `TODO`（待做）/ `BLOCKED`（受外部条件阻塞）
- 优先级：`P0`（最高）/ `P1`（高）/ `P2`（中）

## A. 已完成（DONE）
- [x] `DONE` [P0] Launch 页 FAQ 结构化数据（`FAQPage`）已添加
- [x] `DONE` [P1] Launch 页保留可见更新日志区块
- [x] `DONE` [P0] Google Search Console 已提交 sitemap
- [x] `DONE` [P0] Article 1 已发布：`Best Starter Character in Slay the Spire 2 (Early Access)`
- [x] `DONE` [P1] Article 1 已与 `/characters`、`/mechanics` 做内链
- [x] `DONE` [P0] Bing Webmaster Tools 已完成站点导入：`https://sts2guide.com/`
- [x] `DONE` [P0] Bing 已提交 sitemap：`https://sts2guide.com/sitemap.xml`（状态：Processing）
- [x] `DONE` [P0] IndexNow key 文件已上线：`/9b140331fdfef9def5d086169aa7aac2.txt`
- [x] `DONE` [P0] 站内 IndexNow 提交能力已接入（API route + submit script）
- [x] `DONE` [P0] 首页信息架构已重排（新增高意图查询快捷入口并前置）
- [x] `DONE` [P0] 高展现低 CTR 重点页面 metadata 已完成一轮改写（首页/新闻/角色/卡牌/指南 + 详情模板）
- [x] `DONE` [P0] 未索引页面分级处理（第一轮）已执行：6 个历史低价值新闻页改为 `noindex` 并移出 sitemap

## B. 阻塞项（BLOCKED）
- [ ] `BLOCKED` [P0] IndexNow 全站批量提交（543 URLs）
  - 现状：端点 `api.indexnow.org` 返回 `403 UserForbiddedToAccessSite`
  - 已验证：key 文件可访问（HTTP 200，内容正确）
  - 结论：当前为 Bing/IndexNow 侧授权状态未完成或同步延迟，待明天继续重试

## C. 待执行（TODO，按优先级）
### P0（先做）
- [ ] `TODO` [P0] 未索引页面分级处理（第二轮）：对高价值未收录页做“补强”而非扩量（优先 10 页）
- [ ] `TODO` [P0] 明日继续 IndexNow 提交闭环（先单 URL 成功，再批量）

### P1（高优先）
- [ ] `TODO` [P1] Article 2：`Top 10 First-Run Mistakes in Slay the Spire 2`
- [ ] `TODO` [P1] Launch 页新增“Known launch-day issues / workarounds”
- [ ] `TODO` [P1] 基于 GSC 实际查询继续增补 FAQ（问题导向）
- [ ] `TODO` [P1] X 二次分发（“what changed”版本）并回链最新页面

### P2（中优先）
- [ ] `TODO` [P2] Repost 一条 Launch 主题 X 线程（time + checklist + FAQ）
- [ ] `TODO` [P2] 建立稳定周报模板（渠道占比、关键词分层、页面优先级池）

## D. 数据调研执行清单（每次调研必须四端联动）
### GSC（必须）
- [ ] 点击、展现、CTR、平均排名
- [ ] 查询维度（品牌词/非品牌词、高展现低点击词）
- [ ] 页面维度（Top 页面、新页面、下滑页面）
- [ ] 国家/设备/搜索呈现
- [ ] 索引覆盖与结构化结果状态

### Vercel / 站内分析（必须）
- [ ] Visitors、PV、Bounce Rate
- [ ] Top Landing / Top Exit
- [ ] 时间序列波动与异常点
- [ ] 关键页面承接（首屏后跳转）

### Bing Webmaster（必须）
- [ ] Search Performance（点击/展现/查询/页面）
- [ ] Index Coverage（已索引/未索引）
- [ ] Sitemaps 处理状态
- [ ] URL Inspection 与抓取异常
- [ ] IndexNow 接收状态/失败原因

### Google Trends（必须）
- [ ] 核心词趋势（品牌词 + 需求词）
- [ ] 区域差异（重点国家）
- [ ] 时间窗口对比（7天/30天）
- [ ] Related Topics / Related Queries（选题输入）

## E. 防止关键词互抢（Cannibalization）
- Launch-time 精准意图固定在：
  - `/news/slay-the-spire-2-launch-time-us-china`
- 新增文章需分离意图簇：
  - starter character
  - first-run mistakes
  - launch-day issues
