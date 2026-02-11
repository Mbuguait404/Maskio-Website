# Maskio Components Documentation

Comprehensive reference for all components used in the Maskio website. Each component is modular, reusable, and follows a consistent design pattern.

## Component Hierarchy

```
RootLayout
├── Navigation
├── HeroSection
├── ProblemSection
├── ProductsSection
├── TechnologySection
├── ImpactSection
├── RecognitionSection
├── BlogSection
├── WhySection
├── CTASection
└── Footer
```

---

## Navigation

**File**: `/components/Navigation.tsx`

Fixed header navigation with responsive mobile menu.

### Features
- Sticky positioning
- Mobile hamburger menu
- Primary CTA button
- Responsive design
- Active link states

### Props
None (standalone component)

### Exports
```typescript
export function Navigation()
```

### Usage
```typescript
import { Navigation } from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      {/* other content */}
    </>
  );
}
```

### Styling
- Fixed positioning at top
- 2px solid black bottom border
- Logo uses primary color background
- Lime green hover states on links

---

## HeroSection

**File**: `/components/HeroSection.tsx`

Main hero section with headline, subheading, CTAs, and abstract SVG visualization.

### Features
- Bold headline with primary color accent
- Dual CTA buttons (primary + secondary)
- Key statistics display
- Abstract geometric SVG visualization
- Responsive grid layout

### Content Included
- Headline: "Turning sound into awareness"
- Subheading about mission
- Statistics: population affected + development year
- Two action buttons

### Exports
```typescript
export function HeroSection()
```

### Styling
- Full viewport height with flex centering
- Grid layout: text (left) + visual (right)
- 2px borders throughout
- Primary color accents on text
- SVG includes grid pattern and waveform

---

## ProblemSection

**File**: `/components/ProblemSection.tsx`

Showcases the problems Maskio is solving with interactive cards.

### Features
- 4-column grid of problem cards
- Icon display on each card
- Hover effect (changes to primary background)
- Statistics section below
- Responsive grid layout

### Data Structure
```typescript
interface Problem {
  icon: string;
  title: string;
  description: string;
}
```

### Problems Included
1. Critical Sounds Missed
2. High Cost Barriers
3. Technology Gaps
4. Accessibility Gaps

### Statistics
- 1.5B people with hearing loss globally
- 90% born to hearing parents
- $5K+ average annual hearing aid cost

### Styling
- Bordered cards with hover transition
- Primary color background on hover
- Stats display with larger typography
- Border-top separator

---

## ProductsSection

**File**: `/components/ProductsSection.tsx`

Showcases the three main products: Wristband, Mobile App, and AI Engine.

### Features
- 3-column product grid
- Feature lists for each product
- Ecosystem interaction diagram (SVG)
- Icon display
- Learn more buttons

### Data Structure
```typescript
interface Product {
  name: string;
  description: string;
  features: string[];
  icon: string;
}
```

### Products
1. **Maskio AI Wristband**
   - Real-time sound awareness
   - Vibration feedback
   - Features: capture, classification, patterns, low-power

2. **SkioAI Mobile App**
   - Control hub
   - Sound visualization
   - Features: visualization, configuration, categorization, syncing

3. **ML + Signal Processing**
   - Intelligence layer
   - Features: Edge AI, audio processing, optimization, learning

### Styling
- White cards with borders
- Shadow effects on hover
- Primary color accents in buttons
- SVG diagram with colored connection lines

---

## TechnologySection

**File**: `/components/TechnologySection.tsx`

Explains how the technology works with process steps and architecture.

### Features
- 5-step process visualization
- Technology stack grid
- System architecture diagram (SVG)
- Hover effects on steps
- Color-coded elements

### Process Steps
1. Sound Capture
2. Signal Preprocessing
3. AI Classification
4. Decision Logic
5. Haptic Feedback

### Technology Stack
- Machine Learning
- Audio Signal Processing
- Edge AI
- Embedded Systems
- Mobile Development
- Haptic Control

### Architecture Components
- Microphone → DSP → AI Model → Logic → Motor
- Real-time feedback loop
- Visual flow with arrows

### Styling
- Numbered steps with primary color
- Technology cards with borders
- SVG with colored markers
- Process flow visualization

---

## ImpactSection

**File**: `/components/ImpactSection.tsx`

Shows progress metrics, timeline, and development status.

### Features
- 4 key metrics display
- Development timeline with status
- Visual timeline with dots
- Status indicators (completed, active, upcoming)
- Interactive timeline nodes

### Progress Metrics
- Sounds Classified: 500+
- Prototype Iterations: 15
- Active Contributors: 12
- Research Hours: 2000+

### Timeline Items
1. Concept - Completed
2. Prototype - Completed
3. Testing - Completed
4. Iteration - Active
5. Launch - Upcoming

### Styling
- Large metric numbers in primary color
- Timeline with status-based coloring
- Border-left accent bars
- Status badges

---

## RecognitionSection

**File**: `/components/RecognitionSection.tsx`

Displays awards, recognition, and partnerships.

### Features
- 4-item recognition grid
- Organization and year display
- Partner logos section
- Hover effects on cards
- Trust indicators

### Recognition Items
1. Innovation Lab - Y Combinator (2024)
2. Accessibility Award - Tech for Social Good (2024)
3. Featured Innovation - MIT Media Lab (2023)
4. Best Hardware Prototype - Prototype Summit (2023)

### Partner Organizations
- MIT
- Stanford
- Y Combinator
- TechStars
- SV Angels

### Styling
- Bordered cards with gray background
- Primary color text on hover
- Year display in top-right
- Partner grid with equal sizing

---

## BlogSection

**File**: `/components/BlogSection.tsx`

