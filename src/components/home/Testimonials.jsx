import Image from 'next/image';
import React from 'react';

const data = [
  {
    image: '/assets/home/testimonials/1.png',
    comment:
      'RichyLife Club turned my dream of cruising on a luxury yacht into reality. Their attention to detail and impeccable service made my day truly extraordinary. ',
    name: 'Sara Al-Mansoori',
  },
  {
    image: '/assets/home/testimonials/2.png',
    comment:
      "Im a car enthusiast, and RichyLife Club's premium car rentals allowed me to experience some of the finest cars in the world. It's like having a garage of dreams! ",
    name: 'Ahmed Khan',
  },
  {
    image: '/assets/home/testimonials/3.png',
    comment:
      "When I needed to travel in style, RichyLife Club's private jet service was the perfect choice. Seamless, comfortable, and a true taste of luxury.",
    name: 'Aisha Ibrahim',
  },
  {
    image: '/assets/home/testimonials/4.png',
    comment:
      'Being a UAE resident, RichyLife Club has shown me the hidden gems of my own country through their exclusive services. An amazing way to explore!',
    name: 'Ali Khalfan',
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
