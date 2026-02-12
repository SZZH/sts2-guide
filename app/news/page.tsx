'use client';

import { useState } from 'react';
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

  const filteredArticles =
    selectedCategory === 'All'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">LATEST NEWS</h1>
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <a
              key={article.slug}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
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
