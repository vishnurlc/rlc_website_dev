import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const data = [
  {
    label: '200 - 500',
    value: '200-500',
  },
  {
    label: '500 - 800',
    value: '500-800',
  },
  {
    label: '800 - 1200',
    value: '800-1200',
  },
  {
    label: '1200 - 1600',
    value: '1200-1600',
  },
  {
    label: '1600 - 2200',
    value: '1600-2200',
  },
  {
    label: '3000 - 4000',
    value: '3000-4000',
  },
  {
    label: '4000 - 5500',
    value: '4000-5500',
  },
  {
    label: '5500 - 7000',
    value: '5500-7000',
  },
  {
    label: '7000 - 10000',
    value: '7000-10000',
  },
];

const PriceFilter = ({ handleFilters, selectedValue }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    const initialSelectedOption = data.find(
      (option) => option.value === selectedValue
    );
    setSelectedOption(initialSelectedOption);
  }, [selectedValue]);

  const handleChange = (option) => {
    if (option) {
      handleFilters({ name: 'price', value: option?.value });
    } else {
      handleFilters({ name: 'price', value: '' });
    }
  };

  return (
    <>
      <Select
        value={selectedOption}
        onChange={(selectedOption) => {
          setSelectedOption(selectedOption);
          handleChange(selectedOption);
        }}
        options={data}
        placeholder={
          <span className="text-gray-400 font-thin text-sm">Select Price</span>
        }
        className="react-select-container"
        classNamePrefix="react-select"
        isClearable
        isSearchable={false}
      />
    </>
  );
};

export default PriceFilter;
