'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Motionslider from '../ui/slidermotion/Motionslider';
import Link from 'next/link';
import fetchData from '@/lib/feacthData';
import SwiperSlider from '../ui/slidermotion/SwiperSlider';

const jetski = [
  {
    id: 9,
    name: 'Mercedes Benz S Class',
    image:
      '/assets/chauffeur/2016-mercedes-benz-s-class-2015-mercedes-benz-s-class-maybach-maybach-removebg-preview.png',
    price: '360',
    link: 'sedan',
  },
  {
    id: 9,
    name: 'Rolls Royce',
    image: '/assets/chauffeur/rolls.png',
    price: '360',
    link: 'sedan',
  },
  {
    id: 4,
    name: 'Lexus',
    image: '/assets/chauffeur/ES300H.jpeg',
    price: '360',
    link: 'sedan',
  },
];

const Ourfleets = () => {
  const [fleetData, setFleetData] = useState();
  const api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-makes?populate=*`;
  useEffect(() => {
    const handelFeatch = async () => {
      const data = await fetchData(api);
      setFleetData(data.data);
      console.log(data.data);
    };
    handelFeatch();
  }, []);
  return (
    <div>
      <div className="mt-7 w-full overflow-hidden">
        <SwiperSlider fleetData={fleetData} />
      </div>
    </div>
  );
};

export default Ourfleets;
