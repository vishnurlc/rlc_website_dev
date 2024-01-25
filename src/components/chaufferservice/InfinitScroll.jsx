"use client";
import React, { useEffect, useState } from "react";
import { Loader } from "..";
import CardChauffer from "../ui/card/CardChauffer";
import CardBasic from "../ui/card/CardBasic";
import ClubCard from "../ui/card/ClubCard";
import qs from "qs";
import { useSearchParams } from "next/navigation";
import ToursCard from "../ui/card/ToursCard";
import CardHotel from "../ui/card/CardHotel";
import JetskiCard from "../ui/card/JetskiCard";

function InfinitScroll({ fetchApi }) {
  const [cars, setCars] = useState([]);
  const [meta, setMeta] = useState();
  const [pagination, setPagination] = useState(1);
  const [status, setStatus] = useState(0);

  async function getData(apiEndpoint, pagination, params) {
    const pageSize = 25;

    let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${apiEndpoint}?populate=*&pagination[page]=${pagination}&pagination[pageSize]=${pageSize}&sort[0]=name:asc`;
    if (params) {
      api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${apiEndpoint}?_q=${params}&populate=*&pagination[page]=${pagination}&pagination[pageSize]=${pageSize}&sort[0]=name:asc`;
    }

    try {
      const res = await fetch(api, {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      });
      const data = await res.json();
      if (data?.data.length === 0) {
        setStatus(1);
      } else {
        setStatus(2);
      }
      return data;
    } catch (error) {
      return {};
    }
  }

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    getData(fetchApi, pagination, search).then((newData) => {
      if (status !== 1 && Object.keys(newData).length !== 0) {
        setMeta(newData);
        setCars((prevData) => [...prevData, ...newData.data]);
      }
    });
  }, [pagination, fetchApi, search]);

  return (
    <div>
      <div className="flex flex-col gap-8 w-full min-h-screen">
        {cars?.map((car, index) => {
          switch (fetchApi) {
            case "chauffeur-cars":
              return (
                <CardChauffer
                  variant={"chauffeurService"}
                  data={car}
                  key={index}
                />
              );
            case "hotels":
              return (
                <CardHotel variant={"club-packages"} data={car} key={index} />
              );
            case "club-packages":
              return <ClubCard data={car} key={index} order={index} />;
            case "packages":
              return <ToursCard data={car} key={index} order={index} />;
            case "jetskis":
              return <JetskiCard data={car} key={index} order={index} />;
            default:
              break;
          }
        })}
        {status === 1 &&
          // <p className="text-center text-xl ">No Cars found !</p>
          ""}
        {status === 0 && <Loader color={"#000"} />}
      </div>
      {/* loadmore */}

      {meta?.meta.pagination.pageCount === meta?.meta.pagination.page ? (
        <></>
      ) : (
        <div className={status === 1 ? "hidden" : `flex justify-center mt-10`}>
          <button
            onClick={() => setPagination((prevPage) => prevPage + 1)}
            className="w-52 bg-lime-900 rounded-xl h-8 text-white"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default InfinitScroll;
