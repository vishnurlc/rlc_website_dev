import Image from "next/image";
import React from "react";
import { Button } from "./button/Button";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Card() {
  return (
    <div className="md:flex w-full max-w-[1200px] h-[320px] mx-auto bg-white">
      <div className="relative w-full aspect-[70/40] bg-black md:w-2/3 max-w-[512px]">
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
          <h3 className="text-teal-900 text-2xl font-bold leading-[29.04px]">
            Pershing 2018 Yacht
          </h3>
          <p className="py-2">start</p>
          <div className="py-3 flex gap-5">
            <div className="w-[90px] h-[37.19px] bg-slate-100 flex items-center justify-center">
              <div className="text-teal-900 text-base font-medium leading-tight">
                4 Star
              </div>
            </div>
            <div className="w-[90px] h-[37.19px] bg-slate-100 flex items-center justify-center">
              <div className="text-teal-900 text-base font-medium leading-tight">
                19 People
              </div>
            </div>

            <div className="w-[90px] h-[37.19px] bg-slate-100 flex items-center justify-center">
              <div className="text-teal-900 text-base font-medium leading-tight">
                2016
              </div>
            </div>
            <div className="w-[90px] h-[37.19px] bg-slate-100 flex items-center justify-center">
              <div className="text-teal-900 text-base font-medium leading-tight">
                30"ft
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-base font-normal leading-relaxed">
            Pershing 2014 Yacht is a stylish-looking sailing yacht, 30 features
            a blister-type
            <br />
            coach roof, but with a much lower, sleeker profile.
          </p>

          <div className="flex justify-between py-5">
            <div>
              <p>from</p>
              <p className="text-teal-900 font-bold">
                $200{" "}
                <span className="text-gray-500 text-sm font-normala">/Day</span>
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <FaPhoneAlt />
              <FaWhatsapp />
              <Button>book now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
