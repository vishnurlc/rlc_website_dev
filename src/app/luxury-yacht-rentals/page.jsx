import { HeroSection, ListingComponent, SectionHeading } from "@/components";
import Filter from "@/components/ui/filter/filter";
import MasonryGrid from "@/components/yachtrental/PictureGallery";
import React from "react";
// import dynamic from 'next/dynamic';
// const DynamicAnimatedCarousel = dynamic(
//   () => import('@/components/yachtrental/AnimatedCarousel'),
//   {
//     loading: () => <div>Loading...</div>,
//     ssr: false,
//   }
// );
const page = () => {
  return (
    <main>
      <h1 className="sr-only ">Luxury Yacht Rentals - Richylife Club</h1>
      <HeroSection
        posterurl={"/assets/home/heroposter.png"}
        type={"video"}
        url={"/assets/home/hero.mp4"}
      />
      <Filter />
      <div className="mx-auto max-w-[1200px]">
        <ListingComponent />
      </div>
      <div className=" my-16 flex flex-col gap-9 md:gap-16">
        <SectionHeading
          title={"Picture Gallery"}
          description={
            "Duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat."
          }
        />

        {/* <DynamicAnimatedCarousel
          data={[
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
            '/assets/home/heroposter.png',
          ]}
        /> */}
        <MasonryGrid />
      </div>
    </main>
  );
};

export default page;
