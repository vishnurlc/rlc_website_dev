'use client';

import formatDate from '@/lib/formatDate';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Loader } from '..';
const getData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs?filters[latest]=true&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    return;
  }
};
const LatestNewsComponent = ({ currentvalue }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(
        data?.data.filter((item) => item.attributes.slug !== currentvalue)
      );
    };
    fetchData();
  }, []);
  return (
    <>
      {data.length > 0 && (
        <>
          <h3 className="text-2xl font-medium text-primary">The Latest</h3>
          <div className="mt-6 flex flex-col gap-8">
            {data.length > 0 ? (
              data.map((blog, index) => (
                <Link href={`/blogs/${blog.attributes['slug']}`} key={index}>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      boxShadow:
                        'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                    }}
                  >
                    <h4>{blog.attributes.heading}</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      {blog.attributes.subheading}{' '}
                    </p>
                    <br />
                    <p className="text-sm text-gray-500">
                      {formatDate(blog.attributes.date)}
                    </p>
                  </motion.div>
                </Link>
              ))
            ) : (
              <Loader color={'gray'} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default LatestNewsComponent;
