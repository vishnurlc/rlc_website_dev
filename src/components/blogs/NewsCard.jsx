import formatDate from '@/lib/formatDate';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ blog }) => {
  return (
    <Link href={blog.attributes.slug}>
      <div
        style={{
          boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
        }}
      >
        <Image
          src={blog.attributes.image.data.attributes.formats.medium.url}
          width={400}
          height={300}
          alt="Title tags"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: 'auto',
            aspectRatio: 'calc(400/300)',
            borderRadius: '4px',
          }}
        />
        <div className="py-4 font-sans">
          <span className="text-xl md:text-3xl">
            {blog.attributes.heading}&nbsp;
          </span>
          <span className="text-base text-gray-600">
            {blog.attributes.subheading}
          </span>
          <p className="mt-5 text-sm font-thin text-gray-500">
            {formatDate(blog.attributes.date)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
