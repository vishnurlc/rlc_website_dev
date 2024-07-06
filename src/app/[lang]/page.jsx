import dynamic from "next/dynamic";
import {
  HeroSection,
  HeroSection2,
  Herosectionbyz,
  OurServices,
  SectionHeading,
  SectionHeadingTwoLine,
} from "@/components";
import VideoSection from "@/components/home/VideoSection";
import TopDestination from "@/components/home/TopDestination";
import { getDictionary } from "@/dectionaries";
import herosectionbyz from "@/components/herosection/Herosectionbyz";

const Aboutsection = dynamic(() => import("@/components/home/aboutsection"));
const Blog = dynamic(() => import("@/components/home/Blog"));
const ServiceBanner = dynamic(() => import("@/components/home/ServicesBanner"));
const Faq = dynamic(() => import("@/components/home/faq"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const ContactForm = dynamic(() =>
  import("@/components/formComponent/ContactForm")
);
export const metadata = {
  title: "Richy Life Club - Premium LifeStyle Club",
  description:
    "Experience ultimate luxury with Richy life Club: premium car rentals, private yacht charters, water sports, and more. Redefine luxury today!",
  keywords: [
    "Luxury Experiences Dubai",
    "Luxury Car Rentals dubai",
    "Yacht Rentals Dubai",
    "luxury yacht charter Dubai",
    "Luxury Lifestyle",
    "Exclusive Services",
    "VIP Experiences",
    "Luxury Adventures",
    "Travel and Leisure",
    "Dubai Holidays",
    "private jet rentals Dubai",
    "private jet business flights Dubai",
    "private jet tours Dubai",
    "Richy Life Club",
    "richylife club",
  ],
  openGraph: {
    title: "Richy Life Club - Premium LifeStyle Club",
    description:
      "Experience luxury like never before with Richy life Club. Explore luxury car rentals, yacht rentals, water sports, and more.",
    siteName: "Richy life Club",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/home/opengraphimage.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/home/opengraphimage.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Home({ params }) {
  const { lang } = params;
  const languageData = await getDictionary(lang);
  return (
    <main className="overflow-hidden">
      <h1 className="sr-only">Richy life Club - Experience Luxury in Dubai</h1>
      <Herosectionbyz
        type={"image"}
        heading1={"ELEVATE"}
        heading2={"YOUR ANY DAY..."}
        subheading={"Experience the sea breeze in luxury"}
        posterurl={"/assets/home/background.png"}
        btntext={"Book your trip"}
        url={"/assets/home/background.png"}
        overlay={1}
      />
      <SectionHeadingTwoLine
        title={"DISCOVER OUR"}
        title1={"DESTINATIONS"}
        mobile={true}
      />
      <TopDestination />
      <OurServices />
      <HeroSection
        alt={"Richy Life Club Luxury Lifestyle Networking Destination Compnay"}
        posterurl={"/assets/home/heroposter.png"}
        url={"https://admin.richylife.ae/rlchome2.mp4"}
        type={"video"}
        btntext={"Explore More"}
      />
      <Aboutsection languageData={languageData} />
      {/* <VideoSection
        posterurl={'/assets/home/heroposter1.webp'}
        url={'https://admin.richylife.ae/rlchome.mp4'}
      /> */}
      <ServiceBanner />
      <Blog />
      <Testimonials />
      <div className="my-9 md:my-16 px-6 ">
        <ContactForm
          title={"Get In touch"}
          description={"Experience Elegance & Convenience"}
        />
      </div>
      <Faq category={"car"} />
    </main>
  );
}
