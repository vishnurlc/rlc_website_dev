"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedBtn from "../premiumjetski/AnimatedBtn";
import { usePathname } from "next/navigation";

function TopDestination() {
  const [currentUrl, setCurrentUrl] = useState();
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const data = [
    {
      title: "Turkey",
      image: "/assets/home/com/turkey.jpg",
    },
    {
      title: "Dubai",
      image: "/assets/home/com/dubai.jpg",
    },
    {
      title: "Maldives",
      image: "/assets/home/com/maldives.jpg",
    },
  ];
  if (currentUrl && currentUrl.includes(".com")) {
    return (
      <div className="px-4 pt-36  bg-white">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[350px]">
          {data.map((e, index) => (
            <Link href={"#"} key={index}>
              <motion.div
                className="relative w-full aspect-[1/1.5] max-h-[35vh] rounded overflow-hidden"
                whileHover={{
                  scale: 1.02,
                }}
              >
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  sizes="100vw"
                />
                <div className="absolute p-4 text-white w-full h-fit bottom-0 left-0 right-0 z-10">
                  <div>
                    <h2 className="uppercase mb-10 font-bold tracking-wide text-3xl text-center font-poppins">
                      {e.title}
                    </h2>
                  </div>

                  {/* <AnimatedBtn
                    text={"View More"}
                    msg={`I would like to book ${e.title} from Richy life Club`}
                    styles={"mt-2 px-2 py-1 bg-gold text-white rounded-sm"}
                  /> */}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="pt-32"> </div>;
  }
}

export default TopDestination;
