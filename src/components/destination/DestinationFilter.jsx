"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SectionHeadingTwoLine } from "..";
import DestinationServiceFilter from "../filters/DestinationServiceFilter";

function DestinationFilter() {
  const searchParams = useSearchParams();
  const [destination, setDestination] = useState(
    searchParams.get("destination")
  );
  const [activeDestination, setActiveDestination] = useState();

  const handelPramsChange = (destination) => {
    // Update URL without triggering a full page reload
    window.history.pushState({}, "", "?destination=" + destination.slug);
    setActiveDestination(destination);
  };

  const DestinationData = [
    {
      name: "UAE",
      slug: "uae",
      desc: "The UAE captivates with its blend of modern marvels and timeless traditions, showcasing dazzling skyscrapers alongside serene desert landscapes. Discover a world of luxury and innovation where ancient heritage meets cutting-edge sophistication.",
    },
    {
      name: "TURKIYE",
      slug: "turkiye",
      desc: "Turkey offers a mesmerizing blend of rich history and stunning landscapes, from ancient ruins to breathtaking coastlines. Experience a cultural tapestry woven with vibrant traditions and unparalleled natural beauty in this enchanting destination.",
    },
    {
      name: "MALDIVES",
      slug: "maldives",
      desc: "The Maldives enchants with its pristine turquoise waters and overwater bungalows, creating a paradise of unparalleled beauty. Bask in the serene seclusion of its islands, where each moment is a perfect blend of luxury and natural splendor.",
    },
  ];

  useEffect(() => {
    if (destination) {
      const result = DestinationData.find((e) => e.slug === destination);
      setActiveDestination(result);
    }
  }, [destination]);
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-0 pb-10">
        <div className="flex justify-between pt-5">
          {DestinationData.map((e, index) => (
            <h3
              key={index}
              className={`min-w-[100px] md:min-w-[200px]  md:text-3xl font-bold text-center cursor-pointer border-b-2 border-black pb-2 ${
                activeDestination?.slug === e.slug ? "opacity" : "opacity-50"
              }`}
              onClick={() => handelPramsChange(e)}
            >
              {e.name}
            </h3>
          ))}
        </div>
      </div>
      <div className="uppercase">
        <SectionHeadingTwoLine
          title={`DISCOVER ${activeDestination?.slug}`}
          title1={"With Richy Life Club"}
          description={activeDestination?.desc}
          mobile={true}
        />
      </div>

      <DestinationServiceFilter query={activeDestination?.slug} />
    </div>
  );
}

export default DestinationFilter;
