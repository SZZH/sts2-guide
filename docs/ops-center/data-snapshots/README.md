# Data Snapshots

> 目标：保留机器可读的数据快照，便于跨线程快速回放趋势。

## 命名规则
- `YYYY-MM-DD-am.json`
- `YYYY-MM-DD-pm.json`

## 最小字段规范
```json
{
  "date": "2026-04-02",
  "slot": "am",
  "gsc": {
    "clicks": 0,
    "impressions": 0,
    "ctr": 0,
    "avg_position": 0
  },
  "vercel": {
    "visitors": 0,
    "pageviews": 0,
    "bounce_rate": 0
  },
  "bing": {
    "indexed_pages": 0,
    "crawl_errors": 0,
    "sitemap_status": ""
  },
  "trends": {
    "core_keywords": [],
    "regions": []
  },
  "offsite": {
    "backlinks_posted": 0,
    "backlinks_effective": 0,
    "new_comments": 0,
    "replied_comments": 0,
    "pending_comments": 0,
    "reply_within_24h_rate": 0
  },
  "notes": []
}
```

## 使用原则
- 每次巡检后尽量补齐一份 JSON 快照
- 指标解释写在 `01-daily-log.md`
- 决策依据写在 `02-decisions.md`
