import { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext(undefined);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('AED'); // Default currency
  const [conversionRates, setConversionRates] = useState({
    base: '',
    rates: {},
  }); // Store conversion rates here

  // Load conversion rates from an API or other source and update state
  useEffect(() => {
    const apiEndpoint = `/api/currency`;

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => setConversionRates(data))
      .catch((error) => console.log(error));
  }, []);

  const updateCurrency = (currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem('selectedCurrency', currency);
  };

  const contextValue = {
    selectedCurrency,
    updateCurrency,
    conversionRates,
  };

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};
