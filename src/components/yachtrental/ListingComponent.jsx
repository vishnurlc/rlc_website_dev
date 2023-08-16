"use client";
import React, { useEffect } from "react";
import { Pagination, PaginationComponent, SectionHeading } from "..";
import Card from "../ui/card/card";
import { useParams, useRouter, useSearchParams } from "next/navigation";
const ListingComponent = ({ variant }) => {
  const router = useRouter();

  const params = useSearchParams();
  const handlePageChange = (number) => {
    console.log(number);
  };

  useEffect(() => {
    console.log(params.get("key"));
  }, [params]);
  return (
    <div className="py-[40px] flex flex-col items-center gap-8 md:gap-16 px-6">
      <SectionHeading
        title={"Sail in Splendor"}
        description={
          "Chart Your Course to Unparalleled Luxury with our Exclusive Yachts"
        }
      />
      <div className="flex flex-col gap-8 w-full">
        <Card variant={variant} />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <PaginationComponent
          currentPage={1}
          totalPages={7}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ListingComponent;
