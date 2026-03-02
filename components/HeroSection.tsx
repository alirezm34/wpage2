import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/posts';
import { formatDate, getCategoryStyle } from '@/lib/posts';
import CompactPostCard from './CompactPostCard';

interface HeroSectionProps {
  featured: Post;
  editorPicks: Post[];
  recentPosts: Post[];
}

export default function HeroSection({ featured, editorPicks, recentPosts }: HeroSectionProps) {
  const featuredColors = getCategoryStyle(featured.category);

  return (
    <div className="hero-grid">
      {/* Left — Banner / Featured */}
      <div>
        <h2 className="section-heading">Featured</h2>
        <Link href={`/blog/${featured.slug}`} className="overlay-card hero-featured">
          <Image
            src={featured.image}
            alt={featured.imageAlt}
            width={800}
            height={500}
            sizes="(max-width: 900px) 100vw, 45vw"
            className="overlay-card-image"
            priority
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          />
          <div className="overlay-card-body">
            <span
              className="category-pill"
              style={{ background: featuredColors.bg, color: featuredColors.text }}
            >
              {featured.category}
            </span>
            <h3 className="overlay-card-title">{featured.title}</h3>
            <p className="overlay-card-excerpt">{featured.excerpt}</p>
            <div className="overlay-card-meta">
              {formatDate(featured.date)} &middot; {featured.readingTime} min read
            </div>
          </div>
        </Link>
      </div>

      {/* Center — Editor's Choice */}
      <div>
        <h2 className="section-heading">
          Editor&rsquo;s Choice
          <Link href="/" className="view-all">View All</Link>
        </h2>
        <div className="editor-choice-stack">
          {editorPicks.map((post) => {
            const colors = getCategoryStyle(post.category);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="overlay-card">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={400}
                  height={280}
                  sizes="(max-width: 900px) 50vw, 27vw"
                  className="overlay-card-image"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
                <div className="overlay-card-body">
                  <span
                    className="category-pill"
                    style={{ background: colors.bg, color: colors.text, fontSize: 10 }}
                  >
                    {post.category}
                  </span>
                  <h3 className="overlay-card-title">{post.title}</h3>
                  <div className="overlay-card-meta">{formatDate(post.date)}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Right — Recent News */}
      <div>
        <h2 className="section-heading">
          Recent News
          <Link href="/" className="view-all">View All</Link>
        </h2>
        <div className="recent-news-list">
          {recentPosts.map((post) => (
            <CompactPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
