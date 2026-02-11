'use client';

export function ProblemSection() {
  const problems = [
    {
      icon: '🔔',
      title: 'Critical Sounds Missed',
      description: 'Alarms, doorbells, and danger signals go unnoticed',
    },
    {
      icon: '💰',
      title: 'High Cost Barriers',
      description: 'Traditional assistive devices are expensive and limited',
    },
    {
      icon: '🔧',
      title: 'Technology Gaps',
      description: 'Existing solutions lack personalization and adaptability',
    },
    {
      icon: '🌍',
      title: 'Accessibility Gaps',
      description: 'One-size-fits-all approaches ignore individual needs',
    },
  ];

  return (
    <section id="why" className="py-20 px-4 bg-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4">
            The Problem We're <span className="text-primary">Solving</span>
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl leading-relaxed">
            People with hearing loss miss critical sounds not by choice, but because technology has gaps. 
            They deserve better. They deserve awareness.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="border-2 border-black bg-background p-6 hover:bg-primary hover:text-black transition-all group"
            >
              <p className="text-4xl mb-4">{problem.icon}</p>
              <h3 className="font-display font-bold text-lg text-black mb-3">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-dark group-hover:text-black transition-colors">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 border-t-2 border-black pt-12 grid md:grid-cols-3 gap-8">
          <div className="border-2 border-black bg-gray-light p-8 text-center">
            <p className="font-display text-5xl font-bold text-primary mb-2">1.5B</p>
            <p className="text-sm text-gray-dark">People with hearing loss globally</p>
          </div>
          <div className="border-2 border-black bg-gray-light p-8 text-center">
            <p className="font-display text-5xl font-bold text-primary mb-2">90%</p>
            <p className="text-sm text-gray-dark">Born to hearing parents (limited early support)</p>
          </div>
          <div className="border-2 border-black bg-gray-light p-8 text-center">
            <p className="font-display text-5xl font-bold text-primary mb-2">$5K+</p>
            <p className="text-sm text-gray-dark">Average cost of hearing aids annually</p>
          </div>
        </div>
      </div>
    </section>
  );
}
