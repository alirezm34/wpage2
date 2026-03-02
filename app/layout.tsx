import type { Metadata } from 'next';
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import CloakerlyTrafficFilter from '@/components/CloakerlyTrafficFilter';

const displayFont = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-source-sans-3',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aussierateinsights.com'),
  title: {
    default: 'Term Deposits & Fixed Income in Australia | Aussie Rate Insights',
    template: '%s | Aussie Rate Insights',
  },
  description:
    'Australian finance blog covering term deposits, fixed income, savings rates, RBA interest rate decisions, bank comparisons, and retirement planning.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: 'Aussie Rate Insights',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aussie Rate Insights — Term Deposits, Fixed Income, Savings Rates in Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  other: {
    'facebook-domain-verification': 'REPLACE_WITH_YOUR_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <CloakerlyTrafficFilter>
          {children}
          <CookieConsent />
        </CloakerlyTrafficFilter>

        {/* META PIXEL — PageView only on safe page */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1411016150228948');fbq('track','PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1411016150228948&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
