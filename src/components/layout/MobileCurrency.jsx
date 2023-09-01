'use client';
import { useCurrency } from '@/context/currencyContext';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const currencies = [
  {
    id: 0,
    currency: 'AED',
    flag: '/assets/currencyFlag/uae.svg',
  },
  {
    id: 1,
    currency: 'USD',
    flag: '/assets/currencyFlag/usa.svg',
  },
];

const MobileCurrency = () => {
  const { selectedCurrency, updateCurrency } = useCurrency();

  const handleCurrencyChange = (currency) => {
    updateCurrency(currency);
    // Close the dropdown after selecting a currency
  };

  return (
    <div className="flex gap-5 items-center justify-start ">
      {currencies.map((currency) => (
        <div
          key={currency.id}
          className={`flex items-center gap-x-2 cursor-pointer my-2 text-xs px-5 py-2 bg-primary ${
            selectedCurrency === currency.currency
              ? 'bg-opacity-80 text-white'
              : 'bg-opacity-5 text-primary'
          } rounded-full`}
          onClick={() => handleCurrencyChange(currency.currency)}
        >
          <Image
            src={currency.flag}
            alt={currency.currency}
            width={20}
            height={12}
          />
          {currency.currency}
        </div>
      ))}
    </div>
  );
};

export default MobileCurrency;
