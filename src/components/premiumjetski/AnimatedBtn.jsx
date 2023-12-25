"use client";
import { btnclickanimation } from "@/lib/btnclickanimation";
import Link from "next/link";
import { useRef } from "react";

const AnimatedBtn = ({ styles, text, msg }) => {
  const buttonRef = useRef();
  btnclickanimation(buttonRef, {});
  return (
    <button
      className={`px-6 py-2 hover:scale-105 ${styles} transition-all`}
      ref={buttonRef}
    >
      <Link
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${msg}?`}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-4 uppercase whitespace-nowrap text-xs md:text-sm"
      >
        {text}
      </Link>
    </button>
  );
};

export default AnimatedBtn;
