# ARV Energy — GitHub Pages Starter

This repo hosts the static site for **www.arv.energy** using **GitHub Pages**.

## Deploy

1. Create repository: **martinhjel.github.io** (public).
2. Upload these files to the repo root (or use Git).
3. Go to **Settings → Pages**:
   - *Build and deployment*: **Deploy from a branch** (`main`, `/`).
   - **Custom domain**: `www.arv.energy` → Save.
   - After DNS is live, enable **Enforce HTTPS**.

## DNS at Domeneshop

Choose one **apex** option, plus the `www` record:

**Option A — A/AAAA records** (recommended)
- `@` → A: 185.199.108.153
- `@` → A: 185.199.109.153
- `@` → A: 185.199.110.153
- `@` → A: 185.199.111.153
- `@` → AAAA (optional): 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153

**Option B — ANAME (flattened)**
- `@` → ANAME: martinhjel.github.io

**Plus for both options**
- `www` → CNAME: martinhjel.github.io

> Once both apex and `www` resolve and the custom domain is set to `www.arv.energy`, GitHub will issue a TLS certificate and automatically redirect the non-canonical host to the canonical one.

## Customize

- Edit `index.html` and `assets/styles.css`.
- Add pages as new `.html` files; GitHub Pages will serve them from the same domain.
- `404.html` provides a custom not-found page.
- `.nojekyll` disables Jekyll processing (useful for paths starting with `_`).

