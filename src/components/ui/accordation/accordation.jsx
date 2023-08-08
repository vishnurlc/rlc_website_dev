'use client';
import React, { useState } from 'react';
import FaqCard from './faqcard';

function FaqAccordation({ data }) {
  const [expanded, setExpanded] = useState();

  return (
    <div className="flex flex-col gap-6">
      {data.map((item, index) => (
        <FaqCard
          key={index}
          i={index}
          expanded={expanded}
          setExpanded={setExpanded}
          question={item.que}
          answer={item.ans}
        />
      ))}
    </div>
  );
}

export default FaqAccordation;
