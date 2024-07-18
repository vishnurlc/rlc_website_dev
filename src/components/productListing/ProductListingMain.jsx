"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import qs from "qs";
import Card from "../ui/card/card";
import { motion } from "framer-motion";
import { Loader, PaginationComponent } from "..";
import CardHotel from "../ui/card/CardHotel";
import SearchFilter from "../filters/SearchFilter";
import DestinationFilter from "../filters/DestinationFilter";

function ProductListing() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [drag, setDrag] = useState(false);
  const searchParams = useSearchParams();
  const [cars, setCars] = useState({});
  const [pageNumber, _] = useState(searchParams.get("pageNumber") || "");
  const pageSize = 5;
  const [status, setStatus] = useState(0);
  const [filters, setFilters] = useState({
    make: searchParams.get("make") || "",
    body: searchParams.get("body") || "",
    price: searchParams.get("price") || "",
    year: searchParams.get("year") || "",
    destination: searchParams.get("destination") || "",
    city: searchParams.get("city") || "",
    pageNumber: "",
  });
  async function getData({ params }) {
    const queryParameters = {};
    setStatus(0);
    if (params.destination) {
      queryParameters.destination = {
        slug: {
          $eq: params.destination,
        },
      };
    }
    if (params.city) {
      queryParameters.city = {
        slug: {
          $eq: params.city,
        },
      };
    }

    const queryString = qs.stringify({
      filters: {
        ...queryParameters,
      },
    });

    let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/hotels?${queryString}&populate=*&pagination[page]=${params.pageNumber}&pagination[pageSize]=${pageSize}&sort=id:desc`;

    try {
      const res = await fetch(api, {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      });
      const data = await res.json();
      if (data.data.length === 0) {
        setStatus(1);
      } else {
        setStatus(2);
      }
      return data;
    } catch (error) {
      return {};
    }
  }

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
    urlFilters["pageNumber"] = pageNumber;
    getData({ params: urlFilters }).then((newData) => {
      setCars(newData);
    });
  }, [searchParams]);

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
    window.history.pushState({}, "", "?" + newSearchParams.toString());

    // Update local state with the new filters
    setFilters(newFilters);
  };
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
    window.history.pushState({}, "", "?" + newSearchParams.toString());

    // Update local state with the new page number
    setFilters(newFilters);
  };
  return (
    <div className="w-full overflow-hidden" ref={scrollRef}>
      <div className="w-full my-[40px] ">
        <div className=" flex flex-wrap items-center justify-center md:justify-center gap-4 md:gap-5 z-10">
          <SearchFilter />
          <DestinationFilter
            handleFilters={handleFilters}
            selectedValue={filters.destination}
            selectedValue1={filters.city}
          />
        </div>
      </div>

      <div className="my-[40px] flex flex-col items-center gap-8 md:gap-16 md:px-6">
        <div className="flex flex-col gap-8 w-full min-h-screen">
          {cars.data?.map((car, index) => (
            <CardHotel variant={"club-packages"} data={car} key={index} />
          ))}
          {status === 1 && (
            <p className="text-center text-xl ">No Hotel found !</p>
          )}
          {status === 0 && <Loader color={"#000"} />}
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
      {/* <div className="container mx-auto my-14 md:my-20">
        <Marquee
          make={make}
          handleFilters={handleFilters}
          scrollIntoView={scrollToViewMethod}
        />
      </div> */}
    </div>
  );
}

export default ProductListing;