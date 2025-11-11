# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a **Next.js 16** (App Router) project using **Tailwind CSS v4**, **shadcn/ui**, and **TypeScript**. React 19.2.0, strict mode enabled.

### Key Technologies

- **Styling**: Tailwind CSS v4 with PostCSS plugin (no traditional tailwind.config file)
- **UI Components**: shadcn/ui ("new-york" style, RSC-enabled) built on Radix UI primitives
- **Component Variants**: class-variance-authority (CVA)
- **Icons**: lucide-react
- **Utilities**: clsx + tailwind-merge via `cn()` helper

### Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with Geist fonts
│   ├── page.tsx      # Homepage
│   └── globals.css   # Tailwind v4 inline config + CSS variables
├── components/
│   ├── ui/          # shadcn/ui primitives
│   └── *.tsx        # App-specific components
└── lib/
    └── utils.ts     # cn() utility for className merging
```

### Styling System

**Tailwind v4 Pattern**: All configuration is in `src/app/globals.css` using `@theme inline {}` directive (no separate config file).

**Design Tokens**: CSS variables defined in globals.css using OKLCH color space. Base colors use zinc palette. Dark mode via `.dark` class.

**Path Aliases**: `@/` maps to `./src/`, configured in both tsconfig.json and components.json.

### Component Patterns

**Adding shadcn/ui components**:
```bash
npx shadcn@latest add <component-name>
```

Components auto-install to `src/components/ui/` with proper configuration from `components.json`.

**Component conventions**:
- Use CVA for variant patterns (see Button component)
- Use Radix Slot for polymorphic components (asChild pattern)
- Always use `cn()` utility for className composition
- Server Components by default (RSC enabled)

### ESLint Configuration

Custom rule: `@next/next/no-img-element` is disabled globally in `eslint.config.mjs`.
