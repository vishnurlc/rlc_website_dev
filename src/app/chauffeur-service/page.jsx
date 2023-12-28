import {
  ContactForm,
  HeroSection2,
  SectionHeading,
  WhyusChauffer,
} from "@/components";
import InfinitScroll from "@/components/chaufferservice/InfinitScroll";
import Ourfleets from "@/components/chaufferservice/Ourfleets";
import Faq from "@/components/home/faq";
import CardSq from "@/components/ui/card/CardSq";
import Card from "@/components/ui/card/card";

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

const page = async () => {
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
    <main className="pt-[100px] md:pt-0">
      <div className="hidden md:block">
        <HeroSection2
          type="image"
          heading1="Luxury Chauffeur"
          heading2="Services"
          subheading={"Your Voyage into Elegance and Comfort"}
          btntext={"Book Now"}
          url="/assets/chauffeur/hero.png"
        />
      </div>

      <div className="mt-10 max-w-[1200px] mx-auto px-5">
        {/* <SectionHeading title={'Our Services'} description={''} />
        <div className="container mx-auto mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
            {data.map((e, index) => (
              <CardSq data={e} key={index} />
            ))}
          </div>
        </div> */}
        <div className="my-9 md:my-16 px-0 md:px-6 max-w-[1200px] mx-auto">
          <Ourfleets />
        </div>
        {/* cars */}
        <InfinitScroll />

        <div className="my-9 md:my-16 px-6 max-w-[1200px] mx-auto">
          <WhyusChauffer />
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
