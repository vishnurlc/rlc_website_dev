'use client';
import React from 'react';
import { Pagination, PaginationComponent, SectionHeading } from '..';
import Card from '../ui/card/card';
import { useRouter } from 'next/navigation';
const ListingComponent = () => {
  const router = useRouter();
  const handlePageChange = (number) => {
    console.log(number);
  };
  return (
    <div className="py-[40px] flex flex-col items-center gap-8 md:gap-16 px-6">
      <SectionHeading
        title={'Sail in Splendor'}
        description={
          'Chart Your Course to Unparalleled Luxury with our Exclusive Yachts'
        }
      />
      <div className="flex flex-col gap-8 w-full">
        <Card />
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
