import React from "react";
import { NewsCard } from "..";

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
    <div>
      <div className="px-6 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-7">
        {blogs.data
          .filter((blog) => !blog.attributes.latest)
          .map((item, index) => (
            <NewsCard blog={item} key={index} />
          ))}
      </div>
    </div>
  );
}
