# Vigil Web

A modern, full-stack web application built with React, TypeScript, and Supabase. This project demonstrates a scalable SPA (Single Page Application) architecture with comprehensive UI components, real-time data management, and responsive design.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Environment Configuration](#environment-configuration)
- [Architecture Overview](#architecture-overview)
- [Key Technologies & Integrations](#key-technologies--integrations)

## Tech Stack

### Frontend
- **React 18.3** - UI library with hooks for state management
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and dev server (port 8080)
- **Tailwind CSS** - Utility-first CSS framework with dark mode support
- **shadcn/ui** - High-quality React component library built on Radix UI

### State Management & Data Fetching
- **TanStack React Query 5** - Server state management and caching
- **React Hook Form** - Efficient form state management
- **Zod** - Runtime schema validation

### Backend & Database
- **Supabase** - PostgreSQL database with built-in authentication and real-time capabilities
- **@supabase/supabase-js** - JavaScript client for Supabase

### Routing
- **React Router DOM 6** - Client-side routing and navigation

### UI Components & Styling
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Consistent icon library
- **Recharts** - Composable charting library for data visualization
- **Embla Carousel** - Carousel/slider component
- **react-day-picker** - Date picker component
- **next-themes** - Theme management (dark/light mode)
- **Sonner** - Toast notifications
- **Vaul** - Drawer component library

### Forms & Validation
- **@hookform/resolvers** - Integration layer between React Hook Form and validation libraries
- **input-otp** - One-time password input component

### Additional Libraries
- **EmailJS** - Client-side email service integration
- **date-fns** - Date utility functions
- **cmdk** - Command/search palette component
- **clsx & tailwind-merge** - CSS class utilities

### Development Tools
- **ESLint** - Code linting with React hooks and refresh support
- **Vitest** - Unit testing framework (Vite-native)
- **@testing-library/react** - React component testing utilities
- **TypeScript ESLint** - TypeScript-aware linting
- **Autoprefixer** - CSS vendor prefix management
- **PostCSS** - CSS transformation tool

## Project Structure

```
vigil-connect/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── ui/              # shadcn/ui component library
│   │   ├── AboutSection.tsx
│   │   ├── CareersSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   └── ... (other feature components)
│   ├── pages/               # Page-level components (route handlers)
│   │   ├── Index.tsx        # Landing page
│   │   ├── CareersPage.tsx
│   │   ├── HRPortal.tsx
│   │   ├── JobDetailsPage.tsx
│   │   ├── AllServices.tsx
│   │   ├── services/        # Individual service pages
│   │   └── products/        # Product pages
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile viewport detection
│   │   └── use-toast.ts     # Toast notification hook
│   ├── services/            # API integration layer
│   │   ├── api.ts          # General API utilities
│   │   └── jobApi.ts       # Job-related API calls
│   ├── lib/                 # Utility functions and configs
│   │   ├── supabase.ts     # Supabase client initialization
│   │   └── utils.ts        # Helper utilities
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles
├── public/                  # Static assets
│   ├── robots.txt
│   └── collaborators/
├── supabase/               # Database migrations/schema
├── package.json            # Project dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
└── vitest.config.ts        # Vitest configuration
```

## Prerequisites

- **Node.js** 18+ or Bun (compatible package manager)
- **npm**, **yarn**, or **bun** for package management
- **Git** for version control
- **Supabase account** (for database and authentication)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vigil_web/vigil-connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Configure environment variables**
   Create a `.env` file in the `vigil-connect` directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

## Development

**Start the development server:**
```bash
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:8080` (or the next available port if 8080 is in use).

### Development Features
- **Hot Module Replacement (HMR)** - Instant code updates without full page reload
- **Fast Refresh** - Preserves component state during edits
- **TypeScript** - Full type checking during development
- **ESLint** - Real-time code quality checks

**Run linting:**
```bash
npm run lint
```

## Building for Production

**Create an optimized production build:**
```bash
npm run build
```

This generates an optimized bundle in the `dist/` directory with:
- Code minification
- Tree-shaking
- CSS optimization
- Source maps

**Preview production build locally:**
```bash
npm run preview
```

## Testing

**Run tests once:**
```bash
npm run test
```

**Run tests in watch mode:**
```bash
npm run test:watch
```

Tests use Vitest with React Testing Library for component testing.

## Environment Configuration

### Vite Environment Variables

Vite supports `.env` files with automatic loading:

- `.env` - Loaded in all modes
- `.env.local` - Local overrides (not committed to git)
- `.env.[mode]` - Mode-specific variables
- `.env.[mode].local` - Mode-specific local overrides

All environment variables must be prefixed with `VITE_` to be exposed to the client-side code.

### Supabase Configuration

The application includes validation checks for Supabase configuration:
- Valid HTTPS URLs required
- Placeholder values detection prevents accidental misconfiguration
- Graceful degradation if Supabase is not configured (features disabled)

See `src/lib/supabase.ts` for configuration validation logic.

## Architecture Overview

### Component Architecture
- **Page Components** - Route-level components in `pages/` directory
- **Feature Components** - Reusable sections and features
- **UI Components** - Primitive UI elements from shadcn/ui
- **Custom Hooks** - Encapsulated logic and state management

### Data Flow
```
Pages/Components
    ↓
Custom Hooks (use-mobile, use-toast)
    ↓
React Query (TanStack) for server state
    ↓
API Services (api.ts, jobApi.ts)
    ↓
Supabase Client
    ↓
PostgreSQL Database
```

### Styling Architecture
- **Tailwind CSS** - Utility-first CSS
- **CSS Variables** - Dynamic theming with HSL colors
- **Dark Mode** - Built-in dark/light theme support via next-themes
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints

### Routing
React Router DOM provides client-side routing:
- `/` - Landing page
- `/services/*` - Individual service pages (CCTV, Firefighting, etc.)
- `/products/*` - Product pages (VigilITMS, VigilAnalytics, VigilSecure)
- `/careers` - Careers listing
- `/job/:id` - Job details
- `/hr-portal` - HR management portal
- `/privacy-policy` - Legal
- `/terms-of-use` - Legal

## Key Technologies & Integrations

### Form Management
- **React Hook Form** for efficient form state management
- **Zod** for schema validation and type inference
- Real-time validation feedback

### Data Visualization
- **Recharts** for interactive charts and graphs
- Used in dashboards and analytics pages

### Email Service
- **EmailJS** for client-side email delivery
- Contact form submissions sent via email
- No backend server required for email delivery

### Real-time & Subscription Capabilities
- **Supabase Realtime** - Real-time database subscriptions available
- **React Query** - Automatic background refetching and cache management

### UI/UX Features
- **Toast Notifications** - Sonner for user feedback
- **Drawer Components** - Vaul for slide-out menus
- **Carousels** - Embla Carousel for image sliders
- **Command Palette** - cmdk for searchable command interface
- **Accessible Components** - Radix UI ensures WCAG compliance

### Accessibility
- Radix UI provides accessible component primitives
- ARIA attributes and keyboard navigation built-in
- ESLint rules enforce React accessibility best practices

### Dark Mode
- **next-themes** integration for theme management
- CSS variables for dynamic color switching
- Persisted user preference

## Development Workflow

### Code Quality
- **TypeScript** - Static type checking
- **ESLint** - Code style enforcement
- No unused variables or imports warnings disabled (strict mode available)

### Testing Strategy
- Unit tests with Vitest
- Component tests with React Testing Library
- Test files follow pattern: `*.test.ts` or `*.test.tsx`

### Performance Optimization
- **Code Splitting** - Automatic with Vite
- **Lazy Loading** - React.lazy for route-based code splitting
- **Query Caching** - TanStack React Query caching strategy
- **Image Optimization** - Vite handles asset optimization
- **CSS Minification** - Automatic in production builds

## Build Configuration

### Vite Configuration
- **SWC** - Faster TypeScript/JSX compilation via @vitejs/plugin-react-swc
- **Path Aliases** - `@` resolves to `src/` directory
- **HMR** - Configured with overlay disabled for development
- **Development Server** - Runs on port 8080

### TypeScript Configuration
- **Base URL** - Set for absolute imports
- **Path Aliases** - `@/*` → `src/*`
- **Lenient Settings** - Allows JS files and skips library type checking
- **Flexible Type Checking** - Null checks disabled for flexibility

### Tailwind Configuration
- **Dark Mode** - Class-based dark mode support
- **Content Paths** - Scans all source files for class usage
- **Extended Theme** - Custom font families and color schemes
- **Plugin Extensions** - Tailwind CSS typography plugin

## Database Schema (Supabase)

The application uses Supabase PostgreSQL with the following key tables (see SQL files for full schema):

- **enquiries** - Contact form submissions
- **jobs** - Job listings
- Additional application-specific tables (see supabase/ directory)

Migrations and schema setup files available in `supabase/` directory and SQL files in root.

## Contributing

### Code Style
- Follow ESLint rules
- Use TypeScript for type safety
- Use Prettier formatting (integrated with Tailwind)
- Component names should be PascalCase
- Hook names should start with `use`

### Testing
- Write tests for new features
- Maintain test coverage
- Use React Testing Library best practices

### Git Workflow
- Feature branches from `main`
- Descriptive commit messages
- Pull request reviews before merging