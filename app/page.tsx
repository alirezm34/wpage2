import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TickerBar from '@/components/TickerBar';
import HeroSection from '@/components/HeroSection';
import CategoryRow from '@/components/CategoryRow';
import AuthorWidget from '@/components/AuthorWidget';
import Sidebar from '@/components/Sidebar';
import ViewContentTracker from '@/components/ViewContentTracker';
import { posts, getPostsByCategory } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Term Deposits & Fixed Income in Australia | Aussie Rate Insights',
  description:
    'Compare Australian term deposits, fixed income products, and savings rates across 40+ banks. Covering RBA rate cuts, bank comparisons, superannuation, government guarantee ($250K protection), and retirement planning strategies.',
  keywords: [
    'term deposits',
    'fixed income',
    'savings rates',
    'bank comparison',
    'interest rates',
    'RBA',
    'rate cuts',
    'financial planning',
    'retirement planning',
    'superannuation',
    'government guarantee',
    '$250K protection',
    'Australia',
  ],
};

export default function Home() {
  const featured = posts[0];
  const editorPicks = posts.slice(1, 3);
  const recentPosts = posts.slice(3, 8);

  const heroSlugs = posts.slice(0, 8).map((p) => p.slug);

  const termDepositPosts = getPostsByCategory('Term Deposits', heroSlugs);
  const interestRatePosts = getPostsByCategory('Interest Rates', heroSlugs);
  const retirementPosts = getPostsByCategory('Retirement Planning', heroSlugs);

  return (
    <>
      <TickerBar />
      <Header />

      <main className="wrap" style={{ paddingTop: 28, paddingBottom: 40 }}>
        <HeroSection
          featured={featured}
          editorPicks={editorPicks}
          recentPosts={recentPosts}
        />

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 700,
            color: 'var(--navy)',
            margin: '32px 0 4px',
            letterSpacing: '-0.02em',
            paddingBottom: 10,
          }}
        >
          Australian Term Deposits, Fixed Income &amp; Savings Rates
        </h1>

        <div id="content" className="below-hero">
          <div>
            <CategoryRow title="Term Deposits" posts={termDepositPosts} />
            <CategoryRow title="Interest Rates" posts={interestRatePosts} />
            <CategoryRow title="Retirement Planning" posts={retirementPosts} />
          </div>

          <div>
            <AuthorWidget />
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
      <ViewContentTracker />
    </>
  );
}
