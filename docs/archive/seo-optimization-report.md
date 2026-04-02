# SEO 优化报告 - StS2 Guide

**优化日期**: 2026-02-12  
**网站**: https://sts2guide.com  
**框架**: Next.js 16.1.6 with App Router

---

## ✅ 已实施的 SEO 优化

### 1. 结构化数据 (JSON-LD Schema.org)

实施了完整的结构化数据标记，帮助搜索引擎更好地理解网站内容：

#### 全局结构化数据（首页）
- **WebSite Schema**: 定义网站基本信息和搜索功能
- **Organization Schema**: 定义网站组织信息和品牌标识
- **VideoGame Schema**: 定义《Slay the Spire 2》游戏信息

#### 页面级结构化数据
- **Article Schema**: 应用于所有角色详情页，包含作者、发布日期、图片等
- **BreadcrumbList Schema**: 应用于角色详情页，提供面包屑导航结构

**文件位置**: `app/schema.tsx`

**SEO 影响**:
- ✅ 提升搜索结果中的富媒体片段（Rich Snippets）显示
- ✅ 改善 Google 搜索结果中的面包屑导航显示
- ✅ 增加网站在知识图谱中被收录的机会

---

### 2. 动态 Sitemap 生成

创建了动态 sitemap.xml，自动包含所有页面：

**实现方式**: Next.js App Router 原生 sitemap.ts  
**文件位置**: `app/sitemap.ts`

**包含的页面**:
- 首页 (优先级: 1.0, 更新频率: daily)
- 角色列表页 (优先级: 0.8, 更新频率: weekly)
- 新闻页 (优先级: 0.8, 更新频率: daily)
- 关于页 (优先级: 0.5, 更新频率: monthly)
- 所有角色详情页 (优先级: 0.9, 更新频率: weekly)

**访问地址**: https://sts2guide.com/sitemap.xml

**SEO 影响**:
- ✅ 帮助搜索引擎发现和索引所有页面
- ✅ 明确页面优先级和更新频率
- ✅ 加速新内容的索引速度

---

### 3. Robots.txt 优化

创建了 robots.txt 文件，控制搜索引擎爬虫行为：

**实现方式**: Next.js App Router 原生 robots.ts  
**文件位置**: `app/robots.ts`

**配置内容**:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /404

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://sts2guide.com/sitemap.xml
```

**访问地址**: https://sts2guide.com/robots.txt

**SEO 影响**:
- ✅ 防止搜索引擎索引内部 API 和构建文件
- ✅ 引导搜索引擎访问 sitemap
- ✅ 优化爬虫预算（Crawl Budget）

---

### 4. 元标签优化

#### 全局元标签（app/layout.tsx）
- ✅ **metadataBase**: 设置为 `https://sts2guide.com`（统一 URL 基准）
- ✅ **canonical**: 添加规范 URL，避免重复内容问题
- ✅ **Open Graph**: 完整的 OG 标签（标题、描述、图片、URL）
- ✅ **Twitter Card**: 大图卡片模式，优化社交媒体分享
- ✅ **keywords**: 核心关键词数组
- ✅ **authors**: 作者信息
- ✅ **manifest**: PWA 清单文件

#### 页面级元标签
每个页面都有独特的 SEO 元数据：

**首页** (`app/page.tsx`):
- Title: "Home | StS2 Guide"
- Description: 强调"ultimate roguelike deck-builder"和核心价值

**角色列表页** (`app/characters/page.tsx`):
- Title: "Characters | StS2 Guide"
- Description: 强调"compare abilities, difficulty levels"
- Keywords: 包含角色名称和相关搜索词

**角色详情页** (`app/characters/[slug]/page.tsx`):
- Title: "{角色名} Guide | StS2 Guide"
- Description: 动态生成，包含角色名称和难度
- Keywords: 角色特定关键词
- Open Graph 图片: 使用角色图片

**新闻页** (`app/news/layout.tsx`):
- Title: "News & Updates | StS2 Guide"
- Description: 强调"latest patch notes, developer updates"
- Keywords: 新闻相关关键词

**SEO 影响**:
- ✅ 每个页面都有独特的标题和描述，避免重复
- ✅ 针对不同搜索意图优化关键词
- ✅ 社交媒体分享时显示优化的预览卡片

---

### 5. 图片优化

使用 Next.js Image 组件优化图片加载：

**优化内容**:
- ✅ 自动响应式图片尺寸
- ✅ 懒加载（Lazy Loading）
- ✅ 优先级控制（priority 属性）
- ✅ 正确的 alt 文本（无障碍和 SEO）
- ✅ 外部图片域名白名单配置

**实施位置**: 
- 首页角色卡片
- 角色详情页（待完全实施）

**SEO 影响**:
- ✅ 提升页面加载速度（Core Web Vitals）
- ✅ 改善图片搜索排名
- ✅ 提升移动端用户体验

---

### 6. Next.js 配置优化

更新了 `next.config.ts` 以提升性能和 SEO：

```typescript
{
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'files.manuscdn.com' }
    ]
  },
  compress: true,              // 启用 Gzip 压缩
  trailingSlash: false,        // 统一 URL 格式
  reactStrictMode: true,       // 开发模式最佳实践
}
```

**SEO 影响**:
- ✅ 减少页面体积，提升加载速度
- ✅ 统一 URL 格式，避免重复内容
- ✅ 更好的开发体验和代码质量

---

### 7. 性能监控准备

创建了 `app/analytics.tsx` 文件，为集成分析工具做准备：

**支持的分析工具**:
- Google Analytics 4
- Plausible Analytics
- Vercel Analytics
- 自定义分析服务

