import InfinitScroll from "@/components/chaufferservice/InfinitScroll";

import React from "react";

const page = () => {
  return (
    <main className="pt-[108px] md:pt-[128px]">
      <InfinitScroll fetchApi={"hotels"} />
    </main>
  );
};

export default page;
