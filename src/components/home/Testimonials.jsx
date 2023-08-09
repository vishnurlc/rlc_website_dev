import Image from 'next/image';
import React from 'react';

const data = [
  {
    image: '/assets/home/testimonials/1.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna sed do eius mod tempor tota rem aperiam quae abillo. ',
    name: 'Cheryl Butler',
  },
  {
    image: '/assets/home/testimonials/2.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna sed do eius mod tempor tota rem aperiam quae abillo. ',
    name: 'Cheryl Butler',
  },
  {
    image: '/assets/home/testimonials/3.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna sed do eius mod tempor tota rem aperiam quae abillo. ',
    name: 'Cheryl Butler',
  },
  {
    image: '/assets/home/testimonials/4.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adip iscing elit. sed do eius mod tempor incididunt labore magna sed do eius mod tempor tota rem aperiam quae abillo. ',
    name: 'Cheryl Butler',
  },
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      {data.map((item, index) => (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2" key={index}>
          <div
            className={`w-full relative h-full min-h-[279px] ${
              index > 1 && 'order-1 sm:order-2'
            }`}
            key={index}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div
            className={`${
              index % 2 !== 0
                ? 'bg-[#0A212D] text-white'
                : 'bg-white text-primary'
            }  ${
              index > 1 && 'order-2 sm:order-1'
            } font-inter flex flex-col gap-6 items-start justify-center font-thin p-5`}
            key={`${index}_content`}
          >
            <p className="text-sm">{item.comment}</p>
            <spa className="font-medium">{item.name}</spa>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
