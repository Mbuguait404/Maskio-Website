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
    <section id="technology" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            How the <span className="text-primary italic">Technology</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
            A sophisticated pipeline combining edge computing, AI inference, and haptic feedback systems.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-6 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-8 hover:bg-primary/5 transition-all duration-300 border border-primary/5 shadow-lg shadow-black/5 group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-light rounded-[3rem] p-16 shadow-inner border border-primary/5">
          <h3 className="text-3xl font-bold text-foreground mb-12">
            Core <span className="text-primary italic">Technologies</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Machine Learning', desc: 'TensorFlow, PyTorch' },
              { name: 'Audio Signal Processing', desc: 'DSP, FFT Analysis' },
              { name: 'Edge AI', desc: 'On-device inference' },
              { name: 'Embedded Systems', desc: 'ARM-based microcontrollers' },
              { name: 'Mobile Development', desc: 'Flutter, Android/iOS' },
              { name: 'Haptic Control', desc: 'Precision vibration motors' },
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-primary/5 hover:border-primary/20 transition-all">
                <h4 className="font-bold text-primary mb-3 text-lg">{tech.name}</h4>
                <p className="text-sm text-muted-foreground font-medium">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-20 bg-white rounded-[3rem] p-16 shadow-xl shadow-black/5 border border-primary/5">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            System <span className="text-primary italic">Architecture</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <svg viewBox="0 0 800 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feOffset dx="0" dy="4" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.1" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Components */}
              {[
                { x: 50, label: 'MICROPHONE', color: 'white' },
                { x: 200, label: 'DSP', color: 'white' },
                { x: 350, label: 'AI MODEL', color: '#B94545', textColor: 'white' },
                { x: 500, label: 'LOGIC', color: 'white' },
                { x: 650, label: 'MOTOR', color: 'white' }
              ].map((item, i) => (
                <g key={i} filter="url(#dropShadow)">
                  <rect x={item.x} y="20" width="120" height="70" rx="15" fill={item.color === 'white' ? 'white' : item.color} stroke="#B94545" strokeWidth="1" />
                  <text x={item.x + 60} y="60" textAnchor="middle" className={`font-bold text-[10px] tracking-wider ${item.textColor === 'white' ? 'fill-white' : 'fill-primary'}`}>
                    {item.label}
                  </text>
                </g>
              ))}

              {/* Connections */}
              {[170, 320, 470, 620].map((x, i) => (
                <line key={i} x1={x} y1="55" x2={x + 30} y2="55" stroke="#B94545" strokeWidth="2" markerEnd="url(#arrow-head)" />
              ))}

              {/* Feedback Loop */}
              <path d="M 710 90 Q 400 300 110 90" fill="none" stroke="#B94545" strokeWidth="2" strokeDasharray="8,8" markerEnd="url(#arrow-head)" opacity="0.3" />
              <text x="400" y="320" textAnchor="middle" className="font-extrabold fill-primary text-xs tracking-widest uppercase opacity-60">
                REAL-TIME FEEDBACK & LEARNING
              </text>

              <defs>
                <marker id="arrow-head" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#B94545" />
                </marker>
              </defs>

              {/* Annotations */}
              {[110, 260, 410, 560, 710].map((x, i) => (
                <text key={i} x={x} y="120" textAnchor="middle" className="fill-muted-foreground text-[10px] font-bold tracking-widest uppercase opacity-40">
                  {['Sound', 'Extract', 'Classify', 'Decide', 'Vibrate'][i]}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
