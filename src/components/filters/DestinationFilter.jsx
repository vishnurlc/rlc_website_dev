import { useEffect, useState } from "react";
import Select from "react-select";

const data = [
  {
    label: "Turkiye",
    value: "turkiye",
  },
  {
    label: "UAE",
    value: "uae",
  },
  {
    label: "Maldives",
    value: "maldives",
  },
];

const DestinationFilter = ({
  handleFilters,
  selectedValue,
  selectedValue1,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [places, setPlaces] = useState(null);

  useEffect(() => {
    const initialSelectedOption = data.find(
      (option) => option.value === selectedValue
    );
    setSelectedOption(initialSelectedOption);
    if (selectedValue) {
      handleInitialSlug(initialSelectedOption?.value);
    }
  }, [selectedValue]);
  const handleChange = (option) => {
    if (option) {
      handleFilters({ name: "destination", value: option?.value });
      getData(option.value);
    } else {
      handleFilters({ name: "destination", value: "" });
    }
  };
  const handleChange1 = (option) => {
    if (option) {
      handleFilters({ name: "city", value: option?.value });
    } else {
      handleFilters({ name: "city", value: "" });
    }
  };

  // featch citys
  async function getData(query) {
    // let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cities?populate=*&filters[destinations][name][$eq]=${query}&sort=order:asc`;
    let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/destinations?populate=cities&filters[slug]=${query}`;

    try {
      const res = await fetch(api, {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      });
      const data = await res.json();
      if (data) {
        const transformedData = await transformData(data.data);
        setPlaces(transformedData);
        return transformedData;
      }
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  const handleInitialSlug = async (value) => {
    const data1 = await getData(value);
    if (selectedValue1) {
      const initialSelectedOption = data1?.find(
        (option) => option.value === selectedValue1
      );
      setSelectedOption1(initialSelectedOption);
    }
  };

  const transformData = async (data) => {
    const destinations = {};

    data[0].attributes.cities.data.forEach((item) => {
      const destinationData = item;
      if (destinationData) {
        const { city, slug } = destinationData.attributes;
        if (!destinations[slug]) {
          destinations[slug] = { label: city, value: slug };
        }
      }
    });

    return Object.values(destinations);
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
          <span className="text-gray-400 font-thin text-sm">Destination</span>
        }
        className="react-select-container"
        classNamePrefix="react-select"
        isClearable
        isSearchable={false}
      />
      {places !== null && (
        <Select
          value={selectedOption1}
          onChange={(selectedOption1) => {
            setSelectedOption1(selectedOption1);
            handleChange1(selectedOption1);
          }}
          options={places}
          placeholder={
            <span className="text-gray-400 font-thin text-sm">Place</span>
          }
          className="react-select-container"
          classNamePrefix="react-select"
          isClearable
          isSearchable={false}
        />
      )}
    </>
  );
};

export default DestinationFilter;
