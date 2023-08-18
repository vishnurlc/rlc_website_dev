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
import qs from 'qs';
const ListingComponent = ({ variant, title, description }) => {
  const router = useRouter();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cars, setCars] = useState({});
  const [drag, setDrag] = useState(false);
  const searchParams = useSearchParams();
  const [status, setStatus] = useState(false);
  const [filters, setFilters] = useState({
    brand: '',
    body: '',
    price: '',
    year: '',
  });
  const handlePageChange = (number) => {
    console.log(number);
  };

  async function getData({ params }) {
    const queryParameters = {};
    setStatus(true);
    if (params.body) {
      queryParameters.body = {
        slug: {
          $eq: params.body,
        },
      };
    }
    if (params.brand) {
      queryParameters.brand = {
        slug: {
          $eq: params.brand,
        },
      };
    }
    if (params.price) {
      let pricemin = parseInt(params.price.split('-')[0]);
      let pricemax = parseInt(params.price.split('-')[1]);
      queryParameters.price = {
        $between: [pricemin, pricemax],
      };
    }
    if (params.year) {
      queryParameters.year = {
        year: {
          $eq: params.year,
        },
      };
    }

    const queryString = qs.stringify({
      filters: {
        ...queryParameters,
      },
    });

    let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars?${queryString}&populate=*`;
    console.log(api);
    try {
      const res = await fetch(api, { next: { revalidate: 10 } });
      const data = await res.json();
      if (data === {}) {
        setStatus(true);
      }
      return data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  const handleFilters = async ({ name, value }) => {
    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    // Remove empty filters
    Object.keys(updatedFilters).forEach((key) => {
      if (!updatedFilters[key]) {
        delete updatedFilters[key];
      }
    });

    const newData = await getData({ params: updatedFilters });
    setCars(newData);

    // Create a new URLSearchParams object with updated filters
    const newSearchParams = new URLSearchParams();
    for (const key in updatedFilters) {
      newSearchParams.set(key, updatedFilters[key]);
    }

    // Update URL without triggering a full page reload
    window.history.pushState({}, '', '?' + newSearchParams.toString());

    // Update local state with the new filters
    setFilters(updatedFilters);
  };

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

  useEffect(() => {
    // Update filters based on URL query parameters
    const urlFilters = {};
    for (const [key, value] of searchParams.entries()) {
      urlFilters[key] = value;
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...urlFilters,
    }));

    getData({ params: urlFilters }).then((newData) => {
      setCars(newData);
    });
  }, [searchParams]);
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full my-[40px] ">
        <motion.div
          ref={containerRef}
          className="relative flex items-center justify-start md:justify-end gap-4 md:gap-5 px-6"
          drag="x"
          dragConstraints={{ right: 0, left: -containerWidth }}
          dragListener={drag}
        >
          <CarbodyFilter handleFilters={handleFilters} />
          <CarBrandFilter handleFilters={handleFilters} />
          <CaryearFilter handleFilters={handleFilters} />
          <PriceFilter handleFilters={handleFilters} />
        </motion.div>
      </div>
      {console.log(cars)}
      <div className="my-[40px] flex flex-col items-center gap-8 md:gap-16 px-6">
        <SectionHeading title={title} description={description} />
        <div className="flex flex-col gap-8 w-full">
          {cars.data?.map((car, index) => (
            <Card variant={variant} data={car} key={index} />
          ))}
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
