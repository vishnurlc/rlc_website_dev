import {
  ContactForm,
  GalleryJet,
  HeroCarousel,
  RichTextComponent,
} from '@/components';
import React from 'react';

export async function getData(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/yachts?filters[slug][$eq]=${slug}&populate=*`,
      {
        next: { revalidate: 40 },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log('s', error);
    return {};
  }
}

export default async function YacthDetail({ params: { slug } }) {
  const yacht = await getData(slug);
  console.log('a', yacht.data[0].attributes.make.data.attributes);
  return (
    <main className="">
      <div>
        <HeroCarousel data={yacht.data[0].attributes.image} />
      </div>
      <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
        <div>
          <div>
            <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500">
              {yacht.data[0].attributes.make.data.attributes.make}
            </h1>
            <span className=" inline-block my-4 font-inter text-primary font-semibold text-xl md:text-[40px]">
              {yacht.data[0].attributes.name}
            </span>
          </div>
          <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
            {yacht.data[0].attributes.description}
          </p>
        </div>

        <div>
          <h2 className="inline-block mb-4 md:mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Technical Specifications
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-9  ">
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Make</span>
              <span className="text-[#8a97a4]">
                {yacht.data[0].attributes.make.data.attributes.make}&quot; ft.
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Length</span>
              <span className="text-[#8a97a4]">
                {yacht.data[0].attributes.technicalspec.length}&quot; ft.
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Capacity</span>
              <span className="text-[#8a97a4]">
                {`${yacht.data[0].attributes.technicalspec.capacity} People ${
                  yacht.data[0].attributes.technicalspec.overnight
                    ? `, ${yacht.data[0].attributes.technicalspec.overnight} overnight`
                    : ''
                }`}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Category</span>
              <span className="text-[#8a97a4]">
                {yacht.data[0].attributes.technicalspec.category}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Rooms</span>
              <span className="text-[#8a97a4]">
                {yacht.data[0].attributes.technicalspec.rooms}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Stereo System</span>
              <span className="text-[#8a97a4]">
                {yacht.data[0].attributes.technicalspec.stereo_system}
              </span>
            </li>
            <li className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] ">
              <span>Make Year</span>
              <span className="text-[#8a97a4]">
                {yacht.data[0].attributes.technicalspec.make_year}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="inline-block mb-4 md:mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            On Board
          </h2>
          <div>
            <RichTextComponent bio={yacht.data[0].attributes.onboard} />
          </div>
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
