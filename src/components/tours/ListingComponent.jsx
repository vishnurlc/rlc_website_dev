'use client';

import { useEffect, useState } from 'react';
import Tourlist from './Tourlist';
import DestinationFilter from './DestinationFilter';
import qs from 'qs';
import { Loader } from '..';
const destinations = [
  {
    name: 'UAE',
    slug: 'uae',
  },
  {
    name: 'Turkey',
    slug: 'turkey',
  },
  {
    name: 'Maldives',
    slug: 'maldives',
  },
];

const ListingComponent = () => {
  const [destination, setDestination] = useState('uae');
  const [packages, setPackages] = useState([]);
  const [status, setStatus] = useState(0);
  async function getData({ params }) {
    setStatus(0);

    const queryString = qs.stringify({
      filters: {
        destination: {
          slug: {
            $eq: params.slug,
          },
        },
      },
    });

    let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/packages?${queryString}&populate=*`;

    try {
      const res = await fetch(api, {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      });
      const data = await res.json();
      if (data.data.length === 0) {
        setStatus(1);
      } else {
        setStatus(2);
      }
      return data;
    } catch (error) {
      return {};
    }
  }
  useEffect(() => {
    getData({ params: { slug: destination } }).then((data) =>
      setPackages(data)
    );
  }, [destination]);
  return (
    <div className="py-20 max-w-[1200px] mx-auto px-6">
      <DestinationFilter
        destinations={destinations}
        selectedDestination={destination}
        setDestination={setDestination}
      />

      <hr />
      <div className="mt-8 md:mt-12 px-0 md:px-6">
        {status !== 0 && <Tourlist packages={packages} />}
        {status === 1 && (
          <p className="text-center text-xl ">No Packages found !</p>
        )}
        {status === 0 && <Loader color={'#000'} />}
      </div>
    </div>
  );
};

export default ListingComponent;
