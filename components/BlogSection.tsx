'use client';

import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-4 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Knowledge <span className="text-primary italic">Hub</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
              Insights on assistive technology, AI, product development, and accessibility.
            </p>
          </div>
          <button className="hidden md:block bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            VIEW ALL POSTS
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {BLOG_POSTS.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${article.slug}`}
              className="bg-white rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-300 group flex flex-col border border-primary/5 hover:-translate-y-2"
            >
              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                  {article.category}
                </span>
              </div>
              <h3 className="font-bold text-2xl text-foreground mb-4 flex-grow group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-8 flex-grow leading-relaxed font-medium">
                {article.excerpt}
              </p>
              <div className="border-t border-gray-medium/50 pt-6 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <div className="mt-8 text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                READ MORE <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="md:hidden bg-primary text-white px-8 py-4 rounded-full font-bold text-base hover:bg-primary-dark transition-all w-full shadow-lg shadow-primary/20">
            VIEW ALL POSTS
          </button>
        </div>
      </div>
    </section>
  );
}
