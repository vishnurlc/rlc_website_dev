import { HeroSection, SectionHeading } from "@/components";
import CardSq from "@/components/ui/card/CardSq";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      title: "Airport Transfer",
      image: "/assets/home/heroposter.png",
    },
    {
      title: "Half/Full Day",
      image: "/assets/home/heroposter.png",
    },
    {
      title: "Dubai City Tour",
      image: "/assets/home/heroposter.png",
    },
    {
      title: "A-B Transfer",
      image: "/assets/home/heroposter.png",
    },
    {
      title: "Events",
      image: "/assets/home/heroposter.png",
    },
  ];
  return (
    <main>
      <h1 className="sr-only">
        Chauffer & Airport Transfer Services - Richylife Club
      </h1>
      <HeroSection
        posterurl={"/assets/chauffer/hero.png"}
        type={"video"}
        alt="Luxury Car rentals"
        url={"/assets/home/hero.mp4"}
      />

      <div className="mt-10 max-w-[1200px] mx-auto px-5">
        <SectionHeading title={"Our Services"} description={""} />
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 justify-items-center gap-8">
            {data.map((e, index) => (
              <CardSq key={index} title={e.title} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
