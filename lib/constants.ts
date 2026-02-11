/**
 * Maskio Brand Colors & Design System Constants
 * 80s Tech Aesthetic: Lime Green + Black + Orange
 */

export const COLORS = {
  primary: '#ADFF2F', // Lime Green
  primaryDark: '#9FD937',
  black: '#000000',
  white: '#FFFFFF',
  grayLight: '#F5F5F5',
  grayMedium: '#E0E0E0',
  grayDark: '#404040',
  accent: '#FF6B35', // Orange
  destructive: '#DC2626',
} as const;

export const FONTS = {
  display: 'font-display',
  body: 'font-sans',
  mono: 'font-mono',
} as const;

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '4xl': '5rem',
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

export const SITE_CONFIG = {
  name: 'Maskio',
  title: 'Maskio - Sound Awareness Through Touch',
  description:
    'AI-powered assistive technology platform converting sound into meaningful tactile feedback for people with hearing loss',
  url: 'https://maskio.dev',
  ogImage: 'https://maskio.dev/og-image.png',
  links: {
    twitter: 'https://twitter.com/maskio',
    linkedin: 'https://linkedin.com/company/maskio',
    github: 'https://github.com/maskio',
    email: 'hello@maskio.dev',
  },
} as const;

export const NAV_ITEMS = [
  { label: 'Why Maskio', href: '#why' },
  { label: 'Products', href: '#products' },
  { label: 'Technology', href: '#technology' },
  { label: 'Blog', href: '#blog' },
] as const;
