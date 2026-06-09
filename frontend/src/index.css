/* ============================================================
   NexStore Design System — index.css
   Dark glassmorphism, Inter font, premium UI
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* ── CSS Custom Properties ─────────────────────────────────── */
:root {
  /* Colors */
  --bg-primary: #0a0a0f;
  --bg-secondary: #111118;
  --bg-card: rgba(255,255,255,0.04);
  --bg-card-hover: rgba(255,255,255,0.07);
  --bg-glass: rgba(255,255,255,0.06);
  --border: rgba(255,255,255,0.08);
  --border-hover: rgba(255,255,255,0.15);

  --text-primary: #f0f0ff;
  --text-secondary: #9898b0;
  --text-muted: #5a5a72;

  --accent: #7c6fff;
  --accent-hover: #9585ff;
  --accent-glow: rgba(124,111,255,0.3);
  --accent-2: #ff6b9d;
  --accent-3: #00d4aa;

  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;

  /* Spacing */
  --sp-xs: 0.25rem;
  --sp-sm: 0.5rem;
  --sp-md: 1rem;
  --sp-lg: 1.5rem;
  --sp-xl: 2rem;
  --sp-2xl: 3rem;
  --sp-3xl: 4rem;

  /* Radii */
  --r-sm: 8px;
  --r-md: 12px;
  --r-lg: 16px;
  --r-xl: 24px;
  --r-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 24px rgba(0,0,0,0.5);
  --shadow-lg: 0 8px 40px rgba(0,0,0,0.6);
  --shadow-accent: 0 0 30px rgba(124,111,255,0.2);

  /* Transitions */
  --transition: 0.2s ease;
  --transition-slow: 0.35s ease;

  /* Navbar */
  --navbar-h: 68px;
}

/* ── Reset ────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

a { color: var(--accent); text-decoration: none; transition: color var(--transition); }
a:hover { color: var(--accent-hover); }

img { max-width: 100%; display: block; }
button { cursor: pointer; border: none; font-family: inherit; }
input, select, textarea { font-family: inherit; }

/* ── Layout ──────────────────────────────────────────────── */
.app-layout { display: flex; flex-direction: column; min-height: 100vh; }
.main-content { flex: 1; padding-top: var(--navbar-h); }

.section-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-xl);
}

/* ── Navbar ──────────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: var(--navbar-h);
  background: rgba(10,10,15,0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-xl);
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--sp-xl);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--sp-sm);
  text-decoration: none;
  flex-shrink: 0;
}

.brand-icon { font-size: 1.4rem; }
.brand-text {
  font-size: 1.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--sp-md);
  margin-left: auto;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  padding: var(--sp-xs) var(--sp-sm);
  border-radius: var(--r-sm);
  transition: color var(--transition), background var(--transition);
}
.nav-link:hover { color: var(--text-primary); background: var(--bg-card); }

.nav-cart { position: relative; font-size: 1.2rem; }
.cart-icon { display: flex; }
.cart-badge {
  position: absolute;
  top: -6px; right: -6px;
  background: var(--accent);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  border-radius: var(--r-full);
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

.nav-auth-buttons { display: flex; align-items: center; gap: var(--sp-sm); }
.btn-ghost {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.45rem 1rem;
  border-radius: var(--r-sm);
  font-size: 0.88rem;
  font-weight: 500;
  transition: all var(--transition);
}
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-glow); }

.btn-primary-sm {
  background: var(--accent);
  color: #fff;
  padding: 0.45rem 1rem;
  border-radius: var(--r-sm);
  font-size: 0.88rem;
  font-weight: 600;
  transition: background var(--transition), box-shadow var(--transition);
}
.btn-primary-sm:hover { background: var(--accent-hover); box-shadow: var(--shadow-accent); color: #fff; }

.nav-user-btn {
  display: flex;
  align-items: center;
  gap: var(--sp-sm);
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 0.4rem 0.9rem;
  border-radius: var(--r-full);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--transition);
}
.nav-user-btn:hover { border-color: var(--accent); box-shadow: var(--shadow-accent); }

.user-avatar {
  width: 28px; height: 28px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border-radius: var(--r-full);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
}

.dropdown-arrow { font-size: 0.65rem; color: var(--text-muted); }

.nav-dropdown { position: relative; }
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  min-width: 180px;
  padding: var(--sp-sm);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: fadeInDown 0.15s ease;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.dropdown-item {
  display: block;
  padding: 0.55rem 0.85rem;
  border-radius: var(--r-sm);
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  background: none;
  text-align: left;
  width: 100%;
  transition: all var(--transition);
}
.dropdown-item:hover { background: var(--bg-card); color: var(--text-primary); }
.dropdown-admin { color: var(--accent) !important; }
.dropdown-logout { color: var(--error) !important; }
.dropdown-logout:hover { background: rgba(239,68,68,0.1) !important; }

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  margin-left: auto;
  padding: 6px;
}
.nav-hamburger span { display: block; width: 22px; height: 2px; background: var(--text-secondary); border-radius: 2px; transition: var(--transition); }

/* ── Footer ──────────────────────────────────────────────── */
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  margin-top: var(--sp-3xl);
  padding: var(--sp-3xl) 0 var(--sp-xl);
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-xl);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--sp-3xl);
}

.footer-tagline { color: var(--text-muted); font-size: 0.9rem; margin-top: var(--sp-sm); }

.footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--sp-xl); }
.footer-col h4 { color: var(--text-primary); font-size: 0.9rem; font-weight: 700; margin-bottom: var(--sp-md); text-transform: uppercase; letter-spacing: 0.08em; }
.footer-col a { display: block; color: var(--text-muted); font-size: 0.9rem; margin-bottom: var(--sp-sm); transition: color var(--transition); }
.footer-col a:hover { color: var(--text-primary); }

.footer-bottom {
  max-width: 1280px;
  margin: var(--sp-2xl) auto 0;
  padding: var(--sp-xl) var(--sp-xl) 0;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--sp-md);
}

.footer-bottom p { color: var(--text-muted); font-size: 0.85rem; }
.footer-badges { display: flex; gap: var(--sp-lg); color: var(--text-muted); font-size: 0.85rem; flex-wrap: wrap; }

