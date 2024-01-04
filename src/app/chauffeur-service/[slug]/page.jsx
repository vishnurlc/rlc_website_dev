import {
  ContactForm,
  HeroCarousel,
  Loader,
  PriceComponent,
  TechnicalSpec,
} from "@/components";
import CardChauffer from "@/components/chaufferservice/CardChauffer";
import ChaufferCard from "@/components/chaufferservice/ChaufferCard";
import ChaufferSpec from "@/components/chaufferservice/ChaufferSpec";
import Ourfleets from "@/components/chaufferservice/Ourfleets";
import Faq from "@/components/home/faq";
import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
import { Suspense } from "react";

export const metadata = {
  title: "Luxury Chauffeur Service in Dubai",
  description:
    "Book a luxury chauffeur service in Dubai for your airport transfers, half and full day car rentals, full Dubai tours, or events pickup and drop",
  keywords: [
    "chauffeur service dubai",
    "luxury chauffeur service dubai",
    " airport transfers dubai",
    "car rentals dubai",
    "full dubai tours",
    "events pickup and drop dubai",
    "Richy Life Club chauffer service",
    "richy life club chauffer service",
  ],

  openGraph: {
    title: "Luxury Chauffeur Service in Dubai",
    description:
      "Book a luxury chauffeur service in Dubai for your airport transfers, half and full day car rentals, full Dubai tours, or events pickup and drop",
    siteName: "Richy life Club",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/chauffeur/hero.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/chauffeur/hero.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
  const car = await getData(params);
  const data = [
    {
      title: "Airport Transfer",
      image: "/assets/chauffeur/transfers.jpeg",
    },
    {
      title: "Half/Full Day",
      image: "/assets/chauffeur/halfday.avif",
    },
    {
      title: "Dubai City Tour",
      image: "/assets/chauffeur/dubaitour.jpeg",
    },
    // {
    //   title: 'A-B Transfer',
    //   image: '/assets/chauffeur/a-b.jpeg',
    // },
    {
      title: "Events",
      image: "/assets/chauffeur/event.png",
    },
  ];

  if (car.data.length !== 0) {
    console.log(car.data.attributes);
    // return "loading";
  }

  return (
    <main>
      <div className="md:mt-[100px]">
        <HeroCarousel
          data={car.data[0].attributes.images}
          name={car.data[0].attributes.name}
        />
        <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
          <h2 className="text-right text-xl text-primary">
            <PriceComponent cost={car.data[0].attributes.price} />
            /Day
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
            {car.data[0].attributes.description}
          </p>
        </div>

        {/* <TechnicalSpec car={car} /> */}
        <ChaufferSpec car={car} />
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
