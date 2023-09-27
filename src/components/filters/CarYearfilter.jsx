import { useEffect, useState } from 'react';
import Select from 'react-select';
const fetchOptions = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/car-years?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching year Types:', error);
    return [];
  }
};

const CaryearFilter = ({ handleFilters, selectedValue }) => {
  const [fetchedOptions, setFetchedOptions] = useState();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchOptions().then((years) => {
      const options = years
        .filter((type) => type.attributes.cars.data.length > 0) // Filter out types with empty cars.data
        .map((type) => ({
          label: `${type.attributes.year}`,
          value: type.attributes.year,
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
        handleFilters({ name: 'year', value: selectedOption?.value });
      }}
      placeholder={
        <span className="text-gray-400 font-thin text-sm">Year</span>
      }
      className="react-select-container"
      classNamePrefix="react-select"
      isClearable
      isSearchable={false}
    />
  );
};

export default CaryearFilter;
