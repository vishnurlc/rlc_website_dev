import { SectionHeading } from '@/components';
import FaqComponent from '@/components/faq/FaqComponent';
export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Do you have questions ? No worries! all the question related to dubai, luxury auto rentals , yachts, parties, luxury lifestyles are answered here.',
  keywords: [
    'Richy life Club',
    'Luxury Experiences Dubai',
    'Contact Information',
    'Inquiries',
    'Reservations',
    'Luxury Lifestyle',
    'Exclusive Experiences',
    'Dubai UAE',
    'Premium Leisure',
    'Bespoke Services',
    'Dubai Holidays',
    'VIP Support',
  ],
  openGraph: {
    title: 'Frequently Asked Questions',
    description:
      'Do you have questions ? No worries! all the question related to dubai, luxury auto rentals , yachts, parties, luxury lifestyles are answered here.',
    siteName: 'Richy life Club',
    images: [
      {
        url: `${process.env.WEB_URL}/`,
        width: 800,
        height: 600,
        alt: 'Richy life Club Luxury Experiences in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const FaqPage = () => {
  return (
    <main className="w-full overflow-hidden">
      <div className="mt-[120px]  px-6 md:px-16">
        <SectionHeading
          title={'FAQ'}
          description={'All your concerns are answered'}
        />
        <FaqComponent />
      </div>
    </main>
  );
};

export default FaqPage;
