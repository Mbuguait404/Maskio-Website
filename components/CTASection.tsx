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
    <section className="py-20 px-4 bg-background border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Heading & Description */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-6">
              Ready to start something <span className="text-primary">great?</span>
            </h2>
            <p className="text-lg text-gray-dark leading-relaxed mb-8">
              We'd love to hear about your project and see how we can help bring it to life. Let's create something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-gray-dark font-medium">Email</p>
                <a href="mailto:hello@maskio.dev" className="text-black font-display font-bold hover:text-primary transition-colors">
                  hello@maskio.dev
                </a>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-gray-dark font-medium">Location</p>
                <p className="text-black font-display font-bold">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-dark font-medium mb-2">
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border-2 border-black bg-white text-black px-4 py-3 font-display placeholder:text-gray-medium focus:outline-none focus:bg-primary focus:border-black transition-colors"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-dark font-medium mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full border-2 border-black bg-white text-black px-4 py-3 font-display placeholder:text-gray-medium focus:outline-none focus:bg-primary focus:border-black transition-colors"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-dark font-medium mb-2">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full border-2 border-black bg-white text-black px-4 py-3 font-display placeholder:text-gray-medium focus:outline-none focus:bg-primary focus:border-black transition-colors"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-dark font-medium mb-2">
                YOUR MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full border-2 border-black bg-white text-black px-4 py-3 font-display placeholder:text-gray-medium focus:outline-none focus:bg-primary focus:border-black transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary border-2 border-black text-black px-8 py-3 font-display font-bold text-base hover:bg-white hover:text-primary transition-all"
            >
              SEND MESSAGE
            </button>

            <p className="text-xs text-gray-dark">
              We'll get back to you within 24 hours. Available for projects • Open to collaborate • Let's create together.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
