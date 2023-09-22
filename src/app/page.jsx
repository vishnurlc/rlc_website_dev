import {
  ContactForm,
  HeroSection,
  OurServices,
  ServiceBanner,
  Testimonials,
} from "@/components";
import Aboutsection from "@/components/home/aboutsection";
import Faq from "@/components/home/faq";

export const metadata = {
  title: "Welcome to Richylife Club - Luxury Experiences",
  description:
    "Experience ultimate luxury with Richylife Club: premium car rentals, private yacht charters, water sports, and more. Redefine luxury today!",
  keywords: [
    "Luxury Experiences Dubai",
    "Luxury Car Rentals",
    "Yacht Rentals Dubai",
    "Water Sports",
    "Luxury Lifestyle",
    "Dubai Luxury",
    "Exotic Experiences",
    "Exclusive Services",
    "High-End Rentals",
    "VIP Experiences",
    "Luxury Adventures",
    "Dubai UAE",
    "Premium Leisure",
    "Travel and Leisure",
    "Bespoke Services",
    "Dubai Holidays",
    "Luxury Travel",
    "Richylife Club",
  ],
  openGraph: {
    title: "Welcome to Richylife Club - Luxury Experiences",
    description:
      "Experience luxury like never before with Richylife Club. Explore luxury car rentals, yacht rentals, water sports, and more.",
    siteName: "Richylife Club",
    images: [
      {
        url: `${process.env.WEB_URL}/assets/home/opengraphimage.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/home/opengraphimage.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <h1 className="sr-only">
        Welcome to Richylife Club - Experience Luxury in Dubai
      </h1>
      <HeroSection
        posterurl={"/assets/home/heroposter1.webp"}
        type={"video"}
        url={"https://admin.richylife.ae/rlchome.mp4"}
        btntext={"Experience Luxury"}
      />
      <OurServices />
      <Aboutsection />

      <ServiceBanner />
      <Faq category={"car"} />
      <Testimonials />
      <div className="my-9 md:my-16 px-6 ">
        <ContactForm
          title={"Get In touch"}
          description={"Experience Elegance & Convenience"}
        />
      </div>
    </main>
  );
}
