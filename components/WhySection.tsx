'use client';

export function WhySection() {
  return (
    <section className="py-20 px-4 bg-black text-white border-b-2 border-gray-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
          Why <span className="text-primary">Maskio</span> Exists
        </h2>

        <div className="space-y-8">
          <p className="text-lg md:text-xl leading-relaxed">
            Maskio exists to ensure no one is left unaware in moments that matter — not because technology can, 
            but because <span className="text-primary font-display font-bold">people deserve it.</span>
          </p>

          <div className="border-t-2 border-gray-dark pt-8">
            <p className="text-base md:text-lg text-gray-medium leading-relaxed mb-8">
              Hearing loss affects more than 1.5 billion people globally. Yet innovation in assistive technology 
              often leaves them behind. We believe that with the right combination of hardware, AI, and thoughtful design, 
              we can create a future where everyone has access to critical sound awareness.
            </p>

            <p className="text-base md:text-lg text-gray-medium leading-relaxed">
              This isn't just about products. It's about dignity, independence, and the right to participate fully 
              in a world designed for everyone.
            </p>
          </div>

          <div className="border-t-2 border-gray-dark pt-8">
            <div className="inline-block bg-primary border-2 border-white text-black px-8 py-4 font-display font-bold text-lg hover:bg-white hover:text-primary hover:border-primary transition-all cursor-pointer">
              JOIN OUR MISSION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
