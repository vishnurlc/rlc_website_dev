"use client";
import React from "react";

const AnimatedBtn = ({ styles, text, msg }) => {
  return (
    <button className={`px-6 py-2 hover:scale-105 ${styles} transition-all`}>
      <Link
        href={`https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${msg}?`}
        target="_blank"
        className="flex justify-center items-center gap-4"
      >
        {text}
      </Link>
    </button>
  );
};

export default AnimatedBtn;
