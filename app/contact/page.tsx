import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-slate-800">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-slate-600 mb-6">
              Have questions about Skio? We're here to help. Reach out to us directly or check out our FAQ section.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <a href="mailto:skio@skioat.com" className="text-primary hover:underline">skio@skioat.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Support Resources</h2>
             <ul className="space-y-3">
              <li>
                <a href="/faq" className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-medium text-slate-800">Frequently Asked Questions</span>
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-medium text-slate-800">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="/terms" className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-medium text-slate-800">Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
