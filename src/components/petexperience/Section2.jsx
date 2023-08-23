'use client';
import React, { useState } from 'react';
import Section2Card from './Section2Card';

const Section2 = () => {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <Section2Card
        data={{
          id: 0,
          img: '/assets/petpage/img1.jpg',
          title: '',
          description: '',
          buttontext: 'Book an appointment',
        }}
        hovered={hovered}
        setHovered={setHovered}
      />
      <Section2Card
        data={{
          id: 1,
          img: '/assets/petpage/img2.jpg',
          title: '',
          description: '',
          buttontext: 'Book an appointment',
        }}
        hovered={hovered}
        setHovered={setHovered}
      />
      <Section2Card
        data={{
          id: 2,
          img: '/assets/petpage/img3.jpg',
          title: '',
          description: '',
          buttontext: 'Book an appointment',
        }}
        hovered={hovered}
        setHovered={setHovered}
      />
    </div>
  );
};

export default Section2;
