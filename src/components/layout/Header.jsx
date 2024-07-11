"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BiArrowToBottom, BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import CurrencyDropdown from "./CurrencyDropdown";
import MobileCurrency from "./MobileCurrency";
import { FaChevronDown, FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import { getDictionary } from "@/dectionaries";
import jsonData from "../../dictionaries/en.json";
const dropdownvariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -10,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
};

const mobileMenuVariant = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      // delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};
const menuitemVariant = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
};

export default function Header({ lang }) {
  const [headerData, setHeaderData] = useState(jsonData);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerType, setHeaderType] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null); // Keep track of active dropdown
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState(null);
  const path = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleArrowClick = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  useEffect(() => {
    const fetchData = async () => {
      const dict = await getDictionary(lang);

      setHeaderData(dict.layout.header);
    };
    fetchData();
  }, [lang]);

  // Function to handle dropdown hover
  const handleDropdownHover = (index) => {
    setActiveDropdown(index);
  };

  // Function to handle dropdown leave
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleMobileDropdown = (index) => {
    if (index === mobileMenuDropdown) {
      setMobileMenuDropdown(null);
    } else {
      setMobileMenuDropdown(index);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHeaderType(1);
      } else {
        setHeaderType(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Premium Transfers",
      link: "/chauffeur-service",
    },
    {
      name: "Premium Rent A Car",
      link: "/luxury-car-rentals",
    },
    {
      name: "Luxury Yacht Rentals",
      link: "/luxury-yacht-rentals",
    },
    {
      name: "Helicopter",
      link: "/helicopter-rentals",
    },
    {
      name: "Clubs & Restaurants",
      link: "/clubs-restaurants",
    },
    {
      name: "Excursions",
      link: "#",
      dropdown: true,
      products: [
        {
          name: "Tours & Excursions",
          href: "/tours-excursions",
        },

        {
          name: "Premium Desert Adventure",
          href: "/premium-desert-adventure",
        },
        {
          name: "Private Jet Charter",
          href: "/private-jet-rentals",
        },

        {
          name: "Premium Jetski",
          href: "/premium-jetski-rental",
        },
        {
          name: "Exotic Pet VIP Experiences",
          href: "/exotic-pet-experiences",
        },
      ],
    },
    {
      name: "News & Events",
      link: "/blogs",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];
  const linksDesktop = [
    {
      name: "Premium Transfers",
      link: "/chauffeur-service",
    },
    {
      name: "Premium Rent A Car",
      link: "/luxury-car-rentals",
    },
    {
      name: "Luxury Yacht Rentals",
      link: "/luxury-yacht-rentals",
    },

    {
      name: "Excursions",
      link: "#",
      dropdown: true,
      products: [
        {
          name: "Tours & Excursions",
          href: "/tours-excursions",
        },
        {
          name: "Clubs & Restaurants",
          href: "/clubs-restaurants",
        },

        {
          name: "Premium Desert Adventure",
          href: "/premium-desert-adventure",
        },
        {
          name: "Helicopter",
          href: "/helicopter-rentals",
        },
        {
          name: "Private Jet Charter",
          href: "/private-jet-rentals",
        },

        {
          name: "Premium Jetski",
          href: "/premium-jetski-rental",
        },
        {
          name: "Exotic Pet VIP Experiences",
          href: "/exotic-pet-experiences",
        },
      ],
    },
    {
      name: "News & Events",
      link: "/blogs",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <header
      className="fixed w-screen top-0 z-50 transition-all"
      style={{
        background:
          headerType === 1 || mobileMenuOpen ? "#006039" : "transparent",
      }}
      onMouseLeave={handleDropdownLeave}
    >
      <div className=" bg-[#F8F8F8] px-1">
        <div className="md:max-w-[1200px] mx-auto relative text-[#CBB87E] flex items-center justify-between  sm:justify-end  text-xs sm:gap-5 py-2 ">
          {headerData.pvta} 24/7{" "}
          <span className="flex gap-2 items-center">
            <BiPhoneCall /> +971 501 9603 38
            <FaChevronDown onClick={handleArrowClick} />
          </span>
          <CurrencyDropdown />
          {showDropdown && (
            <div className="absolute top-full right-2 mt-2 bg-white border border-gray-300 rounded shadow-md z-50">
              <Link
                href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                className="flex gap-2 items-center justify-start px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm"
              >
                <FaMobileAlt /> {headerData.call}
              </Link>
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I would like to connect with Private Assistant of RLC?`}
                className="flex gap-2 items-center justify-start px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm"
              >
                <FaWhatsapp />
                {headerData.whatsapp}
              </Link>
            </div>
          )}
        </div>
      </div>
      {/*  */}
      <nav
        className="px-6 py-2 mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex ">
          <Link href="/">
            <span className="sr-only">Richy life Club</span>
            <Image
              width={100}
              height={100}
              src={
                mobileMenuOpen
                  ? "/assets/logos/rlclogogreen.png"
                  : headerType === 1 || mobileMenuOpen
                  ? "/assets/logos/rlclogomatewhite.png"
                  : "/assets/logos/whiterlclogo.png"
              }
              alt="Richy life Club Logo"
              priority
              className="aspect-square h-auto w-[60px] md:w-[80px]"
            />
          </Link>
        </div>
        <div className="flex xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen ? (
              <BiMenuAltRight
                className="h-6 w-6"
                aria-hidden="true"
                color={headerType === 1 ? "#214842" : "white"}
                onClick={() => setMobileMenuOpen(true)}
              />
            ) : (
              <AiOutlineClose
                className="h-6 w-6"
                aria-hidden="true"
                color="#253242"
                onClick={() => setMobileMenuOpen(false)}
              />
            )}
          </button>
        </div>
        <div className="hidden xl:flex xl:gap-x-6">
          {linksDesktop.map((item, index) => (
            <span key={index} onMouseEnter={() => handleDropdownHover(index)}>
              {item.dropdown ? (
                <div className="relative group">
                  <div
                    className={`flex items-center gap-x-1 text-sm font-inter leading-6 cursor-pointer nav_link ${
                      headerType === 1 ? "text-white " : "text-white"
                    }  focus:outline-none`}
                  >
                    {item.name}
                    <HiOutlineChevronDown
                      className={`h-5 w-5 flex-none ${
                        headerType === 1 ? "text-white" : "text-white"
                      } `}
                      aria-hidden="true"
                    />
                  </div>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        variants={dropdownvariant}
                        animate={"visible"}
                        initial="hidden"
                        exit={"exit"}
                        className={` py-2 absolute right-0 top-full z-10 mt-3  overflow-hidden rounded-sm bg-white shadow-lg ring-1 ring-gray-900/5 `}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.products.map((product) => (
                          <div
                            key={product.name}
                            className="py-2 px-7 text-sm leading-6 hover:bg-gray-50 w-full"
                          >
                            <Link
                              href={product.href}
                              className="block text-gray-900 whitespace-nowrap nav_link"
                            >
                              {product.name}
                            </Link>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.link}
                  className={`text-sm leading-6 nav_link ${
                    headerType === 1 ? "text-white" : "text-white"
                  } font-inter`}
                >
                  {item.name}
                </Link>
              )}
            </span>
          ))}
          {/* <CurrencyDropdown /> */}
        </div>
      </nav>

      {/* mobile */}
      <div
        className={`xl:hidden h-screen ${
          mobileMenuOpen ? "block bg-white" : "hidden"
        } px-8`}
      >
        <div className="flex flex-col space-y-4 py-6">
          {links.map((item, index) => (
            <span key={index}>
              {item.dropdown ? (
                <div className="relative group">
                  <div
                    className={`flex items-center gap-x-1 text-sm md:text-base  font-inter leading-6 cursor-pointer
         text-primary
                   focus:outline-none`}
                    onClick={() => handleMobileDropdown(index)}
                  >
                    {item.name}
                    <HiOutlineChevronDown
                      className={`h-4 w-4 flex-none text-primary`}
                      aria-hidden="true"
                    />
                  </div>
                  <AnimatePresence>
                    {mobileMenuDropdown === index && (
                      <motion.div
                        key={index}
                        className={`py-2 relative ${
                          mobileMenuOpen ? "block" : "hidden"
                        }`}
                        variants={mobileMenuVariant}
                        initial="closed"
                        exit="closed"
                        animate={mobileMenuDropdown ? "open" : "closed"}
                      >
                        {item.products.map((product) => (
                          <motion.div
                            {...menuitemVariant}
                            key={product.name}
                            className="py-2 relative px-7 text-sm md:text-base leading-6 hover:bg-gray-50 w-full"
                          >
                            <Link
                              href={product.href}
                              className="block text-primary whitespace-nowrap"
                            >
                              {product.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.link}
                  className={`text-sm md:text-base leading-6 text-primary font-inter`}
                >
                  {item.name}
                </Link>
              )}
            </span>
          ))}
          <Link
            href={"/faq"}
            className={`text-sm md:text-base leading-6 text-primary font-inter`}
          >
            Faq
          </Link>
          <MobileCurrency />
        </div>
      </div>
    </header>
  );
}
