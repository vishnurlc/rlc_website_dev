import Image from "next/image";
import React from "react";
import { Button } from "../ui/button/Button";

const Herosection2 = ({
  type,
  url,
  posterurl,
  subheading,
  heading1,
  heading2,
  btntext,
  overlay,
}) => {
  return (
    <div className="w-full h-screen md:h-[90vh] relative">
      {type === "video" ? (
        <video
          playsInline
          autoPlay
          muted
          loop
          poster={posterurl}
          className="h-full absolute object-cover top-0 w-full "
        >
          <source src={""} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={url}
          fill
          alt="Hero Section Image"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      )}
      <div className="absolute z-10 top-3/4 md:top-1/2 left-[5vw] text-white -translate-y-1/2 p-4 md:p-8 backdrop-blur-[2px]  ">
        <span className="text-gold text-opacity-70 font-inter text-sm md:text-lg">
          {subheading}
        </span>
        <h1 className="text-white text-4xl md:text-[64px] leading-tight font-poppins font-bold">
          {heading1} <br /> {heading2}
        </h1>
        <Button className="bg-primary px-6 py-2 mt-6 bg-opacity-80 rounded-sm text-gold border border-solid border-gold border-opacity-50">
          {btntext}
        </Button>
      </div>
      {overlay === 1 ? (
        <div className="absolute inset-0 select-none z-0 bg-[#625A4A] bg-opacity-50"></div>
      ) : (
        <div
          className="absolute inset-0 select-none z-1 "
          style={{
            background:
              "linear-gradient(0deg, #162428 0%, rgba(22, 36, 40, 0.00) 100%)",
          }}
        ></div>
      )}
    </div>
  );
};

export default Herosection2;
