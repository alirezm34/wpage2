import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import { getPostBySlug, getRelatedPosts, getAllSlugs, formatDate, getCategoryStyle } from '@/lib/posts';
import { postContent } from '@/lib/post-content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = postContent[slug];
  const related = getRelatedPosts(slug, 2);
  const categoryColors = getCategoryStyle(post.category);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `https://aussierateinsights.com${post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Aussie Rate Insights',
      url: 'https://aussierateinsights.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aussie Rate Insights',
      url: 'https://aussierateinsights.com',
    },
    keywords: post.keywords.join(', '),
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="wrap" style={{ paddingTop: 32, paddingBottom: 40 }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 20, fontSize: 13, color: 'var(--text-light)' }}>
          <Link href="/" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
            Blog
          </Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>{post.category}</span>
        </nav>

        <div className="blog-layout">
          <article>
            {/* Post header */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span
                  className="category-pill"
                  style={{ background: categoryColors.bg, color: categoryColors.text }}
                >
                  {post.category}
                </span>
                <span className="dateline">
                  {formatDate(post.date)} &middot; {post.readingTime} min read
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  margin: '0 0 16px',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                {post.title}
              </h1>

              <p
                style={{
                  fontSize: 18,
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: '0 0 24px',
                  maxWidth: 640,
                }}
              >
                {post.excerpt}
              </p>
            </div>

            {/* Hero image */}
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 720px"
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 420,
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: 8,
                display: 'block',
                marginBottom: 32,
              }}
            />

            {/* Article body */}
            <div className="blog-article">{content}</div>

            {/* Disclaimer */}
            <div
              className="card"
              style={{
                marginTop: 32,
                borderLeft: '4px solid var(--accent)',
                borderRadius: '0 8px 8px 0',
              }}
            >
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text)' }}>Disclaimer:</strong> This website
                provides general financial information and is not personal financial advice.
                Consider your objectives, financial situation, and needs, and seek professional
                advice if required.
              </p>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <section style={{ marginTop: 48 }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    color: 'var(--navy)',
                    margin: '0 0 20px',
                    paddingBottom: 10,
                    borderBottom: '2px solid var(--navy)',
                  }}
                >
                  Related Articles
                </h2>
                <div className="blog-grid">
                  {related.map((p) => (
                    <PostCard key={p.slug} post={p} />
                  ))}
                </div>
              </section>
            )}
          </article>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </>
  );
}
