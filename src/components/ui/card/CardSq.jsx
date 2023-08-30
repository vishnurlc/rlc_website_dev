import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CardSq({ data }) {
  return (
    <div className="relative w-full aspect-[1/1.5] ">
      <Image
        src={data.image}
        alt={data.title}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="absolute p-4 text-white w-full h-fit bg-black bg-opacity-60 bottom-0 left-0 right-0 z-10">
        <div>
          <h2 className="uppercase font-medium tracking-wide text-xs md:text-sm font-poppins">
            {data.title}
          </h2>
          {/* <span className="text-gray-400 text-sm">
          Starting from AED212
        </span> */}
        </div>

        <button className="mt-2 px-2 py-1 bg-primary text-gold">
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I would like to know Richylife Club's Premium Chauffer Service on ${data.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            Book Now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default CardSq;
