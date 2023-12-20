'use client';

import { useState } from 'react';
import Tourlist from './Tourlist';
import DestinationFilter from './DestinationFilter';

const destinations = [
  {
    name: 'UAE',
    slug: 'uae',
  },
  {
    name: 'Turkey',
    slug: 'turkey',
  },
  {
    name: 'Maldives',
    slug: 'maldives',
  },
];

const packages = {
  uae: [
    {
      image: '/assets/tours/bannerimage.jpeg',
      title: 'Dubai Desert Exploration',
      description: `Experience the majestic beauty of Dubai's desert landscape as you venture into its vast expanse, discovering ancient`,
      price: '2000',
      pax: '2',
      duration: '2nights and 2days',
      itinerary:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
      places_visiting: ['Dubai', 'Abu Dhabi', 'Sharjah'],
      hotels: ['Hotels1', 'Hotels2', 'Hotels3'],
    },
    {
      image: '/assets/tours/bannerimage.jpeg',
      title: 'Dubai 1Desert Exploration',
      description: `Experience the majestic beauty of Dubai's desert landscape as you venture into its vast expanse, discovering ancient`,
      price: '2000',
      pax: '2',
      duration: '2nights and 2days',
      itinerary:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
      places_visiting: ['Dubai', 'Abu Dhabi', 'Sharjah'],
      hotels: ['Hotels1', 'Hotels2', 'Hotels3'],
    },
    {
      image: '/assets/tours/bannerimage.jpeg',
      title: 'Dubai 2Desert Exploration',
      description: `Experience the majestic beauty of Dubai's desert landscape as you venture into its vast expanse, discovering ancient`,
      price: '2000',
      pax: '2',
      duration: '2nights and 2days',
      itinerary:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
      places_visiting: ['Dubai', 'Abu Dhabi', 'Sharjah'],
      hotels: ['Hotels1', 'Hotels2', 'Hotels3'],
    },
  ],
  turkey: [
    {
      image: '/assets/tours/bannerimage.jpeg',
      title: 'turkey Desert Exploration',
      description: `Experience the majestic beauty of turkey's desert landscape as you venture into its vast expanse, discovering ancient`,
      price: '2000',
      pax: '2',
      duration: '2nights and 2days',
      itinerary:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
      places_visiting: ['turkey', 'Abu Dhabi', 'Sharjah'],
      hotels: ['Hotels1', 'Hotels2', 'Hotels3'],
    },
    {
      image: '/assets/tours/bannerimage.jpeg',
      title: 'turkey 1Desert Exploration',
      description: `Experience the majestic beauty of turkey's desert landscape as you venture into its vast expanse, discovering ancient`,
      price: '2000',
      pax: '2',
      duration: '2nights and 2days',
      itinerary:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
      places_visiting: ['turkey', 'Abu Dhabi', 'Sharjah'],
      hotels: ['Hotels1', 'Hotels2', 'Hotels3'],
    },
    {
      image: '/assets/tours/bannerimage.jpeg',
      title: 'turkey 2Desert Exploration',
      description: `Experience the majestic beauty of Dubai's desert landscape as you venture into its vast expanse, discovering ancient`,
      price: '2000',
      pax: '2',
      duration: '2nights and 2days',
      itinerary:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
      places_visiting: ['Dubai', 'Abu Dhabi', 'Sharjah'],
      hotels: ['Hotels1', 'Hotels2', 'Hotels3'],
    },
  ],
  maldives: [
    {
      image: '/assets/tours/bannerimage.jpeg',
      title: 'maldives Desert Exploration',
      description: `Experience the majestic beauty of maldives's desert landscape as you venture into its vast expanse, discovering ancient`,
      price: '2000',
      pax: '2',
      duration: '2nights and 2days',
      itinerary:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
      places_visiting: ['maldives', 'Abu Dhabi', 'Sharjah'],
      hotels: ['Hotels1', 'Hotels2', 'Hotels3'],
    },
    {
      image: '/assets/tours/bannerimage.jpeg',
      title: 'maldives 1Desert Exploration',
      description: `Experience the majestic beauty of maldives's desert landscape as you venture into its vast expanse, discovering ancient`,
      price: '2000',
      pax: '2',
      duration: '2nights and 2days',
      itinerary:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
      places_visiting: ['maldives', 'Abu Dhabi', 'Sharjah'],
      hotels: ['Hotels1', 'Hotels2', 'Hotels3'],
    },
    {
      image: '/assets/tours/bannerimage.jpeg',
      title: 'maldives 2Desert Exploration',
      description: `Experience the majestic beauty of maldives's desert landscape as you venture into its vast expanse, discovering ancient`,
      price: '2000',
      pax: '2',
      duration: '2nights and 2days',
      itinerary:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
      places_visiting: ['maldives', 'Abu Dhabi', 'Sharjah'],
      hotels: ['Hotels1', 'Hotels2', 'Hotels3'],
    },
  ],
};

const ListingComponent = () => {
  const [destination, setDestination] = useState('uae');
  return (
    <div className="py-20 max-w-[1200px] mx-auto px-6">
      <DestinationFilter
        destinations={destinations}
        selectedDestination={destination}
        setDestination={setDestination}
      />
      <hr />
      <div className="mt-8 md:mt-12 px-0 md:px-6">
        <Tourlist packages={packages[destination]} />
      </div>
    </div>
  );
};

export default ListingComponent;
