# GSC Submission Log (2026-03-12)

## URL Inspection / Submission Attempts
- https://sts2guide.com/news/slay-the-spire-2-multiplayer-coop-guide  
  - Status: `网址尚未收录到 Google` + `Google 无法识别此网址`
  - Action: clicked `请求编入索引`
  - Result: `索引编制请求遭拒`（提示存在索引编制问题）

- https://sts2guide.com/news/slay-the-spire-2-release-date  
  - Status: `网址尚未收录到 Google` + `Google 无法识别此网址`
  - Action: clicked `请求编入索引`
  - Result: `索引编制请求遭拒`（提示存在索引编制问题）

## Index Status Checks
- https://sts2guide.com/cards  
  - Status: `网址已收录到 Google`

- https://sts2guide.com/cards/character/necrobinder  
  - Status: `网址已收录到 Google`

- https://sts2guide.com/characters/necrobinder  
  - Status: `网址已收录到 Google`

- https://sts2guide.com/news/slay-the-spire-2-known-issues-and-fixes  
  - Status: `网址已收录到 Google`

## Additional Batch (same day)
- https://sts2guide.com/news/slay-the-spire-2-hotfix-patch-notes
  - Status: `网址尚未收录到 Google`（`已发现 - 尚未编入索引`，来源为 sitemap）
  - Action: clicked `请求编入索引`
  - Result: `已请求编入索引`（加入优先抓取队列）

- https://sts2guide.com/news/slay-the-spire-2-steam-deck-performance-guide
  - Status: `网址尚未收录到 Google`（`已发现 - 尚未编入索引`，来源为 sitemap）
  - Action: clicked `请求编入索引`
  - Result: `已请求编入索引`（加入优先抓取队列）

- https://sts2guide.com/news/slay-the-spire-2-co-op-guide-how-it-works
  - Status: `网址尚未收录到 Google`（`已发现 - 尚未编入索引`，来源为 sitemap）
  - Action: checked status in URL Inspection
  - Result: remains pending crawl（本轮未记录到独立成功弹窗）

## After Deploy Re-Submission
- Deployment check:
  - `https://sts2guide.com/news/slay-the-spire-2-multiplayer-coop-guide` -> `HTTP 200`
  - `https://sts2guide.com/news/slay-the-spire-2-release-date` -> `HTTP 200`

- https://sts2guide.com/news/slay-the-spire-2-release-date
  - Status: `网址尚未收录到 Google`（`Google 无法识别此网址`）
  - Action: clicked `请求编入索引`
  - Result: `已请求编入索引`（已加入优先抓取队列）

- https://sts2guide.com/news/slay-the-spire-2-multiplayer-coop-guide
  - Status: `网址尚未收录到 Google`（`Google 无法识别此网址`）
  - Action: clicked `请求编入索引`
  - Result: 页面显示 `已请求编入索引`，但仍未出现 sitemap/referrer 发现信号，待下一轮抓取刷新

## Notes
- 新增的两篇高意图 news 页当前都处于“未发现来源”的状态（站点地图/引荐页均未出现），导致实时测试提交被拒。
- 线上探测结果：`https://sts2guide.com/news/slay-the-spire-2-multiplayer-coop-guide` 与 `https://sts2guide.com/news/slay-the-spire-2-release-date` 当前返回 `HTTP 404`，说明页面尚未部署到生产环境。
- 下一轮应优先等待 sitemap 再读取 + 内链被抓取后重提，而不是重复点击同一按钮。
