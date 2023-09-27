'use client';
import { useState } from 'react';
import Section2Card from './Section2Card';

const Section2 = ({ data }) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {data.data?.map((item, index) => {
        return (
          <Section2Card
            key={index}
            data={{
              id: index,
              img: item.attributes.image.data.attributes.url,
              title: '',
              description: '',
              buttontext: 'Book an appointment',
            }}
            hovered={hovered}
            setHovered={setHovered}
          />
        );
      })}
    </div>
  );
};

export default Section2;
