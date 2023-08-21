import { ContactForm, HeroSection } from "@/components";
import React from "react";

const page = () => {
  return (
    <main>
      <h1 className="sr-only">Contact Us - Richylife Club</h1>
      <HeroSection
        posterurl={"/assets/chauffer/hero.png"}
        type={"video"}
        alt="Luxury Car rentals"
        url={"/assets/home/hero.mp4"}
      />

      <ContactForm title={"Contact Us"} />
    </main>
  );
};

export default page;
