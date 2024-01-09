import InfinitScroll from "@/components/chaufferservice/InfinitScroll";
import AutocompleteSearch from "@/components/search/AutocompleteSearch";
import React from "react";

function page() {
  return (
    <div className="pt-[150px]">
      <div></div>
      <div className="max-w-[1200px] mx-auto px-0 md:px-6 pb-10">
        <AutocompleteSearch />
        {/* <InfinitScroll fetchApi="club-packages" /> */}
      </div>
    </div>
  );
}

export default page;
