'use client';

export function ProductsSection() {
  const products = [
    {
      name: 'Maskio AI Wristband',
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
    <section id="products" className="py-20 px-4 bg-gray-light border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4">
            What is <span className="text-primary">Maskio</span>
          </h2>
          <p className="text-lg text-gray-dark max-w-3xl leading-relaxed">
            A complete assistive technology platform combining wearable hardware, AI-driven sound intelligence, 
            and mobile software to convert sound into meaningful tactile feedback.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="border-2 border-black bg-white p-8 hover:shadow-lg transition-all group"
            >
              <p className="text-6xl mb-4">{product.icon}</p>
              <h3 className="font-display font-bold text-2xl text-black mb-3">
                {product.name}
              </h3>
              <p className="text-gray-dark mb-6 text-sm">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <span className="text-primary font-bold mt-1">▪</span>
                    <span className="text-gray-dark">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t-2 border-gray-medium">
                <button className="text-primary font-display font-bold text-sm hover:text-accent transition-colors">
                  LEARN MORE →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Visual */}
        <div className="border-2 border-black bg-white p-12">
          <h3 className="font-display text-2xl font-bold text-black mb-8 text-center">
            The Maskio <span className="text-primary">Ecosystem</span>
          </h3>
          <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Wristband */}
            <g>
              <rect x="50" y="100" width="120" height="100" fill="none" stroke="#000" strokeWidth="2" />
              <text x="110" y="155" textAnchor="middle" className="font-bold fill-black text-sm">
                Wristband
              </text>
            </g>

            {/* App */}
            <g>
              <rect x="340" y="100" width="120" height="100" fill="none" stroke="#000" strokeWidth="2" />
              <text x="400" y="155" textAnchor="middle" className="font-bold fill-black text-sm">
                SkioAI App
              </text>
            </g>

            {/* Intelligence */}
            <g>
              <rect x="630" y="100" width="120" height="100" fill="none" stroke="#000" strokeWidth="2" />
              <text x="690" y="155" textAnchor="middle" className="font-bold fill-black text-sm">
                AI Engine
              </text>
            </g>

            {/* Connection lines */}
            <line x1="170" y1="150" x2="340" y2="150" stroke="#ADFF2F" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <line x1="460" y1="150" x2="630" y2="150" stroke="#FF6B35" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <line x1="690" y1="200" x2="400" y2="250" stroke="#ADFF2F" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="400" y1="250" x2="110" y2="200" stroke="#ADFF2F" strokeWidth="2" strokeDasharray="5,5" />

            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#ADFF2F" />
              </marker>
            </defs>

            {/* Labels */}
            <text x="250" y="130" fontSize="12" fill="#FF6B35" fontWeight="bold">
              CAPTURES
            </text>
            <text x="545" y="130" fontSize="12" fill="#FF6B35" fontWeight="bold">
              PROCESSES
            </text>
            <text x="400" y="280" fontSize="12" fill="#ADFF2F" fontWeight="bold" textAnchor="middle">
              SYNC & ADAPT
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
