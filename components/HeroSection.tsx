'use client';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-background border-b-2 border-black min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-display text-6xl md:text-7xl font-bold text-black leading-tight mb-6">
                Turning sound into<span className="text-primary"> awareness</span>
              </h1>
              <p className="text-lg text-gray-dark leading-relaxed max-w-md">
                Maskio builds AI-powered assistive technologies that help people with hearing loss experience critical sounds through touch, intelligence, and design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary border-2 border-black text-black px-8 py-3 font-display font-bold text-base hover:bg-white hover:text-primary transition-all">
                EXPLORE TECHNOLOGY
              </button>
              <button className="bg-white border-2 border-black text-black px-8 py-3 font-display font-bold text-base hover:bg-primary hover:text-black transition-all">
                VIEW PRODUCTS
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t-2 border-black">
              <div>
                <p className="text-3xl font-display font-bold text-primary">48M</p>
                <p className="text-sm text-gray-dark">People with hearing loss</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">2024</p>
                <p className="text-sm text-gray-dark">Active development</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Abstract Geometric Grid */}
          <div className="hidden md:flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-md h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <rect width="400" height="400" fill="#F5F5F5" stroke="#000" strokeWidth="2" />

              {/* Grid pattern - 80s style */}
              <g stroke="#ADFF2F" strokeWidth="1" opacity="0.3">
                <line x1="0" y1="100" x2="400" y2="100" />
                <line x1="0" y1="200" x2="400" y2="200" />
                <line x1="0" y1="300" x2="400" y2="300" />
                <line x1="100" y1="0" x2="100" y2="400" />
                <line x1="200" y1="0" x2="200" y2="400" />
                <line x1="300" y1="0" x2="300" y2="400" />
              </g>

              {/* Waveform visualization */}
              <polyline
                points="50,200 75,180 100,210 125,150 150,200 175,140 200,200 225,160 250,190 275,170 300,200 325,140 350,200"
                stroke="#ADFF2F"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Accent elements */}
              <rect x="50" y="50" width="40" height="40" fill="none" stroke="#FF6B35" strokeWidth="2" />
              <rect x="310" y="310" width="50" height="50" fill="none" stroke="#FF6B35" strokeWidth="2" />
              <circle cx="200" cy="100" r="25" fill="none" stroke="#ADFF2F" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
