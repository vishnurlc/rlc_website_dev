import {
  HeroSection,
  OurServices,
  ServiceBanner,
  Testimonials,
} from '@/components';
import Aboutsection from '@/components/home/aboutsection';
import Faq from '@/components/home/faq';
import FaqAccordation from '@/components/ui/accordation/accordation';
import FaqCard from '@/components/ui/accordation/faqcard';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection
        posterurl={'/assets/home/heroposter.png'}
        type={'video'}
        url={'/assets/home/hero.mp4'}
      />
      <OurServices />
      <Aboutsection />

      <ServiceBanner />
      <Faq />
      <Testimonials />
    </main>
  );
}
