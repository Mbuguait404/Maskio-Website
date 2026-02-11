'use client';

export function ProductsSection() {
  const products = [
    {
      name: 'Skio AI Wristband',
      description: 'Real-time sound awareness through intelligent vibration patterns',
      features: [
        'Environmental sound capture',
        'AI sound classification',
        'Distinct vibration patterns per sound type',
        'Low-power wearable design',
      ],
      icon: '⌚',
    },
    {
      name: 'SkioAI Mobile App',
      description: 'Control hub and intelligence layer for your assistive ecosystem',
      features: [
        'Sound visualization & analysis',
        'Alert configuration & customization',
        'AI-powered detection & categorization',
        'Real-time data syncing',
      ],
      icon: '📱',
    },
    {
      name: 'ML + Signal Processing',
      description: 'The intelligence that powers awareness and adaptation',
      features: [
        'Edge AI inference',
        'Audio signal processing',
        'Embedded systems optimization',
        'Continuous learning algorithms',
      ],
      icon: '🧠',
    },
  ];

  return (
    <section id="products" className="py-24 px-4 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            What is <span className="text-primary italic">Skio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-medium">
            A complete assistive technology platform combining wearable hardware, AI-driven sound intelligence, 
            and mobile software to convert sound into meaningful tactile feedback.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 group border border-primary/5 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h3 className="font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-medium">
                {product.description}
              </p>
              <ul className="space-y-4">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-gray-medium/50">
                <button className="text-primary font-bold text-sm hover:underline flex items-center gap-2">
                  LEARN MORE 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Visual */}
        <div className="bg-white rounded-[3rem] p-16 shadow-xl shadow-black/5 border border-primary/5">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            The Skio <span className="text-primary italic">Ecosystem</span>
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <svg viewBox="0 0 800 300" className="w-full h-auto drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Wristband */}
              <g className="hover:opacity-80 transition-opacity cursor-pointer">
                <rect x="50" y="100" width="140" height="100" rx="20" fill="#B94545" fillOpacity="0.05" stroke="#B94545" strokeWidth="2" strokeDasharray="4 4" />
                <text x="120" y="155" textAnchor="middle" className="font-bold fill-primary text-sm tracking-wide">
                  Wristband
                </text>
              </g>

              {/* App */}
              <g className="hover:opacity-80 transition-opacity cursor-pointer">
                <rect x="330" y="100" width="140" height="100" rx="20" fill="#B94545" fillOpacity="0.05" stroke="#B94545" strokeWidth="2" strokeDasharray="4 4" />
                <text x="400" y="155" textAnchor="middle" className="font-bold fill-primary text-sm tracking-wide">
                  Skio App
                </text>
              </g>

              {/* Intelligence */}
              <g className="hover:opacity-80 transition-opacity cursor-pointer">
                <rect x="610" y="100" width="140" height="100" rx="20" fill="#B94545" fillOpacity="0.05" stroke="#B94545" strokeWidth="2" strokeDasharray="4 4" />
                <text x="680" y="155" textAnchor="middle" className="font-bold fill-primary text-sm tracking-wide">
                  AI Engine
                </text>
              </g>

              {/* Connection lines */}
              <path d="M 190 150 L 330 150" stroke="#B94545" strokeWidth="3" markerEnd="url(#arrow-red)" />
              <path d="M 470 150 L 610 150" stroke="#B94545" strokeWidth="3" markerEnd="url(#arrow-red)" />
              <path d="M 680 200 C 680 260, 400 260, 400 250" stroke="#B94545" strokeWidth="2" strokeDasharray="8,8" fill="none" opacity="0.3" />
              <path d="M 400 250 C 400 260, 120 260, 120 200" stroke="#B94545" strokeWidth="2" strokeDasharray="8,8" fill="none" opacity="0.3" />

              <defs>
                <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#B94545" />
                </marker>
              </defs>

              {/* Labels */}
              <text x="260" y="130" fontSize="11" fill="#B94545" fontWeight="800" textAnchor="middle" className="tracking-widest uppercase opacity-60">
                CAPTURES
              </text>
              <text x="540" y="130" fontSize="11" fill="#B94545" fontWeight="800" textAnchor="middle" className="tracking-widest uppercase opacity-60">
                PROCESSES
              </text>
              <text x="400" y="285" fontSize="11" fill="#B94545" fontWeight="800" textAnchor="middle" className="tracking-widest uppercase opacity-60">
                SYNC & ADAPT
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
