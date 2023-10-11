'use client';
import { FilterBtn, Loader } from '@/components';
import FaqAccordation from '@/components/ui/accordation/accordation';
import { useEffect, useState } from 'react';

async function getData({ value }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/faq-categories?filters[category][$eq]=${value}&populate=*`,
      {
        next: { revalidate: 40 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log('s', error);
    return {};
  }
}
const categoryData = [
  {
    value: 'Luxury Car Rental',
    category: 'car',
  },
  { value: 'Luxury Yacht Rental', category: 'yacht' },
  { value: 'Exclusive Water Sports', category: 'jetski' },
  { value: 'Exotic Pet VIP Experience', category: 'pet' },
  { value: 'Chauffeur Service', category: 'chauffeur' },
  { value: 'Helicopter Charters', category: 'helicopter' },
  { value: 'Private Jet Charters', category: 'privatejet' },
  { value: 'Premium Desert Adventure', category: 'desertsafari' },
];
const FaqComponent = () => {
  const [category, setCategory] = useState('car');
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData({ value: category });
      setData(data.data);
    };
    fetchData();
  }, [category]);

  return (
    <>
      <div className="my-8 max-w-[1200px] mx-auto">
        <FilterBtn
          items={categoryData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className="max-w-[1200px] mx-auto ">
        <div className="mt-12 min-h-[50vh] ">
          {data ? (
            <FaqAccordation data={data[0]?.attributes.faqs.data} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default FaqComponent;
