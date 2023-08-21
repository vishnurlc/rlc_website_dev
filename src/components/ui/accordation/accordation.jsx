'use client';
import React, { useState, useEffect } from 'react';
import FaqCard from './faqcard';

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/faqs`);
    const data = await res.json();

    return data;
  } catch (error) {
    return;
  }
};

function FaqAccordation() {
  const [expanded, setExpanded] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-6">
      {data?.slice(0, 5).map((item, index) => (
        <FaqCard
          key={index}
          i={index}
          expanded={expanded}
          setExpanded={setExpanded}
          question={item.attributes.question}
          answer={item.attributes.answer}
        />
      ))}
    </div>
  );
}

export default FaqAccordation;
