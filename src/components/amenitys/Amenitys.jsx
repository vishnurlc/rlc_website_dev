'use client';
import React from 'react';
import {
  FaWifi,
  FaFire,
  FaLifeRing,
  FaPeopleCarry,
  FaBed,
  FaFish,
  FaSnowflake,
  FaBlender,
  FaMusic,
  FaConciergeBell,
  FaTemperatureHigh,
} from 'react-icons/fa';

function Amenitys({ data }) {
  console.log(data.data);

  const amenitiesIcons = {
    'wi-fi': <FaWifi key="wifi" />,
    'air-conditioning': <FaSnowflake key="air" />,
    'live-bbq': <FaFire key="fire" />,
    'friendly-crew': <FaPeopleCarry key="people" />,
    'sun-bed': <FaBed key="bed" />,
    safety: <FaLifeRing key="ring" />,
    'fishing-gears': <FaFish key="fish" />,
    kitchen: <FaBlender key={'blender'} />,
    entertainment: <FaMusic key="music" />,
    heating: <FaTemperatureHigh key="temp" />,
    'room-service': <FaConciergeBell key="con" />,
  };
  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-items-center">
      {data?.data.map((item, index) => (
        <div
          className=" flex flex-col justify-center items-center gap-3"
          key={index}
        >
          <span className="">{amenitiesIcons[item.attributes.slug]}</span>
          {item.attributes.name}
        </div>
      ))}
    </div>
  );
}

export default Amenitys;
