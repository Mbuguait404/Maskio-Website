import { BlogArticle, Product } from './types';

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
  { label: 'Why Skio', href: '/#why' },
  { label: 'Products', href: '/#products' },
  { label: 'Technology', href: '/#technology' },
  { label: 'Blog', href: '/#blog' },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'wristband',
    name: 'Skio AI Wristband',
    description: 'Real-time sound awareness through intelligent vibration patterns',
    longDescription: 'The Skio AI Wristband is our flagship hardware device. It uses an array of high-precision microphones and a powerful edge AI processor to detect and classify environmental sounds in milliseconds. From doorbells to emergency sirens, it communicates through proprietary haptic vibration patterns that users learn to recognize instinctively.',
    features: [
      'Environmental sound capture',
      'AI sound classification',
      'Distinct vibration patterns per sound type',
      'Low-power wearable design',
    ],
    icon: '⌚',
  },
  {
    id: 'mobile-app',
    name: 'SkioAI Mobile App',
    description: 'Control hub and intelligence layer for your assistive ecosystem',
    longDescription: 'The SkioAI app acts as the brain of your awareness setup. It allows you to customize haptic sensitivities, train the system to recognize specific household sounds, and view a visual history of environmental alerts. It bridges the gap between raw sound data and actionable awareness.',
    features: [
      'Sound visualization & analysis',
      'Alert configuration & customization',
      'AI-powered detection & categorization',
      'Real-time data syncing',
    ],
    icon: '📱',
  },
  {
    id: 'ai-core',
    name: 'ML + Signal Processing',
    description: 'The intelligence that powers awareness and adaptation',
    longDescription: 'At the heart of Skio is a proprietary machine learning engine optimized for edge deployment. We use advanced digital signal processing (DSP) and temporal neural networks to isolate important sounds from background noise, ensuring accurate detection even in busy urban environments.',
    features: [
      'Edge AI inference',
      'Audio signal processing',
      'Embedded systems optimization',
      'Continuous learning algorithms',
    ],
    icon: '🧠',
  },
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    slug: 'future-of-assistive-tech',
    title: 'The Future of Assistive Technology',
    excerpt:
      'How AI and wearables are revolutionizing the way people with hearing loss experience sound.',
    content: 'Assistive technology is undergoing a monumental shift. No longer limited to bulky hardware, the integration of advanced machine learning and minimalist wearable designs is creating a more seamless experience for users. At Skio, we are pushing the boundaries of what is possible by combining real-time neural classification with intuitive haptic feedback. This combination allows for a level of sound awareness that was previously unimaginable, turning abstract audio signals into tangible, physical sensations.',
    category: 'Technology',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
  },
  {
    slug: 'building-for-accessibility',
    title: 'Building for Accessibility',
    excerpt:
      'Design principles and engineering practices for creating truly inclusive technology.',
    content: "Accessibility isn't just a feature; it's a fundamental design requirement. When we build products at Skio, we start with the user's sensory experience. This means understanding how information is perceived and ensuring there are multiple pathways for awareness. Inclusive engineering involves rigorous testing with the community and a commitment to iterative improvement. Our goal is to set a new standard for how technology serves and empowers individuals with diverse needs.",
    category: 'Design',
    date: 'Jan 12, 2024',
    readTime: '7 min read',
  },
  {
    slug: 'concept-to-hardware',
    title: 'From Concept to Hardware',
    excerpt:
      'A behind-the-scenes look at how we iterated on the Skio wristband design.',
    content: 'The journey from a sketch on a napkin to a fully functional AI wristband is filled with challenges. We spent months prototyping different vibration motor configurations to find the perfect balance between distinctness and comfort. Each iteration brought us closer to a design that users would want to wear all day. Our engineering team worked tirelessly to shrink the AI processing unit while maintaining the performance needed for near-instant sound classification.',
    category: 'Product',
    date: 'Jan 8, 2024',
    readTime: '6 min read',
  },
  {
    slug: 'haptic-feedback-engineering',
    title: 'Haptic Feedback Engineering',
    excerpt:
      'Understanding vibration patterns and how they communicate sound to the user.',
    content: 'Haptic feedback is a sophisticated language of its own. By varying frequency, intensity, and duration, we can communicate a vast range of information through touch. Our engineers developed a proprietary library of vibration patterns specific to different environmental sounds—like a doorbell, a siren, or a human voice. This "tactile vocabulary" allows Skio users to interpret their surroundings without needing to look at a screen.',
    category: 'Engineering',
    date: 'Jan 5, 2024',
    readTime: '8 min read',
  },
  {
    slug: 'ethical-ai-healthcare',
    title: 'Ethical AI in Healthcare',
    excerpt: 'How we ensure our AI systems are fair, transparent, and user-centric.',
    content: 'As AI plays a larger role in assistive technologies, ethical considerations become paramount. At Skio, we prioritize user privacy and data security above all else. Our AI models are designed to operate entirely on-device, ensuring that audio data never leaves the wristband. We also work heavily on bias mitigation to ensure our sound classification is accurate across all environments and user groups, providing a reliable and fair experience for everyone.',
    category: 'Ethics',
    date: 'Dec 28, 2023',
    readTime: '6 min read',
  },
  {
    slug: 'research-collaboration-mit',
    title: 'Research Collaboration with MIT',
    excerpt:
      'Our partnership on advancing sound classification algorithms for edge devices.',
    content: 'Innovation thrives on collaboration. Our ongoing partnership with the MIT Media Lab has been instrumental in refining our sound classification algorithms. By leveraging world-class research in signal processing and human-computer interaction, we are able to stay at the cutting edge of sound awareness technology. This collaboration ensures that Skio is not just a consumer product, but a scientifically backed tool for accessibility.',
    category: 'Research',
    date: 'Dec 21, 2023',
    readTime: '4 min read',
  },
];
