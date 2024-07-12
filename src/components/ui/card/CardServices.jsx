"client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
function CardServices({ service }) {
  console.log("working", service);
  const data = [
    {
      title: "Premium Transfer Service",
      image: "/assets/home/com/turkey.jpg",
      link: "services",
      sub: "Bodrum - Antalya - Cappadocia",
    },
    {
      title: "Premium Transfer Service",
      image: "/assets/home/com/turkey.jpg",
      link: "services",
      sub: "Bodrum - Antalya - Cappadocia",
    },
    {
      title: "Premium Transfer Service",
      image: "/assets/home/com/turkey.jpg",
      link: "services",
      sub: "Bodrum - Antalya - Cappadocia",
    },
    {
      title: "Private Jet CHarter",
      image: "/assets/home/com/dubai.jpg",
      link: "services",
      sub: "Dubai - Adu Dhabi",
    },
    {
      title: "Premium Transfer Service",
      image: "/assets/home/com/maldives.jpg",
      link: "services",
    },
    {
      title: "Premium Transfer Service",
      image: "/assets/home/com/turkey.jpg",
      link: "services",
      sub: "Bodrum - Antalya - Cappadocia",
    },
  ];
  const data2 = [
    {
      title: "Private Jet CHarter",
      image: "/assets/home/com/dubai.jpg",
      link: "services",
      sub: "Dubai - Adu Dhabi",
    },
    {
      title: "Premium Transfer Service",
      image: "/assets/home/com/maldives.jpg",
      link: "services",
    },
    {
      title: "Premium Transfer Service",
      image: "/assets/home/com/maldives.jpg",
      link: "services",
    },
  ];
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-0">
        {/* <div className="pb-10 grid grid-cols-1 md:grid-cols-2 mt-8 gap-7">
          {data.map((e, index) => (
            <Link href={`/`} key={index}>
              <div
                className={`min-h-[470px] flex flex-col ${
                  index % 2 === 1 ? "md:mt-20" : ""
                }`}
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
                <div className="py-4 font-sans flex-auto flex justify-between flex-col">
                  <div className="overflow-hidden">
                    <h4 className="text-xl md:text-xl font-bold uppercase">
                      {e.title}
                    </h4>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <AnimatedBtn
                    styles="w-fit text-black py-2 bg-opacity-80 rounded-sm border border-solid border-gray-500 border-opacity-50 hover:bg-[#CBB87E] hover:border-white"
                    text={"Explore More"}
                    msg={"Hi, I would like to know about your services."}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        {/* ss */}

        <div class="mt-8 pb-10 grid grid-cols-2 md:grid-cols-2 gap-4">
          <div class="grid gap-4">
            {service.slice(0, Math.ceil(service.length / 2)).map((e, index) => (
              <Link href={`/`} key={index}>
                <div className={`md:min-h-[470px] flex flex-col `}>
                  <Image
                    src={e.attributes.image.data.attributes.url}
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
                        {e.attributes.name}
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
            ))}
            {/* {data.map((e, index) => (
              <Link href={`/`} key={index}>
                <div className={`md:min-h-[470px] flex flex-col `}>
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
                  <div className="py-4 font-sans flex-auto flex justify-between flex-col">
                    <div className="overflow-hidden">
                      <h4 className="text-md md:text-xl font-bold uppercase">
                        {e.title}
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
            ))} */}
          </div>
          <div class="grid gap-4 items-center pt-40">
            {service
              .slice(Math.ceil(service.length / 2), service.length)
              .map((e, index) => (
                <div href={`/`} key={index}>
                  <div
                    className={`max-h-[470px] flex flex-col ${
                      index === 0 ? "" : ""
                    } `}
                  >
                    <Image
                      src={e.attributes.image.data.attributes.url}
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
                          {e.attributes.name}
                        </h4>
                        <p className="text-gray-500 text-xs">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
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
                </div>
              ))}
            <div className="min-h-[280px] flex flex-col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardServices;
