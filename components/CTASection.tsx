'use client';

import React from "react"

import { useState } from 'react';

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left: Heading & Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
              Ready to start something <span className="text-primary italic">great?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-medium">
              We'd love to hear about your interest in Skio and see how we can help improve sound awareness through our technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5 flex items-center gap-6 group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:hello@skio.ai" className="text-foreground font-bold text-lg hover:text-primary transition-colors">
                    hello@skio.ai
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5 flex items-center gap-6 group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-foreground font-bold text-lg">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-black/5 border border-primary/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-gray-light/50 rounded-2xl border-none px-6 py-4 text-foreground placeholder:text-muted-foreground/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-gray-light/50 rounded-2xl border-none px-6 py-4 text-foreground placeholder:text-muted-foreground/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can Skio help you?"
                    rows={4}
                    className="w-full bg-gray-light/50 rounded-2xl border-none px-6 py-4 text-foreground placeholder:text-muted-foreground/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium resize-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 hover:-translate-y-1"
              >
                SEND MESSAGE
              </button>

              <p className="text-center text-xs text-muted-foreground font-medium opacity-60">
                We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
