import { useCurrency } from '@/context/currencyContext';
import formatDate from '@/lib/formatDate';
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';

const EventCard = ({ blog }) => {
  const { selectedCurrency, conversionRates } = useCurrency();
  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat('ae', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };
  return (
    <Link href={`/blogs/events/${blog.attributes.slug}`}>
      <div
        className=" flex flex-col"
        style={{
          boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
        }}
      >
        <Image
          src={
            blog.attributes.images.data[0].attributes.formats.medium?.url ||
            blog.attributes.images.data[0].attributes.url
          }
          width={400}
          height={300}
          alt="Richy Life Club Events Access"
          className="rounded-none md:rounded"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: 'auto',
            aspectRatio: 'calc(400/300)',
          }}
        />
        <div className="py-4 font-sans flex-auto flex justify-between flex-col px-4">
          <div className="text-xl md:text-2xl">{blog.attributes.name}</div>
          <p className="mt-4">
            Price from {convertPrice(blog.attributes.price)}
          </p>
          <Link
            href={blog.attributes.locationlink}
            className="flex gap-2 justify-start items-center my-5"
          >
            <FaLocationDot /> <span>{blog.attributes.location}</span>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
