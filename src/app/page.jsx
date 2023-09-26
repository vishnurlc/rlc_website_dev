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
  title: 'Experience Luxury Like Never Before',
  description:
    'Experience ultimate luxury with Richylife Club: premium car rentals, private yacht charters, water sports, and more. Redefine luxury today!',
  keywords: [
    'Luxury Experiences Dubai',
    'Luxury Car Rentals dubai',
    'Yacht Rentals Dubai',
    'luxury yacht charter Dubai',
    'Luxury Lifestyle',
    'Exclusive Services',
    'VIP Experiences',
    'Luxury Adventures',
    'Travel and Leisure',
    'Dubai Holidays',
    'private jet rentals Dubai',
    'private jet business flights Dubai',
    'private jet tours Dubai',
  ],
  openGraph: {
    title: 'Experience Luxury Like Never Before',
    description:
      'Experience luxury like never before with Richylife Club. Explore luxury car rentals, yacht rentals, water sports, and more.',
    siteName: 'Richylife Club',
    images: [
      {
        url: `${process.env.WEB_URL}/assets/home/opengraphimage.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/home/opengraphimage.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <h1 className="sr-only">
        Welcome to Richylife Club - Experience Luxury in Dubai
      </h1>
      <HeroSection
        posterurl={'/assets/home/heroposter1.webp'}
        type={'video'}
        url={'https://admin.richylife.ae/rlchome.mp4'}
        btntext={'Experience Luxury'}
      />
      <OurServices />
      <Aboutsection />

      <ServiceBanner />
      <Faq category={'car'} />
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
