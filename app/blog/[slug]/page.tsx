'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS } from '@/lib/constants';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-40 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/#blog" 
            className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:-translate-x-1 transition-transform"
          >
            ← BACK TO KNOWLEDGE HUB
          </Link>

          <div className="mb-12">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter leading-[1.05]">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium pb-12 border-b border-primary/10">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">S</div>
                Skio Team
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose prose-xl prose-primary max-w-none">
            <p className="text-2xl text-foreground font-medium leading-relaxed mb-12">
              {post.excerpt}
            </p>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-8 font-medium">
              {post.content.split('. ').map((para, i) => (
                <p key={i}>{para}.</p>
              ))}
              <p>
                As we continue to develop Skio, our focus remains on the intersection of human-centric design 
                and cutting-edge research. We believe that by listening to the community and iterating 
                on their feedback, we can build tools that don't just solve problems, but truly enhance 
                lives.
              </p>
            </div>
          </div>

          <div className="mt-20 p-12 bg-white rounded-[3rem] border border-primary/5 shadow-xl shadow-black/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Want to learn more?</h3>
            <p className="text-muted-foreground font-medium mb-8">
              Stay updated with our latest research and product announcements by joining our mission.
            </p>
            <Link 
              href="/#download" 
              className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all"
            >
              DOWNLOAD THE APP
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
