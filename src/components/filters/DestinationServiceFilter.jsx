"use client";
import React, { useEffect } from "react";
import { CardServices } from "..";
import { data } from "autoprefixer";

function DestinationServiceFilter({ query }) {
  const [services, setServices] = React.useState([]);

  async function getData() {
    let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/services?populate=*&filters[destinations][name][$eq]=${query}&sort=order:asc`;

    try {
      const res = await fetch(api, {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      });
      const data = await res.json();
      if (data == {}) {
        setStatus(true);
      }
      console.log("getdata", data);
      setServices(data);
      return data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  useEffect(() => {
    // handelFetch();
    console.log("useEffect1223");
    getData();
  }, [query]);

  return (
    <div>
      {services.data && <CardServices service={services.data} query={query} />}
    </div>
  );
}

export default DestinationServiceFilter;
