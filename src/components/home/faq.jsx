"use client";
import React, { useEffect, useState } from "react";
import FaqAccordation from "../ui/accordation/accordation";
import { Loader } from "..";

const getData = async (category) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/faq-categories?filters[category][$eq]=${category}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    return;
  }
};
function Faq({ category }) {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(category);
      setData(data.data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="bg-white px-5 py-8 md:py-16">
      <div className="flex flex-col gap-6 md:gap-10 max-w-[1200px] mx-auto">
        <h3 className="text-primary font-sans text-3xl md:text-4xl font-extrabold text-center">
          FAQ
        </h3>
        <div className="w-full max-w-4xl mx-auto mb-6 min-h-[300px] flex items-center justify-center ">
          {data ? (
            <FaqAccordation data={data[0].attributes.faqs.data} />
          ) : (
            <Loader color={"#000"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
