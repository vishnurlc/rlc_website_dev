"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { itemVariant, parentVariant } from "@/lib/animation";
import { useInView } from "react-intersection-observer";
import { useCurrency } from "@/context/currencyContext";
const ChaufferSpec = ({ car }) => {
  const { selectedCurrency, conversionRates } = useCurrency();
  const animationControl = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animationControl.start("visible");
    }
  }, [inView]);

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
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={animationControl}
      variants={parentVariant}
    >
      <motion.h2
        variants={itemVariant}
        className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]"
      >
        Technical Specifications
      </motion.h2>

      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-x-9"
        variants={parentVariant}
      >
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>5 hours</span>
          <span className="text-[#8a97a4]">
            {/* {car.data.attributes.body} */}
            {convertPrice(car.data.attributes.fivehours)}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>10 hours</span>
          <span className="text-[#8a97a4]">
            {convertPrice(car.data.attributes.tenhours)}
            {/* {car.data.attributes.fuel.data.attributes.type} */}
          </span>
        </motion.li>

        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Airport</span>
          <span className="text-[#8a97a4]">
            {convertPrice(car.data.attributes.airport)}
            {/* {
              car.data.attributes.technicalspec.cylinder.data.attributes
                .cylinders
            } */}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Interior Color</span>
          <span className="text-[#8a97a4]">
            {/* {car.data[0].attributes.technicalspec.interior_colors.data
              .map((item) => item.attributes.color)
              .join("+")} */}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Exterior Color</span>
          <span className="text-[#8a97a4]">
            {/* {car.data[0].attributes.car_colors.data
              .map((item) => item.attributes.color)
              .join(",")} */}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Seats</span>
          <span className="text-[#8a97a4]">
            {/* {car.data[0].attributes.seat.data.attributes.seat} */}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Transmission</span>
          <span className="text-[#8a97a4]">
            {/* {
              car.data[0].attributes.technicalspec.transmission.data.attributes
                .type
            } */}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Horse Power</span>
          <span className="text-[#8a97a4]">
            {/* {car.data[0].attributes.technicalspec.horsepower} */}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Engine Capacity</span>
          <span className="text-[#8a97a4]">
            {/* {car.data[0].attributes.technicalspec.engine_capacity} */}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Year</span>
          <span className="text-[#8a97a4]">
            {/* {car.data[0].attributes.year.data.attributes.year} */}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Mileage Limit</span>
          <span className="text-[#8a97a4]">
            {/* {car.data[0].attributes.technicalspec.mileage_limit} */}
          </span>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4  border-b border-[#E4EBF0] "
        >
          <span>Deposit</span>
          {/* <span className="text-[#8a97a4]">
            {car.data[0].attributes.deposit.data.attributes.type ===
            "No Deposit"
              ? car.data[0].attributes.deposit.data.attributes.type
              : `AED ${car.data[0].attributes.deposit.data.attributes.type}`}
          </span> */}
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default ChaufferSpec;
