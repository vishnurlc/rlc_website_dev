'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Pagination, PaginationComponent, SectionHeading } from '..';
import Card from '../ui/card/card';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import CarbodyFilter from '../filters/CarBodyFilter';
import CarBrandFilter from '../filters/CarBrandFilter';
import PriceFilter from '../filters/PriceFilter';
import CaryearFilter from '../filters/CarYearfilter';
import { motion } from 'framer-motion';

const ListingComponent = ({ variant, title, description }) => {
  const router = useRouter();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [drag, setDrag] = useState(false);
  const params = useSearchParams();
  const [filters, setFilters] = useState({
    brand: '',
    body: '',
    price: '',
    year: '',
  });
  const handlePageChange = (number) => {
    console.log(number);
  };

  useEffect(() => {
    console.log(params.get('key'));
  }, [params]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && typeof window !== 'undefined') {
        if (window.innerWidth < 700) {
          setDrag(true);
        } else {
          setDrag(false);
        }
        setContainerWidth(containerRef.current.scrollWidth - window.innerWidth);
      }
    };

    handleResize(); // Call the function once on initial load

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef]);

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full my-[40px] ">
        <motion.div
          ref={containerRef}
          className="relative flex items-center justify-start md:justify-end gap-4 md:gap-5 z-20 px-6"
          drag="x"
          dragConstraints={{ right: 0, left: -containerWidth }}
          dragListener={drag}
        >
          <CarbodyFilter />
          <CarBrandFilter />
          <CaryearFilter />
          <PriceFilter />
        </motion.div>
      </div>
      <div className="my-[40px] flex flex-col items-center gap-8 md:gap-16 px-6">
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
    </div>
  );
};

export default ListingComponent;
