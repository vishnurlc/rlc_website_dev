"use client";
import React from "react";
import { SectionHeading } from "..";
import Image from "next/image";
import { useCurrency } from "@/context/currencyContext";
import { usePathname } from "next/navigation";
import Motionslider from "../ui/slidermotion/Motionslider";
import Link from "next/link";

const jetski = [
  {
    id: 1,
    name: "Mercedes benz",
    image:
      "/assets/chauffeur/2016-mercedes-benz-s-class-2015-mercedes-benz-s-class-maybach-maybach-removebg-preview.png",
    price: "360",
    link: "sedan",
  },
  {
    id: 2,
    name: "Rolls Royce",
    image: "/assets/chauffeur/8d1f807192f03bc85b03d74893e69c09.png",
    price: "360",
    link: "sedan",
  },
  {
    id: 3,
    name: "Genesis G80",
    image: "/assets/chauffeur/G80 EXT.png",
    price: "360",
    link: "van",
  },
  {
    id: 4,
    name: "Lexus",
    image: "/assets/chauffeur/ES300H.jpeg",
    price: "360",
    link: "sedan",
  },
];

const Ourfleets = () => {
  const { selectedCurrency, conversionRates } = useCurrency();
  const path = usePathname();

  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat("ae", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };
  return (
    <div>
      <SectionHeading title={`Our fleets`} mobile={false} />
      <div className="mt-7 w-full overflow-hidden">
        <Motionslider>
          {jetski.map((item, index) => (
            <div key={index} id="selectDisable">
              <div className="relative  w-full min-w-[297px] aspect-[357/200] rounded-md">
                <Link href={`/chauffeur-service/${item.id}`}>
                  <Image
                    src={item.image}
                    alt={`${item.name} rental | Richy life Club`}
                    fill
                    style={{
                      objectFit: "cover",
                      userSelect: "none !important",
                    }}
                    id="selectDisable"
                    draggable="false"
                  />
                </Link>
                <div className="absolute p-4 text-black w-full h-fit  bottom-0 left-0 right-0 z-10">
                  <div>
                    {/* {item.price && (
                    <span className="text-gray-400 text-sm">
                      Starting from {convertPrice(item.price)}
                    </span>
                  )} */}
                  </div>

                  {/* <Button className="text-sm mt-4 md:px-4 py-2 bg-gold text-white rounded-sm">
                  Book Now
                </Button> */}
                </div>
              </div>
              <h2 className="uppercase text-center font-medium tracking-wide text-sm md:text-xl font-poppins">
                {item.name}
              </h2>
            </div>
          ))}
        </Motionslider>
      </div>
    </div>
  );
};

export default Ourfleets;
