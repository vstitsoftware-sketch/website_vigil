# Project Overview

This repository contains a single-page React application built with Vite, TypeScript, Tailwind CSS, and shadcn/ui components. The app uses React Router for client-side routing, React Query for server-state management, and Supabase and EmailJS integrations for data and form workflows.

## Tech Stack

- Vite
- React 18
- TypeScript
- React Router
- TanStack Query
- Tailwind CSS
- shadcn/ui
- Supabase
- EmailJS

## Project Structure

- `src/main.tsx` bootstraps the React app and mounts it to `#root`.
- `src/App.tsx` defines the router, global providers, and application routes.
- `src/pages/` contains page-level views such as the home page, careers pages, service pages, and error handling.
- `src/components/` contains shared UI sections, layout components, and reusable primitives.
- `src/services/` contains API and data-access helpers.
- `src/lib/` contains shared utility modules and client setup code.
- `public/` stores static assets served directly by Vite.

## Routes

The application includes routes for:

- the home page
- multiple service detail pages
- careers listings and job detail pages
- an HR portal
- a catch-all not-found page

## Local Development

Install dependencies and start the Vite dev server:

```sh
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - build the production bundle
- `npm run build:dev` - build using the development mode configuration
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint across the project
- `npm run test` - run the Vitest test suite once
- `npm run test:watch` - run the Vitest test suite in watch mode

## Notes

- The Vite config sets up the `@` import alias to point at `src/`.
- The app uses a class-based dark mode configuration in Tailwind.
- Static and route-driven assets are organized to support a content-heavy frontend.