/* ── Buttons ─────────────────────────────────────────────── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-sm);
  background: var(--accent);
  color: #fff;
  padding: 0.7rem 1.5rem;
  border-radius: var(--r-md);
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background var(--transition), box-shadow var(--transition), transform var(--transition);
}
.btn-primary:hover { background: var(--accent-hover); box-shadow: var(--shadow-accent); transform: translateY(-1px); color: #fff; }
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

.btn-ghost-sm {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.4rem 0.9rem;
  border-radius: var(--r-sm);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
  white-space: nowrap;
}
.btn-ghost-sm:hover { border-color: var(--accent); color: var(--accent); }

/* ── Forms ───────────────────────────────────────────────── */
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs);
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.form-group input,
.form-group select,
.form-group textarea {
  background: var(--bg-glass);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: var(--text-primary);
  padding: 0.7rem 1rem;
  font-size: 0.95rem;
  transition: border-color var(--transition), box-shadow var(--transition);
  outline: none;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-muted); }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-md); }
.form-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--sp-md); }
.form-actions { display: flex; gap: var(--sp-md); justify-content: flex-end; margin-top: var(--sp-md); }

.form-group-checkbox { justify-content: flex-end; }
.form-group-checkbox label {
  display: flex;
  align-items: center;
  gap: var(--sp-sm);
  color: var(--text-primary);
  cursor: pointer;
  font-size: 0.95rem;
}
.form-group-checkbox input[type="checkbox"] {
  width: 18px; height: 18px;
  accent-color: var(--accent);
  border-radius: 4px;
  padding: 0;
}

/* ── Alert ───────────────────────────────────────────────── */
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-sm);
  padding: var(--sp-md) var(--sp-lg);
  border-radius: var(--r-md);
  font-size: 0.9rem;
  font-weight: 500;
}
.alert-error { background: rgba(239,68,68,0.12); border: 1px solid rgba(239,68,68,0.3); color: #fca5a5; }
.alert-success { background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); color: #6ee7b7; }
.alert-warning { background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.3); color: #fde68a; }
.alert-info { background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.3); color: #93c5fd; }
.alert-icon { flex-shrink: 0; }

/* ── Loader ──────────────────────────────────────────────── */
.loader-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--sp-md);
  padding: var(--sp-3xl) var(--sp-xl);
}
.loader-wrap.loader-xs { padding: 0; flex-direction: row; }

.spinner {
  width: 40px; height: 40px;
  border: 3px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
.loader-xs .spinner { width: 18px; height: 18px; border-width: 2px; }
.loader-text { color: var(--text-secondary); font-size: 0.9rem; }

@keyframes spin { to { transform: rotate(360deg); } }

/* ── Rating ──────────────────────────────────────────────── */
.rating { display: flex; align-items: center; gap: 6px; }
.stars { display: flex; gap: 1px; }
.star { font-size: 0.9rem; }
.star-full { color: #f59e0b; }
.star-half { color: #f59e0b; }
.star-empty { color: var(--text-muted); }
.rating-md .star { font-size: 1.1rem; }
.rating-count { color: var(--text-muted); font-size: 0.8rem; }

/* ── Pagination ──────────────────────────────────────────── */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-sm);
  margin-top: var(--sp-2xl);
}
.page-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.5rem 0.9rem;
  border-radius: var(--r-sm);
  font-size: 0.88rem;
  font-weight: 500;
  transition: all var(--transition);
}
.page-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
.page-btn.active { background: var(--accent); border-color: var(--accent); color: #fff; }
.page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.page-ellipsis { color: var(--text-muted); padding: 0 4px; }

/* ── Product Card ────────────────────────────────────────── */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--sp-lg);
}

.product-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
  transition: border-color var(--transition-slow), transform var(--transition-slow), box-shadow var(--transition-slow);
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.product-card-img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}
.product-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}
.product-card:hover .product-card-img { transform: scale(1.05); }

.product-badge-discount {
  position: absolute;
  top: var(--sp-sm); left: var(--sp-sm);
  background: var(--error);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: var(--r-full);
}
.product-badge-oos {
  position: absolute;
  top: var(--sp-sm); right: var(--sp-sm);
  background: rgba(0,0,0,0.7);
  color: var(--text-secondary);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: var(--r-full);
}
.product-badge-featured {
  position: absolute;
  top: var(--sp-sm); left: var(--sp-sm);
  background: rgba(245,158,11,0.9);
  color: #000;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: var(--r-full);
}

.product-card-body {
  padding: var(--sp-md);
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.product-card-category {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.product-card-name {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color var(--transition);
}
.product-card-name:hover { color: var(--accent); }

.product-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: var(--sp-sm);
}

.product-price-wrap { display: flex; align-items: center; gap: var(--sp-sm); flex-wrap: wrap; }
.product-price { font-size: 1.1rem; font-weight: 800; color: var(--text-primary); }
.product-price-original { font-size: 0.8rem; color: var(--text-muted); text-decoration: line-through; }

.btn-add-cart {
  background: var(--accent);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.45rem 0.9rem;
  border-radius: var(--r-sm);
  transition: background var(--transition), transform var(--transition);
  white-space: nowrap;
}
.btn-add-cart:hover:not(:disabled) { background: var(--accent-hover); transform: scale(1.05); }
.btn-add-cart:disabled { background: var(--bg-glass); color: var(--text-muted); cursor: not-allowed; }

/* ── Empty State ─────────────────────────────────────────── */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--sp-md);
  padding: var(--sp-3xl) var(--sp-xl);
  text-align: center;
}
.empty-icon { font-size: 4rem; }
.empty-state h2, .empty-state h3 { font-size: 1.5rem; font-weight: 700; }
.empty-state p { color: var(--text-secondary); }

/* ── Breadcrumb ──────────────────────────────────────────── */
.breadcrumb {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: var(--sp-xl);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.breadcrumb a { color: var(--text-muted); }
.breadcrumb a:hover { color: var(--accent); }
.breadcrumb span { color: var(--text-primary); }

/* ── Hero ────────────────────────────────────────────────── */
.hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--sp-3xl) var(--sp-xl);
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(124,111,255,0.15) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(255,107,157,0.1) 0%, transparent 60%),
    radial-gradient(ellipse at 50% 80%, rgba(0,212,170,0.08) 0%, transparent 60%);
}

.hero-content { max-width: 800px; }

