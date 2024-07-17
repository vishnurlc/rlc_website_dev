import { HeroSection2, ProductListing } from "@/components";
import InfinitScroll from "@/components/chaufferservice/InfinitScroll";

import React from "react";

const page = () => {
  return (
    <main className="pt-[108px] md:pt-0">
      <HeroSection2
        type={"image"}
        heading1={"Luxury Car"}
        heading2={"Rental in Dubai"}
        subheading={"Experience luxury on wheels"}
        posterurl={"/assets/rentacar/banner.png"}
        btntext={"Book your ride"}
        url={"/assets/rentacar/banner.png"}
        overlay={1}
      />
      <div className="md:mt-10 mx-auto max-w-[1200px]">
        {/* <InfinitScroll fetchApi={"hotels"} /> */}
        <ProductListing />
      </div>
    </main>
  );
};

export default page;
