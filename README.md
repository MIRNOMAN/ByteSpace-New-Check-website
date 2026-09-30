# ByteSpace Enterprise Web Application

A production-grade, industry-standard Next.js 16 (App Router) architecture configured with **Redux Toolkit (RTK)**, **shadcn/ui**, **Tailwind CSS v4**, a **modular feature-sliced codebase**, **reusable components**, and **multi-level error handling**.

---

## 🏗️ Architecture & Codebase Separation

The project is structured according to domain-driven / feature-sliced architectural best practices:

```
src/
├── app/                        # Next.js App Router
│   ├── api/                    # Route Handlers with centralized error responses
│   │   └── tasks/              # RESTful endpoints with validation & error handling
│   ├── error.tsx               # App Router Segment Error Boundary
│   ├── global-error.tsx        # Critical Root Error Boundary (with html/body fallback)
│   ├── not-found.tsx           # Custom 404 Page
│   ├── layout.tsx              # Root Layout (StoreProvider, Theme, Toaster, Navbar, Footer)
│   └── page.tsx                # Interactive Workspace Showcase
│
├── store/                      # Enterprise Redux Toolkit (RTK)
│   ├── hooks.ts                # Typed hooks (useAppDispatch, useAppSelector, useAppStore)
│   ├── store.ts                # makeStore() factory safe for SSR & Client
│   ├── provider.tsx            # Next.js App Router StoreProvider
│   ├── root-reducer.ts         # Combined reducer registry
│   ├── slices/                 # Modular Global Slices
│   │   ├── auth-slice.ts       # User authentication & session state
│   │   ├── ui-slice.ts         # Global modals, notifications, theme preferences
│   │   └── task-slice.ts       # Domain task state & filter actions
│   └── services/               # RTK Query Services
│       ├── base-query.ts       # Centralized query interceptor with auth & error logging
│       └── task-api.ts         # API queries, mutations, cache tags & invalidations
│
├── components/                 # Reusable Component Library
│   ├── ui/                     # shadcn/ui primitives (button, card, dialog, dropdown-menu, etc.)
│   ├── common/                 # Reusable Enterprise Business Components
│   │   ├── error-boundary.tsx  # Isolated React Component Error Boundary with stack inspection & retry
│   │   ├── page-header.tsx     # Page header with title, subtitle, badge, action slot
│   │   ├── stat-card.tsx       # KPI / metric cards with trend indicators & skeleton loaders
│   │   ├── empty-state.tsx     # Zero-data state with icons and CTA actions
│   │   ├── loading-state.tsx   # Card grid skeletons & spinners
│   │   ├── confirm-modal.tsx   # Reusable confirmation dialog (destructive/neutral)
│   │   └── status-badge.tsx    # Status & priority badges
│   └── layout/                 # Layout structure
│       ├── navbar.tsx          # Responsive navbar with live Redux state & notification bell
│       └── footer.tsx          # Global footer
│
├── features/                   # Domain-Driven Feature Modules
│   ├── tasks/                  # Tasks Feature Module
│   │   ├── components/         # TaskCard, TaskFilters, TaskDialog, TaskDashboard
│   │   └── types/              # Task domain models & inputs
│   └── error-demo/             # Error Handling Sandbox Feature Module
│       └── components/         # Interactive crash tester & API error simulator
│
├── lib/                        # Core Utilities & Error Infrastructure
│   ├── utils.ts                # Tailwind class merge helper (cn)
│   └── errors/
│       ├── app-error.ts        # Typed custom error classes (ValidationError, NotFoundError, etc.)
│       ├── error-handler.ts    # Universal client & server error parser & logger
│       └── api-response.ts     # Standard Next.js Route Handler response helpers
│
└── types/                      # Global TypeScript definitions
    ├── api.ts                  # ApiResponse<T>, PaginatedResponse<T>, etc.
    └── common.ts               # Status, priority, and session contracts
```

---

## ⚡ Key Highlights

### 1. Enterprise Redux Toolkit Setup (SSR-Safe)
- Configured strictly according to the official Redux Toolkit Next.js App Router guidelines.
- Guarantees no cross-request state pollution during Server-Side Rendering while maintaining persistent singleton state on the client.
- Type-safe hooks: `useAppDispatch`, `useAppSelector`, and `useAppStore`.
- Integrated **RTK Query** with tag-based caching (`providesTags`, `invalidatesTags`) and automatic error handling.

### 2. shadcn/ui Design System
- Modern Tailwind CSS v4 variables with sleek typography and contrast.
- Components installed & configured:
  - `Button`, `Card`, `Dialog`, `DropdownMenu`, `Input`, `Badge`, `Tabs`, `Separator`, `Skeleton`, `Avatar`, `Sonner` (Toasts).

### 3. Multi-Level Error Handling Architecture
- **Component Level**: `<ErrorBoundary>` isolates React crashes to individual widgets without taking down the application.
- **Route Level**: `app/error.tsx` catches segment errors with retry capabilities.
- **Root Level**: `app/global-error.tsx` provides a fallback UI in case the root layout fails.
- **API Level**: Custom classes (`ValidationError`, `NotFoundError`, `UnauthorizedError`, `InternalServerError`) with standard response formatting:
  ```json
  {
    "success": false,
    "message": "Task title is required and cannot be empty",
    "error": {
      "code": "VALIDATION_ERROR",
      "message": "Task title is required and cannot be empty",
      "details": { "field": "title" },
      "timestamp": "2026-09-30T05:13:15.158Z",
      "path": "/api/tasks"
    }
  }
  ```

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript checks & ESLint
npm run lint

# Production build
npm run build
```
