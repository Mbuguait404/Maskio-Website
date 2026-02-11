# Maskio Website - Setup & Development Guide

## Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd maskio-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site in action.

## Development

### Available Commands

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Project Architecture

### Directory Structure Overview

```
/app                 - Next.js App Router pages
  ├── layout.tsx    - Root layout with fonts and metadata
  ├── page.tsx      - Main landing page (composition)
  └── globals.css   - Design tokens and global styles

/components          - React components (section-based)
  ├── Navigation.tsx
  ├── HeroSection.tsx
  ├── ProblemSection.tsx
  ├── ProductsSection.tsx
  ├── TechnologySection.tsx
  ├── ImpactSection.tsx
  ├── RecognitionSection.tsx
  ├── BlogSection.tsx
  ├── WhySection.tsx
  ├── CTASection.tsx
  └── Footer.tsx

/lib                 - Utilities and configuration
  ├── utils.ts      - Common utility functions
  ├── constants.ts  - Design system tokens
  ├── types.ts      - TypeScript type definitions
  └── ui-utils.ts   - UI-specific helpers

/hooks               - Custom React hooks
  ├── useFormHandler.ts    - Form state management
  ├── useMediaQuery.ts     - Responsive design helper
  └── index.ts            - Hook exports

/public              - Static assets
  ├── abstract-*.jpg      - Generated abstract art
  └── (icons, favicons)

/styles              - Additional styles (if needed)
```

## Key Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Radix UI (available but custom built for this project)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Space Mono)

## Design System

### Color System

All colors are defined in `/lib/constants.ts` and `/app/globals.css`:

```typescript
// Colors
--color-lime: #ADFF2F         (Primary)
--color-accent-orange: #FF6B35 (Accent)
--color-black: #000000        (Primary text)
--color-white: #FFFFFF        (Background)
--color-gray-light: #F5F5F5   (Secondary bg)
--color-gray-dark: #404040    (Secondary text)
```

### Spacing Scale

Follows Tailwind's spacing convention:
- `p-4` = 1rem
- `gap-6` = 1.5rem
- `py-20` = 5rem

### Typography

- **Display**: Space Mono (bold headings, branding)
- **Body**: Inter (readable text)
- **Mono**: Space Mono (code, technical elements)

### Borders

Standard 2px solid black borders throughout for consistency with 80s aesthetic.

## Component Development

### Creating a New Section

1. Create a new component in `/components/`:

```typescript
'use client';

export function MySection() {
  return (
    <section className="py-20 px-4 bg-background border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Content */}
      </div>
    </section>
  );
}
```

2. Add to `/app/page.tsx`:

```typescript
import { MySection } from '@/components/MySection';

export default function Home() {
  return (
    <main>
      {/* ... other sections ... */}
      <MySection />
      {/* ... other sections ... */}
    </main>
  );
}
```

3. Update navigation if it needs a link

### Component Patterns

#### Button Pattern

```typescript
<button className="bg-primary border-2 border-black text-black px-8 py-3 font-display font-bold text-base hover:bg-white hover:text-primary transition-all">
  BUTTON TEXT
</button>
```

#### Card Pattern

```typescript
<div className="border-2 border-black bg-white p-8 hover:shadow-lg transition-all">
  {/* Content */}
</div>
```

#### Section Padding

```typescript
<section className="py-20 px-4 bg-background border-b-2 border-black">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

#### Grid Layouts

```typescript
// 2-column responsive
<div className="grid md:grid-cols-2 gap-8">

// 3-column responsive
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// 4-column responsive
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
```

## Customization

### Change Primary Color

1. Open `/lib/constants.ts`
2. Update `--color-lime` value
3. Update CSS variable in `/app/globals.css`

```css
--color-lime: #ADFF2F; /* Change this */
```

### Add New Section

1. Create component in `/components/SectionName.tsx`
2. Import in `/app/page.tsx`
3. Add to render order
4. Add navigation link if needed

### Modify Typography

In `/app/layout.tsx`:
```typescript
import { FontName } from 'next/font/google'

const font = FontName({ weight: ['400', '700'], subsets: ['latin'] })
```

In `/app/globals.css`:
```css
@theme inline {
  --font-display: 'FontName', fallback;
}
```

### Update Colors in Components

Use CSS variables defined in `globals.css`:
```typescript
className="bg-primary"  // Lime green
className="text-primary" // Lime green text
className="border-black" // Black border
className="bg-accent"   // Orange
```

## Form Handling

The contact form uses a custom hook for state management:

```typescript
import { useFormHandler } from '@/hooks/useFormHandler';

export function MyForm() {
  const { formData, isLoading, error, handleChange, handleSubmit, resetForm } = useFormHandler();

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
    </form>
  );
}
```

To connect to a backend service, modify `/hooks/useFormHandler.ts`:

```typescript
// In handleSubmit function
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## Responsive Design

### Mobile-First Approach

```typescript
// Mobile: 100%
// Tablet (md:): 2 columns
// Desktop (lg:): 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Common Breakpoints

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

### Testing Responsive

```bash
# Chrome DevTools: Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac)
# Then test at: 320px, 768px, 1024px, 1280px
```

## Performance Tips

1. **Image Optimization**
   - Use SVG for diagrams
   - Use Next.js Image component for photos
   - Compress generated images

2. **Code Splitting**
   - Each section is a separate component
   - Can add dynamic imports if needed: `dynamic(() => import(...))`

3. **CSS Optimization**
   - Tailwind v4 automatically purges unused CSS
   - No custom CSS unless absolutely necessary

4. **Bundle Size**
   - Monitor with: `npm run build` (check `.next/static`)

## Deployment

### To Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Connect repo to Vercel at https://vercel.com
# Auto-deploys on push
```

### To Other Platforms

```bash
# Build static export
npm run build

# Files in .next/ ready for deployment
```

## Troubleshooting

### Styles not applying

1. Check if Tailwind classes are correct
2. Run `npm run dev` to rebuild CSS
3. Check `/app/globals.css` for token definitions

### Form not submitting

1. Check browser console for errors
2. Verify form field names match state object
3. Test in development mode

### Components not rendering

1. Check import paths
2. Ensure component is exported
3. Check for `'use client'` directive if using hooks

### Build errors

1. Check TypeScript errors: `npx tsc --noEmit`
2. Verify all imports are correct
3. Check for circular imports

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/section-name

# Make changes
git add .
git commit -m "Add description"

# Push and create PR
git push origin feature/section-name
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## Support & Questions

For issues or questions:
1. Check the ARCHITECTURE.md for design system details
2. Review component examples in `/components`
3. Check `/lib/constants.ts` for configuration
4. Review `/hooks` for custom hook usage

## License

This project is part of Maskio and follows the company's licensing terms.
