"use client";
import React from "react";
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
} from "react-icons/fa";

function Amenitys({ data }) {
  console.log(data.data);

  const amenitiesIcons = {
    "wi-fi": <FaWifi />,
    "air-conditioning": <FaSnowflake />,
    "live-bbq": <FaFire />,
    "friendly-crew": <FaPeopleCarry />,
    "sun-bed": <FaBed />,
    safety: <FaLifeRing />,
    "fishing-gears": <FaFish />,
    kitchen: <FaBlender />,
    entertainment: <FaMusic />,
    heating: <FaTemperatureHigh />,
    "room-service": <FaConciergeBell />,
  };
  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-items-center">
      {data?.data.map((item, index) => (
        <div className=" flex flex-col justify-center items-center gap-3">
          <span className="">{amenitiesIcons[item.attributes.slug]}</span>
          {item.attributes.name}
        </div>
      ))}
    </div>
  );
}

export default Amenitys;
