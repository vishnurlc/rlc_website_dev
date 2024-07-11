"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { SectionHeadingTwoLine } from "..";

function DestinationFilter() {
  const searchParams = useSearchParams();
  const [activeDestination, setActiveDestination] = useState(
    searchParams.get("destination")
  );

  const handelPramsChange = (destination) => {
    // Update URL without triggering a full page reload
    window.history.pushState({}, "", "?destination=" + destination);
    setActiveDestination(destination);
    console.log(activeDestination);
  };
  const DestinationData = [
    {
      name: "UAE",
      slug: "uae",
    },
    {
      name: "TURKIYE",
      slug: "turkiye",
    },
    {
      name: "MALDIVES",
      slug: "maldives",
    },
  ];
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-0 pb-10">
        <div className="flex justify-between pt-5">
          {DestinationData.map((e, index) => (
            <h3
              key={index}
              className={`min-w-[200px]  text-3xl font-bold text-center cursor-pointer border-b-2 border-black  ${
                activeDestination === e.slug ? "opacity" : "opacity-50"
              }`}
              onClick={() => handelPramsChange(e.slug)}
            >
              {e.name}
            </h3>
          ))}
        </div>
      </div>
      <div className="uppercase">
        <SectionHeadingTwoLine
          title={`DISCOVER ${activeDestination}'s`}
          title1={"DESTINATIONS"}
          mobile={true}
        />
      </div>
    </div>
  );
}

export default DestinationFilter;
