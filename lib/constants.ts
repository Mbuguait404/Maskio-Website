/**
 * Skio Brand Colors & Design System Constants
 */

export const COLORS = {
  primary: '#B94545',
  primaryDark: '#A13A3A',
  background: '#FFE5E5',
  foreground: '#222222',
  white: '#FFFFFF',
  grayLight: '#F8F1F1',
  grayMedium: '#E8D5D5',
  grayDark: '#4A3A3A',
  accent: '#B94545',
  destructive: '#DC2626',
} as const;

export const FONTS = {
  display: 'font-display',
  body: 'font-sans',
  mono: 'font-mono',
} as const;

export const SITE_CONFIG = {
  name: 'Skio',
  title: 'Skio - Sound Awareness Through Touch',
  description:
    'AI-powered assistive technology platform converting sound into meaningful tactile feedback for people with hearing loss',
  url: 'https://skio.ai',
  ogImage: 'https://skio.ai/og-image.png',
  links: {
    twitter: 'https://twitter.com/skioai',
    linkedin: 'https://linkedin.com/company/skioai',
    github: 'https://github.com/skioai',
    email: 'hello@skio.ai',
  },
} as const;

export const NAV_ITEMS = [
  { label: 'Why Skio', href: '#why' },
  { label: 'Products', href: '#products' },
  { label: 'Technology', href: '#technology' },
  { label: 'Blog', href: '#blog' },
] as const;
