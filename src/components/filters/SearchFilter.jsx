import React from 'react';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const fetchProperties = async (inputValue) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars?filters[$or][0][name][$containsi]=${inputValue}`,
      {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};

const loadOptions = (inputValue, callback = (options) => {}) => {
  fetchProperties(inputValue)
    .then((cars) => {
      const options = cars.map((car) => ({
        label: `${car.attributes.name}`,
        value: car.attributes.slug,
      }));
      callback(options);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch or processing.
      console.error(error);
    });
};

const SearchInput = () => {
  const router = useRouter();
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Option,
      }}
      placeholder={
        <div className="flex items-center justify-between">
          <span className="pl-4 text-gray-400 font-thin text-sm">
            Search a car by brand or model
          </span>
          <BsSearch />
        </div>
      }
      loadOptions={loadOptions}
      isClearable
      className="react-select-container2"
      classNamePrefix="react-select"
    />
  );
};

export default SearchInput;

const Option = (props) => {
  return (
    <Link href={`/luxury-car-rentals/${props.data.value}`} className="flex">
      <components.Option {...props} />
    </Link>
  );
};