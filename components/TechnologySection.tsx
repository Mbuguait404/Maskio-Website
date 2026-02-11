'use client';

export function TechnologySection() {
  const steps = [
    {
      number: '01',
      title: 'Sound Capture',
      description: 'Environmental microphones capture real-time audio data from surroundings',
    },
    {
      number: '02',
      title: 'Signal Preprocessing',
      description: 'Raw audio is processed and normalized for AI analysis',
    },
    {
      number: '03',
      title: 'AI Classification',
      description: 'Neural networks identify sound types and classify urgency levels',
    },
    {
      number: '04',
      title: 'Decision Logic',
      description: 'System determines appropriate response and user preferences',
    },
    {
      number: '05',
      title: 'Haptic Feedback',
      description: 'Wristband delivers distinctive vibration patterns for awareness',
    },
  ];

  return (
    <section id="technology" className="py-20 px-4 bg-background border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4">
            How the <span className="text-primary">Technology</span> Works
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl leading-relaxed">
            A sophisticated pipeline combining edge computing, AI inference, and haptic feedback systems.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-2 border-black bg-white p-8 hover:bg-primary hover:text-black transition-all"
            >
              <div className="flex gap-6">
                <div className="font-display text-5xl font-bold text-primary hover:text-black transition-colors min-w-20">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-dark hover:text-black transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="border-2 border-black bg-gray-light p-12">
          <h3 className="font-display text-3xl font-bold text-black mb-8">
            Core <span className="text-primary">Technologies</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Machine Learning', desc: 'TensorFlow, PyTorch' },
              { name: 'Audio Signal Processing', desc: 'DSP, FFT Analysis' },
              { name: 'Edge AI', desc: 'On-device inference' },
              { name: 'Embedded Systems', desc: 'ARM-based microcontrollers' },
              { name: 'Mobile Development', desc: 'React Native, Flutter' },
              { name: 'Haptic Control', desc: 'Precision vibration motors' },
            ].map((tech, index) => (
              <div key={index} className="border-2 border-black bg-white p-6">
                <h4 className="font-display font-bold text-black mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-dark">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-12 border-2 border-black bg-white p-12">
          <h3 className="font-display text-2xl font-bold text-black mb-8 text-center">
            System <span className="text-primary">Architecture</span>
          </h3>
          <svg viewBox="0 0 800 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Input Layer */}
            <g>
              <rect x="50" y="20" width="100" height="60" fill="none" stroke="#000" strokeWidth="2" />
              <text x="100" y="55" textAnchor="middle" className="font-bold fill-black text-sm">
                MICROPHONE
              </text>
            </g>

            {/* Processing Layer */}
            <g>
              <rect x="200" y="20" width="100" height="60" fill="none" stroke="#000" strokeWidth="2" />
              <text x="250" y="55" textAnchor="middle" className="font-bold fill-black text-sm">
                DSP
              </text>
            </g>

            {/* AI Layer */}
            <g>
              <rect x="350" y="20" width="100" height="60" fill="#ADFF2F" stroke="#000" strokeWidth="2" />
              <text x="400" y="55" textAnchor="middle" className="font-bold fill-black text-sm">
                AI MODEL
              </text>
            </g>

            {/* Logic Layer */}
            <g>
              <rect x="500" y="20" width="100" height="60" fill="none" stroke="#000" strokeWidth="2" />
              <text x="550" y="55" textAnchor="middle" className="font-bold fill-black text-sm">
                LOGIC
              </text>
            </g>

            {/* Output Layer */}
            <g>
              <rect x="650" y="20" width="100" height="60" fill="none" stroke="#000" strokeWidth="2" />
              <text x="700" y="55" textAnchor="middle" className="font-bold fill-black text-sm">
                MOTOR
              </text>
            </g>

            {/* Connections */}
            <line x1="150" y1="50" x2="200" y2="50" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="300" y1="50" x2="350" y2="50" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="450" y1="50" x2="500" y2="50" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="600" y1="50" x2="650" y2="50" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />

            {/* Feedback Loop */}
            <path d="M 700 80 Q 400 250 100 80" fill="none" stroke="#FF6B35" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead-orange)" />
            <text x="400" y="280" textAnchor="middle" className="font-bold fill-orange text-sm">
              REAL-TIME FEEDBACK & LEARNING
            </text>

            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#000" />
              </marker>
              <marker id="arrowhead-orange" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#FF6B35" />
              </marker>
            </defs>

            {/* Annotations */}
            <text x="100" y="120" textAnchor="middle" className="fill-gray-dark text-xs">
              Sound
            </text>
            <text x="250" y="120" textAnchor="middle" className="fill-gray-dark text-xs">
              Extract
            </text>
            <text x="400" y="120" textAnchor="middle" className="fill-gray-dark text-xs">
              Classify
            </text>
            <text x="550" y="120" textAnchor="middle" className="fill-gray-dark text-xs">
              Decide
            </text>
            <text x="700" y="120" textAnchor="middle" className="fill-gray-dark text-xs">
              Vibrate
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