.hero-badge {
  display: inline-block;
  background: rgba(124,111,255,0.15);
  border: 1px solid rgba(124,111,255,0.3);
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1.1rem;
  border-radius: var(--r-full);
  margin-bottom: var(--sp-lg);
  animation: pulse-border 2s ease infinite;
}

@keyframes pulse-border {
  0%, 100% { box-shadow: 0 0 0 0 rgba(124,111,255,0.2); }
  50% { box-shadow: 0 0 0 8px rgba(124,111,255,0); }
}

.hero-title {
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: var(--sp-lg);
  letter-spacing: -0.03em;
}

.hero-gradient-text {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto var(--sp-xl);
  line-height: 1.7;
}

.hero-search {
  display: flex;
  gap: var(--sp-sm);
  max-width: 560px;
  margin: 0 auto var(--sp-xl);
}
.hero-search-input {
  flex: 1;
  background: var(--bg-glass);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: var(--text-primary);
  padding: 0.85rem 1.25rem;
  font-size: 0.95rem;
  outline: none;
  transition: border-color var(--transition), box-shadow var(--transition);
}
.hero-search-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); }
.hero-search-btn {
  background: var(--accent);
  color: #fff;
  padding: 0.85rem 1.5rem;
  border-radius: var(--r-md);
  font-weight: 700;
  font-size: 0.95rem;
  transition: background var(--transition), box-shadow var(--transition);
}
.hero-search-btn:hover { background: var(--accent-hover); box-shadow: var(--shadow-accent); }

.hero-actions { display: flex; gap: var(--sp-md); justify-content: center; flex-wrap: wrap; }
.btn-hero-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  padding: 0.85rem 2rem;
  border-radius: var(--r-md);
  font-size: 1rem;
  font-weight: 700;
  transition: opacity var(--transition), transform var(--transition), box-shadow var(--transition);
}
.btn-hero-primary:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: var(--shadow-accent); color: #fff; }

.btn-hero-ghost {
  background: var(--bg-glass);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.85rem 2rem;
  border-radius: var(--r-md);
  font-size: 1rem;
  font-weight: 600;
  transition: all var(--transition);
}
.btn-hero-ghost:hover { border-color: var(--border-hover); color: var(--text-primary); }

.hero-stats {
  display: flex;
  gap: var(--sp-3xl);
  justify-content: center;
  margin-top: var(--sp-2xl);
  flex-wrap: wrap;
}
.hero-stat { text-align: center; }
.stat-value { display: block; font-size: 1.8rem; font-weight: 900; background: linear-gradient(135deg, var(--accent), var(--accent-2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.stat-label { font-size: 0.85rem; color: var(--text-muted); }

/* ── Home Sections ───────────────────────────────────────── */
.categories-section, .products-section, .promo-section {
  padding: var(--sp-3xl) 0;
}
.products-section-alt { background: rgba(255,255,255,0.01); }

.section-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: var(--sp-xl);
  letter-spacing: -0.02em;
}
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--sp-xl);
}
.section-link { color: var(--accent); font-size: 0.9rem; font-weight: 600; }
.section-link:hover { text-decoration: underline; }

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--sp-md);
}

.category-chip {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: var(--sp-lg) var(--sp-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-sm);
  text-decoration: none;
  transition: all var(--transition-slow);
  position: relative;
  overflow: hidden;
}
.category-chip::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--cat-color);
  opacity: 0;
  transition: opacity var(--transition);
}
.category-chip:hover::before { opacity: 0.08; }
.category-chip:hover { border-color: var(--cat-color); transform: translateY(-3px); box-shadow: 0 4px 24px rgba(0,0,0,0.4); }
.category-chip-icon { font-size: 2rem; position: relative; }
.category-chip-name { font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); position: relative; text-align: center; }
.category-chip:hover .category-chip-name { color: var(--text-primary); }

/* Promo */
.promo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-lg);
}
.promo-card {
  border-radius: var(--r-lg);
  padding: var(--sp-xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform var(--transition);
  position: relative;
  overflow: hidden;
}
.promo-card:hover { transform: translateY(-3px); }
.promo-card-1 { background: linear-gradient(135deg, rgba(99,102,241,0.25), rgba(99,102,241,0.1)); border: 1px solid rgba(99,102,241,0.3); }
.promo-card-2 { background: linear-gradient(135deg, rgba(16,185,129,0.25), rgba(16,185,129,0.1)); border: 1px solid rgba(16,185,129,0.3); }
.promo-card-3 { background: linear-gradient(135deg, rgba(245,158,11,0.25), rgba(245,158,11,0.1)); border: 1px solid rgba(245,158,11,0.3); }
.promo-content h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 4px; }
.promo-content p { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: var(--sp-sm); }
.promo-link { font-size: 0.85rem; font-weight: 700; color: var(--accent); }
.promo-emoji { font-size: 2.5rem; opacity: 0.6; }

/* ── Products Page ───────────────────────────────────────── */
.products-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--sp-2xl) var(--sp-xl);
}

.products-page-header { margin-bottom: var(--sp-xl); }
.products-page-title { font-size: 2rem; font-weight: 800; }
.products-page-count { color: var(--text-muted); font-size: 0.9rem; margin-top: 4px; }

.products-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: var(--sp-2xl);
  align-items: start;
}

/* Filters Sidebar */
.filters-sidebar {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: var(--sp-lg);
  display: flex;
  flex-direction: column;
  gap: var(--sp-lg);
  position: sticky;
  top: calc(var(--navbar-h) + 1rem);
}

.filters-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.filters-header h3 { font-size: 1rem; font-weight: 700; }
.clear-filters-btn {
  background: none;
  color: var(--error);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: var(--r-sm);
  transition: background var(--transition);
}
.clear-filters-btn:hover { background: rgba(239,68,68,0.1); }

.filter-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  display: block;
  margin-bottom: 8px;
}

.filter-search {
  display: flex;
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  overflow: hidden;
}
.filter-search input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-primary);
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  outline: none;
}
.filter-search button {
  background: var(--accent);
  color: #fff;
  padding: 0 0.75rem;
  font-size: 0.85rem;
}

.filter-list { display: flex; flex-direction: column; gap: 4px; }
.filter-chip {
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.4rem 0.75rem;
  border-radius: var(--r-sm);
  text-align: left;
  cursor: pointer;
  transition: all var(--transition);
}
.filter-chip:hover { background: var(--bg-glass); color: var(--text-primary); }
.filter-chip.active { background: var(--accent-glow); border-color: var(--accent); color: var(--accent); }

