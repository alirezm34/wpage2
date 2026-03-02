# Domain Setup Guide

Domain: `ratewatchaus.com` | Registrar: Namecheap | Proxy: Cloudflare | Host: Vercel

---

## 1. Namecheap — Change nameservers

1. Domain List → `ratewatchaus.com` → **Nameservers** → switch to **Custom DNS**
2. Enter the two Cloudflare nameservers (assigned when adding site):
   - `lynn.ns.cloudflare.com`
   - `mia.ns.cloudflare.com`
3. Save. Propagation: 5–30 min (up to 24h).

## 2. Cloudflare — Add site and DNS

1. Add site `ratewatchaus.com` → Free plan
2. **DNS → Records:**

| Type  | Name  | Content                | Proxy   |
|-------|-------|------------------------|---------|
| A     | `@`   | `76.76.21.21`          | Proxied |
| CNAME | `www` | `cname.vercel-dns.com` | Proxied |

3. **SSL/TLS:** Set to **Full (strict)**
4. **Edge Certificates:** Enable **Always Use HTTPS** + **Automatic HTTPS Rewrites**

## 3. Cloudflare — Strip hosting headers

**Rules → Transform Rules → Modify Response Header** → Create rule:

- **Name:** `Strip Vercel Headers`
- **Match:** All incoming requests
- **Actions:**

| Action | Header name          |
|--------|----------------------|
| Remove | `x-matched-path`     |
| Remove | `x-nextjs-prerender`  |
| Remove | `x-nextjs-stale-time` |
| Remove | `x-vercel-cache`      |
| Remove | `x-vercel-id`         |

> `server` header is automatically set to `cloudflare` by the proxy — no action needed.

## 4. Vercel — Add domain

1. Project → Settings → Domains → Add `ratewatchaus.com` and `www.ratewatchaus.com`
2. Verify shows "Valid Configuration"

## 5. Verify

```bash
# Nameservers → Cloudflare
dig ratewatchaus.com NS +short

# DNS resolves through Cloudflare proxy (not Vercel IPs directly)
dig ratewatchaus.com A +short

# No Vercel/Next.js headers exposed
curl -sI https://www.ratewatchaus.com | grep -iE 'vercel|x-powered|x-matched|x-nextjs'
# Expected: no output

# Server header shows cloudflare
curl -sI https://www.ratewatchaus.com | grep -i server
# Expected: server: cloudflare
```
