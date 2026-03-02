import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/posts';
import { formatDate } from '@/lib/posts';

export default function CompactPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="compact-card">
      <div className="compact-card-body">
        <h4 className="compact-card-title">{post.title}</h4>
        <div className="compact-card-meta">{formatDate(post.date)}</div>
      </div>
      <Image
        src={post.image}
        alt={post.imageAlt}
        width={120}
        height={96}
        sizes="80px"
        className="compact-card-image"
      />
    </Link>
  );
}
