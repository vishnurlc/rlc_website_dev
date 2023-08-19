'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
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
      type: 'spring',
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

const links = [
  {
    name: 'Rent A Car',
    link: '/luxury-car-rentals',
  },
  {
    name: 'Luxury Yacht Rentals',
    link: '/luxury-yacht-rentals',
  },
  {
    name: 'Exclusive Water Sports',
    link: '/exclusive-water-sports',
    dropdown: true,
    products: [
      {
        name: 'Premium Jetski',
        href: '/premium-jetski-rental',
      },
      {
        name: 'Premium Gold Jetski',
        href: '/premium-gold-jetski',
      },
    ],
  },
  {
    name: 'Exotic Pet VIP Experiences',
    link: '/exotic-pet-experiences',
  },
  {
    name: 'Services',
    link: '#',
    dropdown: true,
    products: [
      {
        name: 'Chauffer service',
        href: '/chauffer-service',
      },
      {
        name: 'Premium Jetski',
        href: '/premium-jetski-rental',
      },
      {
        name: 'Premium Gold Jetski',
        href: '/premium-gold-jetski',
      },
      {
        name: 'Premium Desert Adventure',
        href: '/premium-desert-adventure',
      },
      {
        name: 'Private Jet Rentals',
        href: '/private-jet-rentals',
      },
      {
        name: 'Luxury Yacht Rentals',
        href: '/luxury-yacht-rentals',
      },
      {
        name: 'Rent A Car',
        href: '/luxury-car-rentals',
      },
    ],
  },
  {
    name: 'Contact Us',
    link: '/contact-us',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerType, setHeaderType] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null); // Keep track of active dropdown
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState(null);
  const path = usePathname();

  const variantPath = ['/private-jet-rentals/'];

  useEffect(() => {
    setMobileMenuOpen(false);
    async function updatePosition() {
      const varPath = variantPath.some((item) => path.includes(item));
      if (varPath) {
        setHeaderType(1);
      } else {
        setHeaderType(0);
      }
    }
    updatePosition();
  }, [path]);

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

  return (
    <header
      className="fixed w-screen top-0 z-50 "
      style={{
        background:
          headerType === 1 || mobileMenuOpen
            ? '#fff'
            : 'linear-gradient(180deg, #000 0%, rgba(41, 41, 41, 0.00) 100%)',
      }}
      onMouseLeave={handleDropdownLeave}
    >
      <nav
        className="px-6 py-2 mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex ">
          <Link href="/">
            <span className="sr-only">Richylife Club</span>
            <Image
              width={98.04}
              height={100}
              src="/assets/logos/logo-dark.svg"
              alt="Richylife Club"
              className="aspect-[98.04/100] w-[70px] md:w-[98.04px]"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen ? (
              <BiMenuAltRight
                className="h-6 w-6"
                aria-hidden="true"
                color={headerType === 1 ? '#214842' : 'white'}
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
        <div className="hidden lg:flex lg:gap-x-6">
          {links.map((item, index) => (
            <span key={index} onMouseEnter={() => handleDropdownHover(index)}>
              {item.dropdown ? (
                <div className="relative group">
                  <div
                    className={`flex items-center gap-x-1 text-sm font-inter leading-6 cursor-pointer ${
                      headerType === 1 ? 'text-primary' : 'text-white'
                    }  focus:outline-none`}
                  >
                    {item.name}
                    <HiOutlineChevronDown
                      className={`h-5 w-5 flex-none ${
                        headerType === 1 ? 'text-primary' : 'text-white'
                      } `}
                      aria-hidden="true"
                    />
                  </div>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        variants={dropdownvariant}
                        animate={'visible'}
                        initial="hidden"
                        exit={'exit'}
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
                              className="block text-gray-900 whitespace-nowrap"
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
                  className={`text-sm leading-6 ${
                    headerType === 1 ? 'text-primary' : 'text-white'
                  } font-inter`}
                >
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </div>
      </nav>
      <div
        className={`lg:hidden h-screen ${
          mobileMenuOpen ? 'block bg-white' : 'hidden'
        } px-8`}
      >
        <div className="flex flex-col space-y-4 py-6">
          {links.map((item, index) => (
            <span key={index}>
              {item.dropdown ? (
                <div className="relative group">
                  <div
                    className={`flex items-center gap-x-1 text-sm font-inter leading-6 cursor-pointer
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
                          mobileMenuOpen ? 'block' : 'hidden'
                        }`}
                        variants={mobileMenuVariant}
                        initial="closed"
                        exit="closed"
                        animate={mobileMenuDropdown ? 'open' : 'closed'}
                      >
                        {item.products.map((product) => (
                          <motion.div
                            {...menuitemVariant}
                            key={product.name}
                            className="py-2 relative px-7 text-sm leading-6 hover:bg-gray-50 w-full"
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
                  className={`text-sm leading-6 text-primary font-inter`}
                >
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
