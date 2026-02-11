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
    <section className="py-20 px-4 bg-gray-light border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4">
            Impact & <span className="text-primary">Progress</span>
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl leading-relaxed">
            Real momentum from dedication to accessibility and innovation.
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Sounds Classified', value: '500+' },
            { label: 'Prototype Iterations', value: '15' },
            { label: 'Active Contributors', value: '12' },
            { label: 'Research Hours', value: '2000+' },
          ].map((stat, index) => (
            <div key={index} className="border-2 border-black bg-white p-6 text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-gray-dark">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="border-2 border-black bg-white p-12">
          <h3 className="font-display text-2xl font-bold text-black mb-8">
            Development <span className="text-primary">Timeline</span>
          </h3>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-6 items-start">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 border-2 border-black ${
                      item.status === 'completed'
                        ? 'bg-primary'
                        : item.status === 'active'
                          ? 'bg-accent'
                          : 'bg-white'
                    }`}
                  />
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-12 border-l-2 border-black mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1 pb-6">
                  <p className="font-display font-bold text-black text-lg">{item.year}</p>
                  <p className="text-gray-dark text-sm">{item.description}</p>
                  {item.status === 'active' && (
                    <span className="inline-block mt-2 bg-accent text-white text-xs font-bold px-3 py-1 border-2 border-black">
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
