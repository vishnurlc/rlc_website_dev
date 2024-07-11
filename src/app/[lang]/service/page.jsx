import React from "react";
import {
  CardServices,
  DestinationFilter,
  Herosectionbyz,
  SectionHeadingTwoLine,
} from "@/components";
import Link from "next/link";

function page({ params }) {
  console.log(params);

  return (
    <div>
      <main className="overflow-hidden bg-[#F8F8F8]">
        <h1 className="sr-only">
          Richy life Club - Experience Luxury in Dubai
        </h1>
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
        <div>
          <div>
            <DestinationFilter />
          </div>

          <CardServices />
        </div>
      </main>
    </div>
  );
}

export default page;
