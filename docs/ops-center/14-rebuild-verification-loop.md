# STS2 Guide 重构验证闭环

> 目的：让这轮重构不止“完成页面改造”，而是能被持续验证和迭代。
> 原则：优先看能否把“搜索意图 -> 页面承接 -> 下一跳”打通，而不是只看总流量。

## 1. 核心验证问题

每次复检必须回答以下问题：

1. 高意图词有没有更清晰地落到唯一主页面？
2. 首页和入口页是否减少了“进来就走”的情况？
3. 用户是否更容易从入口页进入二跳页，而不是停在目录层？
4. patch 更新后，builds / tier-lists / characters / reference 是否形成联动？

## 2. 验证指标

### 2.1 GSC

- 关注指标：
  - 点击
  - 展现
  - CTR
  - 平均排名
  - 查询
  - 页面
- 重点问题：
  - `builds / tier list / patch / beginner` 相关词是否继续上涨
  - 这些词是否集中落到 `/builds` `/tier-lists` `/patches` `/guides` 等主页面
- 通过标准：
  - 主词 CTR 不下降且逐步提升
  - 主词落地页开始从旧页面向新主页面迁移

### 2.2 Vercel

- 关注指标：
  - Visitors
  - Page Views
  - Bounce Rate
  - Top Landing Pages
  - Referrers
- 重点问题：
  - 首页 `/`
  - `/guides`
  - `/characters`
  - `/builds`
  - `/tier-lists`
  - `/patches`
- 通过标准：
  - 首页和 `/guides` bounce 下降
  - `/builds` `/tier-lists` `/patches` 开始成为真实 landing 或明显二跳页

### 2.3 Bing Webmaster

- 关注指标：
  - Search Performance
  - Pages
  - Keywords
  - IndexNow
  - URL Submission
- 重点问题：
  - `guide / builds / patch / tips` 词是否继续走强
  - IndexNow / URL Submission 是否恢复节奏
- 通过标准：
  - 新主页面开始承接 Bing 高意图词
  - `URLs submitted today` 不再长期为 0

### 2.4 Google Trends

- 关注指标：
  - 品牌词
  - 简称词
  - 意图词
  - 相关查询
- 重点问题：
  - `builds`
  - `tier list`
  - `patch`
  - 角色名词
- 通过标准：
  - 趋势冒头词能快速对应到站内主页面，而不是继续由旧页承接

## 3. 复检频率

- 日常巡检：每日一次四端总览
- 重构复检：每完成 1 个批次后复检一次
- Patch 事件复检：每次正式 patch / hotfix 后 24-48 小时复检一次
- 关键词迁移复检：每周一次，看主词是否迁移到主落地页

## 4. 通过 / 继续迭代判定

### 通过

- 主词开始稳定落到唯一主页面
- 首页和 `/guides` 的承接明显改善
- `/builds` `/tier-lists` `/patches` 不再只是结构页，而是有实际流量承接
- reference 层不再抢主词

### 需要继续迭代

- 主词仍被旧页面承接
- 首页、`/guides` bounce 仍高
- 新主页面存在但无人进入
- patch 更新后没有带动 builds / characters / reference 联动

## 5. 每次复检后的动作

每次复检必须输出三类结果：

1. 当前情况分析
2. 原因判断（含置信度）
3. 建议动作（P0 / P1）

并更新：

- `docs/ops-center/00-dashboard.md`
- `docs/ops-center/01-daily-log.md`
- `docs/ops-center/03-roadmap.md`
- `docs/ops-center/NOW.md`

