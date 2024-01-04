import InfinitScroll from "@/components/chaufferservice/InfinitScroll";

import React from "react";

const page = () => {
  return (
    <div className="mt-[150px]">
      <InfinitScroll fetchApi={"chauffeur-cars"} />
    </div>
  );
};

export default page;
