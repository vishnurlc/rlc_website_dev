import {
  ContactForm,
  GalleryJet,
  HeroCarousel,
  RichTextComponent,
  YachtTechnicalSpec,
} from '@/components';
import Amenitys from '@/components/amenitys/Amenitys';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';

import Link from 'next/link';

export async function generateMetadata({ params }) {
  try {
    const yacht = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/yachts?filters[slug][$eq]=${params.slug}&populate=image`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    ).then((res) => res.json());
    return {
      title: yacht.data[0].attributes.name || '| Rent Exotic Yachts in Dubai',
      description:
        yacht.data[0].attributes.description ||
        'Luxury Yachts rental with Richy life Club',
      openGraph: {
        type: 'website',
        title: yacht.data[0].attributes.name || '| Rent Exotic Yachts in Dubai',
        description:
          yacht.data[0].attributes.description ||
          'Luxury Yachts rental with Richy life Club',
        images: [
          {
            url: `${yacht.data[0].attributes.image.data[0].attributes.url}`,
            width: 800,
            height: 600,
          },
          {
            url: `${yacht.data[0].attributes.image.data[0].attributes.url}`,
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
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/yachts?filters[slug][$eq]=${slug}&populate=*`,
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

export default async function YacthDetail({ params: { slug } }) {
  const yacht = await getData(slug);

  return (
    <main>
      {yacht && (
        <>
          <div>
            <HeroCarousel data={yacht?.data[0].attributes.image} />
            <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
              <h2 className="text-right">
                <span className="text-xl text-primary">
                  AED{yacht.data[0].attributes.price}/hour
                </span>
              </h2>

              <AnimatedBtn
                styles={'rounded-sm bg-primary text-white'}
                text={'Book Now'}
                msg={'Hi, I would like to know about your services.'}
              />
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
            <div>
              <div>
                <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500">
                  {yacht.data[0].attributes.make.data.attributes.make}
                </h1>
                <span className="inline-block my-2 md:my-4 font-inter text-primary font-semibold text-2xl md:text-[40px]">
                  {yacht.data[0].attributes.name}
                </span>
              </div>

              <RichTextComponent
                bio={yacht.data[0].attributes.description}
                style={
                  'text-sm md:text-base text-justify md:text-left text-gray-500'
                }
              />
            </div>

            <div>
              <h2 className="inline-block mb-4 md:mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
                Destinations
              </h2>

              <RichTextComponent
                bio={yacht.data[0].attributes.destinations}
                style={
                  'text-sm md:text-base text-justify md:text-left text-gray-500'
                }
              />
            </div>

            <YachtTechnicalSpec yacht={yacht} />

            {yacht.data[0].attributes.onboard && (
              <div>
                <h2 className="inline-block mb-4 md:mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
                  On Board
                </h2>

                <div>
                  <RichTextComponent bio={yacht.data[0].attributes.onboard} />
                </div>
              </div>
            )}

            <div>
              <h2 className="inline-block mb-4 md:mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
                Amenities
              </h2>
              <Amenitys data={yacht.data[0].attributes.amenities} />
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
              title={'Sail in Luxury'}
              description={
                'Book your journey with our luxury yacht rentals now'
              }
            />
          </div>
        </>
      )}
    </main>
  );
}

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/yachts`, {
    next: {
      revalidate: 40,
    },
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });

  const data = await res.json();

  return data.data.map((car) => ({
    slug: car.attributes.slug,
  }));
};