.price-range-inputs {
  display: flex;
  align-items: center;
  gap: var(--sp-sm);
  margin-bottom: var(--sp-sm);
}
.price-range-inputs input {
  flex: 1;
  background: var(--bg-glass);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  color: var(--text-primary);
  padding: 0.5rem;
  font-size: 0.85rem;
  text-align: center;
  outline: none;
}
.price-range-inputs span { color: var(--text-muted); }

.apply-price-btn {
  width: 100%;
  background: var(--bg-glass);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.45rem;
  border-radius: var(--r-sm);
  transition: all var(--transition);
}
.apply-price-btn:hover { border-color: var(--accent); color: var(--accent); }

.products-toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--sp-md);
  margin-bottom: var(--sp-lg);
}
.sort-select {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  font-size: 0.88rem;
  outline: none;
  cursor: pointer;
}
.filter-toggle-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: var(--r-md);
  font-size: 0.88rem;
  font-weight: 500;
  display: none;
}

/* ── Product Detail ──────────────────────────────────────── */
.product-detail-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--sp-2xl) var(--sp-xl);
}

.product-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-3xl);
  margin-bottom: var(--sp-3xl);
}

.gallery-main { position: relative; border-radius: var(--r-lg); overflow: hidden; }
.gallery-main-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; }
.gallery-badge {
  position: absolute;
  top: var(--sp-md); left: var(--sp-md);
  background: var(--error);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: var(--r-full);
}
.gallery-thumbs { display: flex; gap: var(--sp-sm); margin-top: var(--sp-sm); }
.gallery-thumb {
  width: 72px; height: 72px;
  object-fit: cover;
  border-radius: var(--r-sm);
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color var(--transition);
  opacity: 0.6;
}
.gallery-thumb:hover, .gallery-thumb.active { border-color: var(--accent); opacity: 1; }

.product-detail-category { font-size: 0.85rem; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: var(--sp-sm); }
.product-detail-name { font-size: 1.8rem; font-weight: 800; line-height: 1.2; margin-bottom: var(--sp-md); letter-spacing: -0.02em; }
.product-detail-rating { margin-bottom: var(--sp-md); }
.product-detail-price { display: flex; align-items: center; gap: var(--sp-md); margin-bottom: var(--sp-lg); flex-wrap: wrap; }
.price-main { font-size: 2rem; font-weight: 900; }
.price-original { font-size: 1rem; color: var(--text-muted); text-decoration: line-through; }
.price-save { background: rgba(16,185,129,0.15); color: var(--success); font-size: 0.85rem; font-weight: 700; padding: 3px 10px; border-radius: var(--r-full); }
.product-detail-desc { color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--sp-lg); }

.stock-status { font-size: 0.9rem; font-weight: 600; margin-bottom: var(--sp-lg); }
.in-stock { color: var(--success); }
.out-stock { color: var(--error); }

.product-actions { display: flex; align-items: center; gap: var(--sp-md); margin-bottom: var(--sp-lg); }
.qty-selector {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  overflow: hidden;
}
.qty-selector button {
  background: var(--bg-glass);
  color: var(--text-primary);
  width: 40px; height: 44px;
  font-size: 1.1rem;
  transition: background var(--transition);
}
.qty-selector button:hover { background: var(--bg-card-hover); }
.qty-selector span {
  width: 48px;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  border-left: 1px solid var(--border);
  border-right: 1px solid var(--border);
  line-height: 44px;
}

.btn-add-to-cart-lg {
  flex: 1;
  background: var(--accent);
  color: #fff;
  padding: 0.85rem 1.5rem;
  border-radius: var(--r-md);
  font-size: 1rem;
  font-weight: 700;
  transition: all var(--transition);
}
.btn-add-to-cart-lg:hover { background: var(--accent-hover); box-shadow: var(--shadow-accent); }
.btn-add-to-cart-lg.added { background: var(--success); }

.product-meta { display: flex; gap: var(--sp-sm); flex-wrap: wrap; }
.meta-tag { background: var(--bg-card); border: 1px solid var(--border); color: var(--text-muted); font-size: 0.8rem; padding: 4px 10px; border-radius: var(--r-full); }

/* Reviews */
.reviews-section { border-top: 1px solid var(--border); padding-top: var(--sp-2xl); }
.reviews-title { font-size: 1.4rem; font-weight: 800; margin-bottom: var(--sp-xl); }
.review-form-wrap { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: var(--sp-xl); margin-bottom: var(--sp-xl); }
.review-form-wrap h3 { font-size: 1rem; font-weight: 700; margin-bottom: var(--sp-md); }
.review-form { display: flex; flex-direction: column; gap: var(--sp-md); }

.star-picker { display: flex; gap: 4px; }
.star-pick-btn {
  background: none;
  font-size: 1.5rem;
  color: var(--text-muted);
  transition: color var(--transition), transform var(--transition);
}
.star-pick-btn.active, .star-pick-btn:hover { color: #f59e0b; transform: scale(1.2); }

.reviews-list { display: flex; flex-direction: column; gap: var(--sp-md); }
.review-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: var(--sp-lg); }
.review-header { display: flex; align-items: center; gap: var(--sp-md); margin-bottom: var(--sp-sm); }
.reviewer-avatar {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border-radius: var(--r-full);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; font-weight: 700; color: #fff;
  flex-shrink: 0;
}
.reviewer-name { font-weight: 600; font-size: 0.9rem; }
.review-date { margin-left: auto; font-size: 0.8rem; color: var(--text-muted); }
.review-comment { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; }
.no-reviews { color: var(--text-muted); text-align: center; padding: var(--sp-xl); }

/* ── Cart Page ───────────────────────────────────────────── */
.cart-page { max-width: 1100px; margin: 0 auto; padding: var(--sp-2xl) var(--sp-xl); }
.cart-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--sp-xl); }
.cart-header h1 { font-size: 2rem; font-weight: 800; }
.clear-cart-btn { background: transparent; color: var(--error); font-size: 0.88rem; font-weight: 600; padding: 0.4rem 0.9rem; border-radius: var(--r-sm); border: 1px solid rgba(239,68,68,0.3); transition: all var(--transition); }
.clear-cart-btn:hover { background: rgba(239,68,68,0.1); }

