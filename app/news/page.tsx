'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NEWS_ARTICLES } from '@/shared/gameData';

type NewsCategory = 'News' | 'Guide' | 'Analysis' | 'Update';

const CATEGORIES: (NewsCategory | 'All')[] = ['All', 'News', 'Guide', 'Analysis', 'Update'];

const categoryColors: Record<NewsCategory, string> = {
  News: 'bg-molten-orange/20 text-molten-orange',
  Guide: 'bg-blue-500/20 text-blue-400',
  Update: 'bg-green-500/20 text-green-400',
  Analysis: 'bg-purple-500/20 text-purple-400',
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'All'>('All');
  const sortedArticles = [...NEWS_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredArticles =
    selectedCategory === 'All'
      ? sortedArticles
      : sortedArticles.filter((article) => article.category === selectedCategory);
  const featuredLaunchArticle = selectedCategory === 'All'
    ? sortedArticles.find((article) => article.slug === 'slay-the-spire-2-launch-time-us-china')
    : null;
  const gridArticles = featuredLaunchArticle
    ? filteredArticles.filter((article) => article.slug !== featuredLaunchArticle.slug)
    : filteredArticles;

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">SLAY THE SPIRE 2 NEWS</h1>
          <p className="text-steel-blue text-lg max-w-2xl mx-auto">
            Stay updated with the latest Slay the Spire 2 news, guides, and community updates.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-molten-orange text-white'
                  : 'bg-shadow-gray border border-border text-muted-foreground hover:border-molten-orange'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {featuredLaunchArticle && (
          <Link
            href={`/news/${featuredLaunchArticle.slug}`}
            className="group block mb-12 rounded-2xl border border-molten-orange/40 bg-gradient-to-br from-molten-orange/10 via-shadow-gray/80 to-shadow-gray/60 p-8 hover:border-molten-orange transition-all duration-300"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-molten-orange text-white">
                Featured Launch Guide
              </span>
              <span className="text-xs text-muted-foreground">{featuredLaunchArticle.date}</span>
              <span className="text-xs text-muted-foreground">{featuredLaunchArticle.readTime}</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 group-hover:text-molten-orange transition-colors">
              {featuredLaunchArticle.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-8 mb-5">
              {featuredLaunchArticle.excerpt}
            </p>
            <div className="flex items-center gap-2 text-molten-orange font-semibold">
              Read the launch guide
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group bg-shadow-gray border border-border rounded-lg overflow-hidden hover:border-molten-orange transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      categoryColors[article.category]
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.source}</span>
                </div>
                <h2 className="font-heading text-xl font-bold mb-2 group-hover:text-molten-orange transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-steel-blue">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
