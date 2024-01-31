import { ContactForm, HeroCarousel, PriceComponent } from "@/components";
import Link from "next/link";
import Image from "next/image";
import HelicopSpec from "@/components/helicopter/HelicopSpec";

import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";

// export async function generateMetadata({ params }) {
//   try {
//     const car = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-cars?filters[slug][$eq]=${params.slug}&populate=images`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
//         },
//       }
//     ).then((res) => res.json());

//     return {
//       title:
//         car.data[0].attributes.name || "| Luxury Chauffeur Service in Dubai",
//       description:
//         car.data[0].attributes.description ||
//         " Luxury Chauffeur Service with Richy life Club",
//       openGraph: {
//         type: "website",
//         title:
//           car.data[0].attributes.name || "| Luxury Chauffeur Service in Dubai",
//         description:
//           car.data[0].attributes.description ||
//           " Luxury Chauffeur Service with Richy life Club",
//         images: [
//           {
//             url: `${car.data[0].attributes.images.data[0].attributes.url}`,
//             width: 800,
//             height: 600,
//           },
//           {
//             url: `${car.data[0].attributes.images.data[0].attributes.url}`,
//             width: 300,
//             height: 200,
//           },
//         ],
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getData(slug) {
  let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-cars?filters[slug][$eq]=${slug.slug}&populate=*`;

  try {
    const res = await fetch(api, {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
    const data = await res.json();

    if (data == {}) {
      setStatus(true);
    }
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

const page = async ({ params }) => {
  const data = [
    {
      image: "/assets/helicopter/1.webp",
      map: "/assets/helicopter/map/12 Min tour.png",
      title: "12 Mins Helicopter Tour",
      price: "715",
      slug: "1",
      description: `With our 12-Mins Iconic helicopter tour in Dubai, you’ll get a
      great panoramic perspective. Get close to Dubai’s most famous
      landmark, the Burj Khalifa, and other breathtaking sights`,
    },
    {
      image: "/assets/helicopter/2.jpeg",
      map: "/assets/helicopter/map/17 min tour.png",
      title: "17 Mins Helicopter Tour",
      price: "945",
      slug: "2",
      description: `Relax with this 17-mins palm Dubai Helicopter Tour and let the traveler in you out as you take in the breathtaking sights and numerous outstanding components that makeup Dubai’s ambiance.`,
    },
    {
      image: "/assets/helicopter/3.jpeg",
      map: "/assets/helicopter/map/22 min Tour.png",
      title: "22 Mins Helicopter Tour",
      price: "1299",
      slug: "3",
      description: `with our 22-mins Vision Helicopter Tours in Dubai, we provide an excellent helicopter tour package where you may learn about fascinating places.`,
    },
    {
      image: "/assets/helicopter/4.jpeg",
      map: "/assets/helicopter/map/30 min tour.png",
      title: "30 Mins Helicopter Tour",
      price: "1770",
      slug: "5",
      description: `The 30-mins Grand Tour Plan is the most well-known option in the city. This 30-mins Grand Tour Plan will allow you to see some of Dubai’s most intriguing locations.`,
    },
    {
      image: "/assets/helicopter/4.jpeg",
      map: "/assets/helicopter/map/40 min tour.png",
      title: "40 Mins Helicopter Tour",
      price: "1770",
      slug: "6",
      description: `Our 40-mins Odyssey Tour Plan provides a fantastic helicopter tour package that allows you to learn about some of the world’s most intriguing locations.`,
    },
    {
      image: "/assets/helicopter/4.jpeg",
      title: "Private charter helicopter",
      price: "1770",
      slug: "7",
      private_charter: true,
    },
  ];

  const { slug } = params;

  // Use Array.find to filter the data based on the provided slug
  const selectedItem = data.find((item) => item.slug === slug);

  const car = {
    data: [
      {
        attributes: {
          images: {
            data: [
              {
                attributes: {
                  url: selectedItem.image,
                },
              },
            ],
          },
          map: {
            images: {
              data: [
                {
                  attributes: {
                    url: selectedItem.map,
                  },
                },
              ],
            },
          },
          name: selectedItem.title,
          price: selectedItem.price,
          description: selectedItem.description,
          private_charter: selectedItem.private_charter,
        },
      },
    ],
  };

  return (
    <main className="pt-[108px] md:pt-[128px]">
      <div>
        <HeroCarousel
          data={car.data[0].attributes.images}
          name={car.data[0].attributes.name}
        />
        <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
          <h2 className="text-right text-xl text-primary">
            <PriceComponent cost={car.data[0].attributes.price} /> / person
          </h2>

          <AnimatedBtn
            styles={"rounded-md bg-primary text-white"}
            text={"Book Now"}
            msg={"Hi, I would like to know about your services."}
          />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
        <div>
          <div>
            <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500">
              {/* {car.data.attributes.make.data.attributes.make} */}
            </h1>
            <span className=" inline-block my-2 md:my-4 font-inter text-primary font-semibold text-2xl md:text-[40px]">
              {car.data[0].attributes.name}
            </span>
          </div>
          <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
            Richy Life Club is the ultimate destination for premier helicopter
            services in Dubai. When you secure your ticket with Richy Life Club,
            youre not just booking a helicopter ride, youre immersing yourself
            in a world-class experience. Create extraordinary memories and
            embark on an unforgettable journey. Richy Life Club presents an
            array of helicopter ride options in Dubai, each offering a
            distinctive adventure. Our diverse package options ensure that every
            flight is a unique and thrilling experience. Purchase your tickets
            now through our official website and elevate your life with Richy
            Life Clubs exclusive helicopter rides.
            <br />
          </p>
          <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
            {car.data[0].attributes.description}
          </p>
        </div>

        <div>
          <div className="w-full h-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto gap-8">
              {/* <div className="border w-full  rounded-lg shadow-lg">
                <div className="flex flex-col items-center md:items-start px-6 py-4">
                  <div className="flex flex-col w-24">
                    <h2 className="font-bold text-xl text-center lg:text-left">
                      Details
                    </h2>
                    <div className="border-2 border-gray-300 mb-3 text"></div>
                  </div>
                  <div className="text-gray-500  text-center md:text-start">
                    <p>
                      Price Range :{" "}
                      <span className="text-primary items-center gap-2 text-sm md:text-base font-medium leading-tight">
                        {"$".repeat(car?.data[0].attributes.dollarcountmin)} -{" "}
                        {"$".repeat(car?.data[0].attributes.dollarcountmax)}
                      </span>
                    </p>
                  </div>

                  <div className="text-gray-500 mt-7  text-center md:text-start">
                    <p className="text-primary text-lg">Cuisines</p>
                    <p>
                      <span>hhe</span>
                    </p>
                  </div>
                  <div className="text-gray-500 mt-7  text-center md:text-start flex items-center justify-start gap-2 flex-wrap">
                    <p className=" px-4 py-2 rounded-full border border-gray-300">
                      hekn
                    </p>
                  </div>
                </div>
              </div> */}
              {car.data[0].attributes.private_charter === true ? (
                <></>
              ) : (
                <div className="border w-full  rounded-lg shadow-lg">
                  <div className="relative w-full aspect-[1/1.5] max-h-[35vh] rounded overflow-hidden">
                    <Image
                      src={
                        car.data[0].attributes.map.images.data[0].attributes.url
                      }
                      fill
                      alt={"Richy Life Club"}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  {/* <AnimatedBtn
                    text={"Reserve now"}
                    styles={"rounded-md bg-gold text-white mt-4 "}
                    msg={`I would like to reserve a table at ${car.data[0].attributes.name}`}
                  /> */}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <TechnicalSpec car={car} /> */}
        {/* <ChaufferSpec car={car} /> */}
        {/* <HelicopSpec car={car} /> */}
        {/* <CarSpec car={car} /> */}
        {/* <div>
        <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
          Gallery
        </h2>
        <div>
          <GalleryJet />
        </div>
      </div> */}
        <ContactForm
          title={"Experience the ultimate Luxury"}
          description={"Book your journey with our luxury car rentals now"}
        />
      </div>
    </main>
  );
};

export default page;

// export const generateStaticParams = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-cars`,
//     {
//       next: {
//         revalidate: 40,
//       },
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
//       },
//     }
//   );

//   const data = await res.json();

//   return data.data.map((blog) => ({
//     slug: blog.attributes.slug,
//   }));
// };
