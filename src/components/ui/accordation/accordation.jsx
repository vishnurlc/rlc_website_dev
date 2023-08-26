'use client';
import React, { useState } from 'react';
import FaqCard from './faqcard';

function FaqAccordation({ data }) {
  const [expanded, setExpanded] = useState();

  return (
    <div className="flex flex-col gap-6 w-full">
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
