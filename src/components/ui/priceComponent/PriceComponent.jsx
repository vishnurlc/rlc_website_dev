'use client';

import { useCurrency } from '@/context/currencyContext';

const PriceComponent = ({ cost, white }) => {
  const { selectedCurrency, conversionRates } = useCurrency();
  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat('ae', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };

  return (
    <span className={white ? 'text-xl text-white' : 'text-xl text-primary'}>
      {convertPrice(cost)}
    </span>
  );
};

export default PriceComponent;
