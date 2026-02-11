'use client';

export function BlogSection() {
  const articles = [
    {
      title: 'The Future of Assistive Technology',
      excerpt:
        'How AI and wearables are revolutionizing the way people with hearing loss experience sound.',
      category: 'Technology',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
    },
    {
      title: 'Building for Accessibility',
      excerpt:
        'Design principles and engineering practices for creating truly inclusive technology.',
      category: 'Design',
      date: 'Jan 12, 2024',
      readTime: '7 min read',
    },
    {
      title: 'From Concept to Hardware',
      excerpt:
        'A behind-the-scenes look at how we iterated on the Maskio wristband design.',
      category: 'Product',
      date: 'Jan 8, 2024',
      readTime: '6 min read',
    },
    {
      title: 'Haptic Feedback Engineering',
      excerpt:
        'Understanding vibration patterns and how they communicate sound to the user.',
      category: 'Engineering',
      date: 'Jan 5, 2024',
      readTime: '8 min read',
    },
    {
      title: 'Ethical AI in Healthcare',
      excerpt: 'How we ensure our AI systems are fair, transparent, and user-centric.',
      category: 'Ethics',
      date: 'Dec 28, 2023',
      readTime: '6 min read',
    },
    {
      title: 'Research Collaboration with MIT',
      excerpt:
        'Our partnership on advancing sound classification algorithms for edge devices.',
      category: 'Research',
      date: 'Dec 21, 2023',
      readTime: '4 min read',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-gray-light border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex justify-between items-start">
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-4">
              Knowledge <span className="text-primary">Hub</span>
            </h2>
            <p className="text-lg text-gray-dark max-w-2xl leading-relaxed">
              Insights on assistive technology, AI, product development, and accessibility.
            </p>
          </div>
          <button className="hidden md:block bg-primary border-2 border-black text-black px-6 py-3 font-display font-bold text-sm hover:bg-white hover:text-primary transition-all">
            VIEW ALL POSTS
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="border-2 border-black bg-white p-8 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="mb-4">
                <span className="inline-block bg-primary border-2 border-black text-black text-xs font-display font-bold px-3 py-1 group-hover:bg-accent group-hover:border-accent transition-colors">
                  {article.category}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-black mb-3 flex-grow group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-dark mb-6 flex-grow">{article.excerpt}</p>
              <div className="border-t-2 border-gray-medium pt-4 flex justify-between items-center text-xs text-gray-dark">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <button className="mt-4 text-primary font-display font-bold hover:text-accent transition-colors text-sm">
                READ MORE →
              </button>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="md:hidden bg-primary border-2 border-black text-black px-8 py-3 font-display font-bold text-base hover:bg-white hover:text-primary transition-all w-full md:w-auto">
            VIEW ALL POSTS
          </button>
        </div>
      </div>
    </section>
  );
}
