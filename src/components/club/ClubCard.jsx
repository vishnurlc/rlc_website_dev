"use client";
import AnimatedBtn from "../premiumjetski/AnimatedBtn";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { Button } from "../ui/button/Button";

import {
  MdAccessTime,
  MdOutlineLocationOn,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { IoAirplaneOutline } from "react-icons/io5";

import { useCurrency } from "@/context/currencyContext";
const ClubCard = ({ data, order }) => {
  const { selectedCurrency, conversionRates } = useCurrency();
  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat("ae", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };

  console.log(data);
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9 md:my-20">
    //   <div className={`order-${order}`}>
    //     <div className="text-white mb-7">
    //       <h2 className=" text-2xl md:text-4xl mb-6">{item.attributes.name}</h2>
    //       <p className="text-sm md:text-xl text-gray-400 pb-5">
    //         {item.attributes.price}
    //       </p>
    //       <p className="text-gray-500 text-sm md:text-base tracking-wide ">
    //         {item.attributes.description}
    //       </p>
    //       <p className="text-gray-500 text-sm md:text-base tracking-wide ">
    //         {/* {item.attributes.place} */}
    //       </p>
    //     </div>
    //     <AnimatedBtn
    //       text={"Reservce Now"}
    //       styles={"bg-gold text-white rounded-sm"}
    //       msg={`I'm writing to you today to inquire about the ${item.attributes.name}. I'm interested in learning more about its specifications, price, and availability.`}
    //     />
    //   </div>
    //   <div className="relative w-full h-full min-h-[350px] overflow-hidden rounded">
    //     <Image
    //       src={item.attributes.image.data[0].attributes.url}
    //       alt="Premium Desert Safari Packages | Richy life Club "
    //       fill
    //       style={{
    //         objectFit: "cover",
    //         objectPosition: "50%",
    //       }}
    //       izes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //     />
    //     <div className="bg-black bg-opacity-10 absolute inset-0"></div>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 w-full lg:grid-cols-5  max-w-[1200px] rounded-sm overflow-hidden mx-auto bg-white] mb-5">
      <Link
        href={`/clubs-restaurants/${data.attributes.slug}`}
        className="col-span-3 relative w-full aspect-[2/1] min-h-[120px] "
      >
        <Image
          src={data.attributes.image?.data[0].attributes.url}
          alt={`Rent ${data.attributes.name} with Richy life Club`}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
          id="selectDisable"
          // className="mx-auto"
        />
      </Link>
      <div className="p-5 col-span-1 md:col-span-2">
        <div className="text-black h-full flex flex-col items-start justify-between">
          <h3 className="text-primary text-2xl font-bold leading-[29.04px]">
            <Link href={`/clubs-restaurants/${data.attributes.slug}`}>
              {data.attributes.name}
            </Link>
          </h3>

          {/* <p>{data.attributes.description}</p> */}

          <CarDetail data={data} />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full py-5 gap-6">
            <div className="w-full md:w-fit">
              <span className="text-primary font-normal text-2xl">
                {convertPrice(data.attributes.avg_price_per_person)}
                <span className="text-secondary text-sm font-normal">
                  /Person
                </span>
              </span>
            </div>
            <div className="flex justify-between md:justify-start items-center gap-4 w-full md:w-fit">
              <div className="flex gap-4 ">
                <Link
                  href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <FaPhoneAlt size={24} color="#DCA24B" />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I would like to know more about ${data.attributes.name} booking`}
                >
                  <RiWhatsappFill size={24} color="#25D366" />
                </Link>
              </div>
              <Button
                action={() => setBookingOpen(true)}
                msg={`I would like to know more about ${data.attributes.name} booking`}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CarDetail({ data }) {
  const { selectedCurrency, conversionRates } = useCurrency();

  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat("ae", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };
  return (
    <div className="py-3 flex gap-5 flex-wrap">
      <div className="p-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
          <MdOutlineLocationOn /> {data.attributes.place}
        </div>
      </div>
      <div className="px-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-sm md:text-base font-medium leading-tight">
          <MdAccessTime /> {data.attributes.timing}
        </div>
      </div>
      <div className="px-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-sm md:text-base font-medium leading-tight">
          {"$".repeat(data.attributes.dollarcountmin)} -{" "}
          {"$".repeat(data.attributes.dollarcountmax)}
        </div>
      </div>
    </div>
  );
}

export default ClubCard;
