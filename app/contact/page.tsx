import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Aussie Rate Insights for general questions about term deposits, savings rates, and fixed income in Australia.',
};

export default function ContactPage() {
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
          Contact Us
        </h1>

        <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: '0 0 32px', lineHeight: 1.7 }}>
          Have a general question about the information on this site? We&apos;d love to hear from you.
        </p>

        <div className="card" style={{ marginBottom: 24 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
            }}
          >
            <div>
              <div className="section-label" style={{ marginBottom: 6 }}>Email</div>
              <a
                href="mailto:info@aussierateinsights.com"
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--navy)',
                  textDecoration: 'none',
                }}
              >
                info@aussierateinsights.com
              </a>
            </div>

            <div>
              <div className="section-label" style={{ marginBottom: 6 }}>Phone</div>
              <a
                href="tel:+61244555534"
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--navy)',
                  textDecoration: 'none',
                }}
              >
                02 4455 5534
              </a>
            </div>

            <div>
              <div className="section-label" style={{ marginBottom: 6 }}>Address</div>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: 'var(--navy)' }}>
                368 Sussex St, Sydney NSW 2000
              </p>
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: 13,
            color: 'var(--text-light)',
            fontStyle: 'italic',
          }}
        >
          General information only — not personal financial advice.
        </p>
      </main>

      <Footer />
    </>
  );
}
