import React from 'react';
import { RichTextComponent } from '..';
import styles from './tours.module.scss';
const ItineraryComponent = ({ itinerary }) => {
  return (
    <div className={`text-gray-400 ${styles.blogbody}`}>
      <RichTextComponent bio={itinerary} />
    </div>
  );
};

export default ItineraryComponent;
