import React from 'react';
import { SectionHeading } from '..';
import Image from 'next/image';
import FooterInstagram from './FooterInstagram';
import Link from 'next/link';

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
        link: '',
      },
      {
        title: 'Laxury Yacht Rentals',
        link: '',
      },
      {
        title: 'Premium Gold Jetski',
        link: '',
      },
      {
        title: 'Exoic Pet VIP Services',
        link: '',
      },
      {
        title: 'Services',
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
          'Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem'
        }
      />

      {/* images */}
      <div className="overflow-hidden w-full mt-5">
        <FooterInstagram images={data.images} />
      </div>

      {/* footer content */}
      <div className="footer bg-gradient-to-b from-teal-900 to-black">
        <div className="container mx-auto px-10 py-10 lg:px-20 lg:py-20 bg-gradient-to-b from-teal-900 to-black sm:flex  justify-between flex-wrap">
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
            <div className="h-36 flex-col justify-start items-start gap-3 flex">
              <div className="w-52 h-10 relative">
                <div className="w-7 h-7 left-[-0px] top-[6.29px] absolute bg-orange-300 rounded-xl">
                  <div className="w-2.5 pt-0.5 pb-px left-[8.82px] top-[20.05px] absolute justify-start items-start inline-flex" />
                </div>
                <div className="left-[43.26px] top-[-1.34px] absolute flex-col justify-start items-start inline-flex">
                  <div className="pb-px justify-start items-start inline-flex">
                    <div className="text-white text-sm font-normal leading-tight">
                      +1-202-555-0133
                    </div>
                  </div>
                  <div className=" pb-px justify-start items-start inline-flex">
                    <div className="text-white text-sm font-normal leading-tight">
                      +1-202-555-0133
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-52 h-10 relative">
                <div className="w-7 h-7 left-[-0px] top-[6.29px] absolute bg-orange-300 rounded-xl">
                  <div className="w-2 py-px left-[10.17px] top-[20.05px] absolute justify-start items-start inline-flex" />
                </div>
                <div className="left-[43.26px] top-[-1.34px] absolute flex-col justify-start items-start inline-flex">
                  <div className="w-40 pb-px justify-start items-start inline-flex">
                    <div className="text-white text-sm font-normal leading-tight">
                      192 North Border Street
                    </div>
                  </div>
                  <div className="w-40 pr-8 pb-px justify-start items-start inline-flex">
                    <div className="text-white text-sm font-normal leading-tight">
                      Lithonia, GA 30038
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-52 h-10 relative">
                <div className="w-7 h-7 left-[-0px] top-[6.29px] absolute bg-orange-300 rounded-xl">
                  <div className="w-3 pr-px py-px left-[7.47px] top-[20.05px] absolute justify-start items-start inline-flex" />
                </div>
                <div className="left-[43.26px] top-[-1.34px] absolute flex-col justify-start items-start inline-flex">
                  <div className="pr-1 pb-px justify-start items-start inline-flex">
                    <div className="text-white text-sm font-normal leading-tight">
                      9:00 am to 5:00 pm
                    </div>
                  </div>
                  <div className="w-32 pb-px justify-start items-start inline-flex">
                    <div className="text-white text-sm font-normal leading-tight">
                      Monday to Saturday
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            {/* <div className="w-60 h-44 relative">
              <div className="w-16 left-0 top-0 absolute rounded-md justify-start items-start inline-flex">
                <img
                  className="w-16 h-20"
                  src="https://via.placeholder.com/71x79"
                />
              </div>
              <div className="w-16 left-[87.03px] top-[-0px] absolute rounded-md justify-start items-start inline-flex">
                <img
                  className="w-16 h-20"
                  src="https://via.placeholder.com/71x79"
                />
              </div>
              <div className="w-16 left-[174.07px] top-[-0px] absolute rounded-md justify-start items-start inline-flex">
                <img
                  className="w-16 h-20"
                  src="https://via.placeholder.com/71x79"
                />
              </div>
              <div className="w-16 left-0 top-[94.37px] absolute rounded-md justify-start items-start inline-flex">
                <img
                  className="w-16 h-20"
                  src="https://via.placeholder.com/71x79"
                />
              </div>
              <div className="w-16 left-[87.03px] top-[94.37px] absolute rounded-md justify-start items-start inline-flex">
                <img
                  className="w-16 h-20"
                  src="https://via.placeholder.com/71x79"
                />
              </div>
              <div className="w-16 left-[174.07px] top-[94.37px] absolute rounded-md justify-start items-start inline-flex">
                <img
                  className="w-16 h-20"
                  src="https://via.placeholder.com/71x79"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
