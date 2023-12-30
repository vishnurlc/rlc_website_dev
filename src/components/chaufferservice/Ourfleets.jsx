"use client";
import React from "react";
import { SectionHeading } from "..";
import Image from "next/image";
import { Button } from "../ui/button/Button";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useCurrency } from "@/context/currencyContext";
import { usePathname } from "next/navigation";
import Motionslider from "../ui/slidermotion/motionslider";

const jetski = [
  {
    name: "sedan",
    image: "/assets/chauffeur/sedan.avif",
    price: "360",
    link: "sedan",
  },
  {
    name: "van",
    image: "/assets/chauffeur/van.jpeg",
    price: "360",
    link: "van",
  },
  {
    name: "SUV",
    image: "/assets/chauffeur/suv.avif",
    price: "360",
    link: "suv",
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
      <div className="mt-7">
        <Motionslider>
          {jetski.map((item, index) => (
            <div
              className="relative  w-full min-w-[227px] aspect-[357/406] rounded-md overflow-hidden"
              key={index}
            >
              <Link href={`/chauffeur-service/ss?body=${item.link}`}>
                <Image
                  src={item.image}
                  alt={`${item.name} rental | Richy life Club`}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Link>
              <div className="absolute p-4 text-white w-full h-fit  bottom-0 left-0 right-0 z-10">
                <div>
                  <h2 className="uppercase font-medium tracking-wide text-sm md:text-xl font-poppins">
                    {item.name}
                  </h2>
                  {item.price && (
                    <span className="text-gray-400 text-sm">
                      {/* Starting from {convertPrice(item.price)} */}
                    </span>
                  )}
                </div>

                {/* <Button className="text-sm mt-4 md:px-4 py-2 bg-gold text-white rounded-sm">
                  Book Now
                </Button> */}
              </div>
            </div>
          ))}
        </Motionslider>
      </div>
    </div>
  );
};

export default Ourfleets;
