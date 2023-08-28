import { Loader, SectionHeading } from '@/components';
import FaqAccordation from '@/components/ui/accordation/accordation';
import React, { Suspense } from 'react';

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/faqs`, {
      next: { revalidate: 40 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log('s', error);
    return {};
  }
}
export default async function FaqPage() {
  const data = await getData();
  return (
    <main>
      <div className="max-w-[1200px] mx-auto mt-[120px]  px-6 md:px-16">
        <SectionHeading
          title={'FAQ'}
          description={'All your concerns are answered'}
        />
        <div className="mt-12">
          <Suspense fallback={<Loader />}>
            <FaqAccordation data={data.data} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
