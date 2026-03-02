import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/posts';
import { formatDate, getCategoryStyle } from '@/lib/posts';

export default function PostCard({ post }: { post: Post }) {
  const colors = getCategoryStyle(post.category);

  return (
    <Link href={`/blog/${post.slug}`} className="post-card">
      <Image
        src={post.image}
        alt={post.imageAlt}
        width={600}
        height={400}
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
          <span>{formatDate(post.date)}</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-excerpt">{post.excerpt}</p>
      </div>
      <div className="post-card-footer">
        Read article <span aria-hidden="true">&rarr;</span>
      </div>
    </Link>
  );
}
