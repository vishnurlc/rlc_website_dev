import { HeroSection, ServiceBanner } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection
        posterurl={'/assets/home/heroposter.png'}
        type={'video'}
        url={'/assets/home/hero.mp4'}
      />
      <ServiceBanner />
    </main>
  );
}
