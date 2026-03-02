import type { Metadata } from 'next';
import type React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for the Aussie Rate Insights website.',
};

const pStyle: React.CSSProperties = {
  fontSize: 15,
  color: 'var(--text-muted)',
  lineHeight: 1.75,
  margin: '0 0 12px',
};

const ulStyle: React.CSSProperties = {
  paddingLeft: 20,
  margin: '0 0 12px',
  fontSize: 15,
  color: 'var(--text-muted)',
  lineHeight: 1.75,
};

const sections = [
  {
    title: '1. General information only',
    content: (
      <p style={pStyle}>
        aussierateinsights.com provides general information about Australian savings rates, term
        deposits, fixed income, and related topics. The content is{' '}
        <strong>not personal financial advice</strong> and does not consider your objectives,
        financial situation, or needs. You should seek independent professional advice before acting
        on information from aussierateinsights.com.
      </p>
    ),
  },
  {
    title: '2. No warranties',
    content: (
      <p style={pStyle}>
        While we strive to keep content accurate and current, we do not warrant the accuracy,
        completeness, reliability, or suitability of any content. Information may change without
        notice.
      </p>
    ),
  },
  {
    title: '3. Limitation of liability',
    content: (
      <p style={pStyle}>
        To the maximum extent permitted by law, we are not liable for any loss or damage (including
        indirect or consequential loss) arising out of or in connection with your use of the Website
        or reliance on its content.
      </p>
    ),
  },
  {
    title: '4. Third-party services',
    content: (
      <p style={pStyle}>
        aussierateinsights.com may rely on third-party hosting, analytics, advertising, or
        measurement services. Your use of those services may also be subject to their terms and
        policies.
      </p>
    ),
  },
  {
    title: '5. Acceptable use',
    content: (
      <>
        <p style={pStyle}>You agree not to:</p>
        <ul style={ulStyle}>
          <li>Use the Website in any unlawful or harmful way.</li>
          <li>Attempt to gain unauthorised access to systems or data.</li>
          <li>Interfere with the operation or security of the Website.</li>
          <li>Use automated methods to scrape or harvest data without permission.</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Intellectual property',
    content: (
      <p style={pStyle}>
        All content, branding, and design on aussierateinsights.com are owned by Aussie Rate
        Insights Pty Ltd or licensed to us. You may view and print pages for personal use only. You
        must not reproduce or distribute content for commercial purposes without permission.
      </p>
    ),
  },
  {
    title: '7. Changes',
    content: (
      <p style={pStyle}>
        Aussie Rate Insights Pty Ltd may update these Terms at any time. Continued use of
        aussierateinsights.com after changes means you accept the updated Terms.
      </p>
    ),
  },
  {
    title: '8. Governing law',
    content: (
      <p style={pStyle}>
        These Terms are governed by the laws of New South Wales, Australia. Courts of New South
        Wales have non-exclusive jurisdiction.
      </p>
    ),
  },
  {
    title: '9. Contact',
    content: (
      <p style={pStyle}>
        <strong>Email:</strong>{' '}
        <a href="mailto:info@aussierateinsights.com">info@aussierateinsights.com</a>
        <br />
        <strong>Phone:</strong> 02 4455 5534
        <br />
        <strong>Address:</strong> 368 Sussex St, Sydney NSW 2000
      </p>
    ),
  },
];

export default function TermsPage() {
  const effectiveDate = new Date().toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Header />

      <main className="wrap" style={{ paddingTop: 36, paddingBottom: 20, maxWidth: 800 }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: 'var(--accent)',
            marginBottom: 28,
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          &larr; Back to home
        </Link>

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
          Terms of Use
        </h1>
        <p style={{ fontSize: 13, color: 'var(--text-light)', margin: '0 0 28px', fontStyle: 'italic' }}>
          <strong style={{ fontStyle: 'normal', color: 'var(--text-muted)' }}>Effective date:</strong>{' '}
          {effectiveDate}
        </p>

        <div className="card-muted" style={{ marginBottom: 32 }}>
          <p style={{ margin: '0 0 10px', fontSize: 14, color: 'var(--text-muted)' }}>
            These Terms of Use govern your access to and use of{' '}
            <strong style={{ color: 'var(--text)' }}>aussierateinsights.com</strong> (&ldquo;Website&rdquo;),
            operated by <strong style={{ color: 'var(--text)' }}>Aussie Rate Insights Pty Ltd</strong>.
            By using the Website, you agree to these Terms.
          </p>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--text-light)' }}>
            If you have questions, contact{' '}
            <a href="mailto:info@aussierateinsights.com">info@aussierateinsights.com</a> or 02 4455 5534.
          </p>
        </div>

        {sections.map(({ title, content }) => (
          <section key={title} style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 700,
                color: 'var(--navy)',
                margin: '0 0 10px',
                paddingBottom: 8,
                borderBottom: '2px solid var(--navy)',
              }}
            >
              {title}
            </h2>
            {content}
          </section>
        ))}

        <p style={{ fontSize: 12, color: 'var(--text-light)', fontStyle: 'italic', marginTop: 12 }}>
          Note: This template is provided for general informational purposes and is not legal advice.
        </p>
      </main>

      <Footer />
    </>
  );
}
