import Link from 'next/link';
import { posts } from '@/lib/posts';

export default function TickerBar() {
  const today = new Date().toLocaleDateString('en-AU', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const headlines = posts.slice(0, 6);

  return (
    <div className="ticker-bar">
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', height: 32 }}>
        <span className="ticker-date">{today}</span>
        <div className="ticker-track">
          <div className="ticker-scroll">
            {[...headlines, ...headlines].map((post, i) => (
              <Link
                key={`${post.slug}-${i}`}
                href={`/blog/${post.slug}`}
                className="ticker-item"
              >
                <span className="ticker-dot" aria-hidden="true">&bull;</span>
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
