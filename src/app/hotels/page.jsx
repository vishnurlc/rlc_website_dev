import InfinitScroll from "@/components/chaufferservice/InfinitScroll";
import CardBasic from "@/components/ui/card/CardBasic";
import CardSq from "@/components/ui/card/CardSq";
import CardV1 from "@/components/ui/card/cardv1";
import React from "react";

const page = () => {
  return (
    <div>
      <InfinitScroll fetchApi={"chauffeur-cars"} />
    </div>
  );
};

export default page;
