"client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
function CardServices({ service }) {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-0">
        <div class="mt-8 pb-10 grid grid-cols-2 md:grid-cols-2 gap-16">
          <div class="grid gap-4 pl-0 md:pl-16">
            {service.slice(0, Math.ceil(service.length / 2)).map((e, index) => (
              <Link href={e.attributes.url} key={index}>
                <div className={`md:min-h-[270px] flex flex-col `}>
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
          </div>
          <div class="grid gap-4 items-center pt-40 pr-0 md:pl-16">
            {service
              .slice(Math.ceil(service.length / 2), service.length)
              .map((e, index) => (
                <Link href={e.attributes.url} key={index}>
                  <div
                    className={`max-h-[270px] flex flex-col ${
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
                </Link>
              ))}
            <div className="min-h-[150px] flex flex-col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardServices;
