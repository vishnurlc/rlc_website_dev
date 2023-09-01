'use client';
import React from 'react';
import { Header } from '@/components';
import Footer from '@/components/layout/Footer';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import Link from 'next/link';
import { CurrencyProvider } from '@/context/currencyContext';
const RootLayout = ({ children }) => {
  return (
    <CurrencyProvider>
      <Header />
      {children}
      <div className="fixed bottom-[30px] right-[30px] z-20 flex flex-col gap-5">
        <Link
          href={`tel:${process.env.NEXT_PUBLIC_WHATSAPPNUMBER}`}
          className="backdrop-blur-md  p-3 block rounded-full  w-[48px] h-[48px] hover:scale-110 transition-all"
        >
          <BsTelephoneFill color="#DCA24B" className="w-full h-full" />
        </Link>
        <Link
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I would like to know more about Richylife Club Services in UAE?`}
          className="backdrop-blur-md p-2 block rounded-full w-[48px] h-[48px] hover:scale-110 transition-all"
        >
          <IoLogoWhatsapp color="#25d366" className="w-full h-full" />
        </Link>
      </div>
      <Footer />
    </CurrencyProvider>
  );
};

export default RootLayout;
