"use client";
import React from "react";
import Image from "next/image";
import Motionslider from "../ui/slidermotion/Motionslider";
import Link from "next/link";
import fetchData from "@/lib/feacthData";

const jetski = [
  {
    id: 9,
    name: "Mercedes benz",
    image:
      "/assets/chauffeur/2016-mercedes-benz-s-class-2015-mercedes-benz-s-class-maybach-maybach-removebg-preview.png",
    price: "360",
    link: "sedan",
  },
  {
    id: 9,
    name: "Rolls Royce",
    image: "/assets/chauffeur/rolls.png",
    price: "360",
    link: "sedan",
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
  const api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-cars?populate=*`;
  const { data, status } = fetchData(api);

  return (
    <div>
      {/* <SectionHeading title={`Our fleets`} mobile={false} /> */}
      <div className="mt-7 w-full overflow-hidden">
        <Motionslider>
          {jetski.map((item, index) => (
            <div key={index} id="selectDisable">
              <div className="relative  w-full min-w-[297px] aspect-[357/200] rounded-md">
                <Link
                  href={`/chauffeur-service/#cars${item.id}`}
                  className="select-none"
                  draggable="false"
                >
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
