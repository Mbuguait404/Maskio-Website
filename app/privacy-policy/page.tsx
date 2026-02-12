import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-slate-800">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose max-w-none text-slate-600 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">1. Introduction</h2>
            <p>
              At Skio ("we", "our", or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you use our mobile application and related services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">2. Data Processing</h2>
            <p>
              <strong>Audio Data:</strong> Skio processes audio data locally on your device to detect sounds. This audio data is NOT recorded, stored, or transmitted to our servers. It is processed in real-time and discarded immediately after analysis.
            </p>
            <p className="mt-2">
              <strong>User Account:</strong> If you create an account, we collect your email address and basic profile information to manage your settings across devices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">3. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Device information (model, OS version) for analytics and debugging.</li>
              <li>Usage statistics (anonymous) to help us improve the app performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">4. Third-Party Services</h2>
            <p>
              We may use third-party services for authentication (e.g., Firebase Auth) and analytics. These providers have their own privacy policies addressing how they use such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">5. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at <a href="mailto:skio@skioat.com" className="text-primary hover:underline">skio@skioat.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
