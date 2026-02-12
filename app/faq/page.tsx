import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-slate-800">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">What is Skio?</h2>
            <p className="text-slate-600">
              Skio is an AI-powered assistive technology platform specifically designed for the deaf and hard of hearing. It converts environmental sounds into meaningful tactile feedback and visual alerts on your smartphone and wearable devices.
            </p>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">How does the sound recognition work?</h2>
            <p className="text-slate-600">
              Skio uses advanced machine learning algorithms running locally on your device to identify various sounds like doorbells, fire alarms, baby crying, and more. When a sound is detected, it triggers a customized vibration pattern and notification.
            </p>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">Does Skio work offline?</h2>
            <p className="text-slate-600">
              Yes! Skio processes audio locally on your device to ensure privacy and reliability, meaning it features full offline functionality for core sound recognition features.
            </p>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">Is my audio recorded?</h2>
            <p className="text-slate-600">
              No. Skio is designed with privacy first. Audio is processed in real-time on your device and is never stored or sent to the cloud.
            </p>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">Which devices are supported?</h2>
            <p className="text-slate-600">
              Skio is currently available for Android devices. We are working on iOS and smartwatch integrations to expand our ecosystem.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
