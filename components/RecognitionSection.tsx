'use client';

export function RecognitionSection() {
  const recognitions = [
    {
      title: 'Innovation Lab',
      organization: 'Y Combinator',
      description: 'Selected for flagship startup accelerator',
      year: '2024',
    },
    {
      title: 'Accessibility Award',
      organization: 'Tech for Social Good',
      description: 'Recognition for assistive technology innovation',
      year: '2024',
    },
    {
      title: 'Featured Innovation',
      organization: 'MIT Media Lab',
      description: 'Research collaboration on AI accessibility',
      year: '2023',
    },
    {
      title: 'Best Hardware Prototype',
      organization: 'Prototype Summit',
      description: 'Wearable device design excellence',
      year: '2023',
    },
  ];

  return (
    <section className="py-20 px-4 bg-background border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4">
            Research, Recognition &<span className="text-primary"> Collaborations</span>
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl leading-relaxed">
            Building credibility through partnerships with leading institutions and recognition from industry leaders.
          </p>
        </div>

        {/* Recognition Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {recognitions.map((item, index) => (
            <div key={index} className="border-2 border-black bg-gray-light p-8 hover:bg-primary hover:text-black transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-dark group-hover:text-black transition-colors">
                    {item.organization}
                  </p>
                </div>
                <span className="font-display font-bold text-primary group-hover:text-black text-lg">
                  {item.year}
                </span>
              </div>
              <p className="text-sm text-gray-dark group-hover:text-black transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-16 border-2 border-black bg-white p-12">
          <h3 className="font-display text-2xl font-bold text-black mb-8 text-center">
            Trusted by <span className="text-primary">Leading Organizations</span>
          </h3>
          <div className="grid md:grid-cols-5 gap-6 items-center justify-items-center">
            {['MIT', 'Stanford', 'Y Combinator', 'TechStars', 'SV Angels'].map((partner, index) => (
              <div key={index} className="border-2 border-black bg-gray-light px-6 py-4 w-full text-center">
                <p className="font-display font-bold text-black">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
