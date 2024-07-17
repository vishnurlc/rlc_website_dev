import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedHeroText from "../herosection/AnimatedHeroText";
import AnimatedBtn from "../premiumjetski/AnimatedBtn";

function DestinationCard() {
  const data = [
    {
      title: "Turkiye",
      image: "/assets/home/com/turkey.jpg",
      link: "turkiye",
      sub: "Bodrum - Antalya - Cappadocia",
    },
    {
      title: "UAE",
      image: "/assets/home/com/dubai.jpg",
      link: "uae",
      sub: "Dubai - Adu Dhabi",
    },
    {
      title: "Maldives",
      image: "/assets/home/com/maldives.jpg",
      link: "maldives",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-7">
        {data.map((e, index) => (
          <Link
            href={`en/service?destination=${e.link}`}
            key={"destination" + index}
          >
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
                  <p className="text-[#CBB87E] ">{e.sub ? e.sub : ""}</p>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    veritatis earum excepturi accusantium asperiores rem sint
                    error cumque quas. Eaque aliquid incidunt dolore.
                  </p>
                </div>
              </div>
              <div className="px-6 md:px-0">
                <AnimatedBtn
                  styles="w-fit text-black py-2 bg-opacity-80 rounded-sm border border-solid border-gray-500 border-opacity-50 hover:bg-[#CBB87E] hover:border-white"
                  text={"Discover Now"}
                  msg={"Hi, I would like to know about your services."}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DestinationCard;
