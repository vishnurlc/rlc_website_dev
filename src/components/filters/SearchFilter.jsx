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
  let routeApi;
  switch (fetchApi) {
    case "chauffeur-cars":
      routeApi = "chauffeur-service";
      break;
    case "cars":
      routeApi = "luxury-car-rentals";
      break;
    case "hotels":
      routeApi = "luxury-hotels";
      break;
    case "club-packages":
      routeApi = "clubs-restaurants";
      break;
    case "yachts":
      routeApi = "luxury-yacht-rentals";
      break;
    case "jetskis":
      routeApi = "premium-jetski-rental";
      break;
    default:
      break;
  }

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Option: (props) => <Option {...props} fetchApi={routeApi} />,
      }}
      placeholder={
        <div className="flex items-center justify-between">
          <span className="pl-4 text-gray-400 font-thin text-sm">Search</span>
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
  const { fetchApi, data } = props;

  console.log(fetchApi);

  return (
    <Link href={`/${fetchApi}/${data.value}`} className="flex">
      <components.Option {...props} />
    </Link>
  );
};
