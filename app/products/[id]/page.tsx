'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PRODUCTS } from '@/lib/constants';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-40 pb-24 px-4 overflow-hidden relative">
        {/* Decorative flair */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/4 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            href="/#products" 
            className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:-translate-x-1 transition-transform"
          >
            ← BACK TO ECOSYSTEM
          </Link>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Image/Icon */}
            <div className="relative group">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-square flex items-center justify-center bg-white rounded-[4rem] shadow-2xl border border-primary/5 text-[12rem] animate-float">
                {product.icon}
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/60 mb-6 block">
                Product Deep Dive
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-none">
                {product.name}
              </h1>
              <p className="text-2xl text-muted-foreground font-medium leading-relaxed mb-12">
                {product.longDescription}
              </p>

              <div className="space-y-6 mb-12">
                <h3 className="text-xl font-bold text-foreground uppercase tracking-widest">Key Capabilities</h3>
                <div className="grid gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-primary/5 shadow-sm hover:border-primary/20 transition-all group/feat">
                      <div className="w-4 h-4 rounded-full bg-primary group-hover/feat:scale-125 transition-transform" />
                      <span className="text-lg font-bold text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/#download" 
                  className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg text-center shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all hover:-translate-y-1"
                >
                  GET THE DEVICE
                </Link>
                <Link 
                  href="/#download" 
                  className="bg-white text-primary border border-primary/20 px-10 py-5 rounded-2xl font-bold text-lg text-center hover:bg-primary/5 transition-all"
                >
                  DOWNLOAD APP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Feature Sections (Mock) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'High Performance',
                desc: 'Optimized at the chip level for near-zero latency.'
              },
              {
                title: 'User-Centric',
                desc: 'Built with direct feedback from the Deaf community.'
              },
              {
                title: 'Privacy First',
                desc: 'All audio processing happens on-device, never in the cloud.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h4 className="text-xl font-black mb-4 text-primary uppercase tracking-widest">{item.title}</h4>
                <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
