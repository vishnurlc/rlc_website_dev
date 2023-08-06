import Image from "next/image";
import React from "react";
import { Button } from "../button/Button";
import { FaPhoneAlt, FaWhatsapp, FaLuggageCart } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";
import { BiSolidPlane, BiSolidTimeFive } from "react-icons/bi";

function CardV1() {
  return (
    <div className="lg:flex w-full max-w-[1200px] lg:h-[550px] mx-auto bg-white">
      <div className="relative w-full aspect-[550/550] bg-black lg:w-2/3 lg:max-w-[512px]">
        <Image
          src="/assets/test/jet.png"
          // width={1200}
          // height={1200}
          fill
          priority
          alt="car"
        />
      </div>
      <div className="bg-white w-full flex items-center justify-center">
        <div className="text-black w-[332px]">
          <h3 className="text-primary text-3xl font-normal leading-[29.04px] pb-2">
            Gulfstream g650
          </h3>
          <p className="text-tertiary text-sm">Ultra-Long-Range Aircraft</p>
          <p className=" text-sm font-normal leading-relaxed pt-10">
            The G650ER holds the record for the farthest fastest flight in
            business aviation history.
          </p>

          <div className="flex items-center justify-between pt-10">
            <div className="text-center">
              <FaLuggageCart className="mx-auto text-2xl" />
              <p className="text-tertiary text-xs">passeger</p>
              <p className="text-xs pt-2">12</p>
            </div>
            <div className="text-center">
              <BiSolidPlane className="mx-auto text-2xl" />
              <p className="text-tertiary text-xs">Max. Performance Range</p>
              <p className="text-xs pt-2">11263 KM</p>
            </div>
            <div className="text-center">
              <BiSolidTimeFive className="mx-auto text-2xl" />
              <p className="text-tertiary text-xs">Endurance</p>
              <p className="text-xs pt-2">16 HRS</p>
            </div>
          </div>

          <div className="flex justify-between py-10">
            <Button variant="secondary">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardV1;
