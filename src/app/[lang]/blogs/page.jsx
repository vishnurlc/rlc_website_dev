import { ContactForm, LatestNewsCarousel, NewsCard } from '@/components';
import EventsList from '@/components/blogs/EventsList';
export const metadata = {
  title: 'News & Blogs',
  description:
    "Get a glimpse into the luxury lifestyle with Richy life Club's news and blog. Discover insider tips, travel inspirations, and stories of unforgettable experiences that await you",
  keywords: [
    'Contact Richy life Club',
    'Luxury Experiences Dubai',
    'Get in Touch',
    'Inquiries',
    'Reservations',
    'Dubai Luxury',
    'Contact Information',
    'Customer Support',
    'Luxury Services',
    'Exclusive Experiences',
    'Dubai UAE',
    'Premium Leisure',
    'Luxury Lifestyle',
    'Luxury Travel',
    'Bespoke Services',
    'Dubai Holidays',
    'VIP Support',
    'Contact Us Form',
    'Richy life Club',
  ],
  openGraph: {
    title: 'News & Blogs',
    description:
      "Get a glimpse into the luxury lifestyle with Richy life Club's news and blog. Discover insider tips, travel inspirations, and stories of unforgettable experiences that await you",
    siteName: 'Richy life Club',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/home/heroposter.webp`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/home/heroposter.webp`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
export async function getData(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs?populate=*&sort=id:desc`,
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
export default async function Blogs() {
  const blogs = await getData();
  return (
    <div className="mt-[120px]  md:px-16 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-8">
        <h1 className="text-gold text-4xl md:text-[64px] leading-tight font-poppins font-bold text-center">
          News & <span className="text-primary">Blogs</span>
        </h1>

        {blogs.data.length > 0 && <LatestNewsCarousel blogs={blogs} />}

        <h2 className="px-4 md:px-0 uppercase text-xl md:text-3xl mt-7 ">
          Upcoming Events
        </h2>
        <EventsList />
        {blogs.data.length > 0 ? (
          <>
            {blogs.data.filter((blog) => !blog.attributes.latest).length >
              0 && (
              <div className="mt-10">
                <h2 className="px-4 md:px-0 uppercase text-xl md:text-3xl ">
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
          </>
        ) : (
          <div className="min-h-[50vh] flex items-center justify-center">
            <h2 className="text-center text-2xl md:text-3xl text-primary">
              There is no blogs at the moments. Stay tuned !
            </h2>
          </div>
        )}
      </div>
      <div className="my-9 md:my-16 px-6 ">
        <ContactForm
          title={'Get in Touch with Us'}
          description={'Experience Elegance & Convenience'}
        />
      </div>
    </div>
  );
}
