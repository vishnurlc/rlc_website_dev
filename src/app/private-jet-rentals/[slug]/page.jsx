import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <main>
      <div
        style={{
          background: 'linear-gradient(180deg, #1F83B7 0%, #A7C3DB 100%)',
        }}
        className="w-screen h-auto mt-28 max-h-[350px] grid grid-cols-1 items-center justify-items-center"
      >
        <Image
          src="/assets/privatejet/flight.png"
          width={700}
          height={350}
          alt="filghtname"
          style={{
            height: '30vh',
            width: 'auto',
            aspectRatio: 'calc(2/1)',
          }}
        />
      </div>
    </main>
  );
};

export default page;
