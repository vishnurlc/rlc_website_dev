import {
  ContactForm,
  HeroSection,
  OurServices,
  ServiceBanner,
  Testimonials,
} from '@/components';
import Aboutsection from '@/components/home/aboutsection';
import Faq from '@/components/home/faq';
export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection
        posterurl={'/assets/home/heroposter.png'}
        type={'video'}
        url={'/assets/home/bannervideo.mp4'}
      />
      <OurServices />
      <Aboutsection />

      <ServiceBanner />
      <Faq />
      <Testimonials />
      <div className="my-9 md:my-16">
        <ContactForm
          title={'Get In touch'}
          description={'Experience Elegance & Convenience'}
        />
      </div>
    </main>
  );
}
