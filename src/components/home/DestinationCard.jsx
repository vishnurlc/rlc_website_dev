import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedHeroText from "../herosection/AnimatedHeroText";
import AnimatedBtn from "../premiumjetski/AnimatedBtn";

function DestinationCard() {
  const data = [
    {
      title: "Turkey",
      image: "/assets/home/com/turkey.jpg",
      link: "turkiye",
      sub: "Bodrum - Antalya - Cappadocia",
      des: "Discover unparalleled luxury experiences in Turkey's most iconic destinations.",
    },
    {
      title: "UAE",
      image: "/assets/home/com/dubai.jpg",
      link: "uae",
      sub: "Dubai - Adu Dhabi",
      des: "Embark on a journey of opulence in the UAE's most exclusive experiences!",
    },
    {
      title: "Maldives",
      image: "/assets/home/com/maldives.jpg",
      link: "maldives",
      des: "Immerse yourself in the ultimate luxury adventures across the Maldives' stunning beauty.",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-7">
        {data.map((e, index) => (
          <Link href={`en/service?destination=${e.link}`} key={e.title}>
            <div
              className="min-h-[470px] flex flex-col"
              // style={{
              //   boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
              // }}
            >
              <Image
                src={e.image}
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
              <div className="px-6 md:px-0 py-4 font-sans flex-auto flex justify-between flex-col">
                <div className="h-[144px] overflow-hidden">
                  <h4 className="text-xl md:text-5xl">{e.title}</h4>
                  <p className="text-[#CBB87E] h-7">{e.sub ? e.sub : ""}</p>
                  <p className="text-gray-500">{e.des}</p>
                </div>
              </div>
              <div className="px-6 md:px-0">
                <div className="pt-4">
                  <button
                    className={`px-6 py-2 hover:scale-105 transition-all w-fit text-black bg-opacity-80 rounded-sm border border-solid border-gray-500 border-opacity-50 hover:bg-[#CBB87E] hover:border-white`}
                    // ref={buttonRef}
                  >
                    Discover Now
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DestinationCard;
