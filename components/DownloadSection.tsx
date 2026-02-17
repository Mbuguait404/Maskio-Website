'use client';

import React from 'react';

export function DownloadSection() {
  return (
    <section id="download" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#1A1212] rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-primary/20">
          {/* Decorative background blur */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Get Started with <span className="text-primary italic">Skio</span>
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mb-12 font-medium opacity-100">
              Download the SkioAI app to begin your journey toward enhanced sound awareness.
              Available now via direct APK for our early adopters.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Play Store (Inactive) */}
              <div className="group relative">
                <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 cursor-not-allowed opacity-50 grayscale transition-all">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.67,16.18C19.74,16.79 20.3,17.43 20.3,18.1C20.3,18.77 19.74,19.41 18.67,20.02L5.27,27.65C4.76,27.95 4.25,28.05 3.82,27.94L15.4,16.35L16.81,15.12M15.4,7.65L3.82,16.06C4.25,15.95 4.76,16.05 5.27,16.35L18.67,23.98C19.74,24.59 20.3,25.23 20.3,25.9C20.3,26.57 19.74,27.21 18.67,27.82L16.81,28.88L15.4,27.65L3.84,16.09L13.69,26.24L15.4,24.65M16.81,8.88L20.3,10.87L16.81,12.86C16.81,11.83 16.81,10.17 16.81,8.88Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Coming Soon</p>
                    <p className="font-bold text-lg">Google Play</p>
                  </div>
                </div>
              </div>

              {/* App Store (Inactive) */}
              <div className="group relative">
                <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 cursor-not-allowed opacity-50 grayscale transition-all">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.07,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Coming Soon</p>
                    <p className="font-bold text-lg">App Store</p>
                  </div>
                </div>
              </div>

              {/* APK Download (Active) */}
              <a
                href="/skio-app.apk"
                download
                className="bg-primary text-white px-10 py-5 rounded-2xl flex items-center gap-6 shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all hover:-translate-y-1 active:scale-95 group"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest font-extrabold opacity-80">Download Direct</p>
                  <p className="font-black text-xl">APK Release</p>
                </div>
              </a>
            </div>

            <p className="mt-12 text-xs text-muted-foreground font-medium opacity-40 uppercase tracking-[0.2em]">
              Latest Version: 1.0.4 • 42MB • Supports Android 8.0+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