.cart-layout { display: grid; grid-template-columns: 1fr 340px; gap: var(--sp-xl); align-items: start; }

.cart-items { display: flex; flex-direction: column; gap: var(--sp-md); }
.cart-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: var(--sp-lg);
  display: flex;
  align-items: center;
  gap: var(--sp-lg);
  transition: border-color var(--transition);
}
.cart-item:hover { border-color: var(--border-hover); }
.cart-item-img { width: 80px; height: 80px; object-fit: cover; border-radius: var(--r-md); flex-shrink: 0; }
.cart-item-details { flex: 1; min-width: 0; }
.cart-item-name { font-size: 0.95rem; font-weight: 600; display: block; margin-bottom: 4px; color: var(--text-primary); }
.cart-item-name:hover { color: var(--accent); }
.cart-item-brand { font-size: 0.8rem; color: var(--text-muted); }
.cart-item-price { font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px; }

.cart-item-qty { display: flex; align-items: center; gap: 0; border: 1px solid var(--border); border-radius: var(--r-sm); overflow: hidden; }
.cart-item-qty button { background: var(--bg-glass); color: var(--text-primary); width: 32px; height: 32px; font-size: 1rem; transition: background var(--transition); }
.cart-item-qty button:hover:not(:disabled) { background: var(--bg-card-hover); }
.cart-item-qty button:disabled { opacity: 0.3; cursor: not-allowed; }
.cart-item-qty span { width: 36px; text-align: center; font-size: 0.9rem; font-weight: 600; line-height: 32px; border-left: 1px solid var(--border); border-right: 1px solid var(--border); }

.cart-item-subtotal { font-size: 1rem; font-weight: 800; min-width: 70px; text-align: right; }
.cart-item-remove { background: none; color: var(--text-muted); font-size: 1rem; padding: 6px; border-radius: var(--r-sm); transition: color var(--transition), background var(--transition); }
.cart-item-remove:hover { color: var(--error); background: rgba(239,68,68,0.1); }

.cart-summary {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: var(--sp-xl);
  position: sticky;
  top: calc(var(--navbar-h) + 1rem);
}
.summary-title { font-size: 1.1rem; font-weight: 800; margin-bottom: var(--sp-lg); }
.summary-row { display: flex; justify-content: space-between; align-items: center; padding: var(--sp-sm) 0; font-size: 0.9rem; }
.summary-row span:first-child { color: var(--text-secondary); }
.summary-divider { border-top: 1px solid var(--border); margin: var(--sp-sm) 0; }
.summary-total { font-size: 1.1rem; font-weight: 800; }
.free-shipping { color: var(--success); font-weight: 700; }
.free-shipping-hint { font-size: 0.8rem; color: var(--warning); margin-top: var(--sp-sm); }
.btn-checkout {
  width: 100%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  padding: 0.9rem;
  border-radius: var(--r-md);
  font-size: 1rem;
  font-weight: 700;
  margin-top: var(--sp-lg);
  transition: opacity var(--transition), transform var(--transition);
  cursor: pointer;
}
.btn-checkout:hover { opacity: 0.9; transform: translateY(-1px); }
.continue-shopping-link { display: block; text-align: center; margin-top: var(--sp-md); font-size: 0.88rem; color: var(--text-muted); }

/* ── Checkout ────────────────────────────────────────────── */
.checkout-page { max-width: 960px; margin: 0 auto; padding: var(--sp-2xl) var(--sp-xl); }

.checkout-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--sp-2xl);
  gap: 0;
}
.checkout-step {
  display: flex;
  align-items: center;
  position: relative;
}
.step-num {
  width: 36px; height: 36px;
  border-radius: var(--r-full);
  background: var(--bg-card);
  border: 2px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  transition: all var(--transition);
  flex-shrink: 0;
}
.step-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  margin: 0 var(--sp-sm);
  white-space: nowrap;
}
.step-line { width: 60px; height: 2px; background: var(--border); }
.checkout-step.active .step-num { background: var(--accent); border-color: var(--accent); color: #fff; }
.checkout-step.active .step-name { color: var(--text-primary); }
.checkout-step.done .step-num { background: var(--success); border-color: var(--success); color: #fff; }
.checkout-step.done .step-line { background: var(--success); }

.checkout-layout { display: grid; grid-template-columns: 1fr 300px; gap: var(--sp-xl); align-items: start; }
.checkout-form-wrap { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: var(--sp-2xl); }
.checkout-form { display: flex; flex-direction: column; gap: var(--sp-md); }
.checkout-form h2, .checkout-review h2 { font-size: 1.3rem; font-weight: 800; margin-bottom: var(--sp-md); }

.payment-options { display: flex; flex-direction: column; gap: var(--sp-md); }
.payment-option {
  display: flex;
  align-items: center;
  gap: var(--sp-md);
  padding: var(--sp-md) var(--sp-lg);
  border: 2px solid var(--border);
  border-radius: var(--r-md);
  cursor: pointer;
  transition: all var(--transition);
  font-weight: 600;
  color: var(--text-secondary);
}
.payment-option input[type="radio"] { accent-color: var(--accent); }
.payment-option:hover { border-color: var(--border-hover); }
.payment-option.selected { border-color: var(--accent); background: var(--accent-glow); color: var(--text-primary); }
.payment-method-icon { font-size: 1.3rem; }

.checkout-review { display: flex; flex-direction: column; gap: var(--sp-lg); }
.review-section {
  background: var(--bg-glass);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  padding: var(--sp-md) var(--sp-lg);
  position: relative;
}
.review-section h4 { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.06em; margin-bottom: 4px; }
.review-section p { color: var(--text-secondary); font-size: 0.9rem; }
.edit-btn { position: absolute; top: var(--sp-md); right: var(--sp-md); background: none; color: var(--accent); font-size: 0.82rem; font-weight: 600; padding: 2px 8px; border-radius: var(--r-sm); }

.review-items { display: flex; flex-direction: column; gap: var(--sp-sm); }
.review-items h4 { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.06em; margin-bottom: var(--sp-sm); }
.review-item {
  display: flex;
  align-items: center;
  gap: var(--sp-md);
  background: var(--bg-glass);
  border-radius: var(--r-md);
  padding: var(--sp-sm) var(--sp-md);
}
.review-item img { width: 48px; height: 48px; object-fit: cover; border-radius: var(--r-sm); }
.review-item-name { flex: 1; font-size: 0.9rem; font-weight: 500; }
.review-item-subtotal { font-weight: 700; }

.btn-place-order {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  padding: 0.85rem 1.5rem;
  border-radius: var(--r-md);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity var(--transition), transform var(--transition);
  display: flex; align-items: center; gap: var(--sp-sm);
}
.btn-place-order:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
.btn-place-order:disabled { opacity: 0.5; cursor: not-allowed; }

.checkout-summary {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: var(--sp-xl);
  position: sticky;
  top: calc(var(--navbar-h) + 1rem);
}
.checkout-summary h3 { font-size: 1rem; font-weight: 800; margin-bottom: var(--sp-lg); }

/* ── Order Confirm ───────────────────────────────────────── */
.order-confirm-page { max-width: 800px; margin: 0 auto; padding: var(--sp-2xl) var(--sp-xl); }
.order-confirm-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-xl); padding: var(--sp-2xl); }

