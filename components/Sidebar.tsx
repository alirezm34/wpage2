'use client';

import Link from 'next/link';
import NewsletterForm from './NewsletterForm';
import { CATEGORIES, getCategoryStyle } from '@/lib/posts';

interface SidebarProps {
  activeCategory?: string | null;
  onCategoryClick?: (cat: string) => void;
}

export default function Sidebar({ activeCategory, onCategoryClick }: SidebarProps) {
  return (
    <aside className="sidebar">
      {/* Newsletter */}
      <div className="card">
        <div className="section-label" style={{ marginBottom: 4 }}>Stay updated</div>
        <h3
          style={{
            margin: '0 0 6px',
            fontFamily: 'var(--font-display)',
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--navy)',
          }}
        >
          Newsletter
        </h3>
        <p style={{ margin: '0 0 14px', fontSize: 13, color: 'var(--text-light)' }}>
          Monthly notes on Australian investing, fixed income, and retirement planning.
        </p>
        <NewsletterForm />
      </div>

      {/* Categories */}
      <div className="card">
        <h3
          style={{
            margin: '0 0 14px',
            fontFamily: 'var(--font-display)',
            fontSize: 18,
            fontWeight: 700,
            color: 'var(--navy)',
          }}
        >
          Categories
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {CATEGORIES.map((cat) => {
            const colors = getCategoryStyle(cat);
            const isActive = activeCategory === cat;
            return (
              <span
                key={cat}
                className={`category-pill category-pill-clickable${isActive ? ' category-pill-active' : ''}`}
                style={{
                  background: isActive ? colors.text : colors.bg,
                  color: isActive ? '#fff' : colors.text,
                }}
                onClick={() => onCategoryClick?.(cat)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onCategoryClick?.(cat);
                }}
              >
                {cat}
              </span>
            );
          })}
        </div>
      </div>

      {/* About snippet */}
      <div className="card">
        <h3
          style={{
            margin: '0 0 8px',
            fontFamily: 'var(--font-display)',
            fontSize: 18,
            fontWeight: 700,
            color: 'var(--navy)',
          }}
        >
          About
        </h3>
        <p style={{ margin: '0 0 12px', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65 }}>
          Aussie Rate Insights publishes educational content about Australian savings rates, term
          deposits, fixed income, and retirement planning considerations.
        </p>
        <Link
          href="/about"
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--accent)',
            textDecoration: 'none',
          }}
        >
          Learn more &rarr;
        </Link>
      </div>
    </aside>
  );
}
