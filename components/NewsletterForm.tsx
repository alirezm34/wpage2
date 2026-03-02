'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (submitted) {
    return (
      <div
        style={{
          padding: '16px',
          background: '#e6f9ed',
          borderRadius: 3,
          border: '1px solid #34a853',
          fontSize: 14,
          color: '#1a7a32',
          fontWeight: 500,
        }}
      >
        Thanks{name ? `, ${name}` : ''}! You&apos;re subscribed.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      style={{ display: 'grid', gap: 10 }}
    >
      <input
        type="text"
        placeholder="Your name"
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '11px 14px',
          borderRadius: 3,
          border: '1px solid var(--border)',
          fontSize: 14,
          fontFamily: 'var(--font-body)',
          background: 'var(--bg)',
          color: 'var(--text)',
          outline: 'none',
          transition: 'border-color 0.15s',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
      />
      <input
        type="email"
        placeholder="Email address"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: '11px 14px',
          borderRadius: 3,
          border: '1px solid var(--border)',
          fontSize: 14,
          fontFamily: 'var(--font-body)',
          background: 'var(--bg)',
          color: 'var(--text)',
          outline: 'none',
          transition: 'border-color 0.15s',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
      />
      <button
        type="submit"
        style={{
          padding: '12px 14px',
          borderRadius: 3,
          border: 0,
          background: 'var(--accent)',
          color: '#fff',
          fontWeight: 700,
          fontSize: 14,
          fontFamily: 'var(--font-body)',
          cursor: 'pointer',
          letterSpacing: '0.01em',
          transition: 'background 0.15s, transform 0.1s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
      >
        Subscribe
      </button>
      <p style={{ margin: 0, fontSize: 12, color: 'var(--text-light)' }}>
        You can unsubscribe anytime.
      </p>
    </form>
  );
}
