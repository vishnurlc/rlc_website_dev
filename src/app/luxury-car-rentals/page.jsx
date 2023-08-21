import { HeroSection, ListingComponent, SectionHeading } from "@/components";
import Marquee from "@/components/marquee/Marquee";
import MasonryGrid from "@/components/yachtrental/PictureGallery";
import React from "react";

async function getData() {
  let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/car-makes?populate=*`;

  try {
    const res = await fetch(api, { next: { revalidate: 10 } });
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

export default async function page() {
  const make = await getData();
  const carLogos = [
    "/assets/petpage/bear.png",
    "/assets/petpage/bear.png",
    "/assets/petpage/bear.png",
    "/assets/petpage/bear.png",
    "/assets/petpage/bear.png",
  ];

  return (
    <main>
      <h1 className="sr-only ">Luxury Car Rentals - Richylife Club</h1>
      <HeroSection
        posterurl={"/assets/rentacar/banner.png"}
        type={"video"}
        alt="Luxury Car rentals"
        url={"/assets/home/hero.mp4"}
      />
      <div className="mx-auto max-w-[1200px]">
        <ListingComponent
          variant={"car"}
          title={"Crafting Driving Experiences"}
          description={
            "Choose from Our Handpicked Selection of Luxurious Cars for an Unforgettable Ride"
          }
        />
      </div>
      <div className="container mx-auto mt-10">
        <Marquee images={make} />
      </div>
      <div className=" my-16 flex flex-col gap-9 md:gap-16">
        <SectionHeading
          title={"Picture Gallery"}
          description={
            "Duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat."
          }
        />
        <MasonryGrid />
      </div>
    </main>
  );
}
