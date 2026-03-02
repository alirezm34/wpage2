import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Aussie Rate Insights — educational content on Australian term deposits, savings rates, fixed income, bank comparisons, RBA rate decisions, superannuation, and retirement planning.',
  keywords: [
    'term deposits',
    'fixed income',
    'savings rates',
    'bank comparison',
    'interest rates',
    'RBA',
    'retirement planning',
    'superannuation',
    'Australia',
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="wrap" style={{ paddingTop: 36, paddingBottom: 40, maxWidth: 760 }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 700,
            color: 'var(--navy)',
            margin: '0 0 8px',
            letterSpacing: '-0.02em',
          }}
        >
          About Aussie Rate Insights
        </h1>

        <p style={{ fontSize: 13, color: 'var(--text-light)', margin: '0 0 32px' }}>
          General educational content for Australian savers
        </p>

        <div
          style={{
            fontSize: 16,
            color: 'var(--text-muted)',
            lineHeight: 1.8,
          }}
        >
          <p style={{ margin: '0 0 18px' }}>
            <strong style={{ color: 'var(--text)' }}>Aussie Rate Insights</strong> publishes
            general educational content about Australian savings rates, term deposits, fixed income,
            and common retirement planning considerations. Our goal is to help everyday Australians
            understand the landscape of interest rates, RBA decisions, and how these factors can
            influence financial products like term deposits and savings accounts.
          </p>

          <p style={{ margin: '0 0 18px' }}>
            We cover topics including how term deposits work, the role of the Reserve Bank of
            Australia in setting the cash rate, how to compare savings rates and fixed income
            products, the $250,000 government guarantee under the Financial Claims Scheme, and
            general considerations for retirement planning and superannuation.
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 24,
              fontWeight: 700,
              color: 'var(--navy)',
              margin: '36px 0 14px',
              paddingBottom: 8,
              borderBottom: '2px solid var(--border)',
            }}
          >
            What We Do
          </h2>

          <ul
            style={{
              paddingLeft: 24,
              margin: '0 0 18px',
              lineHeight: 1.8,
            }}
          >
            <li>Explain how term deposits and fixed income products work in Australia</li>
            <li>Track how RBA interest rate decisions affect savings rates</li>
            <li>Provide general frameworks for comparing bank products</li>
            <li>Cover deposit protection under the $250K government guarantee</li>
            <li>Discuss retirement planning and superannuation considerations</li>
          </ul>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 24,
              fontWeight: 700,
              color: 'var(--navy)',
              margin: '36px 0 14px',
              paddingBottom: 8,
              borderBottom: '2px solid var(--border)',
            }}
          >
            Important Notice
          </h2>

          <div
            className="card"
            style={{
              borderLeft: '4px solid var(--accent)',
              borderRadius: '0 8px 8px 0',
            }}
          >
            <p style={{ margin: 0, fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              We do not provide personal financial advice. All content is for general informational
              purposes only and does not consider your individual objectives, financial situation, or
              needs. You should seek independent professional advice before making financial
              decisions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
