"client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
import { useSearchParams } from "next/navigation";
function CardServices({ service }) {
  const midPoint = Math.ceil(service?.length / 2);
  const firstHalf = service?.slice(0, midPoint);
  const secondHalf = service?.slice(midPoint, service?.length);
  const searchParams = useSearchParams();
  const query = searchParams.get("destination");
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-0">
        <div className="mt-8 pb-10 grid grid-cols-2 gap-16 h-auto">
          <div className="grid pl-0 md:pl-16">
            {firstHalf?.map((serviceItem) => (
              <ServiceItem
                serviceItem={serviceItem}
                key={serviceItem.id}
                query={query}
              />
            ))}
          </div>
          <div className="grid mt-40 pr-0 md:pl-16">
            {secondHalf?.map((serviceItem) => (
              <ServiceItem
                serviceItem={serviceItem}
                key={serviceItem.id}
                query={query}
              />
            ))}
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
        width={400}
        height={300}
        alt="Title tags"
        className="rounded-none md:rounded"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "auto",
          aspectRatio: "calc(400/300)",
        }}
      />
      <div className="py-4 font-sans flex-auto flex justify-between flex-col">
        <div className="overflow-hidden">
          <h4 className="text-md md:text-xl font-bold uppercase">
            {serviceItem.attributes.name}
          </h4>
          <p className="text-gray-500 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="pt-4">
          <AnimatedBtn
            styles="w-fit text-black py-2 bg-opacity-80 rounded-sm border border-solid border-gray-500 border-opacity-50 hover:bg-[#CBB87E] hover:border-white"
            text={"Explore More"}
            msg={"Hi, I would like to know about your services."}
          />
        </div>
      </div>
    </div>
  </Link>
);

export default CardServices;
