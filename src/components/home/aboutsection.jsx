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
    <div className="py-20 bg-white">
      <div className="lg:flex w-full max-w-[1200px] lg:h-[320px] mx-auto bg-white">
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
        <div className="bg-white text-black mx-6 md:mx-20 flex-1">
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

      <div className="container mx-auto">
        <div className="mt-10 flex flex-wrap gap-10 justify-center lg:justify-between max-w-[1000px] mx-auto">
          {data.map((e, index) => (
            <div key={index}>
              <div className="text-emerald-600 text-5xl md:text-[61.71px] font-black">
                {e.number}
              </div>
              <p className="text-black text-sm md:text-xs">{e.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutsection;
