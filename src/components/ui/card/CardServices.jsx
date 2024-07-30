"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
import { useSearchParams } from "next/navigation";
import { Button } from "../button/Button";
function CardServices({ service, query = "uae" }) {
  const [firstHalf, setFirstHalf] = useState();
  const [secondHalf, SetSecondHalf] = useState();

  const searchParams = useSearchParams();
  // const query = searchParams.get("destination");

  useEffect(() => {
    const midPoint = Math.ceil(service?.length / 2);
    const firstHalf1 = service?.slice(0, midPoint);
    const secondHalf1 = service?.slice(midPoint, service?.length);
    setFirstHalf(firstHalf1);
    SetSecondHalf(secondHalf1);
    console.log("end sectio useEfect card");
  }, [service]);
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-0">
        <div className="mt-8 pb-10 md:grid grid-cols-2 gap-1 md:gap-16 h-auto">
          <div className="grid pl-0 md:pl-16">
            {firstHalf?.map((serviceItem, index) => (
              <ServiceItem
                serviceItem={serviceItem}
                key={`${serviceItem}_${index}`}
                query={query}
              />
            ))}
          </div>
          <div className="grid md:mt-40 pr-0 md:pl-16">
            {secondHalf?.map((serviceItem) => (
              <ServiceItem
                serviceItem={serviceItem}
                key={`${serviceItem.id}_${serviceItem}`}
                query={query}
              />
            ))}
            <div className="min-h-[50px] md:min-h-[190px] relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceItem = ({ serviceItem, query }) => (
  <Link
    href={`/en${serviceItem.attributes.url}?destination=${query}`}
    key={serviceItem.id}
  >
    <div className={`md:min-h-[270px] flex flex-col`}>
      <Image
        src={serviceItem.attributes.image.data.attributes.url}
        width={383}
        height={215}
        alt="Title tags"
        className="rounded-none md:rounded md:min-w-[383px]"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "auto",
          aspectRatio: "calc(383/215)",
        }}
      />
      <div className="py-4 font-sans flex-auto flex justify-between flex-col">
        <div className="overflow-hidden">
          <h4 className="text-md md:text-xl font-bold uppercase">
            {serviceItem.attributes.name}
          </h4>
          <p className="text-gray-500 text-base">
            {serviceItem.attributes.subheading}
          </p>
        </div>
        <div className="pt-4">
          <button
            className={`px-6 py-2 hover:scale-105 transition-all w-fit text-black bg-opacity-80 rounded-sm border border-solid border-gray-500 border-opacity-50 hover:bg-[#CBB87E] hover:border-white`}
            // ref={buttonRef}
          >
            Explore more
          </button>
        </div>
      </div>
    </div>
  </Link>
);

export default CardServices;
