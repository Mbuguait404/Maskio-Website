import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { ProductsSection } from '@/components/ProductsSection';
import { TechnologySection } from '@/components/TechnologySection';
import { ImpactSection } from '@/components/ImpactSection';
import { RecognitionSection } from '@/components/RecognitionSection';
import { BlogSection } from '@/components/BlogSection';
import { WhySection } from '@/components/WhySection';
import { DownloadSection } from '@/components/DownloadSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ProductsSection />
      <TechnologySection />
      <ImpactSection />
      <RecognitionSection />
      <BlogSection />
      <WhySection />
      <DownloadSection />
      <CTASection />
      <Footer />
    </main>
  );
}
