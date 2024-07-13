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
        </div>
      </main>
    </div>
  );
}
