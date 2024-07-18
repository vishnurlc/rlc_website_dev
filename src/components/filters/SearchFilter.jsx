import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Link from "next/link";

const fetchProperties = async (inputValue, fetchApi) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/${fetchApi}?filters[$or][0][name][$containsi]=${inputValue}`,
      {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log("search data", data.data);
    return data.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};

const loadOptions = (inputValue, fetchApi, callback) => {
  fetchProperties(inputValue, fetchApi)
    .then((properties) => {
      const options = properties.map((property) => ({
        label: `${property.attributes.name}`,
        value: property.attributes.slug,
      }));
      callback(options);
    })
    .catch((error) => {
      console.error(error);
      callback([]);
    });
};

const SearchInput = ({ fetchApi = "cars" }) => {
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
      loadOptions={(inputValue, callback) =>
        loadOptions(inputValue, fetchApi, callback)
      }
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
