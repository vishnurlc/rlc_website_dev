import React from 'react';
import AsyncSelect from 'react-select/async';

const fetchOptions = async (inputValue) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/car-brands`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching car brand:', error);
    return [];
  }
};

const loadOptions = (inputValue, callback) => {
  fetchOptions(inputValue).then((brand) => {
    const options = brand.map((type) => ({
      label: `${type.attributes.brand}`,
      value: type.attributes.slug,
    }));
    callback(options);
  });
};

const CarBrandFilter = ({ setFilters }) => {
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      //   onChange={(selectedOption) => {
      //     setFilters({ name: 'type', value: selectedOption?.value });
      //   }}
      placeholder={
        <span className="text-gray-400 font-thin text-sm">Brand</span>
      }
      className="react-select-container"
      classNamePrefix="react-select"
      loadOptions={loadOptions}
      isClearable
      isSearchable={false}
    />
  );
};

export default CarBrandFilter;
