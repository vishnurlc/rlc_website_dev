'use client';
import React, { useState } from 'react';
import { BookingModal, PriceComponent } from '..';
import { Button } from '../ui/button/Button';

const PriceAndBookNow = ({ cost }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <>
      <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
        <h2 className="text-right text-xl text-primary">
          <PriceComponent cost={cost} />
          /per Person
        </h2>

        <Button action={() => setBookingOpen(true)}>Book Now</Button>
      </div>
      <BookingModal
        open={bookingOpen}
        setOpen={setBookingOpen}
        item={'tourAndExcursion'}
      />
    </>
  );
};

export default PriceAndBookNow;
