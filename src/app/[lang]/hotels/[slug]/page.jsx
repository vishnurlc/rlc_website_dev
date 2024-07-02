import {
  ContactForm,
  HeroCarousel,
  PriceComponent,
  RichTextComponent,
} from "@/components";
import Amenitys from "@/components/amenitys/Amenitys";
import GoogleMapComponent from "@/components/mapComponent/GoogleMapComponent";

import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
import CardHotel from "@/components/ui/card/CardHotel";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdPerson2 } from "react-icons/md";

export async function generateMetadata({ params }) {
  try {
    const car = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/club-packages?filters[slug][$eq]=${params.slug}&populate=image`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    ).then((res) => res.json());

    return {
      title:
        car.data[0].attributes.name || "| Luxury Clubs & Restaurants in Dubai",
      description:
        car.data[0].attributes.description ||
        " Luxury Clubs & Restaurants in Dubai",
      openGraph: {
        type: "website",
        title:
          car.data[0].attributes.name ||
          "| Luxury Clubs & Restaurants in Dubai",
        description:
          car.data[0].attributes.description ||
          "Luxury Clubs & Restaurants in Dubai",
        images: [
          {
            url: `${car.data[0].attributes.image.data[0].attributes.url}`,
            width: 800,
            height: 600,
          },
          {
            url: `${car.data[0].attributes.image.data[0].attributes.url}`,
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

async function getData(slug) {
  let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/club-packages?filters[slug][$eq]=${slug.slug}&populate=*`;

  try {
    const res = await fetch(api, {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

const page = async ({ params }) => {
  const car = await getData(params);

  console.log(car);
  const amnityData = {
    data: [
      {
        id: 2,
        attributes: {
          name: "WiFi",
          createdAt: "2023-08-26T06:05:02.555Z",
          updatedAt: "2023-08-26T06:05:03.906Z",
          publishedAt: "2023-08-26T06:05:03.891Z",
          slug: "wi-fi",
        },
      },
      {
        id: 3,
        attributes: {
          name: "Friendly Crew",
          createdAt: "2023-08-26T06:06:44.779Z",
          updatedAt: "2023-08-26T06:06:46.009Z",
          publishedAt: "2023-08-26T06:06:46.007Z",
          slug: "friendly-crew",
        },
      },
      {
        id: 4,
        attributes: {
          name: "Live BBQ",
          createdAt: "2023-08-26T06:06:58.097Z",
          updatedAt: "2023-08-26T06:06:59.208Z",
          publishedAt: "2023-08-26T06:06:59.205Z",
          slug: "live-bbq",
        },
      },
      {
        id: 5,
        attributes: {
          name: "Room Service",
          createdAt: "2023-08-26T06:07:10.978Z",
          updatedAt: "2023-08-26T06:07:12.138Z",
          publishedAt: "2023-08-26T06:07:12.136Z",
          slug: "room-service",
        },
      },
      {
        id: 6,
        attributes: {
          name: "Air Conditioning",
          createdAt: "2023-08-26T06:07:31.183Z",
          updatedAt: "2023-08-26T06:07:32.290Z",
          publishedAt: "2023-08-26T06:07:32.288Z",
          slug: "air-conditioning",
        },
      },
      {
        id: 7,
        attributes: {
          name: "Kitchen",
          createdAt: "2023-08-26T06:07:42.318Z",
          updatedAt: "2023-08-26T06:07:43.385Z",
          publishedAt: "2023-08-26T06:07:43.383Z",
          slug: "kitchen",
        },
      },
      {
        id: 9,
        attributes: {
          name: "Sun Bed",
          createdAt: "2023-08-26T06:08:10.527Z",
          updatedAt: "2023-08-26T06:08:11.598Z",
          publishedAt: "2023-08-26T06:08:11.594Z",
          slug: "sun-bed",
        },
      },
      {
        id: 11,
        attributes: {
          name: "Safety",
          createdAt: "2023-08-26T06:08:39.645Z",
          updatedAt: "2023-08-26T06:08:40.770Z",
          publishedAt: "2023-08-26T06:08:40.768Z",
          slug: "safety",
        },
      },
      {
        id: 10,
        attributes: {
          name: "Entertainment",
          createdAt: "2023-08-26T06:08:23.685Z",
          updatedAt: "2023-08-26T06:08:24.793Z",
          publishedAt: "2023-08-26T06:08:24.791Z",
          slug: "entertainment",
        },
      },
      {
        id: 13,
        attributes: {
          name: "Fishing Gears",
          createdAt: "2023-08-26T06:09:08.368Z",
          updatedAt: "2023-08-26T06:09:09.475Z",
          publishedAt: "2023-08-26T06:09:09.472Z",
          slug: "fishing-gears",
        },
      },
      {
        id: 20,
        attributes: {
          name: "Fruit Platter",
          createdAt: "2024-01-25T13:43:09.434Z",
          updatedAt: "2024-01-29T05:39:51.481Z",
          publishedAt: "2024-01-29T05:39:51.474Z",
          slug: "fruit-platter",
        },
      },
    ],
  };

  return (
    <main className="pt-[108px] md:pt-[128px]">
      <div>
        <HeroCarousel
          data={car.data[0].attributes.image}
          name={car.data[0].attributes.name}
        />
        <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
          <h2 className="text-right text-xl text-primary">
            Starting from &nbsp;
            <PriceComponent
              cost={car.data[0].attributes.avg_price_per_person}
            />
          </h2>

          <AnimatedBtn
            styles={"rounded-md bg-gold text-white"}
            text={"Reserve Now"}
            msg={"Hi, I would like to know about your services."}
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
        <div>
          <div>
            <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500">
              {car.data[0].attributes.name}
            </h1>
            <span className="inline-block my-2 md:my-4 font-inter text-primary font-semibold text-2xl md:text-[40px]">
              {car.data[0].attributes.name}
            </span>
          </div>

          <RichTextComponent
            bio={car.data[0].attributes.description}
            style={
              "text-sm md:text-base text-justify md:text-left text-gray-500"
            }
          />
        </div>
        <div>
          <h2 className="inline-block mb-4 md:mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Your Experience
          </h2>

          <RichTextComponent
            bio={car.data[0].attributes.description}
            style={
              "text-sm md:text-base text-justify md:text-left text-gray-500"
            }
          />
        </div>

        <div className="w-full h-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto gap-8">
            <div className="border w-full  rounded-lg shadow-lg">
              <div className="flex flex-col items-center md:items-start px-6 py-4">
                <div className="flex flex-col w-24">
                  <h2 className="font-bold text-xl text-center lg:text-left">
                    Details
                  </h2>
                  <div className="border-2 border-gray-300 mb-3 text"></div>
                </div>
                <div className="text-gray-500  text-center md:text-start">
                  <p>
                    Time :{" "}
                    <span className="text-primary items-center gap-2 text-sm md:text-base font-medium leading-tight">
                      {car.data[0].attributes.timing}
                    </span>
                  </p>
                </div>
                <div className="text-gray-500  text-center md:text-start">
                  <p>
                    Price Range :{" "}
                    {/* <PriceComponent
                            cost={car.data[0].attributes.avg_price_per_person}
                          /> */}
                    <span className="text-primary items-center gap-2 text-sm md:text-base font-medium leading-tight">
                      {"$".repeat(car.data[0].attributes.dollarcountmin)} -{" "}
                      {"$".repeat(car.data[0].attributes.dollarcountmax)}
                    </span>
                  </p>
                </div>

                <div className="text-gray-500 mt-7  text-center md:text-start">
                  <p className="text-primary text-lg">Cuisines</p>
                  <p>
                    {car.data[0].attributes.restuarant_cuisines.data.map(
                      (item, index, array) => (
                        <span key={index}>
                          {item.attributes.cuisine}
                          {index < array.length - 1 && ","}{" "}
                        </span>
                      )
                    )}
                  </p>
                </div>
                <div className="text-gray-500 mt-7  text-center md:text-start flex items-center justify-start gap-2 flex-wrap">
                  {car.data[0].attributes.restaurant_types.data.map(
                    (item, index) => (
                      <p
                        className=" px-4 py-2 rounded-full border border-gray-300"
                        key={index}
                      >
                        {item.attributes.type}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="border w-full  rounded-lg shadow-lg">
              <div className="px-6 py-4">
                <div className="flex flex-col w-24">
                  <h2 className="font-bold text-xl">Location</h2>
                  <div className="border-2 border-gray-300 mb-3 text"></div>
                </div>
                <div>
                  <GoogleMapComponent
                    location={car.data[0].attributes.embeddedsrcmap}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-sm md:text-base text-justify md:text-left text-gray-500 ">
                    <Link
                      href={car.data[0].attributes.locationlink}
                      className="flex gap-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLocationDot color="green" />
                      {car.data[0].attributes.place}
                    </Link>
                  </h3>

                  <AnimatedBtn
                    text={"Reserve now"}
                    styles={"rounded-md bg-gold text-white mt-4 "}
                    msg={`I would like to reserve a table at ${car.data[0].attributes.name}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="inline-block mb-4 md:mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
            Amenities
          </h2>
          <Amenitys data={amnityData} />
        </div>

        <ContactForm
          title={"Stay in Luxury"}
          description={
            "Book your accommodation with our luxury assistance for hotel booking."
          }
        />
      </div>
    </main>
  );
};

export default page;

const RoomsType = () => {
  return (
    <table class="min-w-full border-collapse block md:table">
      <thead class="block md:table-header-group">
        <tr class=" md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th class=" p-2 text-gray-700 font-extrabold text-left block md:table-cell">
            Accommodation Type
          </th>
          <th class=" p-2 text-gray-700 font-extrabold text-left block md:table-cell">
            Number of guests
          </th>
        </tr>
      </thead>
      <tbody class="text-blue-gray-900 block md:table-row-group">
        <tr class="bg-gray-300 md:border-none block md:table-row">
          <td class="p-2 md:border-b md:border-blue-gray-200 text-left block md:table-cell">
            <span class="inline-block w-1/2 md:hidden font-bold">
              Accommodation Type
            </span>
            King Room
          </td>
          <td class="p-2 md:border-b md:border-blue-gray-200 text-left block md:table-cell">
            <span class="inline-block w-1/2 md:hidden font-bold">
              Number of guests
            </span>
            <div className="inline-block">
              <div className="flex">
                <MdPerson2 />
                <MdPerson2 />
              </div>
            </div>
          </td>

          <td class="p-2 md:border-b md:border-blue-gray-200 text-left block md:table-cell">
            <span class="inline-block w-1/2 md:hidden font-bold"></span>
            <button class="bg-gold hover:bg-gold text-white font-bold py-1 px-2 border rounded">
              Book now
            </button>
          </td>
        </tr>
        <tr class=" md:border-none block md:table-row">
          <td class="p-2 md:border-b md:border-blue-gray-200 text-left block md:table-cell">
            <span class="inline-block w-1/2 md:hidden font-bold">
              Accommodation Type
            </span>
            King Room
          </td>
          <td class="p-2 md:border-b md:border-blue-gray-200 text-left block md:table-cell">
            <span class="inline-block w-1/2 md:hidden font-bold">
              Number of guests
            </span>
            <div className="inline-block">
              <div className="flex">
                <MdPerson2 />
                <MdPerson2 />
              </div>
            </div>
          </td>

          <td class="p-2 md:border-b md:border-blue-gray-200 text-left block md:table-cell">
            <span class="inline-block w-1/2 md:hidden font-bold"></span>
            <button class="bg-gold hover:bg-gold text-white font-bold py-1 px-2 border rounded">
              Book now
            </button>
          </td>
        </tr>
        <tr class="bg-gray-300 md:border-none block md:table-row">
          <td class="p-2 md:border-b md:border-blue-gray-200 text-left block md:table-cell">
            <span class="inline-block w-1/2 md:hidden font-bold">
              Accommodation Type
            </span>
            King Room
          </td>
          <td class="p-2 md:border-b md:border-blue-gray-200 text-left block md:table-cell">
            <span class="inline-block w-1/2 md:hidden font-bold">
              Number of guests
            </span>
            <div className="inline-block">
              <div className="flex">
                <MdPerson2 />
                <MdPerson2 />
              </div>
            </div>
          </td>

          <td class="p-2 md:border-b md:border-blue-gray-200 text-left block md:table-cell">
            <span class="inline-block w-1/2 md:hidden font-bold"></span>
            <button class="bg-gold hover:bg-gold text-white font-bold py-1 px-2 border rounded">
              Book now
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const generateStaticParams = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/club-packages`,
    {
      next: {
        revalidate: 40,
      },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );

  const data = await res.json();

  return data.data.map((blog) => ({
    slug: blog.attributes.slug,
  }));
};