**监控指标**:
- 页面浏览量（Page Views）
- Core Web Vitals（LCP, FID, CLS）
- 用户行为追踪

**SEO 影响**:
- ✅ 监控用户行为，优化内容策略
- ✅ 追踪 Core Web Vitals，持续优化性能
- ✅ 数据驱动的 SEO 决策

---

## 📊 SEO 指标对比

### 优化前
- ❌ 无结构化数据
- ❌ 无 sitemap.xml
- ❌ 无 robots.txt
- ❌ 缺少 canonical URL
- ⚠️ 部分页面元标签重复
- ⚠️ 图片未优化

### 优化后
- ✅ 完整的 JSON-LD 结构化数据
- ✅ 动态生成的 sitemap.xml
- ✅ 优化的 robots.txt
- ✅ 所有页面都有 canonical URL
- ✅ 每个页面独特的元标签
- ✅ Next.js Image 组件优化

---

## 🎯 目标关键词策略

### 主要目标关键词（高搜索量）
1. "Slay the Spire 2" - 首页
2. "StS2 guide" - 首页
3. "Slay the Spire 2 characters" - 角色列表页
4. "Slay the Spire 2 tier list" - 角色列表页

### 长尾关键词（低竞争）
1. "Necrobinder guide Slay the Spire 2" - Necrobinder 详情页
2. "The Regent best build StS2" - The Regent 详情页
3. "Slay the Spire 2 character comparison" - 角色列表页
4. "StS2 patch notes" - 新闻页

### 语义相关词
- "roguelike deck-builder"
- "card synergies"
- "optimal strategies"
- "character mechanics"

---

## 🚀 下一步优化建议

### 短期优化（1-2 周）
1. **内部链接优化**
   - 在首页添加更多指向角色详情页的链接
   - 在角色详情页之间添加相关角色推荐
   - 在新闻文章中链接到相关角色页面

2. **内容扩展**
   - 添加更多角色（目前只有 2 个）
   - 创建卡牌数据库页面
   - 添加遗物（Relic）指南页面

3. **性能优化**
   - 实施字体预加载
   - 优化 CSS 关键路径
   - 添加 Service Worker（PWA）

### 中期优化（1-2 月）
1. **内容营销**
   - 发布深度角色攻略文章
   - 创建视频内容并嵌入页面
   - 建立社区论坛或评论系统

2. **外部链接建设**
   - 在 Reddit r/slaythespire 社区分享
   - 联系游戏媒体网站（IGN, PC Gamer）
   - 提交到游戏攻略聚合网站

3. **技术 SEO**
   - 实施 AMP（加速移动页面）
   - 添加多语言支持（国际化）
   - 优化 Core Web Vitals 到绿色区域

### 长期优化（3-6 月）
1. **权威性建设**
   - 获取高质量外链
   - 建立品牌知名度
   - 成为 StS2 社区的权威资源

2. **用户生成内容**
   - 允许用户提交卡组构建
   - 社区评分和评论系统
   - 用户攻略投稿

3. **数据分析驱动**
   - 基于 Google Search Console 数据优化
   - A/B 测试标题和描述
   - 持续监控排名变化

---

## 📈 预期 SEO 效果

### 短期（1-3 个月）
- ✅ Google 索引所有页面
- ✅ 搜索结果中显示富媒体片段
- ✅ 品牌关键词排名前 3
- ✅ 页面加载速度 < 2 秒

### 中期（3-6 个月）
- ✅ 长尾关键词排名前 10
- ✅ 自然搜索流量增长 200%+
- ✅ 建立 10+ 高质量外链
- ✅ Core Web Vitals 全绿

### 长期（6-12 个月）
- ✅ 主要关键词排名前 5
- ✅ 成为 StS2 攻略的权威网站
- ✅ 月访问量 > 10,000
- ✅ 搜索引擎推荐片段（Featured Snippet）

---

## 🔧 技术实现文件清单

### 新增文件
- ✅ `app/robots.ts` - Robots.txt 生成
- ✅ `app/sitemap.ts` - Sitemap 生成
- ✅ `app/schema.tsx` - 结构化数据组件
- ✅ `app/news/layout.tsx` - 新闻页元数据
- ✅ `app/analytics.tsx` - 分析工具准备

### 修改文件
- ✅ `app/layout.tsx` - 添加 metadataBase 和 canonical
- ✅ `app/page.tsx` - 添加结构化数据和 Image 组件
- ✅ `app/characters/[slug]/page.tsx` - 添加结构化数据
- ✅ `next.config.ts` - 性能和图片优化配置

---

## ✅ 验证清单

部署后请验证以下内容：

### 搜索引擎验证
- [ ] 访问 https://sts2guide.com/robots.txt 显示正确内容
- [ ] 访问 https://sts2guide.com/sitemap.xml 显示所有页面
- [ ] 使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 验证结构化数据
- [ ] 使用 [Schema.org Validator](https://validator.schema.org/) 验证 JSON-LD

### 性能验证
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) 分数 > 90
- [ ] [GTmetrix](https://gtmetrix.com/) 性能评级 A
- [ ] 移动端加载时间 < 2 秒

### 社交媒体验证
- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) 预览正常
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator) 预览正常
- [ ] [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) 预览正常

### 搜索引擎提交
- [ ] 提交到 [Google Search Console](https://search.google.com/search-console)
- [ ] 提交到 [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] 提交 sitemap 到两个搜索引擎

---

**报告生成时间**: 2026-02-12  
**优化工程师**: Manus AI  
**下次审查**: 2026-03-12（1 个月后）
