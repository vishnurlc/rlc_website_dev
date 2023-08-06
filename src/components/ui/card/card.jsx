import Image from "next/image";
import React from "react";
import { Button } from "../button/Button";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";

function Card() {
  return (
    <div className="lg:flex w-full max-w-[1200px] lg:h-[320px] mx-auto bg-white">
      <div className="relative w-full aspect-[70/40] bg-black lg:w-2/3 lg:max-w-[512px]">
        <Image
          src="/assets/test/porch.jpg"
          // width={1200}
          // height={1200}
          fill
          priority
          alt="car"
        />
      </div>
      <div className="bg-white p-5">
        <div className="text-black">
          <h3 className="text-primary text-2xl font-bold leading-[29.04px]">
            Pershing 2018 Yacht
          </h3>
          <p className="py-2 flex gap-1 items-center ">
            <PiStarThin />
            <PiStarThin />
            <PiStarThin />
            <PiStarThin />
            <span className="text-secondary text-xs">(5.00 rating)</span>
          </p>
          <div className="py-3 flex gap-5">
            <div className="w-[90px] h-[37.19px] bg-slate-100 flex items-center justify-center">
              <div className="text-primary text-base font-medium leading-tight">
                4 Star
              </div>
            </div>
            <div className="w-[90px] h-[37.19px] bg-slate-100 flex items-center justify-center">
              <div className="text-primary text-base font-medium leading-tight">
                19 People
              </div>
            </div>

            <div className="w-[90px] h-[37.19px] bg-slate-100 flex items-center justify-center">
              <div className="text-primary text-base font-medium leading-tight">
                2016
              </div>
            </div>
            <div className="w-[90px] h-[37.19px] bg-slate-100 flex items-center justify-center">
              <div className="text-primary text-base font-medium leading-tight">
                30"ft
              </div>
            </div>
          </div>

          <p className="text-secondary text-base font-normal leading-relaxed">
            Pershing 2014 Yacht is a stylish-looking sailing yacht, 30 features
            a blister-type
            <br />
            coach roof, but with a much lower, sleeker profile.
          </p>

          <div className="flex justify-between py-5">
            <div>
              <p className="text-secondary text-sm">From</p>
              <p className="text-primary font-normal text-xl">
                $200{" "}
                <span className="text-secondary text-sm font-normala">
                  /Day
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <FaPhoneAlt className="text-lg mx-3" />
              <BsWhatsapp className="text-xl mx-3" />
              <Button>Book Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
