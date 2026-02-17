'use client';

import {
  Bell,
  DollarSign,
  Wrench,
  Globe,
} from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: Bell,
      title: 'Critical Sounds Missed',
      description: 'Alarms, doorbells, and danger signals go unnoticed',
    },
    {
      icon: DollarSign,
      title: 'High Cost Barriers',
      description: 'Traditional assistive devices are expensive and limited',
    },
    {
      icon: Wrench,
      title: 'Technology Gaps',
      description: 'Existing solutions lack personalization and adaptability',
    },
    {
      icon: Globe,
      title: 'Accessibility Gaps',
      description: 'One-size-fits-all approaches ignore individual needs',
    },
  ];

  return (
    <section id="why" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            The Problem We're <span className="text-primary italic">Solving</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
            People with hearing loss miss critical sounds not by choice, but because technology has gaps.
            They deserve better. They deserve awareness.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <div
                key={index}
                className="relative bg-background rounded-3xl p-8 transition-all duration-300 group 
                shadow-lg shadow-black/5 hover:shadow-primary/30 
                hover:-translate-y-2 border border-primary/5
                hover:bg-gradient-to-br hover:from-primary hover:to-primary/80"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl 
                  flex items-center justify-center mb-6
                  transition-all duration-300
                  group-hover:bg-white group-hover:text-primary
                  group-hover:scale-110 group-hover:rotate-6
                  shadow-sm"
                >
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-white">
                  {problem.title}
                </h3>

                <p className="text-muted-foreground group-hover:text-white/90 transition-colors leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-primary/10 grid md:grid-cols-3 gap-10">
          <div className="bg-gray-light rounded-3xl p-10 text-center shadow-lg shadow-black/5 border border-primary/5 hover:-translate-y-2 transition-all">
            <p className="text-5xl font-bold text-primary mb-3">1.5B</p>
            <p className="font-semibold text-muted-foreground uppercase tracking-wider text-sm">
              Global Hearing Loss Cases
            </p>
          </div>

          <div className="bg-gray-light rounded-3xl p-10 text-center shadow-lg shadow-black/5 border border-primary/5 hover:-translate-y-2 transition-all">
            <p className="text-5xl font-bold text-primary mb-3">90%</p>
            <p className="font-semibold text-muted-foreground uppercase tracking-wider text-sm">
              Born to Hearing Parents
            </p>
          </div>

          <div className="bg-gray-light rounded-3xl p-10 text-center shadow-lg shadow-black/5 border border-primary/5 hover:-translate-y-2 transition-all">
            <p className="text-5xl font-bold text-primary mb-3">$5K+</p>
            <p className="font-semibold text-muted-foreground uppercase tracking-wider text-sm">
              Average Annual AI Cost
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
