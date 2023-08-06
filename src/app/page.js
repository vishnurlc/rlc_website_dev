import Card from '@/components/ui/card/card';
import CardV1 from '@/components/ui/card/cardv1';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection
        posterurl={'/assets/home/heroposter.png'}
        type={'video'}
        url={'/assets/home/hero.mp4'}
      />
      <section>
        <Card />
        <CardV1 />
      </section>
    </main>
  );
}
