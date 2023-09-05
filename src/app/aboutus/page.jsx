import { ContactForm, HeroSection } from '@/components';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'About Us - Richylife Club | Luxury Experiences in Dubai',
  description:
    'Discover unforgettable luxury experiences in Dubai with Richylife Club. Contact us for inquiries, reservations, and more.',
  keywords: [
    'Richylife Club',
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
    title: 'About Us',
    description:
      'Discover unforgettable luxury experiences in Dubai with Richylife Club. Contact us for inquiries, reservations, and more.',
    siteName: 'Richylife Club',
    images: [
      {
        url: `${process.env.WEB_URL}/`,
        width: 800,
        height: 600,
        alt: 'Richylife Club Luxury Experiences in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return (
    <div>
      <h1 className="sr-only">About Richylife Club</h1>
      <HeroSection
        posterurl={'/assets/home/heroposter1.webp'}
        type={'video'}
        url={'https://admin.richylife.ae/rlchome.mp4'}
        btntext={'Get in touch'}
      />

      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 px-6">
        <div className=" mx-auto mt-10">
          <div className=" flex flex-col items-center justify-center text-justify">
            <h3 className="text-2xl md:text-5xl text-gold capitalize font-inter">
              About Us
            </h3>
            <p className="text-gray-500 my-6 ">
              Welcome to Richylife Club, where the pursuit of luxury travel and
              life&apos;s finest indulgences converges with a vibrant community
              of like-minded individuals. Our mission is to redefine the way you
              experience the world, curating extraordinary journeys that
              encompass elegance, exclusivity, and meaningful connections.
            </p>
            <p className="text-gray-500 my-6 ">
              At Richylife Club, we go beyond the ordinary, curating exceptional
              experiences that epitomize the art of luxury travel. Our team of
              experts scours the globe to handpick the most exquisite hotels,
              resorts, dining establishments, and activities, ensuring that each
              recommendation is a testament to unparalleled quality. We pride
              ourselves on providing our members with exclusive access to hidden
              gems, from secluded villas to behind-the-scenes encounters,
              transforming your travels into remarkable stories of opulence and
              adventure. But Richylife Club is more than just a showcase of
              lavishness; it&apos;s a community where friendships flourish and
              memories are created. Through curated group trips, themed events,
              and an online platform designed for interaction, we foster
              connections that transcend borders and cultures. Join us in
              embracing a life where luxury knows no bounds and where every
              journey becomes a celebration of the finer things in life.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative w-full h-[30vh]  md:h-[50vh] max-h-[700px]">
            <Image
              src="/assets/footer/6.webp"
              fill
              alt="Premium jet ski"
              style={{
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
          <div className=" flex flex-col items-start justify-center text-justify">
            <h3 className="text-2xl md:text-5xl text-gold capitalize font-inter">
              Our vision
            </h3>
            <p className="text-gray-500 my-6 ">
              Our vision is to establish a thriving and exclusive community of
              individuals united by their unwavering passion for luxury travel
              and a shared appreciation for life&apos;s exquisite pleasures.
              Through curated experiences, impeccable service, and a strong
              sense of camaraderie, we aim to transform the way our members
              perceive and engage with the world. We envision a haven where the
              art of travel is elevated to new heights, allowing our members to
              indulge in unparalleled hospitality, discover hidden gems, and
              forge profound connections with both the world and one another.
            </p>
          </div>
        </div>
        {/* left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className=" flex flex-col items-start justify-center text-justify">
            <h3 className="text-2xl md:text-5xl text-gold capitalize font-inter">
              Our Mission
            </h3>
            <p className="text-gray-500 my-6 ">
              At Richylife Club, our mission is to curate and cultivate a
              world-class community of individuals who are passionate about
              luxury travel and the finer things in life. Through meticulous
              curation, exclusive access, and heartfelt connections, we are
              dedicated to redefining the art of travel and enriching lives. We
              strive to be the ultimate catalyst for unforgettable experiences,
              lifelong friendships, and personal growth, all while promoting
              sustainability and positive global impact. Our mission is to
              empower our members to embark on extraordinary journeys, both
              outward and inward, that celebrate the essence of living life
              luxuriously and purposefully.
            </p>
          </div>
          <div className="relative w-full h-[30vh]  md:h-[50vh] max-h-[700px]">
            <Image
              src="/assets/footer/8.webp"
              fill
              alt="Premium jet ski"
              style={{
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
        <div className="my-8">
          <ContactForm
            title={'Get In touch'}
            description={'Experience Elegance & Convenience'}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
