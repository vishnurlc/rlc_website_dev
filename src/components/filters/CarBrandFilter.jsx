import { useEffect, useState } from 'react';
import Select from 'react-select';

const fetchOptions = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/car-makes?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching car brand:', error);
    return [];
  }
};

const CarBrandFilter = ({ handleFilters, selectedValue }) => {
  const [fetchedOptions, setFetchedOptions] = useState();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchOptions().then((brand) => {
      const options = brand
        .filter((type) => type.attributes.cars.data.length > 0) // Filter out types with empty cars.data
        .map((type) => ({
          label: `${type.attributes.make}`,
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
        handleFilters({ name: 'make', value: selectedOption?.value });
      }}
      placeholder={
        <span className="text-gray-400 font-thin text-sm">Make</span>
      }
      className="react-select-container"
      classNamePrefix="react-select"
      isClearable
      isSearchable={false}
    />
  );
};

export default CarBrandFilter;