.order-success-header { text-align: center; margin-bottom: var(--sp-2xl); }
.order-success-icon { font-size: 4rem; display: block; margin-bottom: var(--sp-md); animation: bounce 0.5s ease; }
@keyframes bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
.order-success-header h1 { font-size: 2rem; font-weight: 900; margin-bottom: var(--sp-sm); }
.order-success-header p { color: var(--text-secondary); }
.order-id-label { margin-top: var(--sp-sm); font-size: 0.9rem; color: var(--text-muted); }

.order-details-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--sp-md); margin-bottom: var(--sp-xl); }
.order-detail-box { background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--r-md); padding: var(--sp-md) var(--sp-lg); }
.order-detail-box h3 { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.06em; margin-bottom: var(--sp-sm); }
.order-detail-box p { font-size: 0.9rem; color: var(--text-secondary); }

.status-badge { display: inline-block; font-size: 0.8rem; font-weight: 700; padding: 3px 10px; border-radius: var(--r-full); }
.status-paid { background: rgba(16,185,129,0.15); color: var(--success); }
.status-pending { background: rgba(245,158,11,0.15); color: var(--warning); }
.status-delivered { background: rgba(16,185,129,0.15); color: var(--success); }
.status-processing { background: rgba(99,102,241,0.15); color: #818cf8; }
.status-shipped { background: rgba(59,130,246,0.15); color: #60a5fa; }
.status-cancelled { background: rgba(239,68,68,0.15); color: var(--error); }

.order-date { font-size: 0.8rem; color: var(--text-muted); margin-top: 4px; }

.order-items-list { margin-bottom: var(--sp-xl); }
.order-items-list h3 { font-size: 1rem; font-weight: 700; margin-bottom: var(--sp-md); }
.order-line-item { display: flex; align-items: center; gap: var(--sp-md); padding: var(--sp-sm) 0; border-bottom: 1px solid var(--border); }
.order-line-item:last-child { border-bottom: none; }
.order-line-item img { width: 56px; height: 56px; object-fit: cover; border-radius: var(--r-sm); }
.order-item-name { flex: 1; font-size: 0.9rem; font-weight: 500; }
.order-item-total { font-weight: 700; }

.order-totals { background: var(--bg-glass); border-radius: var(--r-md); padding: var(--sp-md) var(--sp-lg); margin-bottom: var(--sp-xl); }
.total-row { display: flex; justify-content: space-between; padding: var(--sp-xs) 0; font-size: 0.9rem; color: var(--text-secondary); }
.total-grand { font-size: 1.1rem; font-weight: 800; color: var(--text-primary); border-top: 1px solid var(--border); margin-top: var(--sp-sm); padding-top: var(--sp-sm); }

.order-confirm-actions { display: flex; gap: var(--sp-md); justify-content: center; flex-wrap: wrap; }

/* ── Orders History ──────────────────────────────────────── */
.orders-page { max-width: 900px; margin: 0 auto; padding: var(--sp-2xl) var(--sp-xl); }
.page-title { font-size: 2rem; font-weight: 800; margin-bottom: var(--sp-xl); }

.orders-list { display: flex; flex-direction: column; gap: var(--sp-md); }
.order-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: var(--sp-lg);
  transition: border-color var(--transition), transform var(--transition);
}
.order-card:hover { border-color: var(--border-hover); transform: translateY(-2px); }
.order-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--sp-md); }
.order-card-id { font-weight: 700; font-size: 0.95rem; display: block; }
.order-card-date { font-size: 0.8rem; color: var(--text-muted); margin-top: 2px; }
.order-status-pill { font-size: 0.8rem; font-weight: 700; padding: 4px 12px; border-radius: var(--r-full); }
.order-card-items { display: flex; align-items: center; gap: var(--sp-sm); margin-bottom: var(--sp-md); }
.order-item-thumb { width: 52px; height: 52px; object-fit: cover; border-radius: var(--r-sm); border: 1px solid var(--border); }
.order-items-more { font-size: 0.8rem; color: var(--text-muted); }
.order-card-footer { display: flex; align-items: center; justify-content: space-between; }
.order-card-meta { display: flex; align-items: center; gap: var(--sp-lg); font-size: 0.88rem; color: var(--text-secondary); }
.order-card-total { font-size: 1.1rem; font-weight: 800; color: var(--text-primary); }

/* ── Auth Pages ──────────────────────────────────────────── */
.auth-page {
  min-height: calc(100vh - var(--navbar-h));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--sp-xl);
  background:
    radial-gradient(ellipse at 30% 40%, rgba(124,111,255,0.12) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 60%, rgba(255,107,157,0.08) 0%, transparent 60%);
}
.auth-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  padding: var(--sp-2xl);
  width: 100%;
  max-width: 460px;
  box-shadow: var(--shadow-lg);
  animation: slideUp 0.3s ease;
}
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

.auth-header { text-align: center; margin-bottom: var(--sp-xl); }
.auth-icon { font-size: 2.5rem; display: block; margin-bottom: var(--sp-sm); }
.auth-title { font-size: 1.8rem; font-weight: 900; margin-bottom: 6px; }
.auth-subtitle { color: var(--text-secondary); font-size: 0.95rem; }

