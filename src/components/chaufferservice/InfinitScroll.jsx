"use client";
import React, { useEffect, useState } from "react";
import { Loader } from "..";
import CardChauffer from "./CardChauffer";

function InfinitScroll() {
  const pageSize = 5;
  const [cars, setCars] = useState([]);
  const [meta, setMeta] = useState();
  const [pagination, setPagination] = useState(1);
  const [status, setStatus] = useState(0);

  async function getData(pagination) {
    const pageSize = 5;
    let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-cars?populate=*&pagination[page]=${pagination}&pagination[pageSize]=${pageSize}&sort=id:desc`;

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
    getData(pagination).then((newData) => {
      console.log(newData);
      if (status !== 1 && Object.keys(newData).length !== 0) {
        setMeta(newData);
        setCars((prevData) => [...prevData, ...newData.data]);
      }
    });
  }, [pagination]);
  return (
    <div>
      <div className="flex flex-col gap-8 w-full min-h-screen">
        {cars?.map((car, index) => (
          <CardChauffer variant={"cars"} data={car} key={index} />
        ))}
        {status === 1 && (
          <p className="text-center text-xl ">No Cars found !</p>
        )}
        {status === 0 && <Loader color={"#000"} />}
      </div>
      {/* loadmore */}

      <div className={status === 1 ? "hidden" : `flex justify-center mt-10`}>
        <button
          onClick={() => setPagination((prevPage) => prevPage + 1)}
          className="w-52 bg-lime-900 rounded-xl h-8 text-white"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default InfinitScroll;
