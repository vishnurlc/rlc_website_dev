import Image from 'next/image';
import React from 'react';

function Aboutsection() {
  const data = [
    {
      title: 'Private events ',
      number: '11k',
    },
    {
      title: 'Customer Satisfaction',
      number: '100%',
    },
    {
      title: 'Private events ',
      number: '100%',
    },
    {
      title: 'Private events ',
      number: '180+',
    },
    {
      title: 'Private events ',
      number: '30',
    },
  ];
  return (
    <div className="py-20 bg-white max-w-[1200px] mx-auto px-6 flex flex-col gap-9">
      <div className="lg:flex w-full">
        <div className="hidden lg:block relative w-full aspect-square flex-1">
          <Image
            src="/assets/test/farrari.png"
            fill
            priority
            alt="car"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className="bg-white text-black  md:mx-20 flex-1">
          <h2 className="text-teal-900 text-[42px] font-extrabold leading-10">
            RICHYLIFE <br />
            CLUB{' '}
          </h2>

          <p className="py-10 text-md font-thin text-secondary">
            Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur
            vitae nunc sed. Mauris a diam maecenas sed enim ut sem. Non enim
            praesent elementum facilisis. Sapien nec sagittis aliquam malesuada
            bibendum arcu vitae elementum
          </p>
          <p className=" text-md font-thin text-secondary">
            Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur
            vitae nunc sed. Mauris a diam maecenas sed enim ut sem. Non enim
            praesent elementum facilisis. Sapien nec sagittis aliquam malesuada
            bibendum arcu vitae elementum
          </p>
        </div>
      </div>

      <div className=" flex flex-wrap justify-center lg:justify-between gap-6">
        {data.map((e, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-start md:items-center justify-center"
          >
            <div className="text-emerald-600 text-5xl md:text-[61.71px] font-black">
              {e.number}
            </div>
            <p className="text-black text-sm md:text-xs">{e.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutsection;
