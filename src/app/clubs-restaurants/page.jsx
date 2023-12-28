import { HeroSection } from "@/components";
import VideoSection from "@/components/home/VideoSection";
import React from "react";
import Image from "next/image";
import DesertSafariCard from "@/components/desertsafari/DesertSafariCard";
import ClubCard from "@/components/club/ClubCard";

export async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/club-packages?populate=*`,
      {
        next: { revalidate: 40 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("s", error);
    return {};
  }
}
async function page() {
  const desert = await getData();

  return (
    <div className="bg-black">
      <div>
        <HeroSection
          posterurl={"/assets/home/heroposter1.webp"}
          type={"video"}
          url={"https://admin.richylife.ae/rlchome.mp4"}
          btntext={"Experience Luxury"}
        />
      </div>

      <div className="bg-black reletive max-w-[1200px] mx-auto px-6">
        <h2 className="text-white text-3xl uppercase pt-10">
          New Nightlife Vision
        </h2>
        <div className="text-white">
          <div className="parent">
            <div className="div1 relative">
              <div className="p-2">
                <p className=" md:text-2xl py-5 w-3/4">
                  Exquisite beauty meets the future in a sensuous wonderland to
                  revolutionize Bangkok nightlife.
                </p>
                <p className=" md:pl-10">
                  Fuchsia is a sensory wonderland of alluring entertainment,
                  music, and fantasy like never before.
                </p>
              </div>
            </div>
            <div className="div2 relative">
              <Image
                src={"/assets/club/club1.jpg"}
                fill
                sizes="100vw"
                alt={"Richy life Club UAE"}
                priority
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="div3 relative">
              <div className="flex justify-between h-full">
                <Image
                  src={"/assets/club/club2.jpg"}
                  fill
                  sizes="100vw"
                  alt={"Richy life Club UAE"}
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="div4 relative">
              <div className="flex justify-between h-full">
                <Image
                  src={"/assets/club/club.png"}
                  fill
                  sizes="100vw"
                  alt={"Richy life Club UAE"}
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-10">
        {desert.data?.map((item, index) => (
          <ClubCard item={item} key={index} order={index} />
        ))}
      </div>
    </div>
  );
}

export default page;
