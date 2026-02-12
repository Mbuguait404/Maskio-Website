import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-slate-800">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose max-w-none text-slate-600 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Skio mobile application and website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">2. Use of Service</h2>
            <p>
              Skio is an assistive tool designed to aid awareness of environmental sounds. It is <strong>not</strong> a replacement for professional medical devices or human judgment. It should not be solely relied upon in life-threatening situations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that act under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">4. Modifications</h2>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Skio and its creators shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">6. Contact</h2>
            <p>
              Questions about the Terms of Service should be sent to us at <a href="mailto:skio@skioat.com" className="text-primary hover:underline">skio@skioat.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