Knowledge hub showcasing blog articles and resources.

### Features
- 6-article grid preview
- Category tags
- Read time display
- Hover effects
- View all CTA

### Data Structure
```typescript
interface BlogArticle {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}
```

### Articles Included
1. The Future of Assistive Technology
2. Building for Accessibility
3. From Concept to Hardware
4. Haptic Feedback Engineering
5. Ethical AI in Healthcare
6. Research Collaboration with MIT

### Styling
- Category tags with primary background
- Bordered article cards
- Bottom border separator
- Read time and date in footer
- Primary color links

---

## WhySection

**File**: `/components/WhySection.tsx`

Mission statement section emphasizing Maskio's purpose and values.

### Features
- Full-width dark background
- Centered text layout
- Primary color accents
- Large typography
- CTA button

### Content
- Main mission statement
- Impact explanation
- Rights-focused message
- Join mission CTA button

### Styling
- Black background with white text
- Primary color accents
- Bordered sections with top margin
- Center-aligned layout
- Large readable font sizes

---

## CTASection

**File**: `/components/CTASection.tsx`

Contact form and call-to-action section with contact information.

### Features
- Contact form with validation
- Client-side state management
- Contact information display
- Error handling
- Loading states
- Form reset on submit

### Form Fields
1. Name (required)
2. Email (required, validated)
3. Phone (optional)
4. Message (required)

### Validation
- Name: not empty
- Email: not empty + valid format
- Message: not empty

### Contact Info
- Email: hello@maskio.dev
- Location: San Francisco, CA

### Styling
- Form inputs with primary focus state
- Submit button changes on primary focus
- Border-left accent for contact info
- Responsive grid layout

### Hook Used
```typescript
import { useFormHandler } from '@/hooks/useFormHandler';
```

---

## Footer

**File**: `/components/Footer.tsx`

Footer with navigation links, company info, and social media.

### Features
- Company branding
- Organized link sections
- Social media links
- Copyright information
- Legal links
- Accent bar at bottom

### Link Sections
1. **Product**: Wristband, Mobile App, Technology
2. **Company**: About, Blog, Research
3. **Connect**: Twitter, LinkedIn, GitHub

### Legal Links
- Privacy
- Terms
- Accessibility

### Styling
- Black background with white text
- Primary color hover states
- 2px border-top separator
- Accent bar at bottom in primary color
- Responsive column layout

---

## Styling Patterns

All components follow consistent styling patterns:

### Container Pattern
```typescript
<section className="py-20 px-4 bg-background border-b-2 border-black">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Button Pattern
```typescript
<button className="bg-primary border-2 border-black text-black px-8 py-3 font-display font-bold text-base hover:bg-white hover:text-primary transition-all">
  TEXT
</button>
```

### Card Pattern
```typescript
<div className="border-2 border-black bg-white p-8 hover:shadow-lg transition-all">
  {/* Content */}
</div>
```

### Grid Pattern
```typescript
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

---

## SVG Illustrations

Several components include custom SVG graphics:

### HeroSection SVG
- Grid pattern (lime green, low opacity)
- Waveform visualization (lime green)
- Accent rectangles (orange)
- Circle element (lime green)

### ProductsSection SVG
- Three boxes representing products
- Connection lines with arrows
- Dashed feedback lines
- Text labels
- Arrow markers

### TechnologySection SVG
- System architecture flow
- 5 process stages
- Input/output boxes
- Colored connectors
- Text annotations
- Feedback loop

---

## Component Dependencies

```
Navigation
├── lucide-react (Menu, X icons)
└── next/link

HeroSection
└── (no external dependencies)

ProblemSection
└── (no external dependencies)

ProductsSection
└── (inline SVG)

TechnologySection
└── (inline SVG)

ImpactSection
└── (no external dependencies)

RecognitionSection
└── (no external dependencies)

BlogSection
└── (no external dependencies)

WhySection
└── (no external dependencies)

CTASection
└── useState (React)
└── useFormHandler (custom hook)

Footer
├── next/link
└── (no other dependencies)
```

---

## Color Usage by Component

| Color | Usage |
|-------|-------|
| Lime Green (#ADFF2F) | Primary buttons, text accents, hover states, SVG accents |
| Orange (#FF6B35) | Secondary accents, badges, status indicators |
| Black (#000000) | Text, borders, primary backgrounds |
| White (#FFFFFF) | Backgrounds, cards, light text containers |
| Gray Light (#F5F5F5) | Secondary backgrounds, card backgrounds |
| Gray Medium (#E0E0E0) | Borders, dividers, muted elements |
| Gray Dark (#404040) | Secondary text, muted foreground |

---

## Responsive Behavior

All components are mobile-first with breakpoints:

- **Mobile** (< 640px): Single column, stacked layout
- **Tablet** (md: 768px): 2 columns where applicable
- **Desktop** (lg: 1024px): 3+ columns, full layout
- **Wide** (xl: 1280px): Maximum width containers

---

## Accessibility Features

- Semantic HTML elements (section, nav, main, footer)
- Proper heading hierarchy (h1, h2, h3)
- Alt text ready for images
- Form labels associated with inputs
- Color contrast maintained
- Touch-friendly button sizes
- Keyboard navigation support

---

## Animation & Transitions

- Smooth color transitions (0.3s)
- Hover state transitions
- No heavy animations
- Respects prefers-reduced-motion if needed
- Transform on focus states

---

## Best Practices

1. **Component Isolation**: Each section can be developed independently
2. **Reusability**: Patterns can be reused across components
3. **Consistency**: All components follow design system
4. **Performance**: No unnecessary re-renders
5. **Maintainability**: Clear structure and naming
6. **Scalability**: Easy to add new sections or components
