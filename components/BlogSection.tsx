'use client';

import { useState } from 'react';
import PostCard from './PostCard';
import Sidebar from './Sidebar';
import type { Post } from '@/lib/posts';

export default function BlogSection({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  function handleCategoryClick(cat: string) {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  }

  return (
    <div id="insights" className="blog-layout">
      <section>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            fontWeight: 700,
            color: 'var(--navy)',
            margin: '0 0 20px',
            paddingBottom: 12,
            borderBottom: '2px solid var(--navy)',
            display: 'flex',
            alignItems: 'baseline',
            gap: 12,
          }}
        >
          {activeCategory ?? 'Latest Articles'}
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 13,
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                color: 'var(--accent)',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Show all &times;
            </button>
          )}
        </h2>
        <div className="blog-grid">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Sidebar activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
    </div>
  );
}