.auth-form { display: flex; flex-direction: column; gap: var(--sp-md); margin-bottom: var(--sp-lg); }
.btn-auth {
  width: 100%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  padding: 0.85rem;
  border-radius: var(--r-md);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity var(--transition), transform var(--transition);
  display: flex; align-items: center; justify-content: center; gap: var(--sp-sm);
  margin-top: var(--sp-sm);
  border: none;
}
.btn-auth:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
.btn-auth:disabled { opacity: 0.5; cursor: not-allowed; }

.auth-demo-creds {
  background: var(--bg-glass);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  padding: var(--sp-md);
  margin-bottom: var(--sp-md);
}
.auth-demo-creds p { font-size: 0.8rem; color: var(--text-muted); margin-bottom: var(--sp-sm); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; }
.demo-btn {
  display: block;
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.82rem;
  padding: 0.4rem 0.75rem;
  border-radius: var(--r-sm);
  text-align: left;
  cursor: pointer;
  margin-bottom: 4px;
  transition: all var(--transition);
}
.demo-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-glow); }
.auth-redirect { text-align: center; font-size: 0.9rem; color: var(--text-secondary); }

/* ── Profile Page ────────────────────────────────────────── */
.profile-page { max-width: 700px; margin: 0 auto; padding: var(--sp-2xl) var(--sp-xl); }
.profile-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-xl); padding: var(--sp-2xl); }
.profile-header { display: flex; align-items: center; gap: var(--sp-lg); margin-bottom: var(--sp-2xl); }
.profile-avatar-lg {
  width: 72px; height: 72px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border-radius: var(--r-full);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem; font-weight: 900; color: #fff;
  flex-shrink: 0;
}
.profile-name { font-size: 1.5rem; font-weight: 800; }
.profile-email { color: var(--text-secondary); font-size: 0.9rem; margin-top: 2px; }
.role-badge { display: inline-block; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: var(--r-full); text-transform: uppercase; letter-spacing: 0.06em; margin-top: var(--sp-sm); }
.role-admin { background: rgba(124,111,255,0.2); color: var(--accent); }
.role-user { background: rgba(16,185,129,0.2); color: var(--success); }

.profile-form { display: flex; flex-direction: column; gap: var(--sp-lg); }
.form-section-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); }
.optional-tag { font-size: 0.8rem; font-weight: 500; color: var(--text-muted); }

/* ── Admin Pages ─────────────────────────────────────────── */
.admin-page { max-width: 1280px; margin: 0 auto; padding: var(--sp-2xl) var(--sp-xl); }
.admin-page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--sp-xl); gap: var(--sp-md); flex-wrap: wrap; }
.admin-title { font-size: 2rem; font-weight: 800; }
.admin-subtitle { color: var(--text-muted); font-size: 0.9rem; margin-top: 4px; }

.admin-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--sp-md); margin-bottom: var(--sp-xl); }
.admin-stat-card {
  border-radius: var(--r-lg);
  padding: var(--sp-xl);
  display: flex;
  align-items: center;
  gap: var(--sp-lg);
  border: 1px solid transparent;
  transition: transform var(--transition);
}
.admin-stat-card:hover { transform: translateY(-2px); }
.stat-card-blue { background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(99,102,241,0.05)); border-color: rgba(99,102,241,0.3); }
.stat-card-purple { background: linear-gradient(135deg, rgba(168,85,247,0.2), rgba(168,85,247,0.05)); border-color: rgba(168,85,247,0.3); }
.stat-card-green { background: linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05)); border-color: rgba(16,185,129,0.3); }
.stat-card-amber { background: linear-gradient(135deg, rgba(245,158,11,0.2), rgba(245,158,11,0.05)); border-color: rgba(245,158,11,0.3); }
.stat-card-icon { font-size: 2rem; }
.stat-card-label { font-size: 0.8rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
.stat-card-value { font-size: 1.8rem; font-weight: 900; margin-top: 2px; }

.admin-dashboard-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-xl); margin-bottom: var(--sp-xl); }
.admin-widget { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: var(--sp-xl); }
.widget-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--sp-lg); }
.widget-header h2 { font-size: 1rem; font-weight: 700; }
.widget-link { color: var(--accent); font-size: 0.85rem; font-weight: 600; }
.widget-table-wrap { overflow-x: auto; }

.status-breakdown { display: flex; flex-direction: column; gap: var(--sp-md); }
.status-bar-row { display: flex; align-items: center; gap: var(--sp-md); }
.status-bar-label { font-size: 0.85rem; font-weight: 600; min-width: 90px; }
.status-bar-track { flex: 1; height: 8px; background: var(--bg-glass); border-radius: var(--r-full); overflow: hidden; }
.status-bar-fill { height: 100%; border-radius: var(--r-full); transition: width 0.5s ease; }
.status-bar-count { font-size: 0.85rem; font-weight: 700; min-width: 28px; text-align: right; }

.low-stock-alert { margin-top: var(--sp-xl); padding-top: var(--sp-xl); border-top: 1px solid var(--border); }
.low-stock-alert h3 { font-size: 0.9rem; font-weight: 700; color: var(--warning); margin-bottom: var(--sp-md); }
.low-stock-row { display: flex; justify-content: space-between; padding: var(--sp-xs) 0; font-size: 0.88rem; color: var(--text-secondary); }
.low-stock-count { color: var(--error); font-weight: 700; }

.admin-quick-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--sp-md); }
.quick-link-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: var(--sp-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-sm);
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-slow);
}
.quick-link-card:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-glow); transform: translateY(-3px); }
.ql-icon { font-size: 2rem; }

.admin-toolbar { margin-bottom: var(--sp-lg); display: flex; align-items: center; gap: var(--sp-md); flex-wrap: wrap; }
.admin-search {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: var(--text-primary);
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  outline: none;
  min-width: 280px;
  transition: border-color var(--transition);
}
.admin-search:focus { border-color: var(--accent); }

/* Admin Table */
.admin-table-wrap { overflow-x: auto; border-radius: var(--r-lg); border: 1px solid var(--border); }
.admin-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}
.admin-table th {
  background: rgba(255,255,255,0.04);
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.9rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
}
.admin-table td {
  padding: 0.9rem 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  vertical-align: middle;
  color: var(--text-secondary);
}
.admin-table tr:last-child td { border-bottom: none; }
.admin-table tr:hover td { background: rgba(255,255,255,0.02); }

