'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Loader, PaginationComponent, SectionHeading } from '..';
import Card from '../ui/card/card';
import { useRouter, useSearchParams } from 'next/navigation';
import CarbodyFilter from '../filters/CarBodyFilter';
import CarBrandFilter from '../filters/CarBrandFilter';
import PriceFilter from '../filters/PriceFilter';
import CaryearFilter from '../filters/CarYearfilter';
import { motion } from 'framer-motion';
import qs from 'qs';
const ListingComponent = ({ variant, title, description }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cars, setCars] = useState({});
  const [drag, setDrag] = useState(false);
  const searchParams = useSearchParams();
  const [pageNumber, _] = useState(searchParams.get('pageNumber') || '');
  const pageSize = 5;
  const [status, setStatus] = useState(0);
  const [filters, setFilters] = useState({
    make: '',
    body: '',
    price: '',
    year: '',
    pageNumber: '',
  });

  async function getData({ params }) {
    const queryParameters = {};
    setStatus(0);
    if (params.body) {
      queryParameters.body = {
        slug: {
          $eq: params.body,
        },
      };
    }
    if (params.make) {
      queryParameters.make = {
        slug: {
          $eq: params.make,
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

    let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars?${queryString}&populate=*&pagination[page]=${params.pageNumber}&pagination[pageSize]=${pageSize}`;

    try {
      const res = await fetch(api, {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      });
      const data = await res.json();
      if (data == {}) {
        setStatus(1);
      } else {
        setStatus(2);
      }
      return data;
    } catch (error) {
      return {};
    }
  }

  const handleFilters = async ({ name, value }) => {
    // Create a copy of the current filters
    const updatedFilters = { ...filters, [name]: value };

    // Reset page number to 1 when any filter is applied
    const newFilters = { ...updatedFilters, pageNumber: 1 };

    // Remove empty filters
    Object.keys(newFilters).forEach((key) => {
      if (!newFilters[key]) {
        delete newFilters[key];
      }
    });

    // Fetch data based on the new filters
    const newData = await getData({ params: newFilters });
    setCars(newData);

    // Create a new URLSearchParams object with updated filters
    const newSearchParams = new URLSearchParams();
    for (const key in newFilters) {
      newSearchParams.set(key, newFilters[key]);
    }

    // Update URL without triggering a full page reload
    window.history.pushState({}, '', '?' + newSearchParams.toString());

    // Update local state with the new filters
    setFilters(newFilters);
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
    urlFilters['pageNumber'] = pageNumber;
    getData({ params: urlFilters }).then((newData) => {
      setCars(newData);
    });
  }, [searchParams]);

  const scrollToViewMethod = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView();
    }
  };
  const handlePaginationChange = async (newPageNumber) => {
    // Create a copy of the current filters and update the page number
    const newFilters = { ...filters, pageNumber: newPageNumber };

    // Fetch data based on the new page number
    const newData = await getData({ params: newFilters });
    setCars(newData);

    // Create a new URLSearchParams object with updated page number
    const newSearchParams = new URLSearchParams();
    for (const key in newFilters) {
      newSearchParams.set(key, newFilters[key]);
    }

    // Update URL without triggering a full page reload
    window.history.pushState({}, '', '?' + newSearchParams.toString());

    // Update local state with the new page number
    setFilters(newFilters);
  };

  return (
    <div className="w-full overflow-hidden" ref={scrollRef}>
      <div className="w-full my-[40px] ">
        <motion.div
          ref={containerRef}
          className="relative flex items-center justify-start md:justify-center gap-4 md:gap-5 px-6"
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

      <div className="my-[40px] flex flex-col items-center gap-8 md:gap-16 px-6">
        <SectionHeading title={title} description={description} />
        <div className="flex flex-col gap-8 w-full min-h-screen">
          {cars.data?.map((car, index) => (
            <Card variant={variant} data={car} key={index} />
          ))}
          {status === 1 && <p>No Cars found</p>}
          {status === 0 && <Loader color={'#000'} />}
        </div>
        {cars.meta && (
          <div>
            <PaginationComponent
              currentPage={cars.meta.pagination.page}
              totalPages={cars.meta.pagination.pageCount}
              onPageChange={handlePaginationChange}
              scrollIntoView={scrollToViewMethod}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingComponent;
