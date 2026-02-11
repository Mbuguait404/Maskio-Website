import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Mono, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ["latin"],
  variable: '--font-poppins'
});
const _inter = Inter({ subsets: ["latin"] });
const _spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Skio - Sound Awareness Through Touch',
  description: 'AI-powered assistive technology platform converting sound into meaningful tactile feedback for people with hearing loss',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased text-foreground bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
