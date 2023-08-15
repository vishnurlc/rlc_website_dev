import React from 'react';
import styles from './yacht.module.scss'; // Update the import path
import Image from 'next/image';

const getRandomSpan = () => Math.floor(Math.random() * 3) + 1; // Returns 1, 2, or 3

const MasonryGrid = () => {
  const images = [
    '/assets/privateyachts/1.png',
    '/assets/privateyachts/2.png',
    '/assets/privateyachts/3.png',
    '/assets/privateyachts/4.png',
    '/assets/privateyachts/5.png',
    '/assets/privateyachts/6.png',
    '/assets/privateyachts/7.png',
    '/assets/privateyachts/8.png',
    // Add more image URLs here
  ];
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-2 md:grid-cols-12  gap-2">
        <div className="w-full relative h-[200px] col-span-2 md:col-span-3">
          <Image
            src={images[0]}
            fill
            alt="Hello boss"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="w-full relative h-[200px] col-span-1 md:col-span-2">
          <Image
            src={images[1]}
            fill
            alt="Hello boss"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="w-full relative h-[200px] col-span-1 md:col-span-3">
          <Image
            src={images[2]}
            fill
            alt="Hello boss"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="w-full relative h-[200px] col-span-2 md:col-span-4">
          <Image
            src={images[3]}
            fill
            alt="Hello boss"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-12  gap-2">
        <div className="w-full relative h-[200px] col-span-2 md:col-span-3">
          <Image
            src={images[4]}
            fill
            alt="Hello boss"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="w-full relative h-[200px] col-span-1 md:col-span-2">
          <Image
            src={images[5]}
            fill
            alt="Hello boss"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="w-full relative h-[200px] col-span-1 md:col-span-3">
          <Image
            src={images[6]}
            fill
            alt="Hello boss"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="w-full relative h-[200px] col-span-2 md:col-span-4">
          <Image
            src={images[7]}
            fill
            alt="Hello boss"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MasonryGrid;
