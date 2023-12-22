import {
  ContactForm,
  HeroSection2,
  ListingComponent,
  Loader,
  PaginationComponent,
  SectionHeading,
  WhyusChauffer,
} from "@/components";
import ChaufferCard from "@/components/chaufferservice/ChaufferCard";
import Ourfleets from "@/components/chaufferservice/Ourfleets";
import Faq from "@/components/home/faq";
import CardSq from "@/components/ui/card/CardSq";
import Card from "@/components/ui/card/card";
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
    "richylife club chauffer service",
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

async function getData() {
  let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/car-makes?populate=*`;

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

const page = async () => {
  const make = await getData();
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

  return (
    <main>
      <HeroSection2
        type="image"
        heading1="Luxury Chauffeur"
        heading2="Services"
        subheading={"Your Voyage into Elegance and Comfort"}
        btntext={"Book Now"}
        url="/assets/chauffeur/hero.png"
      />

      <div className="mt-10 max-w-[1200px] mx-auto px-5">
        <div>
          <Suspense fallback={<Loader />}>
            <ChaufferCard
              variant={"car"}
              title={"Crafting Driving Experiences"}
              description={
                "Choose from Our Handpicked Selection of Luxurious Cars for an Unforgettable Ride"
              }
              make={make}
            />
          </Suspense>
        </div>
        <Faq category={"chauffeur"} />
        <div className="my-9 md:my-16 px-6 ">
          <ContactForm
            title={"Get in Touch with Us"}
            description={"Experience Elegance & Convenience"}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
