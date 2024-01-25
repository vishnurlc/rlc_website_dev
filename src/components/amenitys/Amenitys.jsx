'use client';

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
import { GiFruitBowl } from 'react-icons/gi';
//dsa
import { BiSolidSpeaker, BiSolidFridge } from 'react-icons/bi';
import { BsProjectorFill } from 'react-icons/bs';
import { TbGps } from 'react-icons/tb';
import { MdBathroom } from 'react-icons/md';
import { GiLifeJacket, GiTowel } from 'react-icons/gi';
function Amenitys({ data }) {
  const amenitiesIcons = {
    'wi-fi': <FaWifi size={24} key="wifi" />,
    'air-conditioning': <FaSnowflake size={24} key="air" />,
    'live-bbq': <FaFire size={24} key="fire" />,
    'friendly-crew': <FaPeopleCarry size={24} key="people" />,
    'sun-bed': <FaBed size={24} key="bed" />,
    safety: <FaLifeRing size={24} key="ring" />,
    'fishing-gears': <FaFish size={24} key="fish" />,
    kitchen: <FaBlender size={24} key={'blender'} />,
    entertainment: <FaMusic size={24} key="music" />,
    heating: <FaTemperatureHigh size={24} key="temp" />,
    'room-service': <FaConciergeBell size={24} key="con" />,
    speaker: <BiSolidSpeaker size={24} key="speaker" />,
    projector: <BsProjectorFill size={24} key={'projector'} />,
    gps: <TbGps size={24} key={'gps'} />,
    bathroom: <MdBathroom size={24} key="bathroom" />,
    refrigerator: <BiSolidFridge size={24} key={'fridge'} />,
    lifejacket: <GiLifeJacket size={24} key="lifejacket" />,
    towel: <GiTowel size={24} key={'towel'} />,
    'fruit-platter': <GiFruitBowl size={24} key={'fruitplatter'} />,
  };
  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 justify-items-center">
      {data?.data.map((item, index) => (
        <div
          className=" flex flex-col justify-center items-center gap-3 text-base md:text-lg"
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
