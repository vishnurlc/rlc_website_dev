import React from 'react';
import { SectionHeading } from '..';
import Card from '../ui/card/card';

const ListingComponent = () => {
  return (
    <div className="">
      <SectionHeading
        title={'Sail in Splendor'}
        description={
          'Chart Your Course to Unparalleled Luxury with our Exclusive Yachts'
        }
      />
      <div className="flex flex-col gap-8 w-full">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ListingComponent;
