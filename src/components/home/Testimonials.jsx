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
    <div className="grid grid-cols-1 sm:grid-cols-4 ">
      {data.map((item, index) => (
        <>
          <div className="w-full relative h-full min-h-[279px]" key={index}>
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
          <div className={``} key={`${index}_content`}>
            <p>{item.comment}</p>
            <span>{item.name}</span>
          </div>
        </>
      ))}
    </div>
  );
};

export default Testimonials;
