"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin, MdOutlineAvTimer } from "react-icons/md";

function FooterAdress() {
  return (
    <div className="h-36 flex-col justify-start items-start gap-3 flex">
      <div className="w-52 h-10 relative">
        <div className="w-7 h-7 left-[-0px] top-[6.29px] absolute bg-orange-300 rounded-xl flex justify-center items-center">
          <FaPhoneAlt />
        </div>
        <div className="left-[43.26px] top-[-1.34px] absolute flex-col justify-start items-start inline-flex">
          <div className="pb-px justify-start items-start inline-flex">
            <div className="text-white text-sm font-normal leading-tight">
              +1-202-555-0133
            </div>
          </div>
          <div className=" pb-px justify-start items-start inline-flex">
            <div className="text-white text-sm font-normal leading-tight">
              +1-202-555-0133
            </div>
          </div>
        </div>
      </div>
      <div className="w-52 h-10 relative">
        <div className="w-7 h-7 left-[-0px] top-[6.29px] absolute bg-orange-300 rounded-xl flex justify-center items-center">
          <MdLocationPin />
        </div>
        <div className="left-[43.26px] top-[-1.34px] absolute flex-col justify-start items-start inline-flex">
          <div className="w-40 pb-px justify-start items-start inline-flex">
            <div className="text-white text-sm font-normal leading-tight">
              192 North Border Street
            </div>
          </div>
          <div className="w-40 pr-8 pb-px justify-start items-start inline-flex">
            <div className="text-white text-sm font-normal leading-tight">
              Lithonia, GA 30038
            </div>
          </div>
        </div>
      </div>
      <div className="w-52 h-10 relative">
        <div className="w-7 h-7 left-[-0px] top-[6.29px] absolute bg-orange-300 rounded-xl flex justify-center items-center">
          <MdOutlineAvTimer />
        </div>
        <div className="left-[43.26px] top-[-1.34px] absolute flex-col justify-start items-start inline-flex">
          <div className="pr-1 pb-px justify-start items-start inline-flex">
            <div className="text-white text-sm font-normal leading-tight">
              9:00 am to 5:00 pm
            </div>
          </div>
          <div className="w-32 pb-px justify-start items-start inline-flex">
            <div className="text-white text-sm font-normal leading-tight">
              Monday to Saturday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterAdress;
