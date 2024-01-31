import {
  ContactForm,
  HeroSection2,
  PriceComponent,
  WhyusdesertSafari,
} from '@/components';
import DesertSafariCard from '@/components/desertsafari/DesertSafariCard';
import Faq from '@/components/home/faq';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';
import { Button } from '@/components/ui/button/Button';
import Image from 'next/image';
import Link from 'next/link';

const locations = [
  {
    url: '/assets/jetskipage/jumeirah.webp', // Replace with actual image path
    location: 'ABU DHABI',
    price: 150,
  },
  {
    url: '/assets/jetskipage/burjalarab.avif', // Replace with actual image path
    location: 'Burj Al Arab',
    price: 250,
  },
  {
    url: '/assets/jetskipage/atlantisview.jpeg', // Replace with actual image path
    location: 'Atlantis View',
    price: 180,
  },
];
export async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/desert-safari-packages?populate=*`,
      {
        next: { revalidate: 40 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log('s', error);
    return {};
  }
}

export const metadata = {
  title: 'Premium Desert Safari in Dubai',
  description:
    'Experience the magic of the Dubai desert on a thrilling desert safari. Enjoy dune bashing, camel riding, and sandboarding, and savor a delicious barbecue dinner under the stars.',
  keywords: [
    'Desert Safari Dubai',
    'Luxury Desert Safari',
    'Desert Adventure Tours',
    'VIP Desert Safari',
    'Private Desert Tours',
    'Sunset Desert Safari',
    'Dune Bashing Experience',
    'Camel Riding Safari',
    'Desert Camps in Dubai',
    'Arabian Nights in the Desert',
    'Dubai Desert Wildlife',
    'Luxury 4x4 Desert Tours',
    'Quad Biking in the Desert',
    'Sandboarding Adventure',
    'Desert Photography Tours',
    'Desert Safari Packages and deals',
    'Best Desert Safari in Dubai',
    'Romantic Desert Getaways',
    'Dune bashing, Camel riding',
    'traditional Arabic entertainment Dubai',
    'BBQ dinner Dubai, belly dancing Dubai',
  ],
  openGraph: {
    title: 'Premium Desert Safari in Dubai',
    description:
      'Experience the magic of the Dubai desert on a thrilling desert safari. Enjoy dune bashing, camel riding, and sandboarding, and savor a delicious barbecue dinner under the stars.',
    siteName: 'Richy life Club',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/footer/1.webp`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/footer/1.webp`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
export default async function page() {
  const desert = await getData();

  return (
    <main className="pt-[100px]">
      <div className="hidden">
        <HeroSection2
          type="video"
          heading1="Desert Adventure"
          heading2="Experiences"
          subheading={'Journey into the Extraordinary'}
          btntext={'Book an appointment'}
          posterurl={'/assets//premiumdesert/desert.png'}
          url="/assets/premiumdesert/bannervideo.mov"
        />
      </div>
      <div className=" px-6 py-9 md:py-16">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-16 ">
          <div className="hidden grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="relative w-full h-[30vh]  md:h-[50vh] max-h-[700px]">
              <Image
                src="/assets/premiumdesert/3.jpg"
                fill
                alt="Dune bashing Dubai | Adventures with Richy life Club"
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
            <div className=" flex flex-col items-start justify-center">
              <h3 className="text-2xl md:text-5xl text-gold capitalize font-inter">
                Unveil the Enchantment of Dubai&apos;s Desert Wonders
              </h3>
              <p className="text-gray-600 my-6 ">
                Embark on an immersive journey into the heart of Dubai&apos;s
                majestic desert landscape with our captivating Desert Safari
                experience. Brace yourself for a thrilling adventure that will
                transport you to a world of mesmerizing sand dunes,
                awe-inspiring vistas, and unforgettable moments. Our commitment
                to delivering exceptional experiences ensures that your desert
                safari transcends expectations, leaving you with memories that
                will last a lifetime.
              </p>
            </div>
          </div>
          <div className="my-10">
            {desert.data?.map((item, index) => (
              <DesertSafariCard item={item} key={index} order={index} />
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] md:flex gap-2 justify-center mx-auto">
          <div className="relative w-full aspect-[1/1.5] max-h-[35vh] rounded overflow-hidden">
            <Image
              src={'/assets/premiumdesert/1.png'}
              alt="Premium Desert Safari Packages | Richy life Club "
              fill
              // width={400}
              // height={100}
              style={{
                objectFit: 'cover',
                objectPosition: '50%',
                borderRadius: '4px',
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute p-4 text-white w-full h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <p className="uppercase font-medium max-w-[250px] mx-auto tracking-wide text-2xl font-poppins text-center bg-[#475569] bg-opacity-30">
                Buggy Single 30min <PriceComponent cost={'520'} white={true} />
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-[1/1.5] max-h-[35vh] rounded overflow-hidden">
            <Image
              src={'/assets/premiumdesert/2.png'}
              alt="Premium Desert Safari Packages | Richy life Club "
              fill
              style={{
                objectFit: 'cover',
                objectPosition: '50%',
                borderRadius: '4px',
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute p-4 text-white w-full h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <p className="uppercase font-medium max-w-[250px] mx-auto tracking-wide text-2xl font-poppins text-center bg-[#475569] bg-opacity-30">
                Buggy Double Rzr 30min{' '}
                <PriceComponent cost={'600'} white={true} />
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-[1/1.5] max-h-[35vh] rounded overflow-hidden">
            <Image
              src={'/assets/premiumdesert/desert.png'}
              alt="Premium Desert Safari Packages | Richy life Club "
              fill
              style={{
                objectFit: 'cover',
                objectPosition: '50%',
                borderRadius: '4px',
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute p-4 text-white w-full h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <p className="uppercase font-medium max-w-[250px] mx-auto tracking-wide text-2xl font-poppins text-center bg-[#475569] bg-opacity-30">
                Buggy Rzr 1000cc 4Seater 30min{' '}
                <PriceComponent cost={'700'} white={true} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-9 md:my-16 px-6 max-w-[1200px] mx-auto sr-only">
        <WhyusdesertSafari />
      </div>
      <Faq category={'desertsafari'} />
      <div className="my-9 md:my-16 px-6">
        <ContactForm
          title={'Get In Touch'}
          description={'Experience The Ultimate Adrenaline Rush'}
        />
      </div>
    </main>
  );
}
