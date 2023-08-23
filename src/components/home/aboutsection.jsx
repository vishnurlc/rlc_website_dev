import Image from "next/image";
import React from "react";
import AboutCounter from "./AboutCounter";

function Aboutsection() {
  const data = [
    {
      title: "Private events ",
      startNumber: "5",
      endNumber: "11",
      suffix: "k",
    },
    {
      title: "Customer Satisfaction",
      startNumber: "30",
      endNumber: "100",
      suffix: "%",
    },
    {
      title: "Private events ",
      startNumber: "30",
      endNumber: "100",
      suffix: "%",
    },
    {
      title: "Private events ",
      startNumber: "30",
      endNumber: "180",
      suffix: "+",
    },
    {
      title: "Private events ",
      startNumber: "30",
      endNumber: "100",
      suffix: "",
    },
  ];
  return (
    <div className="py-20 bg-white max-w-[1200px] mx-auto px-6 flex flex-col gap-9">
      <div className="lg:flex w-full items-center">
        <div className="hidden lg:block relative w-full aspect-square h-auto flex-1">
          <Image
            src="/assets/home/bugattitop.png"
            fill
            priority
            alt="car"
            style={{
              objectFit: "contain",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="bg-white text-black  md:mx-20 flex-1">
          <h2 className="text-teal-900 text-[42px] font-extrabold leading-10">
            RICHYLIFE <br />
            CLUB{" "}
          </h2>

          <p className="py-10 text-md font-thin text-secondary">
            Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur
            vitae nunc sed. Mauris a diam maecenas sed enim ut sem. Non enim
            praesent elementum facilisis. Sapien nec sagittis aliquam malesuada
            bibendum arcu vitae elementum
          </p>
          <p className=" text-md font-thin text-secondary">
            Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur
            vitae nunc sed. Mauris a diam maecenas sed enim ut sem. Non enim
            praesent elementum facilisis. Sapien nec sagittis aliquam malesuada
            bibendum arcu vitae elementum
          </p>
        </div>
      </div>

      <AboutCounter data={data} />
    </div>
  );
}

export default Aboutsection;
