import { ContactForm, HeroSection2 } from '@/components';
import DesertSafariCard from '@/components/desertsafari/DesertSafariCard';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';
import { Button } from '@/components/ui/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
  title: 'Desert Safari Dubai | richylife',
  description:
    'Experience the magic of the Dubai desert on a thrilling desert safari. Enjoy dune bashing, camel riding, and sandboarding, and savor a delicious barbecue dinner under the stars.',
  keywords: [
    'Desert Safari Dubai',
    'Luxury Desert Safari',
    'Desert Adventure Tours',
    ' Exclusive Desert Experiences',
    'VIP Desert Safari',
    ' Private Desert Tours',
    ' Dubai Sand Dunes',
    'Sunset Desert Safari',
    'Dune Bashing Experience',
    'Camel Riding Safari',
    'Desert Camps in Dubai',
    'Arabian Nights in the Desert',
    'Bedouin-style Desert Dinner',
    'Starlit Desert Experience',
    'Dubai Desert Wildlife',
    'Luxury 4x4 Desert Tours',
    ' Quad Biking in the Desert',
    'Sandboarding Adventure',
    ' Desert Photography Tours',
    'Desert Safari Packages',
    'Desert Safari Deals',
    ' Best Desert Safari in Dubai',
    'Family-friendly Desert Tours',
    ' Romantic Desert Getaways',
    'Desert Safari Reviews',
    'Dubai desert safari',
    'Dune bashing',
    'Camel riding',
    'Sandboarding',
    'Barbecue dinner',
    'Stars',
    'Magic',
    'Thrilling',
    'Enjoy',
    'Savor',
  ],
  openGraph: {
    title: 'Desert Safari Dubai | richylife',
    description:
      'Experience the magic of the Dubai desert on a thrilling desert safari. Enjoy dune bashing, camel riding, and sandboarding, and savor a delicious barbecue dinner under the stars.',
    siteName: 'Richylife Club',
    images: [
      {
        url: `${process.env.WEB_URL}/assets/footer/1.webp`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/footer/1.webp`,
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
    <main>
      <HeroSection2
        type="video"
        heading1="Desert Adventure"
        heading2="Experiences"
        subheading={'Journey into the Extraordinary'}
        btntext={'Book an appointment'}
        posterurl={'/assets//premiumdesert/desert.png'}
        url="/assets/premiumdesert/bannervideo.mov"
      />

      <div className="bg-black px-6 py-9 md:py-16 ">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-[30vh]  md:h-[50vh] max-h-[700px]">
              <Image
                src="/assets/footer/5.webp"
                fill
                alt="Premium jet ski"
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
              <p className="text-gray-300 my-6 ">
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
              <DesertSafariCard item={item} key={index} />
            ))}
          </div>

          {/* <div className=" flex flex-col gap-8 items-center justify-center w-full">
            <h3 className="text-2xl text-center md:text-5xl text-gold capitalize font-inter">
              Our Service Locations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {locations.map((item, index) => (
                <div className="relative  w-full aspect-[357/406]" key={index}>
                  <Image
                    src={item.url}
                    alt={item.location}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute p-4 text-white w-full h-fit bg-black bg-opacity-60 bottom-0 left-0 right-0 z-10">
                    <div>
                      <h2 className="uppercase font-medium tracking-wide text-xl font-poppins">
                        {item.location}
                      </h2>
                      <span className="text-gray-400 text-sm">
                        Starting from AED{item.price}
                      </span>
                    </div>

                    <Button className="mt-4 px-4 py-2 bg-primary text-gold">
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      <div className="my-9 md:my-16 px-6">
        <ContactForm
          title={'Get In Touch'}
          description={'Experience The Ultimate Adrenaline Rush'}
        />
      </div>
    </main>
  );
}
