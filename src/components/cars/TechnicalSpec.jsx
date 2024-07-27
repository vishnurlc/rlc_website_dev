"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { itemVariant, parentVariant } from "@/lib/animation";
import { useInView } from "react-intersection-observer";
const TechnicalSpec = ({ car }) => {
  const animationControl = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      animationControl.start("visible");
    }
  }, [inView]);
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
        {car.data[0].attributes.body?.data?.attributes?.type && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Car Body</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.body.data.attributes.type}
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.fuel?.data?.attributes?.type && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Fuel Type</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.fuel.data.attributes.type}
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.technicalspec?.cylinder?.data?.attributes
          ?.cylinders && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>No of Cylinder</span>
            <span className="text-[#8a97a4]">
              {
                car.data[0].attributes.technicalspec.cylinder.data.attributes
                  .cylinders
              }
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.technicalspec?.interior_colors?.data?.length >
          0 && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Interior Color</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.technicalspec.interior_colors.data
                .map((item) => item.attributes.color)
                .join("+")}
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.car_colors?.data?.length > 0 && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Exterior Color</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.car_colors.data
                .map((item) => item.attributes.color)
                .join(",")}
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.seat?.data?.attributes?.seat && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Seats</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.seat.data.attributes.seat}
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.technicalspec?.transmission?.data?.attributes
          ?.type && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Transmission</span>
            <span className="text-[#8a97a4]">
              {
                car.data[0].attributes.technicalspec.transmission.data
                  .attributes.type
              }
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.technicalspec?.horsepower && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Horse Power</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.technicalspec.horsepower}
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.technicalspec?.engine_capacity && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Engine Capacity</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.technicalspec.engine_capacity}
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.year?.data?.attributes?.year && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Year</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.year.data.attributes.year}
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.technicalspec?.mileage_limit && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Mileage Limit</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.technicalspec.mileage_limit}
            </span>
          </motion.li>
        )}
        {car.data[0].attributes.deposit?.data?.attributes?.type && (
          <motion.li
            variants={itemVariant}
            className="flex font-inter text-sm md:text-lg w-full items-center justify-between py-2 md:py-4 border-b border-[#E4EBF0]"
          >
            <span>Deposit</span>
            <span className="text-[#8a97a4]">
              {car.data[0].attributes.deposit.data.attributes.type ===
              "No Deposit"
                ? car.data[0].attributes.deposit.data.attributes.type
                : `AED ${car.data[0].attributes.deposit.data.attributes.type}`}
            </span>
          </motion.li>
        )}
      </motion.ul>
    </motion.div>
  );
};

export default TechnicalSpec;
