import type { Metadata } from 'next';
import type React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for aussierateinsights.com — how we use cookies and similar technologies.',
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
    title: '1. What are cookies?',
    content: (
      <p style={pStyle}>
        Cookies are small text files placed on your device when you visit a website. They help the
        website recognise your device and remember certain information about your visit. Cookies and
        similar technologies (such as pixels and local storage) are widely used to make websites work
        efficiently and to provide information to site operators.
      </p>
    ),
  },
  {
    title: '2. How aussierateinsights.com uses cookies',
    content: (
      <>
        <p style={pStyle}>
          When you visit aussierateinsights.com, we may place cookies on your device for the
          following purposes:
        </p>
        <ul style={ulStyle}>
          <li>
            <strong>Essential cookies:</strong> Required for core site functionality such as
            remembering your cookie consent preference. These cannot be disabled without affecting
            site operation.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help us understand how visitors interact with
            aussierateinsights.com by collecting information about pages visited, time spent, and
            navigation patterns. This data is aggregated and anonymised.
          </li>
          <li>
            <strong>Advertising and measurement cookies:</strong> Used to measure the effectiveness
            of advertising campaigns and to understand how users arrive at aussierateinsights.com.
            These may include third-party pixels (such as the Meta Pixel) that collect data about
            page views and interactions.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Cookies we use',
    content: (
      <>
        <p style={pStyle}>The following types of cookies may be set when you visit aussierateinsights.com:</p>
        <ul style={ulStyle}>
          <li>
            <strong>ari_cookie_consent</strong> — Stores your cookie consent preference (essential,
            first-party, persistent).
          </li>
          <li>
            <strong>_fbp</strong> — Set by Meta (Facebook) for advertising measurement and delivery
            (third-party, persistent, up to 90 days).
          </li>
          <li>
            <strong>_fbc</strong> — Set by Meta (Facebook) when a user arrives via a Facebook ad
            click (third-party, persistent, up to 90 days).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Third-party cookies',
    content: (
      <>
        <p style={pStyle}>
          Some cookies on aussierateinsights.com are set by third-party services we use, including
          analytics and advertising platforms. These third parties may collect information about your
          online activity across different websites. We do not control these third-party cookies and
          their use is governed by the respective third party&apos;s privacy policy.
        </p>
        <p style={pStyle}>
          Third-party services that may set cookies on aussierateinsights.com include Meta
          (Facebook) for advertising measurement.
        </p>
      </>
    ),
  },
  {
    title: '5. Managing and disabling cookies',
    content: (
      <>
        <p style={pStyle}>You can manage or disable cookies in several ways:</p>
        <ul style={ulStyle}>
          <li>
            <strong>Browser settings:</strong> Most browsers allow you to view, manage, and delete
            cookies through their settings or preferences menu. Refer to your browser&apos;s help
            documentation for instructions.
          </li>
          <li>
            <strong>Cookie consent:</strong> When you first visit aussierateinsights.com, you are
            presented with a cookie consent notice. You may accept or decline non-essential cookies
            at that time.
          </li>
          <li>
            <strong>Opt-out tools:</strong> Some third-party advertising networks offer opt-out
            mechanisms. For Meta (Facebook), you can manage your ad preferences at{' '}
            <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer">
              facebook.com/adpreferences
            </a>.
          </li>
        </ul>
        <p style={pStyle}>
          Please note that disabling cookies may affect the functionality of aussierateinsights.com
          and your experience on the site.
        </p>
      </>
    ),
  },
  {
    title: '6. Changes to this policy',
    content: (
      <p style={pStyle}>
        We may update this Cookie Policy from time to time to reflect changes in the cookies we use
        or for other operational, legal, or regulatory reasons. We encourage you to review this page
        periodically. Continued use of aussierateinsights.com after changes constitutes acceptance of
        the updated policy.
      </p>
    ),
  },
  {
    title: '7. Contact',
    content: (
      <p style={pStyle}>
        If you have questions about our use of cookies on aussierateinsights.com, contact us:
        <br />
        <br />
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

export default function CookiesPage() {
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
          Cookie Policy
        </h1>
        <p style={{ fontSize: 13, color: 'var(--text-light)', margin: '0 0 28px', fontStyle: 'italic' }}>
          <strong style={{ fontStyle: 'normal', color: 'var(--text-muted)' }}>Effective date:</strong>{' '}
          {effectiveDate}
        </p>

        <div className="card-muted" style={{ marginBottom: 32 }}>
          <p style={{ margin: '0 0 10px', fontSize: 14, color: 'var(--text-muted)' }}>
            This Cookie Policy explains how <strong style={{ color: 'var(--text)' }}>Aussie Rate Insights Pty Ltd</strong>{' '}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar
            technologies on <strong style={{ color: 'var(--text)' }}>aussierateinsights.com</strong>.
          </p>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--text-light)' }}>
            For more details on how we handle personal information, see our{' '}
            <Link href="/privacy">Privacy Policy</Link>.
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
          Note: This policy is provided for general informational purposes and is not legal advice.
        </p>
      </main>

      <Footer />
    </>
  );
}
