# Maskio Website Architecture

## Project Overview

A clean, modular Next.js website for Maskio featuring a classic 80s tech aesthetic with lime green and black color scheme. Built with TypeScript, Tailwind CSS, and a focus on component reusability and maintainability.

## Design System

### Color Palette (80s Tech Aesthetic)
- **Primary**: Lime Green (#ADFF2F) - Main accent and interactive elements
- **Accent**: Orange (#FF6B35) - Secondary accent for emphasis
- **Neutrals**: Black, White, Gray shades - Clean, minimal foundation
- **Borders**: 2px solid black - Crisp, retro-futuristic lines

### Typography
- **Display Font**: Space Mono - Bold headings and branding
- **Body Font**: Inter - Clean, readable body text
- **Mono Font**: Space Mono - Code and technical elements

### Design Principles
- Clean geometric shapes and grid patterns
- Bold, high-contrast elements
- Minimal use of effects (no gradients unless absolutely necessary)
- Retro-futuristic aesthetic balanced with modern clarity
- Accessibility-first approach

## Project Structure

```
maskio-website/
├── /app
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main landing page (composition layer)
│   └── globals.css             # Design tokens and global styles
│
├── /components
│   ├── Navigation.tsx           # Top navigation bar (responsive)
│   ├── HeroSection.tsx          # Hero section with mission statement
│   ├── ProblemSection.tsx       # Problem statement & statistics
│   ├── ProductsSection.tsx      # Products showcase & ecosystem
│   ├── TechnologySection.tsx    # How the tech works & architecture
│   ├── ImpactSection.tsx        # Progress timeline & metrics
│   ├── RecognitionSection.tsx   # Awards & partnerships
│   ├── BlogSection.tsx          # Knowledge hub & articles
│   ├── WhySection.tsx           # Mission statement (end section)
│   ├── CTASection.tsx           # Contact form & CTA
│   └── Footer.tsx               # Footer with links
│
├── /lib
│   ├── utils.ts                # Utility functions (cn() classname merger)
│   └── constants.ts            # Design tokens, colors, config
│
├── /public
│   ├── abstract-wave.jpg       # Abstract wave pattern art
│   ├── abstract-circuit.jpg    # Abstract circuit board art
│   └── abstract-vibration.jpg  # Abstract vibration pattern art
│
└── /styles
    └── (handled by globals.css with Tailwind)
```

## Component Organization

### Component Patterns

Each section component follows this pattern:
1. **Client Component Marker** (`'use client'`) - For interactivity
2. **Data/Config** - Local constants or external imports
3. **Main Content** - Semantic HTML structure
4. **Styling** - Tailwind classes with design tokens
5. **Accessibility** - ARIA labels, semantic elements

### Example Component Structure

```typescript
'use client';

export function SectionComponent() {
  const items = []; // Local data

  return (
    <section className="py-20 px-4 bg-background border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Content */}
      </div>
    </section>
  );
}
```

## Key Features

### 1. **Navigation**
- Fixed header with sticky positioning
- Responsive mobile menu with hamburger toggle
- Primary CTA button (LET'S TALK)
- Logo with branding

### 2. **Hero Section**
- Mission-driven headline: "Turning sound into awareness"
- Dual CTA buttons (Explore / View Products)
- Key statistics display
- Abstract SVG geometric visualization

### 3. **Problem Section**
- 4-column grid of problems being solved
- Statistical impact metrics
- Interactive hover states
- Border-based card design

### 4. **Products Section**
- 3-product feature cards (Wristband, App, AI)
- Feature lists with bullet points
- Ecosystem interaction diagram
- SVG visualization of system relationships

### 5. **Technology Section**
- 5-step process visualization
- System architecture diagram with flow
- Technology stack grid
- Interactive hover states

### 6. **Impact Section**
- Progress timeline with status indicators
- Key metrics display
- Development roadmap
- Visual timeline with dots and connecting lines

### 7. **Recognition Section**
- 4-item recognition grid
- Partner logos showcase
- Award and collaboration highlights

### 8. **Blog Section**
- 6-article preview grid
- Category tags with color coding
- Read time and date information
- Article cards with hover effects

### 9. **Why Section**
- Full-width mission statement section
- Black background with white text
- CTA button styling

### 10. **CTA & Contact**
- Contact form with email, phone, message fields
- Form validation and state management
- Contact information sidebar
- Responsive layout

### 11. **Footer**
- Navigation links organized by category
- Social media links
- Copyright and legal links
- Accent bar at bottom

## Design Tokens System

Located in `/lib/constants.ts`:
- Color definitions
- Font family specifications
- Spacing scale
- Breakpoint definitions
- Site configuration (metadata, links)
- Navigation items

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Wide: 1280px+

### Mobile-First Approach
- Base styles for mobile
- `md:` prefix for tablet/desktop enhancements
- `lg:` prefix for wider screens
- Flexible grids using `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## CSS Architecture

### Tailwind CSS v4 with Design Tokens

**Color Tokens** (in globals.css `:root`):
```css
--color-lime: #ADFF2F
--color-black: #000000
--color-white: #FFFFFF
--color-accent-orange: #FF6B35
/* etc. */
```

**Theme Classes**:
- Primary color: `.bg-primary`, `.text-primary`, `.border-primary`
- Foreground text: `.text-foreground`
- Muted elements: `.text-muted-foreground`
- Accent elements: `.bg-accent`, `.text-accent`

## Interactive Elements

### Hover States
- **Cards**: Transition to primary background color
- **Buttons**: Swap background and text colors
- **Links**: Change to primary color with smooth transition
- **Form inputs**: Focus state with primary background highlight

### Animation
- Smooth transitions (0.3s) on color and background changes
- Border effects on form focus
- No excessive animations (respects design aesthetic)

## Form Handling

Contact form in CTASection:
- Client-side state management with `useState`
- Form validation (required fields)
- Email input validation
- Phone input with placeholder
- Textarea for messages
- Submit handler (currently logs to console, connect to backend service)

## Performance Considerations

1. **Image Optimization**
   - SVG graphics for diagrams (scalable, small size)
   - Generated abstract art images (JPG format)
   - Responsive image loading

2. **Code Splitting**
   - Each section is a separate component
   - Can be lazy loaded if needed
   - Main page acts as composition layer

3. **CSS Efficiency**
   - Tailwind CSS with purging
   - Design tokens reduce duplication
   - No unused CSS in production

## Customization Guide

### Changing Colors
1. Update color variables in `/lib/constants.ts`
2. Update CSS tokens in `/app/globals.css`
3. Colors automatically propagate through components

### Adding New Sections
1. Create new component in `/components/`
2. Import and add to `/app/page.tsx`
3. Use existing component patterns for consistency
4. Update navigation if needed

### Modifying Typography
1. Update font imports in `/app/layout.tsx`
2. Update font theme in `/app/globals.css`
3. Apply `font-display` or `font-sans` classes

### Extending Tailwind
- Custom values can be added to design tokens in globals.css
- Maintain consistent spacing scale
- Keep color palette limited (3-5 colors max)

## SEO & Metadata

- Title: "Maskio - Sound Awareness Through Touch"
- Description: Concise explanation of Maskio's mission
- OG Image: Ready for social sharing
- Semantic HTML: Proper heading hierarchy, nav elements

## Accessibility Features

- Semantic HTML elements (`<nav>`, `<section>`, `<main>`, `<footer>`)
- Proper color contrast (dark text on light backgrounds)
- ARIA labels where needed
- Form labels properly associated with inputs
- Keyboard navigation support
- Mobile-friendly touch targets

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- No IE11 support (Tailwind v4)
- Mobile browsers fully supported

## Development Workflow

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## Future Enhancements

- Blog system integration (CMS or static generation)
- Newsletter signup integration
- Video testimonials section
- Interactive product demo
- Whitepaper/resource downloads
- Community testimonials
- Case studies section
- Email notification service integration

## File Naming Convention

- Components: PascalCase (e.g., `HeroSection.tsx`)
- Utilities/Services: camelCase (e.g., `constants.ts`)
- Folders: lowercase (e.g., `/components`, `/lib`)
- Sections: Always end with "Section" (e.g., `HeroSection`)

## Notes

- All components are optimized for mobile-first responsive design
- Border styling (2px solid black) is consistent throughout
- Primary action buttons use lime green background
- Secondary buttons use white background with black border
- Hover states swap colors for smooth interactivity
- No external component libraries used for custom components
- Built entirely with Tailwind CSS utilities
