import { ContactForm, HeroSection } from '@/components';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Richy life Club for unforgettable luxury experiences in Dubai. Contact us for inquiries, reservations, and more."',
  keywords: [
    'Contact Richy life Club',
    'Luxury Experiences Dubai',
    'Get in Touch',
    'Inquiries',
    'Reservations',
    'Dubai Luxury',
    'Contact Information',
    'Customer Support',
    'Luxury Services',
    'Exclusive Experiences',
    'Dubai UAE',
    'Premium Leisure',
    'Luxury Lifestyle',
    'Luxury Travel',
    'Bespoke Services',
    'Dubai Holidays',
    'VIP Support',
    'Contact Us Form',
    'Richy life Club',
  ],
  openGraph: {
    title: 'Contact Us',
    description:
      'Get in touch with Richy life Club for unforgettable luxury experiences in Dubai. Contact us for inquiries, reservations, and more."',
    siteName: 'Richy life Club',
    images: [
      {
        url: `${process.env.WEB_URL}/assets/home/heroposter.webp`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/home/heroposter.webp`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return (
    <main>
      <h1 className="sr-only">Contact Us - Richy life Club</h1>
      <HeroSection
        posterurl={'/assets/chauffer/hero.png'}
        type={''}
        alt="Luxury Car rentals"
        url={'/assets/chauffer/hero.png'}
        btntext={'Get in touch'}
      />
      <div className="mt-5 px-5 md:p-0">
        <ContactForm title={'Contact Us'} />
      </div>
    </main>
  );
};

export default page;
