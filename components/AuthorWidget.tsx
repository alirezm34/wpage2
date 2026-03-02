import Link from 'next/link';
import Image from 'next/image';

export default function AuthorWidget() {
  return (
    <aside>
      <h2 className="section-heading">About Us</h2>
      <div className="card author-widget">
        <Image
          src="/images/profile-author.webp"
          alt="Aussie Rate Insights founder"
          width={100}
          height={100}
          sizes="100px"
          className="author-widget-avatar"
        />
        <h3 className="author-widget-name">Aussie Rate Insights</h3>
        <p className="author-widget-bio">
          We publish educational content about Australian savings rates, term deposits, fixed income,
          and retirement planning considerations. Our goal is to help Australians make more informed
          decisions about their savings and investments.
        </p>
        <div style={{ marginTop: 14, textAlign: 'center' }}>
          <Link
            href="/about"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--accent)',
              textDecoration: 'none',
            }}
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </aside>
  );
}
