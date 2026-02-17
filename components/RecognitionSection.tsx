'use client';

export function RecognitionSection() {
  const recognitions = [
    {
      title: 'Inclusive Africa Conference 2024',
      organization: 'INABLE',
      description: 'Selected to showcase in Africa\'s largest Assistive Technology Conference',
      year: '2024',
    },
    {
      title: 'AI to Amplify – Winning Team',
      organization: 'Goethe-Institut',
      description: 'Selected as one of the two final winning teams for AI-driven accessibility innovation',
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
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Research, Recognition &<br />
            <span className="text-primary italic"> Collaborations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
            Building credibility through partnerships with leading institutions and recognition from industry leaders.
          </p>
        </div>

        {/* Recognition Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {recognitions.map((item, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-10 hover:bg-primary hover:text-white transition-all duration-300 group shadow-lg shadow-black/5 border border-primary/5 hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-2xl text-foreground mb-1 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest group-hover:text-white/80 transition-colors">
                    {item.organization}
                  </p>
                </div>
                <span className="text-xs font-black bg-primary/10 text-primary px-4 py-2 rounded-full group-hover:bg-white group-hover:text-primary transition-all">
                  {item.year}
                </span>
              </div>
              <p className="text-muted-foreground font-medium group-hover:text-white transition-colors leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="bg-gray-light rounded-[3rem] p-16 shadow-inner border border-primary/5">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Trusted by <span className="text-primary italic">Leading Organizations</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            {[
              'Innovate Now',
              'inABLE',
              'UDPK',
              'NCPWD',
              'KNAD',
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 w-full text-center shadow-sm border border-primary/5 hover:border-primary/20 transition-all hover:scale-105"
              >
                <p className="font-black text-primary tracking-tighter text-lg">
                  {partner}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
