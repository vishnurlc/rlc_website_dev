import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const fetchOptions = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/car-bodies`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Body Types:', error);
    return [];
  }
};

const CarbodyFilter = ({ handleFilters, selectedValue }) => {
  const [fetchedOptions, setFetchedOptions] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    fetchOptions().then((body) => {
      const options = body.map((type) => ({
        label: `${type.attributes.type}`,
        value: type.attributes.slug,
      }));
      setFetchedOptions(options);

      // Set the selected option based on the selectedValue
      const initialSelectedOption = options.find(
        (option) => option.value === selectedValue
      );
      setSelectedOption(initialSelectedOption);
    });
  }, [selectedValue]);
  return (
    <Select
      cacheOptions
      options={fetchedOptions}
      value={selectedOption}
      onChange={(selectedOption) => {
        setSelectedOption(selectedOption);
        handleFilters({ name: 'body', value: selectedOption?.value });
      }}
      placeholder={
        <span className="text-gray-400 font-thin text-sm">Body</span>
      }
      className="react-select-container"
      classNamePrefix="react-select"
      isClearable
      isSearchable={false}
    />
  );
};

export default CarbodyFilter;
