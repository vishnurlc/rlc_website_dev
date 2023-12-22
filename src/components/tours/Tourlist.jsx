import React from 'react';
import TravelCard from './TravelCard';

const Tourlist = ({ packages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {packages.data.map((item, index) => (
        <TravelCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Tourlist;
