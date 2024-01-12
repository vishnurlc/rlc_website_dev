"use client";
import AnimatedBtn from "../../premiumjetski/AnimatedBtn";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { Button } from "../button/Button";

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
    <div className="grid grid-cols-1 w-full bg-[#fbfbfb] lg:grid-cols-5  max-w-[1200px] rounded-sm overflow-hidden mx-auto bg-white] mb-5">
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
        />
      </Link>
      <div className="p-5 col-span-1 md:col-span-2">
        <div className="text-black h-full flex flex-col items-start justify-between">
          <h3 className="text-primary text-2xl font-bold leading-[29.04px]">
            <Link href={`/clubs-restaurants/${data.attributes.slug}`}>
              {data.attributes.name}
            </Link>
          </h3>
          <CarDetail data={data} />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full py-5 gap-6">
            <div className="w-full md:w-fit">
              {/* <span className="text-primary font-normal text-2xl">
                {convertPrice(data.attributes.avg_price_per_person)}
                <span className="text-secondary text-sm font-normal">
                  {/* /Person */}
              {/* </span> */}
              {/* </span>  */}
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
              <AnimatedBtn
                text={"Reserve now"}
                styles={"rounded-md bg-gold text-white mt-4 "}
                msg={`I would like to reserve a table at ${data.attributes.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CarDetail({ data }) {
  const { selectedCurrency, conversionRates } = useCurrency();
  return (
    <div className="py-3 flex gap-5 flex-wrap">
      <div className="p-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex gap-2 text-base font-medium leading-tight capitalize">
          <MdOutlineLocationOn size={"2rem"} /> {data.attributes.place}
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
      {data.attributes.restaurant_types.data.map((e, index) => (
        <div
          key={index}
          className="px-2 py-2 bg-slate-100 flex items-center justify-center"
        >
          <div className="text-primary flex items-center gap-2 text-sm md:text-base font-medium leading-tight">
            {e.attributes.type}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClubCard;
