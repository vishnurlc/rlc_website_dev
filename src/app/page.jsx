import {
  ContactForm,
  HeroSection,
  OurServices,
  ServiceBanner,
  Testimonials,
} from '@/components';
import Aboutsection from '@/components/home/aboutsection';
import Faq from '@/components/home/faq';

export const metadata = {
  title: 'Welcome to Richylife Club - Luxury Experiences',
  description:
    'Experience luxury like never before with Richylife Club. Explore luxury car rentals, yacht rentals, water sports, and more.',
  keywords: [
    'Richylife Club, Luxury Experiences, Car Rentals, Yacht Rentals, Water Sports',
  ],
  openGraph: {
    title: 'Welcome to Richylife Club - Luxury Experiences',
    description: 'Experience luxury like never before with Richylife Club.',
    image: '/assets/home/heroposter.png',
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection
        posterurl={'/assets/home/heroposter.png'}
        type={'video'}
        url={'https://admin.richylife.ae/rlchome.mp4'}
      />
      <OurServices />
      <Aboutsection />

      <ServiceBanner />
      <Faq />
      <Testimonials />
      <div className="my-9 md:my-16 px-6 ">
        <ContactForm
          title={'Get In touch'}
          description={'Experience Elegance & Convenience'}
        />
      </div>
    </main>
  );
}