.table-product-img { width: 44px; height: 44px; object-fit: cover; border-radius: var(--r-sm); }
.table-product-name { color: var(--text-primary); font-weight: 600; display: block; margin-bottom: 2px; }
.table-badge { background: rgba(245,158,11,0.15); color: var(--warning); font-size: 0.7rem; font-weight: 700; padding: 2px 6px; border-radius: var(--r-full); margin-left: 6px; }
.table-discount { background: rgba(239,68,68,0.15); color: var(--error); font-size: 0.75rem; font-weight: 700; padding: 2px 6px; border-radius: var(--r-full); margin-left: 6px; }
.stock-low { color: var(--error); font-weight: 700; }
.stock-ok { color: var(--success); font-weight: 600; }
.table-link { color: var(--accent); font-weight: 600; }
.table-link:hover { text-decoration: underline; }

.table-actions { display: flex; gap: var(--sp-sm); }
.btn-table-edit {
  background: rgba(124,111,255,0.12);
  color: var(--accent);
  border: 1px solid rgba(124,111,255,0.3);
  padding: 0.35rem 0.8rem;
  border-radius: var(--r-sm);
  font-size: 0.82rem;
  font-weight: 600;
  transition: all var(--transition);
}
.btn-table-edit:hover { background: rgba(124,111,255,0.2); }
.btn-table-edit:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-table-delete {
  background: rgba(239,68,68,0.1);
  color: var(--error);
  border: 1px solid rgba(239,68,68,0.3);
  padding: 0.35rem 0.8rem;
  border-radius: var(--r-sm);
  font-size: 0.82rem;
  font-weight: 600;
  transition: all var(--transition);
}
.btn-table-delete:hover { background: rgba(239,68,68,0.2); }

.table-user-cell { display: flex; align-items: center; gap: var(--sp-sm); }
.table-user-avatar {
  width: 32px; height: 32px;
  border-radius: var(--r-full);
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 0.78rem; font-weight: 700; color: #fff;
  flex-shrink: 0;
}
.table-user-email { font-size: 0.78rem; color: var(--text-muted); }

.status-pill { font-size: 0.78rem; font-weight: 700; padding: 3px 10px; border-radius: var(--r-full); }
.status-filter-tabs { display: flex; gap: var(--sp-sm); flex-wrap: wrap; }
.status-tab {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.4rem 0.9rem;
  border-radius: var(--r-full);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition);
}
.status-tab.active { background: var(--accent); border-color: var(--accent); color: #fff; }
.status-tab:hover:not(.active) { border-color: var(--border-hover); color: var(--text-primary); }

.status-select {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  color: var(--text-primary);
  padding: 0.35rem 0.6rem;
  font-size: 0.82rem;
  cursor: pointer;
  outline: none;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(6px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--sp-xl);
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.modal-content {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.25s ease;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sp-xl);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg-secondary);
  z-index: 1;
}
.modal-header h2 { font-size: 1.2rem; font-weight: 800; }
.modal-close { background: none; color: var(--text-muted); font-size: 1.2rem; padding: 4px 8px; border-radius: var(--r-sm); transition: color var(--transition), background var(--transition); }
.modal-close:hover { color: var(--error); background: rgba(239,68,68,0.1); }

.modal-form { padding: var(--sp-xl); display: flex; flex-direction: column; gap: var(--sp-md); }
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--sp-md);
  padding: var(--sp-xl);
  border-top: 1px solid var(--border);
  position: sticky;
  bottom: 0;
  background: var(--bg-secondary);
}

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 1024px) {
  .admin-stats-grid { grid-template-columns: repeat(2, 1fr); }
  .admin-dashboard-grid { grid-template-columns: 1fr; }
  .admin-quick-links { grid-template-columns: repeat(3, 1fr); }
  .products-layout { grid-template-columns: 220px 1fr; }
}

@media (max-width: 768px) {
  :root { --sp-xl: 1.25rem; --sp-2xl: 2rem; }

  .nav-hamburger { display: flex; }
  .nav-links {
    display: none;
    position: fixed;
    top: var(--navbar-h);
    left: 0; right: 0;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    padding: var(--sp-lg);
    gap: var(--sp-sm);
  }
  .nav-links.open { display: flex; }
  .nav-auth-buttons { flex-direction: column; width: 100%; }

  .hero { min-height: 60vh; }
  .hero-title { font-size: 2.2rem; }
  .hero-stats { gap: var(--sp-xl); }

  .promo-grid { grid-template-columns: 1fr; }
  .categories-grid { grid-template-columns: repeat(3, 1fr); }
  .products-grid { grid-template-columns: repeat(2, 1fr); }

  .products-layout { grid-template-columns: 1fr; }
  .filters-sidebar { display: none; position: fixed; top: var(--navbar-h); left: 0; right: 0; bottom: 0; z-index: 900; overflow-y: auto; border-radius: 0; }
  .filters-sidebar.open { display: flex; }
  .filter-toggle-btn { display: flex; }

  .product-detail-grid { grid-template-columns: 1fr; }
  .cart-layout { grid-template-columns: 1fr; }
  .cart-summary { position: static; }

  .checkout-layout { grid-template-columns: 1fr; }
  .checkout-summary { display: none; }
  .form-row { grid-template-columns: 1fr; }
  .form-row-3 { grid-template-columns: 1fr; }

  .order-details-grid { grid-template-columns: 1fr; }
  .admin-stats-grid { grid-template-columns: 1fr 1fr; }
  .admin-quick-links { grid-template-columns: 1fr; }

  .footer-container { grid-template-columns: 1fr; gap: var(--sp-xl); }
  .footer-links { grid-template-columns: repeat(2, 1fr); }
  .footer-bottom { flex-direction: column; text-align: center; }
}

@media (max-width: 480px) {
  .products-grid { grid-template-columns: 1fr; }
  .categories-grid { grid-template-columns: repeat(2, 1fr); }
  .admin-stats-grid { grid-template-columns: 1fr; }
  .cart-item { flex-wrap: wrap; }
  .cart-item-details { width: 100%; }
  .auth-card { padding: var(--sp-xl); }
  .footer-links { grid-template-columns: 1fr; }
  .checkout-steps { gap: 0; }
  .step-name { display: none; }
}

/* ── Scrollbar ───────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: var(--r-full); }
::-webkit-scrollbar-thumb:hover { background: var(--border-hover); }

/* ── Selection ───────────────────────────────────────────── */
::selection { background: var(--accent-glow); color: var(--text-primary); }
