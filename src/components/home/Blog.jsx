import React from "react";
import { NewsCard, SectionHeading } from "..";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";
export async function getData(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs?populate=*&sort=id:desc&pagination[start]=1&pagination[limit]=3`,
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
    console.log("s", error);
    return {};
  }
}

export default async function Blog() {
  const blogs = await getData();
  return (
    <div className="max-w-[1200px] mx-auto py-8 md:py-16">
      <SectionHeading title={"Our Blogs"} />
      <div className="px-6 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-7">
        {blogs.data
          .filter((blog) => !blog.attributes.latest)
          .map((item, index) => (
            <NewsCard blog={item} key={index} />
          ))}
      </div>
      <Link
        href="/blogs"
        className="bg-gold text-white rounded  whitespace-nowrap font-medium text-center py-2 px-6 mx-auto w-fit flex"
      >
        See more <HiMiniArrowUpRight />
      </Link>
    </div>
  );
}
