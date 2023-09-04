import React from 'react';
import { SectionHeading } from '..';
import Image from 'next/image';
import FooterInstagram from './FooterInstagram';
import Link from 'next/link';
import FooterAdress from './FooterAdress';

const Footer = () => {
  const data = {
    images: [
      '/assets/footer/1.png',
      '/assets/footer/2.png',
      '/assets/footer/3.png',
      '/assets/footer/5.png',
      '/assets/footer/6.png',
      '/assets/footer/7.png',
    ],
    navigation: [
      {
        title: 'Rent a car',
        link: '/luxury-car-rentals',
      },
      {
        title: 'Luxury Yacht Rentals',
        link: '/luxury-yacht-rentals',
      },
      {
        title: 'Premium Jetski Rentals',
        link: '/premium-jetski-rental',
      },
      {
        title: 'Private Jet Charter',
        link: '/private-jet-rentals',
      },
      {
        title: 'Exotic Pet VIP Services',
        link: '/exotic-pet-experiences',
      },
      {
        title: 'Chauffer Services',
        link: '/chauffer-service',
      },
      {
        title: 'Helicopter Rentals',
        link: '/helicopter-rentals',
      },
      {
        title: 'About us',
        link: '/aboutus',
      },
      {
        title: 'Contact Us',
        link: '/contact-us',
      },
      {
        title: 'Faq',
        link: '/faq',
      },
    ],
  };
  return (
    <footer className="pt-12">
      <SectionHeading
        title={'Follow us on Instagram'}
        description={
          'Join our global community on Instagram for an exclusive glimpse into a world where opulence knows no bounds. '
        }
      />

      {/* images */}
      <Link
        href={'https://www.instagram.com/richylifecom/'}
        target="_blank"
        className="overflow-hidden w-full mt-5 block"
      >
        <FooterInstagram images={data.images} />
      </Link>

      {/* footer content */}
      <div className="footer bg-gradient-to-b from-teal-900 to-black">
        <div className="container mx-auto px-5 py-10 lg:px-20 lg:pt-20 lg:pb-10 flex justify-between flex-wrap">
          <div className="pb-12  flex-col justify-start gap-2 ">
            <div className="pr-16 justify-start inline-flex">
              <div className="justify-start items-start flex">
                <div className="text-gold text-2xl font-black leading-none">
                  Richy
                </div>
              </div>
              <div className="justify-start items-start flex">
                <div className="text-emerald-600 text-2xl font-black leading-none">
                  life Club
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-10 flex  mb-4">
              <div className="md:w-56 pr-2 pb-px justify-start items-start inline-flex">
                <div className="text-white text-sm font-normal leading-tight">
                  The moments you spend with us will be the best days of your
                  life.
                </div>
              </div>
            </div>
            <FooterAdress />
          </div>

          <div className="mb-10 flex-col justify-start items-start gap-4 ">
            <div className="text-white text-lg font-bold leading-tight pb-5">
              Navigation
            </div>

            <div className="grid grid-cols-2 gap-5 ">
              {data.navigation.map((e, index) => (
                <Link
                  href={e.link}
                  className="text-white text-sm font-normal leading-tight hover-underline w-fit "
                  key={index}
                >
                  {e.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="pb-10 flex-col justify-start items-start gap-4 w-full md:w-auto max-w-[500px]">
            <div className="text-white text-lg font-bold leading-tight mb-5">
              Instagram
            </div>
            <div className="grid grid-cols-3 w-full gap-2">
              {data.images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-full aspect-[64/80] h-auto min-w-[64px] "
                  >
                    <Link
                      href={'https://www.instagram.com/richylifecom/'}
                      target="_blank"
                    >
                      <Image
                        src={item}
                        fill
                        alt="Instagram links"
                        style={{
                          objectFit: 'cover',
                          borderRadius: '5px',
                        }}
                        sizes="20vw"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container mx-auto text-white ">
          <div className="flex items-center py-6 flex-col-reverse md:flex-row justify-between text-secondary font-thin text-sm gap-6">
            <p>&copy;&nbsp;All Rights Reserved Richylife Club 2023</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-use">Terms of use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
