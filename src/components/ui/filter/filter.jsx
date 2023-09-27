'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbArrowsSort } from 'react-icons/tb';
import { BiChevronDown } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Filter() {
  const [bodyTypeOpen, setBodyTypeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [filter, setFilter] = useState();

  const toggleBodyTypeDropdown = () => {
    setBodyTypeOpen(!bodyTypeOpen);
    setPriceOpen(false);
  };

  const togglePriceDropdown = () => {
    setPriceOpen(!priceOpen);
    setBodyTypeOpen(false);
  };

  const router = useRouter();
  const query = router.query;

  const handleClick = (param) => {
    setFilter(param);
  };

  useEffect(() => {
    if (window) {
      window.history.pushState({}, '', '?' + 'key=filter');
    }
  }, [filter]);

  return (
    <div className="pl-2 py-10 md:p-10 overflow-visible">
      <div className="flex md:justify-end gap-5 min-w-[150px] overflow-x-scroll overflow-y-visible hide-scrollbar">
        <div
          className={`${
            bodyTypeOpen ? 'bg-teal-900 bg-opacity-10 text-white' : ''
          } border border-teal-900  px-5 py-2 rounded-3xl cursor-pointer min-w-[150px] relative`}
          onClick={toggleBodyTypeDropdown}
        >
          <div className="text-center text-black text-sm font-medium leading-tight inline-flex items-center gap-3">
            Body type <BiChevronDown />
          </div>
          <div className="absolute top-11 z-50 bg-white">
            <AnimatePresence>
              {bodyTypeOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-52 border px-5 py-2 inline-flex items-center gap-3 bg-teal-900 bg-opacity-10 min-w-[150px] text-black"
                >
                  {/* Dropdown content here */}
                  <ul>
                    <li onClick={() => handleClick('home1')}>home</li>
                    <li onClick={() => handleClick('home')}>home</li>
                    <li>
                      <Link href={'/luxury-car-rentals?link'} shallow={true}>
                        LInk
                      </Link>
                    </li>
                    <li>home</li>
                    <li>home</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div
          className={`${
            priceOpen ? 'bg-teal-900 bg-opacity-10 text-white' : ''
          } border border-teal-900  px-5 py-2 rounded-3xl cursor-pointer relative`}
          onClick={togglePriceDropdown}
        >
          <div className="text-center text-black text-sm font-medium leading-tight inline-flex items-center gap-3">
            Price <BiChevronDown />
          </div>
          <div className="absolute top-11 bg-white">
            <AnimatePresence>
              {priceOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-52 border px-5 py-2 inline-flex items-center gap-3 bg-teal-900 bg-opacity-10 text-black"
                >
                  {/* Dropdown content here */}
                  <ul>
                    <li>router</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="px-5 py-2 inline-flex gap-5 items-center min-w-[210px]">
          <TbArrowsSort /> Sort by: Featured
        </div>
      </div>
    </div>
  );
}

export default Filter;
