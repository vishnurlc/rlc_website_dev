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
      '/assets/footer/4.png',
      '/assets/footer/1.png',
      '/assets/footer/2.png',
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
        link: '/premium-jetski-rentals',
      },
      {
        title: 'Private Jet Rentals',
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
        link: '',
      },
      {
        title: 'Contact Us',
        link: '',
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
      <div className="overflow-hidden w-full mt-5">
        <FooterInstagram images={data.images} />
      </div>

      {/* footer content */}
      <div className="footer bg-gradient-to-b from-teal-900 to-black">
        <div className="container mx-auto px-5 py-10 lg:px-20 lg:pt-20 lg:pb-10 bg-gradient-to-b from-teal-900 to-black sm:flex  justify-between flex-wrap">
          <div className="pb-12 w-full md:w-auto  flex-col justify-start gap-2 sm:inline-flex">
            <div className=" pr-16 justify-start inline-flex">
              <div className="justify-start items-start flex">
                <div className="text-orange-300 text-2xl font-black leading-none">
                  Richy
                </div>
              </div>
              <div className="justify-start items-start flex">
                <div className="text-emerald-600 text-2xl font-black leading-none">
                  Life
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-10 flex">
              <div className="md:w-52 pr-2 pb-px justify-start items-start inline-flex">
                <div className="text-white text-sm font-normal leading-tight">
                  The moments you spend with us will be the best days of your
                  life.
                </div>
              </div>
            </div>
          </div>
          <div className="h-56 w-1/2 md:w-auto pb-11 flex-col justify-start items-start gap-4 md:inline-flex">
            <div className="text-white text-lg font-bold leading-tight pb-5">
              Contacts information
            </div>
            <FooterAdress />
          </div>
          <div className="mb-10 md:h-56 w-full md:w-auto flex-col justify-start items-start gap-4 sm:inline-flex">
            <div className="text-white text-lg font-bold leading-tight pb-5">
              Navigation
            </div>

            <div className="flex flex-wrap md:flex-col gap-y-5 md:gap-5">
              {data.navigation.map((e, index) => (
                <div
                  key={index}
                  className="w-1/2 md:w-full justify-start items-start"
                >
                  <div className="text-white text-sm font-normal leading-tight ">
                    {e.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-auto pb-10 flex-col justify-start items-start gap-4 sm:inline-flex">
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
                    <Link href={'#'} target="_blank" rel="noreferrer">
                      <Image
                        src={item}
                        fill
                        alt="Instagram links"
                        style={{
                          objectFit: 'cover',
                          borderRadius: '5px',
                        }}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container mx-auto text-white ">
          <hr className="bg-slate-100 w-full " />
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
