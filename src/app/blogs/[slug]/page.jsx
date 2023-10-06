import Image from 'next/image';
import { DescriptionComponent, Loader } from '@/components';
import formatDate from '@/lib/formatDate';
export async function generateMetadata({ params }) {
  try {
    const blog = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs?filters[slug][$eq]=${params.slug}&populate=image`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    ).then((res) => res.json());
    return {
      title: blog.data[0].attributes.heading || '| News & Events',
      description:
        blog.data[0].attributes.subheading ||
        'News & Exclusive happening in the Richy life club ',
      openGraph: {
        type: 'website',
        title: blog.data[0].attributes.name || '| News & Events',
        description: blog.data[0].attributes.description || 'News & Events ',
        images: [
          {
            url: `${blog.data[0].attributes.image.data.attributes.url}`,
            width: 800,
            height: 600,
          },
          {
            url: `${blog.data[0].attributes.image.data.attributes.url}`,
            width: 300,
            height: 200,
          },
        ],
      },
    };
  } catch (error) {
    console.log(error);
  }
}
export async function getData(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`,
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
export default async function BlogDetail({ params: { slug } }) {
  const blog = await getData(slug);

  return (
    <div>
      {blog.data?.length > 0 ? (
        <>
          <div className="relative h-[60vh] w-full">
            <Image
              src={blog.data[0].attributes.image.data.attributes.url}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'contain',
              }}
            />

            <div className="absolute w-3/4 max-w-[900px]  rounded-sm text-white px-4 py-2 z-10 left-[5vw] bottom-1/4 backdrop-blur-sm">
              <h2 className="uppercase font-bold font-inter text-xl md:text-4xl">
                {blog.data[0].attributes.heading}
              </h2>
              <p className="hidden sm:block md:text-xl font-extralight mt-2 font-inter">
                {blog.data[0].attributes.subheading}
              </p>
              <p className="mt-5 text-sm font-thin text-gray-300">
                {formatDate(blog.data[0].attributes.date)}
              </p>
            </div>
            <div className="absolute inset-0 select-none z-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1644px] mx-auto my-10 px-6 md:px-9 ">
            <div className="grid col-span-2 md:col-span-2">
              <div className="mb-6">
                <h2 className="uppercase font-bold font-inter text-2xl md:text-3xl">
                  {blog.data[0].attributes.heading}
                </h2>
                <span className="text-gray-500 text-sm md:text-base">
                  {blog.data[0].attributes.subheading}
                </span>
              </div>
              <DescriptionComponent bio={blog.data[0].attributes.description} />
            </div>
            <div className="grid col-span-1"></div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
