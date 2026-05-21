# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Type-check + build for production
npm run lint         # ESLint (auto-fixes on run)
npm run test         # Run tests in watch mode
npm run test -- run  # Run tests once (CI mode)
npm run coverage     # Run tests with coverage report
npm run type-check   # TypeScript check without emit
npm run test:e2e     # Run Playwright e2e tests (starts dev server automatically)
npm run test:e2e:ui  # Playwright UI mode (interactive)
```

To run a single test file:
```bash
npx vitest run src/path/to/file.spec.ts
```

The pre-commit hook (Husky) runs `build`, `lint`, and `test -- run` on every commit.

## Architecture

This is a Vue 3 SPA for a dog adoption platform. The structure follows a **feature module + shared core** pattern:

```
src/
├── core/          # Business logic & infrastructure (API, auth, user)
├── modules/       # Feature modules (home, auth) — each has views/ and router.ts
├── layouts/       # App shell: Header, Footer, LayoutDefault
├── shared/        # Reusable components, utilities, types, router config
└── main.ts        # App initialization
e2e/               # Playwright end-to-end tests (mirror src/modules structure)
```

### Layer Dependencies

```
Views → Pinia Stores → Services → HttpClient (Axios wrapper) → External API
```

1. **Views/components** call store actions only — never services or HttpClient directly.
2. **Stores** (`src/core/*/store/`) call services and manage reactive state.
3. **Services** (`src/core/*/services/`) accept `IHttpClient` via constructor (dependency injection), enabling unit testing with mocks.
4. **HttpClient** (`src/core/api/httpClient.ts`) wraps Axios with:
   - Request interceptor: attaches `Authorization: Bearer {token}` from localStorage.
   - Response interceptor: logs HTTP errors (401 handling is a placeholder).
   - `skipAuth: true` request config flag bypasses the auth header (used for login/register).

### Routing

Routes are defined per module (`modules/home/router.ts`, `modules/auth/router.ts`) and aggregated in `src/shared/router/index.ts`. The global `beforeEach` guard sets `document.title` from `route.meta.title`.

### Auth State

`useAuthStore` holds the JWT token (persisted to `localStorage` under key `'token'`) and calls `useUserStore.setUser()` after a successful login. `isAuthenticated` is a computed from the token presence.

### Styling

Tailwind CSS v4 (PostCSS plugin). The custom theme is defined entirely in `src/assets/index.css` via CSS variables — colors, fonts, breakpoints (`mobile`, `tablet`, `laptop`, `desktop`), and shadows. Use the `cn()` utility (`src/shared/utils/cn.ts`) — a `clsx` + `tailwind-merge` wrapper — to compose class names and resolve conflicts. It is also registered as `$cn` global property.

The `BackgroundColor` union type (`src/shared/types/style.d.ts`) constrains allowed color prop values on UI components.

### Testing

Vitest + Vue Test Utils + happy-dom. Tests live alongside source files (`.spec.ts` or `.test.ts`). Use `vi.hoisted()` for mocks that need to be hoisted before imports (see `httpClient.spec.ts` for the pattern).

## Environment

`VITE_API_URL` sets the base URL for HttpClient. Default for local dev: `http://localhost:3000` (defined in `.env.local`).
