import React from "react";
import TravelCard from "./TravelCard";
import CardBasic from "../ui/card/CardBasic";

const Tourlist = ({ packages }) => {
  return (
    <div className="grid-cols-1 md:grid-cols-2 gap-6">
      {packages.data.map((item, index) => (
        <>
          {/* <TravelCard item={item} key={index} /> */}
          <div className="pb-10" key={index}>
            <CardBasic data={item} />
          </div>
        </>
      ))}
    </div>
  );
};

export default Tourlist;
