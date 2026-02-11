'use client';

import React from 'react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-background min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
                Turning sound into<br />
                <span className="text-primary italic">awareness</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                Skio builds AI-powered assistive technologies that help people with hearing loss experience critical sounds through touch, intelligence, and design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-6 flex-wrap">
              <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 hover:-translate-y-1">
                EXPLORE TECHNOLOGY
              </button>
              <button className="bg-white text-primary border-2 border-primary/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:-translate-y-1">
                VIEW PRODUCTS
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-primary/10">
              <div>
                <p className="text-4xl font-bold text-primary">48M</p>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Hearing Loss Cases</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">2026</p>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Active Status</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Modern Abstract Design */}
          <div className="hidden md:flex items-center justify-center relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-md h-auto relative z-10 drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Modern Graphic */}
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#B94545" />
                  <stop offset="100%" stopColor="#FF6B6B" />
                </linearGradient>
              </defs>

              <circle cx="200" cy="200" r="180" fill="white" fillOpacity="0.8" />
              
              {/* Grid pattern - subtle */}
              <g stroke="#B94545" strokeWidth="0.5" opacity="0.1">
                {[...Array(9)].map((_, i) => (
                  <React.Fragment key={i}>
                    <line x1="0" y1={(i + 1) * 40} x2="400" y2={(i + 1) * 40} />
                    <line x1={(i + 1) * 40} y1="0" x2={(i + 1) * 40} y2="400" />
                  </React.Fragment>
                ))}
              </g>

              {/* Waveform visualization */}
              <path
                d="M 50,200 Q 75,100 100,200 T 150,200 T 200,200 T 250,200 T 300,200 T 350,200"
                stroke="url(#waveGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
              />

              {/* Decorative elements */}
              <circle cx="200" cy="200" r="100" fill="none" stroke="#B94545" strokeWidth="1" strokeDasharray="10 10" />
              <rect x="180" y="180" width="40" height="40" rx="8" fill="#B94545" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
