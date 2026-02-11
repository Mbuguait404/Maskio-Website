/**
 * UI Utility Functions
 * Helper functions for common UI patterns and styling
 */

import { COLORS } from './constants';

/**
 * Get color value from design system
 */
export function getColor(colorName: keyof typeof COLORS): string {
  return COLORS[colorName];
}

/**
 * Combine color with opacity
 */
export function withOpacity(color: string, opacity: number): string {
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
}

/**
 * Create border styling
 */
export function borderStyle(color: string = 'border-black', width: string = '2'): string {
  return `border-${width} border-${color}`;
}

/**
 * Button styling variants
 */
export const buttonVariants = {
  primary: 'bg-primary border-2 border-black text-black hover:bg-white hover:text-primary',
  secondary: 'bg-white border-2 border-black text-black hover:bg-primary hover:text-black',
  outlined: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white',
  text: 'text-primary hover:text-accent no-underline',
  accent: 'bg-accent border-2 border-black text-white hover:bg-orange-600',
};

/**
 * Card styling variants
 */
export const cardVariants = {
  default: 'border-2 border-black bg-white',
  filled: 'border-2 border-black bg-gray-light',
  accent: 'border-2 border-black bg-primary text-black',
};

/**
 * Typography scale
 */
export const typographyScale = {
  'text-xs': 'text-xs',
  'text-sm': 'text-sm',
  'text-base': 'text-base',
  'text-lg': 'text-lg',
  'text-xl': 'text-xl',
  'text-2xl': 'text-2xl',
  'text-3xl': 'text-3xl',
  'text-4xl': 'text-4xl',
  'text-5xl': 'text-5xl',
  'text-6xl': 'text-6xl',
  'text-7xl': 'text-7xl',
};

/**
 * Spacing scale helper
 */
export const spacingScale = {
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
  '2xl': 'p-12',
};

/**
 * Common section padding
 */
export const sectionPadding = 'py-20 px-4';

/**
 * Max width container
 */
export const maxWidthContainer = 'max-w-6xl mx-auto';

/**
 * Grid columns
 */
export const gridColumns = {
  '2': 'grid-cols-1 md:grid-cols-2',
  '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

/**
 * Format date for display
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

/**
 * Check if color is dark
 */
export function isDarkColor(color: string): boolean {
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}
