import React from "react";
import {
  CardServices,
  DestinationFilter,
  Herosectionbyz,
  SectionHeadingTwoLine,
} from "@/components";
import Link from "next/link";
import DestinationServiceFilter from "@/components/filters/DestinationServiceFilter";

async function getData(url) {
  let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${url}`;

  try {
    const res = await fetch(api, {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
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

export default async function page({ params, searchParams }) {
  // const destinationData = await getData(
  //   "destinations?fields[0]=name&fields[1]=slug&populate[cities][fields][0]=city&populate[cities][fields][1]=slug"
  // );
  // const serviceData = await getData(
  //   `services?populate=*&filters[destinations][name][$eq]=${searchParams.destination}&sort=order:asc`
  // );
  // console.log("working", serviceData);

  // const DestinationData = [
  //   {
  //     name: "UAE",
  //     slug: "uae",
  //     desc: "The UAE captivates with its blend of modern marvels and timeless traditions, showcasing dazzling skyscrapers alongside serene desert landscapes. Discover a world of luxury and innovation where ancient heritage meets cutting-edge sophistication.",
  //     heading1: "Luxury Redefined,",
  //     heading2: "Elegance Perfected",
  //   },
  //   {
  //     name: "TURKIYE",
  //     slug: "turkiye",
  //     desc: "Turkey offers a mesmerizing blend of rich history and stunning landscapes, from ancient ruins to breathtaking coastlines. Experience a cultural tapestry woven with vibrant traditions and unparalleled natural beauty in this enchanting destination.",
  //     heading1: "Where Timeless Wonders",
  //     heading2: "Meet Modern Splendor",
  //   },
  //   {
  //     name: "MALDIVES",
  //     slug: "maldives",
  //     desc: "The Maldives enchants with its pristine turquoise waters and overwater bungalows, creating a paradise of unparalleled beauty. Bask in the serene seclusion of its islands, where each moment is a perfect blend of luxury and natural splendor.",
  //     heading1: "Pure Luxury, ",
  //     heading2: "Infinite Serenity",
  //   },
  // ];
  // const result = DestinationData.find(
  //   (e) => e.slug === searchParams.destination
  // );

  return (
    <div>
      <main className="overflow-hidden bg-[#F8F8F8]">
        <h1 className="sr-only">
          Richy life Club - Experience Luxury in Dubai
        </h1>
        <Herosectionbyz
          type={"image"}
          heading1={"Pure Luxury,"}
          heading2={"Infinite Serenity"}
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
        </div>
      </main>
    </div>
  );
}
