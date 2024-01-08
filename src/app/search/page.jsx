import InfinitScroll from "@/components/chaufferservice/InfinitScroll";
import React from "react";

function page() {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-0 md:px-6 pb-10">
        <InfinitScroll fetchApi="club-packages" />
      </div>
    </div>
  );
}

export default page;
