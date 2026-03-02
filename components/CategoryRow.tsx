import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/posts';
import { formatDate, getCategoryStyle } from '@/lib/posts';

interface CategoryRowProps {
  title: string;
  posts: Post[];
}

export default function CategoryRow({ title, posts }: CategoryRowProps) {
  if (posts.length === 0) return null;

  return (
    <section style={{ marginBottom: 36 }}>
      <h2 className="section-heading">
        {title}
        <Link href="/" className="view-all">View all</Link>
      </h2>
      <div className="category-row-grid">
        {posts.slice(0, 3).map((post) => {
          const colors = getCategoryStyle(post.category);
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={400}
                height={260}
                sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                className="post-card-image"
              />
              <div className="post-card-body">
                <div className="post-card-meta">
                  <span
                    className="category-pill"
                    style={{ background: colors.bg, color: colors.text }}
                  >
                    {post.category}
                  </span>
                </div>
                <h3 className="post-card-title" style={{ fontSize: 16 }}>{post.title}</h3>
                <div className="dateline">{formatDate(post.date)}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
