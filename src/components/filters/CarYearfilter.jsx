import React from 'react';
import AsyncSelect from 'react-select/async';

const fetchOptions = async (inputValue) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/car-years`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching year Types:', error);
    return [];
  }
};

const loadOptions = (inputValue, callback) => {
  fetchOptions(inputValue).then((bodytype) => {
    const options = bodytype.map((type) => ({
      label: `${type.attributes.year}`,
      value: type.attributes.year,
    }));
    callback(options);
  });
};

const CaryearFilter = ({ handleFilters }) => {
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      onChange={(selectedOption) => {
        handleFilters({ name: 'year', value: selectedOption?.value });
      }}
      placeholder={
        <span className="text-gray-400 font-thin text-sm">Year</span>
      }
      className="react-select-container"
      classNamePrefix="react-select"
      loadOptions={loadOptions}
      isClearable
      isSearchable={false}
    />
  );
};

export default CaryearFilter;
