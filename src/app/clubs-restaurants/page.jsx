import React from "react";
import InfinitScroll from "@/components/chaufferservice/InfinitScroll";
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

export async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/club-packages?populate=*`,
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
async function page() {
  const desert = await getData();

  return (
    <main className="pt-[150px]">
      <div>
        {/* <HeroSection
          posterurl={"/assets/home/heroposter1.webp"}
          type={"video"}
          url={"https://admin.richylife.ae/rlchome.mp4"}
          btntext={"Experience Luxury"}
        /> */}
      </div>

      <div className="max-w-[1200px] mx-auto px-0 md:px-6 pb-10">
        <InfinitScroll fetchApi="club-packages" />
        {/* {desert.data?.map((item, index) => (
          <ClubCard data={item} key={index} order={index} />
        ))} */}
      </div>
    </main>
  );
}

export default page;
