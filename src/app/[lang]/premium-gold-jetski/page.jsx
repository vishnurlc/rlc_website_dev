import { ContactForm, HeroSection2, SectionHeading } from "@/components";
import Image from "next/image";

import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
import Link from "next/link";

export const metadata = {
  title: "Premium Gold Jetski Rental in Dubai ",
  description: `Experience the ultimate luxury with premium gold jetski rentals in Dubai. Enjoy the thrill of riding high-performance watercrafts and explore Dubai&apos;s waters in style with Richy life Club.`,
  keywords: [
    "Premium Gold Jetski Rental Dubai",
    "Exclusive Jetski Experiences",
    "Luxury Jetski Hire",
    "High-Performance Watercrafts",
    "Gold Jetski Adventure",
    "Luxury Watersports",
    "Adrenaline Watersports",
    "Dubai Jetski Tours",
    "Watercraft Rental Dubai",
    "Jetskiing Excursions",
    "Luxury Jetskiing",
    "Jetski Rental Packages",
    "Dubai Watersports",
    "Richy life Club",
  ],
  openGraph: {
    title: "Premium Gold Jetski Rental in Dubai",
    description: `Experience the ultimate luxury with premium gold jetski rentals in Dubai. Enjoy the thrill of riding high-performance watercrafts and explore Dubai&apos;s waters in style with Richy life Club.`,

    siteName: "Richy life Club",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/premiumgoldjetski/goldenjetski.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/premiumgoldjetski/goldenjetski.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <main>
      <HeroSection2
        type={"image"}
        heading1={"Golden Jetski"}
        heading2={"Rental in Dubai"}
        subheading={
          "Ignite Your Adventurous Spirit with the Golden Jetski Experience"
        }
        url={"/assets/premiumgoldjetski/goldenjetski.png"}
        btntext={"Book your ride"}
        overlay={0}
      />

      <h1 className="sr-only"> Premium Golden Jetski Rental </h1>
      <div className="px-6 py-16 bg-[#111618]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            title={"Golden Jetski Delight"}
            description={" Unveiling the Ultimate Thrills and Hourly Rates"}
            title_color={"gold"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-16">
            <div className="">
              <div className="text-white mb-7">
                <h2 className="text-4xl mb-6">
                  Luxury and Speed
                  <br />
                  Yamaha&apos;s Golden Jetski
                </h2>
                <p className="text-gray-500 text-base tracking-wide ">
                  Introducing the epitome of aquatic opulence - the Yamaha
                  Golden Jetski. This masterpiece of engineering combines sleek
                  design with unparalleled performance, promising an
                  adrenaline-packed ride like no other. Feel the rush as you
                  take control of this powerful beast, capable of reaching a top
                  speed of 67 mph, ensuring an exhilarating ride that will leave
                  you craving for more.
                </p>
              </div>

              <AnimatedBtn
                text={"Book Now"}
                styles={"bg-gold text-white rounded-md"}
                msg={`I'm writing to you today to inquire about the Golden Jetski. I'm interested in learning more about its specifications, price, and availability.`}
              />
            </div>
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src={"/assets/premiumgoldjetski/goldenjetski.png"}
                alt="Yamaha Golden Jetski Rental Dubai"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="jetskigradient absolute inset-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 md:my-16">
        <ContactForm
          title={"Unleash Luxury and Speed"}
          description={"Book now for an Unforgettable Jetski Adventure"}
        />
      </div>
    </main>
  );
};

export default page;
