import React from "react";
import InfinitScroll from "@/components/chaufferservice/InfinitScroll";
import ProductListing from "@/components/productListing/ProductListingMain";
import { HeroSection2 } from "@/components";
export const metadata = {
  title:
    "Luxury Clubs & Restaurants in Dubai | 200+ Luxury Clubs & Restaurants",
  description:
    "Discover Dubai's luxury nightlife with Richy Life Club. Cruise in style with our premium car rental service, offering a fleet of exotic cars—Bentleys, Ferraris, Lamborghinis—for an unforgettable driving experience. Elevate your evenings with our curated list of top Luxury Clubs & Restaurants. Indulge in exquisite dining and exclusive atmospheres, where opulence meets perfection. Experience Dubai's finest establishments with Richy Life Club.",
  keywords: [
    "Luxury Car Rental Dubai",
    "Exotic Car Hire",
    "Premium Car Rentals",
    "Exotic Car Rental Dubai",
    "High-End Car Rentals",
    "Nightlife",
    "Supercar Hire Dubai",
    "Rent Exotic Cars",
    "Luxury Clubs",
    "Dubai Luxury Car Hire",
    "Dubai luxury car rental",
    "luxury car hire",
    "exotic car rental.",
    " luxury Rolls-Royce rentals Dubai",
    "Bentley rentals Dubai",
    "luxury Maserati rentals Dubai",
    "Audi rentals Dubai",
    "Porsche rentals Dubai",
    "Lamborghini rentals Dubai",
    "Richy Life Club car rental",
    "richylife club rent a car",
  ],
  openGraph: {
    title:
      "Luxury Clubs & Restaurants in Dubai | 200+ Luxury Clubs & Restaurants",
    description:
      "Discover Dubai's luxury nightlife with Richy Life Club. Cruise in style with our premium car rental service, offering a fleet of exotic cars—Bentleys, Ferraris, Lamborghinis—for an unforgettable driving experience. Elevate your evenings with our curated list of top Luxury Clubs & Restaurants. Indulge in exquisite dining and exclusive atmospheres, where opulence meets perfection. Experience Dubai's finest establishments with Richy Life Club.",
    siteName: "Richy life Club",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/rentacar/opengraphimage.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/rentacar/opengraphimage.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

async function page() {
  return (
    <main>
      <HeroSection2
        type="image"
        heading1="Club and Restaurant"
        heading2="Services"
        subheading={"Your Voyage into Elegance and Comfort"}
        btntext={"Book Now"}
        url="/assets/chauffeur/hero.png"
      />

      <div className="max-w-[1200px] mx-auto px-0 md:px-6 pb-10">
        {/* <InfinitScroll fetchApi="club-packages" /> */}
        <ProductListing fetchApi="club-packages" />
      </div>
    </main>
  );
}

export default page;
