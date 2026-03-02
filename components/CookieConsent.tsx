'use client';

import { useState, useEffect } from 'react';

const COOKIE_KEY = 'ari_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.06)',
        padding: '16px 0',
        animation: 'slideUp 0.35s ease-out',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)', flex: 1, minWidth: 240 }}>
          We use cookies for site functionality and analytics.
          See our{' '}
          <a href="/privacy" style={{ fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>
            Privacy Policy
          </a>{' '}
          for details.
        </p>

        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              padding: '8px 16px',
              borderRadius: 3,
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text-muted)',
              fontSize: 13,
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              transition: 'border-color 0.15s',
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              padding: '8px 16px',
              borderRadius: 3,
              border: 0,
              background: 'var(--accent)',
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              transition: 'background 0.15s',
            }}
          >
            Accept
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
