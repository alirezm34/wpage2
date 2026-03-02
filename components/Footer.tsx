import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 56,
        borderTop: '1px solid var(--border)',
        padding: '32px 0',
        background: 'var(--surface)',
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 32,
            marginBottom: 28,
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: 10, textDecoration: 'none' }}>
              <Image
                src="/images/logo.svg"
                alt="Aussie Rate Insights"
                width={200}
                height={32}
                sizes="200px"
                style={{ height: 32, width: 'auto' }}
              />
            </Link>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65 }}>
              General educational content about Australian term deposits, savings rates, fixed
              income, and retirement planning.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-light)',
                marginBottom: 10,
              }}
            >
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { href: '/', label: 'Blog' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-light)',
                marginBottom: 10,
              }}
            >
              Legal
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Use' },
                { href: '/cookies', label: 'Cookie Policy' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            fontSize: 12,
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            borderLeft: '3px solid var(--accent)',
            paddingLeft: 14,
            marginBottom: 20,
          }}
        >
          <strong style={{ color: 'var(--text)' }}>Important:</strong> This website provides
          general financial information and does not consider your personal circumstances.
          Seek professional advice if needed.
        </div>

        {/* Copyright */}
        <div
          style={{
            paddingTop: 16,
            borderTop: '1px solid var(--border)',
            fontSize: 12,
            color: 'var(--text-light)',
          }}
        >
          &copy; {new Date().getFullYear()} Aussie Rate Insights. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
