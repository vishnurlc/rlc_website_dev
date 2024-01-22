import {
  CarSpec,
  ContactForm,
  GalleryJet,
  HeroCarousel,
  PriceComponent,
  TechnicalSpec,
} from "@/components";
import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
import ItineraryComponent from "@/components/tours/ItineraryComponent";
import PriceAndBookNow from "@/components/tours/PriceAndBookNow";
import qs from "qs";

export async function generateMetadata({ params }) {
  try {
    const car = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/packages?filters[slug][$eq]=${params.slug}&populate=image`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    ).then((res) => res.json());
    return {
      title: car.data[0].attributes.name || "| Desert Safari",
      description: car.data[0].attributes.description || "Desert Safari",
      openGraph: {
        type: "website",
        title: car.data[0].attributes.name || "| Desert Safari",
        description: car.data[0].attributes.description || " Desert Safari",
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

export async function getData(slug) {
  const query = qs.stringify({
    populate: "*",
  });
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/desert-safari-packages?filters[slug][$eq]=${slug}&${query}`,
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
    console.log("s", error);
    return {};
  }
}

export default async function CarDetail({ params: { slug } }) {
  const car = await getData(slug);

  return (
    <main className="pt-[108px] md:pt-[128px]">
      <div>
        <HeroCarousel
          data={car.data[0].attributes.image}
          name={car.data[0].attributes.name}
        />
        <PriceAndBookNow cost={car.data[0].attributes.price} />
      </div>

      <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
        <div>
          <div>
            <span className=" inline-block my-2 md:my-4 font-inter text-primary font-semibold text-2xl md:text-[40px]">
              {car.data[0].attributes.name}
            </span>
          </div>
          <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
            {car.data[0].attributes.details}
          </p>
        </div>
        {/* <ItineraryComponent itinerary={car.data[0].attributes.itinerary} /> */}
        <div className="text-gray-500 mt-7  text-center md:text-start flex items-center justify-start gap-2 flex-wrap">
          {car.data[0].attributes.desert_safari_features.data.map(
            (e, index) => (
              <p
                className=" px-4 py-2 rounded-full border border-gray-300"
                key={index}
              >
                {e.attributes.feature}
              </p>
            )
          )}
        </div>
        <ContactForm
          title={"Connect with us"}
          description={"Book your dream vacation with us"}
        />
      </div>
    </main>
  );
}

export const generateStaticParams = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/desert-safari-packages`,
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
  return data.data.map((car) => ({
    slug: car.attributes.slug,
  }));
};
