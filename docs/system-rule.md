# System Architecture Rules & Standards

**Version:** 1.1.0
**Status:** ENFORCED
**Stack:** Vite + React + TypeScript + Tailwind

---

## 🎯 Objective
To guarantee correct project structure, safe imports, stable builds, predictable routing, and production readiness while eliminating fragile or experimental setups.

## 🧱 Core Stack (Locked)
*   **Build Tool:** Vite
*   **Framework:** React
*   **Language:** TypeScript
*   **Routing:** React Router
*   **Styling:** Tailwind CSS (via PostCSS, NO CDN)
*   **Deployment:** Vercel / Netlify compatible

---

## 🔒 NON-NEGOTIABLE RULES

### 1️⃣ Project Structure
All application code must reside within the `/src` directory. Configuration files reside at the **project root**.

**Entry Point:** `src/main.tsx`
**Root Component:** `src/App.tsx`

**Required Directory Tree:**
```text
/
├─ src/
│   ├─ pages/          # Route components
│   ├─ components/     # Reusable UI components
│   ├─ layouts/        # Layout wrappers (MainLayout, AuthLayout)
│   ├─ routes/         # Router configuration
│   ├─ hooks/          # Custom React hooks
│   ├─ services/       # API and external service logic
│   ├─ styles/         # Global CSS only (index.css)
│   ├─ types/          # TypeScript interfaces and types
│   ├─ App.tsx         # Root app component
│   └─ main.tsx        # Entry point
├─ public/             # Static assets
├─ index.html          # HTML entry point (Clean shell only)
├─ vite.config.ts      # Build configuration
├─ tailwind.config.ts  # Tailwind config (Root level)
├─ postcss.config.js   # PostCSS config (Root level)
└─ tsconfig.json       # TypeScript config (Root level)
```

❌ **Forbidden:**
*   Mixed root + src files
*   Duplicate entry points
*   Config files buried inside `src/`

### 2️⃣ Import Rules
**Allowed:**
*   Relative imports: `import { Button } from './Button'`
*   Root alias: `import { Button } from '@/components/Button'` (Mapped to `/src`)

**Forbidden:**
*   `import ... from 'src/...'`
*   `import ... from '@/src/...'`
*   Browser Native Import Maps
*   CDN-based module imports
*   Dynamic or ambiguous paths
*   **Node.js Built-ins:** `path`, `fs`, `url`, `crypto`, `process` are strictly forbidden in client-side code.

### 3️⃣ Vite & TypeScript Configuration Rules
Vite aliases must match TypeScript paths to prevent type errors.

**1. Vite Config (`vite.config.ts`):**
```ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
}
```

**2. TypeScript Config (`tsconfig.json`):**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

❌ **Forbidden:**
*   Browser Import Maps in `index.html`
*   Runtime dependency resolution hacks

### 4️⃣ index.html Rules
*   Minimal HTML shell only.
*   **NO** JavaScript imports other than `src/main.tsx`.
*   **NO** React, Router, or Tailwind CDNs.

### 5️⃣ Styling Rules
*   Tailwind must be installed via PostCSS/Autoprefixer.
*   Global styles entry point: `src/styles/index.css`.
*   Directives required:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
*   Import global styles **once** in `src/main.tsx`.

### 6️⃣ Routing Rules
*   **Default:** Use `BrowserRouter`.
*   **Deployments:** Use `BrowserRouter` + SPA rewrite rules for Vercel/Netlify.
*   **Exception:** Use `HashRouter` **ONLY** if specific static hosting constraints (e.g., GitHub Pages without custom domain) require it.
*   Layouts must use `<Outlet />`.
*   A `404` (Not Found) route is mandatory.

### 7️⃣ Environment Variables
*   Use `import.meta.env` exclusively.
*   Provide `.env.example` for documentation.
*   **NEVER** commit `.env` or hardcode secrets.
*   Validate critical env vars at application startup.

---

## 🧪 Mandatory Verification Checklist
Before declaring success, verify the following:

- [ ] `npm run dev` boots cleanly without errors.
- [ ] `npm run build` succeeds and produces a `dist/` folder.
- [ ] `tsc --noEmit` (or `npm run typecheck`) passes with zero errors.
- [ ] No unresolved import warnings.
- [ ] No console errors in the browser.
- [ ] Routing works on page refresh (handle SPA rewrite rules).
- [ ] No duplicate React instances.
- [ ] **ZERO** CDN or ImportMap usage in production code.

---

## 🚨 Failure Handling
If any of the following occur:
*   Blank screen
*   Import resolution errors
*   CORS errors
*   Build failures

**Action:**
1.  **STOP**
2.  Identify root cause (usually config or path related).
3.  Fix configuration or folder structure.
4.  Re-verify from scratch using the checklist.

---

**Final Directive:**
Do not guess. Do not mix environments. Do not shortcut setup. Always prefer clarity, structure, and verification over speed.
