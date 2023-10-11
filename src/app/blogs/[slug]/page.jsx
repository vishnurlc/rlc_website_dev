import Image from 'next/image';
import {
  ContactForm,
  DescriptionComponent,
  LatestNewsComponent,
  Loader,
  NewsCard,
} from '@/components';
import formatDate from '@/lib/formatDate';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
export async function generateMetadata({ params }) {
  try {
    const blog = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs?filters[slug][$eq]=${params.slug}&populate=image&populate=SEO`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    ).then((res) => res.json());
    return {
      title: blog.data[0].attributes.SEO.title || '| News & Events',
      description:
        blog.data[0].attributes.SEO.description ||
        'News & Exclusive happening in the Richy life club ',
      keywords: blog.data[0].attributes.SEO.keywords,
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
export async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs?populate=*`,
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
  const blogs = await getData();
  const blog = blogs.data.filter((item) => item.attributes.slug === slug);

  return (
    <div>
      {blog.length > 0 ? (
        <>
          <div className="relative h-[60vh] w-full">
            <Image
              src={blog[0].attributes.image.data.attributes.url}
              fill
              sizes="100vw"
              alt={blog[0].attributes.heading}
              style={{
                objectFit: 'cover',
                objectPosition: 'contain',
              }}
            />

            <div className="absolute w-3/4 max-w-[900px]  rounded-sm text-white px-4 py-2 z-10 left-[5vw] bottom-1/4 backdrop-blur-sm">
              <h2 className="uppercase font-bold font-inter text-xl md:text-4xl">
                {blog[0].attributes.heading}
              </h2>
              <p className="hidden sm:block md:text-xl font-extralight mt-2 font-inter">
                {blog[0].attributes.subheading}
              </p>
              <p className="mt-5 text-sm font-thin text-gray-300">
                {formatDate(blog[0].attributes.date)}
              </p>
            </div>
            <div className="absolute inset-0 select-none z-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="max-w-[1500px] mx-auto px-6 md:px-9 ">
            <div className="relative grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-3  my-10 ">
              <div className="grid col-span-1 md:col-span-2">
                <div className="mb-6">
                  <h2 className="uppercase font-bold font-inter text-2xl md:text-3xl">
                    {blog[0].attributes.heading}
                  </h2>
                  <span className="text-gray-500 text-sm md:text-base">
                    {blog[0].attributes.subheading}
                  </span>
                </div>
                <DescriptionComponent bio={blog[0].attributes.description} />
              </div>
              <div className="grid col-span-1 ">
                <div className="relative md:sticky top-28 h-fit">
                  <h3 className="text-2xl font-medium text-primary">
                    Follow Us
                  </h3>
                  <div className="mt-7 flex items-center justify-start gap-9 ">
                    <Link
                      href={'https://www.instagram.com/richylifecom/'}
                      target="_blank"
                    >
                      <BsInstagram color="#214842" size={24} />
                    </Link>
                    <Link
                      href={
                        'https://www.youtube.com/channel/UCnMbmjAfQqUf42K_ClJaYww'
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsYoutube color="#214842" size={24} />
                    </Link>
                    <Link
                      href={
                        'https://www.facebook.com/profile.php?id=61550870554790'
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFacebook color="#214842" size={24} />
                    </Link>
                    <Link
                      href={'https://www.linkedin.com/company/richylife-club/'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin color="#214842" size={24} />
                    </Link>
                  </div>
                  <div className="mt-9">
                    <LatestNewsComponent
                      currentvalue={blog[0].attributes.slug}
                    />
                  </div>
                </div>
              </div>
            </div>
            {blogs.data.filter((blog) => !blog.attributes.latest).length >
              0 && (
              <div className="mt-10">
                <h2 className="uppercase text-xl md:text-3xl ">
                  You may also like
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-7">
                  {blogs.data
                    .filter((blog) => !blog.attributes.latest)
                    .map((item, index) => (
                      <NewsCard blog={item} key={index} />
                    ))}
                </div>
              </div>
            )}
            <div className="my-9 md:my-16 ">
              <ContactForm
                title={'Get in Touch with Us'}
                description={'Experience Elegance & Convenience'}
              />
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
    next: {
      revalidate: 40,
    },
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });

  const data = await res.json();
  return data.data.map((blog) => ({
    slug: blog.attributes.slug,
  }));
};
