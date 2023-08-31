'use client';
import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationPin, MdOutlineAvTimer } from 'react-icons/md';

function FooterAdress() {
  return (
    <div className="flex-col justify-start items-start gap-3 flex">
      <div className="flex gap-4 items-center justify-start">
        <div className="bg-gold p-2 rounded-full">
          <FaPhoneAlt size={18} />
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            className=" text-white text-sm font-normal leading-tight"
          >
            +971542661354
          </Link>
          <Link
            href={'mailto:info@richylife.ae'}
            className="text-white text-sm font-normal leading-tight"
          >
            info@richylife.ae
          </Link>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-start">
        <div className="bg-gold p-2 rounded-full">
          <MdLocationPin size={18} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-white text-sm font-normal leading-tight whitespace-nowrap">
            Suite A406, The Opus Tower
          </div>
          <div className="text-white text-sm font-normal leading-tight">
            Business Bay, Dubai
          </div>
        </div>
      </div>
      <div className="flex mt-4 items-center justify-start w-full gap-8 pl-1">
        <Link href={'https://www.instagram.com/richylifecom/'} target="_blank">
          <BsInstagram color="#DCA24B" size={24} />
        </Link>
        <Link href={'#'}>
          <BsYoutube color="#DCA24B" size={24} />
        </Link>
        <Link href={'#'}>
          <BsFacebook color="#DCA24B" size={24} />
        </Link>
        <Link href={'#'}>
          <BsTwitter color="#DCA24B" size={24} />
        </Link>
      </div>
    </div>
  );
}

export default FooterAdress;
