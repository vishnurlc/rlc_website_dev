import React from 'react';
import Image from 'next/image';
import InfinitScroll from '@/components/chaufferservice/InfinitScroll';

export async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/club-packages?populate=*`,
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
async function page() {
  const desert = await getData();

  return (
    <main className="pt-[108px] md:pt-[150px]">
      <div>
        {/* <HeroSection
          posterurl={"/assets/home/heroposter1.webp"}
          type={"video"}
          url={"https://admin.richylife.ae/rlchome.mp4"}
          btntext={"Experience Luxury"}
        /> */}
      </div>

      <div className="max-w-[1200px] mx-auto px-0 md:px-6 pb-10">
        <InfinitScroll fetchApi="club-packages" />
        {/* {desert.data?.map((item, index) => (
          <ClubCard data={item} key={index} order={index} />
        ))} */}
      </div>
    </main>
  );
}

export default page;
