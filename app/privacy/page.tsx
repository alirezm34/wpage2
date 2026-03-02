import type { Metadata } from 'next';
import type React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Aussie Rate Insights — how we collect, use, and protect your personal information.',
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
    title: '1. What information we collect',
    content: (
      <>
        <p style={pStyle}>Depending on how you interact with aussierateinsights.com, we may collect:</p>
        <ul style={ulStyle}>
          <li><strong>Contact information</strong> (e.g., email address) if you submit it via forms.</li>
          <li><strong>Technical data</strong> (e.g., IP address, device type, browser type, pages viewed, timestamps).</li>
          <li><strong>Cookies and similar technologies</strong> used for site functionality, analytics, and advertising measurement.</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. How we collect information',
    content: (
      <ul style={ulStyle}>
        <li>When you enter information into a form on aussierateinsights.com (e.g., newsletter subscription).</li>
        <li>Automatically via cookies and server logs when you browse aussierateinsights.com.</li>
        <li>Via third-party tools used for analytics and advertising measurement.</li>
      </ul>
    ),
  },
  {
    title: '3. How we use information',
    content: (
      <>
        <p style={pStyle}>Aussie Rate Insights Pty Ltd may use personal information to:</p>
        <ul style={ulStyle}>
          <li>Provide and improve content and user experience on aussierateinsights.com.</li>
          <li>Respond to enquiries and provide requested information.</li>
          <li>Operate, maintain, and secure aussierateinsights.com.</li>
          <li>Measure and improve marketing performance and website conversion events.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Advertising, analytics, and cookies',
    content: (
      <>
        <p style={pStyle}>
          We may use cookies and similar technologies to understand how visitors use
          aussierateinsights.com and to measure advertising effectiveness. This can include tools
          that receive event data such as page views or form submissions. For more details, see
          our <a href="/cookies">Cookie Policy</a>.
        </p>
        <p style={pStyle}>
          You can manage cookies through your browser settings. Disabling cookies may affect the
          functionality of aussierateinsights.com.
        </p>
      </>
    ),
  },
  {
    title: '5. Disclosure to third parties',
    content: (
      <>
        <p style={pStyle}>Aussie Rate Insights Pty Ltd may share information with third parties when needed to operate aussierateinsights.com, including:</p>
        <ul style={ulStyle}>
          <li>Hosting and infrastructure providers</li>
          <li>Analytics providers</li>
          <li>Advertising and measurement providers</li>
          <li>Professional advisers (as needed)</li>
          <li>Regulators or law enforcement when required by law</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Overseas disclosures',
    content: (
      <p style={pStyle}>
        Some service providers may store or process information outside Australia. Where this
        occurs, we take reasonable steps to ensure appropriate safeguards are in place.
      </p>
    ),
  },
  {
    title: '7. Security and retention',
    content: (
      <p style={pStyle}>
        We take reasonable steps to protect personal information from misuse, interference, loss,
        and unauthorised access. We retain information only as long as necessary for the purposes
        outlined in this policy, unless a longer retention period is required by law.
      </p>
    ),
  },
  {
    title: '8. Access and correction',
    content: (
      <p style={pStyle}>
        You may request access to personal information we hold about you and request corrections if
        you believe it is inaccurate, out-of-date, incomplete, irrelevant, or misleading. Contact
        us using the details below.
      </p>
    ),
  },
  {
    title: '9. Complaints',
    content: (
      <p style={pStyle}>
        If you believe we have breached privacy obligations, contact us and we will respond within a
        reasonable timeframe. If you are not satisfied, you may be able to contact the Office of the
        Australian Information Commissioner (OAIC).
      </p>
    ),
  },
  {
    title: '10. Contact',
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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: 13, color: 'var(--text-light)', margin: '0 0 28px', fontStyle: 'italic' }}>
          <strong style={{ fontStyle: 'normal', color: 'var(--text-muted)' }}>Effective date:</strong>{' '}
          {effectiveDate}
        </p>

        <div className="card-muted" style={{ marginBottom: 32 }}>
          <p style={{ margin: '0 0 10px', fontSize: 14, color: 'var(--text-muted)' }}>
            This Privacy Policy explains how <strong style={{ color: 'var(--text)' }}>Aussie Rate Insights Pty Ltd</strong>{' '}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, stores, and discloses personal
            information when you visit <strong style={{ color: 'var(--text)' }}>aussierateinsights.com</strong>.
            We aim to handle personal information in accordance with applicable
            Australian privacy principles and privacy obligations.
          </p>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--text-light)' }}>
            If you have questions, contact us at{' '}
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
