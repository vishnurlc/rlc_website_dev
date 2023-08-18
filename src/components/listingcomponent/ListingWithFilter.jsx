'use client';
import React, { useEffect } from 'react';
import { Pagination, PaginationComponent, SectionHeading } from '..';
import Card from '../ui/card/card';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import CarbodyFilter from '../filters/CarBodyFilter';
import CarBrandFilter from '../filters/CarBrandFilter';
import PriceFilter from '../filters/PriceFilter';
const ListingComponent = ({ variant, title, description }) => {
  const router = useRouter();

  const params = useSearchParams();
  const handlePageChange = (number) => {
    console.log(number);
  };

  useEffect(() => {
    console.log(params.get('key'));
  }, [params]);
  return (
    <div className="py-[40px] flex flex-col items-center gap-8 md:gap-16 px-6">
      <div className=" flex items-end justify-end gap-5">
        <CarbodyFilter />
        <CarBrandFilter />
        <PriceFilter />
      </div>
      <SectionHeading title={title} description={description} />
      <div className="flex flex-col gap-8 w-full">
        <Card variant={variant} />
        <Card variant={variant} />
        <Card variant={variant} />
        <Card variant={variant} />
        <Card variant={variant} />
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
