import {
  ContactForm,
  GalleryJet,
  HeroCarousel,
  RichTextComponent,
} from '@/components';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';

export async function generateMetadata({ params }) {
  try {
    const jet = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/private-jets?filters[slug][$eq]=${params.slug}&populate=image`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    ).then((res) => res.json());
    return {
      title: jet.data[0].attributes.name || 'Private Jet for Rental In Dubai ',
      description:
        jet.data[0].attributes.description ||
        'Private Jet rental with Richylife Club',

      openGraph: {
        type: 'website',
        title:
          jet.data[0].attributes.name || 'Private Jet for Rental In Dubai ',
        description:
          jet.data[0].attributes.description ||
          'Private Jet rental with Richylife Club',
        images: [
          {
            url: `${jet.data[0].attributes.image.data[0].attributes.url}`,
            width: 800,
            height: 600,
          },
          {
            url: `${jet.data[0].attributes.image.data[0].attributes.url}`,
            width: 300,
            height: 200,
          },
        ],
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getData(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/private-jets?filters[slug][$eq]=${slug}&populate=*`,
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

export default async function JetDetail({ params: { slug } }) {
  const jets = await getData(slug);

  return (
    <main>
      <Suspense fallback="Loading">
        <div>
          <HeroCarousel
            data={jets.data[0].attributes.image}
            name={jets.data[0].name}
          />
          <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
            <h2 className="text-right">
              <span className="text-xl text-primary">
                AED{jets.data[0].attributes.price}/Day
              </span>
            </h2>

            <AnimatedBtn
              styles={'rounded-md bg-primary text-white '}
              text={'Book Now'}
              msg={`I'm writing to you today to inquire about the ${jets.data[0].name}. I'm interested in learning more about its specifications, price, and availability.`}
            />
          </div>
        </div>
      </Suspense>
      <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
        <div>
          <div>
            <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500">
              {jets.data[0].attributes.subheading}
            </h1>
            <span className=" inline-block my-4 font-inter text-primary font-semibold text-xl md:text-[40px]">
              {jets.data[0].attributes.name}
            </span>
          </div>
          <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
            {jets.data[0].attributes.description}
          </p>
        </div>

        <div>
          <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Technical Specifications
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-9">
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Cabin Length</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.cabin_length}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>No Stop Flying time</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.no_stop_flying_time}
                /HeroSection2
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Passengers</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.passengers}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Range NM</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.range_nm} nmi
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Cabin Height</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.cabin_height}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Cabin Width</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.cabin_width}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Takeoff Distance</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.takeoff_distance}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>High Speed Distance</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.high_speed_cruise}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Long Range Cruise</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.long_range_cruise}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Maximum Payload</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.max_payload}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Baggage Volume</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.baggage_volume}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Wingspan</span>
              <span className="text-[#8a97a4]">
                {jets.data[0].attributes.technicalspec.wingspan}
              </span>
            </li>
          </ul>
        </div>
        {/* <div>
          <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Gallery
          </h2>
          <div>
            <GalleryJet />
          </div>
        </div> */}
        <ContactForm
          title={'Soar to New Heights'}
          description={'Book your journey with our private jet rental now'}
        />
      </div>
    </main>
  );
}
