'use client';

export function WhySection() {
  return (
    <section className="py-32 px-4 bg-[#1A1212] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tight">
          Why <span className="text-primary italic">Skio</span> Exists
        </h2>

        <div className="space-y-12">
          <p className="text-2xl md:text-3xl leading-relaxed font-medium">
            Skio exists to ensure no one is left unaware in moments that matter — not because technology can, 
            but because <span className="text-primary italic font-bold">people deserve it.</span>
          </p>

          <div className="border-t border-white/10 pt-12">
            <p className="text-lg md:text-xl text-gray-medium leading-relaxed mb-12 font-medium opacity-80">
              Hearing loss affects more than 1.5 billion people globally. Yet innovation in assistive technology 
              often leaves them behind. We believe that with the right combination of hardware, AI, and thoughtful design, 
              we can create a future where everyone has access to critical sound awareness.
            </p>

            <p className="text-lg md:text-xl text-gray-medium leading-relaxed font-medium opacity-80">
              This isn't just about products. It's about dignity, independence, and the right to participate fully 
              in a world designed for everyone.
            </p>
          </div>

          <div className="pt-12">
            <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 hover:-translate-y-1">
              JOIN OUR MISSION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
