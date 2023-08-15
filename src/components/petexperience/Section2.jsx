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
          img: '/assets/petpage/bear.png',
          title: 'African Lion Safari',
          description:
            'Embark on a thrilling journey through the heart of Africa as you witness the raw power and beauty of the king of the savannah. Our guided safari takes you up close to these magnificent creatures in their natural habitat.',
          buttontext: 'Explore Safari Tours',
        }}
        hovered={hovered}
        setHovered={setHovered}
      />
      <Section2Card
        data={{
          id: 1,
          img: '/assets/petpage/python.png',
          title: 'Enchanted Rainforest Discovery',
          description:
            'Step into a world of vibrant colors and melodious calls as you enter our enchanting rainforest exhibit. Immerse yourself in the sounds and sights of tropical birds from around the globe, surrounded by lush greenery.',
          buttontext: 'Discover Rainforest Oasis',
        }}
        hovered={hovered}
        setHovered={setHovered}
      />
    </div>
  );
};

export default Section2;
