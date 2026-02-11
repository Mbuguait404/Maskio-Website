'use client';

export function ImpactSection() {
  const timeline = [
    { year: 'Concept', description: 'Vision & research phase', status: 'completed' },
    { year: 'Prototype', description: 'First hardware prototype built', status: 'completed' },
    { year: 'Testing', description: 'Field testing with participants', status: 'completed' },
    { year: 'Iteration', description: 'Refinement based on feedback', status: 'active' },
    { year: 'Launch', description: 'Public availability', status: 'upcoming' },
  ];

  return (
    <section className="py-24 px-4 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Impact & <span className="text-primary italic">Progress</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
            Real momentum from dedication to accessibility and innovation.
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Sounds Classified', value: '500+' },
            { label: 'Prototype Iterations', value: '15' },
            { label: 'Active Contributors', value: '12' },
            { label: 'Research Hours', value: '2000+' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-lg shadow-black/5 border border-primary/5 hover:border-primary/20 transition-all">
              <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl shadow-black/5 border border-primary/5">
          <h3 className="text-3xl font-bold text-foreground mb-16 text-center md:text-left">
            Development <span className="text-primary italic">Timeline</span>
          </h3>
          <div className="space-y-12 relative">
            <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-primary/10" />
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-10 items-start group">
                {/* Timeline dot */}
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-primary ${
                      item.status === 'completed'
                        ? 'bg-primary'
                        : item.status === 'active'
                          ? 'bg-white shadow-[0_0_15px_rgba(185,69,69,0.5)] animate-pulse'
                          : 'bg-white'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <p className="font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">{item.year}</p>
                  <p className="text-muted-foreground font-medium text-base mb-4 leading-relaxed">{item.description}</p>
                  {item.status === 'active' && (
                    <span className="inline-block bg-primary text-white text-[10px] font-bold tracking-widest px-4 py-1 rounded-full shadow-lg shadow-primary/20">
                      IN PROGRESS
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
