import { ContactForm, HeroCarousel, PriceComponent } from "@/components";
import GoogleMapComponent from "@/components/mapComponent/GoogleMapComponent";

import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

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

  return (
    <main>
      <div>
        <HeroCarousel
          data={car.data[0].attributes.image}
          name={car.data[0].attributes.name}
        />
        <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
          {/* <h2 className="text-right text-xl text-primary">
            <PriceComponent
              cost={car.data[0].attributes.avg_price_per_person}
            />
            /Person
          </h2> */}

          <AnimatedBtn
            styles={"rounded-md bg-gold text-white"}
            text={"Reserve Now"}
            msg={"Hi, I would like to know about your services."}
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-10 md:py-16 flex flex-col gap-8 md:gap-16">
        <div>
          <div className="px-6">
            <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500 ">
              <Link
                href={car.data[0].attributes.locationlink}
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <FaLocationDot color="green" /> &nbsp;{" "}
                {car.data[0].attributes.place}
              </Link>
            </h1>
            <span className=" inline-block my-2 md:my-4 font-inter text-primary font-semibold text-2xl md:text-[40px]">
              {car.data[0].attributes.name}
            </span>

            <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
              {car.data[0].attributes.description}
            </p>
          </div>
          <div className="max-w-[1200px] mx-auto py-10 md:py-16 flex flex-col gap-8 md:gap-16">
            {/* product detail */}
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

            <ContactForm
              title={"Experience the ultimate Luxury"}
              description={"Reserve your exclusive dining experience"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

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
