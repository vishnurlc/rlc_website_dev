'use client';
import { useCurrency } from '@/context/currencyContext';
import Image from 'next/image';
import { useState } from 'react';
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

const CurrencyDropdown = () => {
  const { selectedCurrency, updateCurrency } = useCurrency();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCurrencyChange = (currency) => {
    updateCurrency(currency);
    setIsDropdownOpen(false); // Close the dropdown after selecting a currency
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const availableCurrencies = currencies.filter(
    (currency) => currency.currency !== selectedCurrency
  );

  return (
    <div className="relative">
      <div
        className="flex items-center gap-x-2 cursor-pointer text-white text-sm"
        onClick={toggleDropdown}
      >
        <Image
          src={currencies.find((c) => c.currency === selectedCurrency)?.flag}
          alt={selectedCurrency}
          width={20}
          height={12}
          style={{
            width: '20px',
            height: '12px',
          }}
        />
        {selectedCurrency} <FiChevronDown />
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300  shadow-md p-2 z-10">
          {availableCurrencies.map((currency) => (
            <div
              key={currency.id}
              className="flex items-center gap-x-2 cursor-pointer text-primary my-2 w-full text-sm"
              onClick={() => handleCurrencyChange(currency.currency)}
            >
              <Image
                src={currency.flag}
                alt={currency.currency}
                width={20}
                height={12}
                style={{
                  width: '20px',
                  height: '12px',
                }}
              />
              {currency.currency}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
