'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    name: 'Rent A Car',
    link: '#',
  },
  {
    name: 'Luxury Yacht Rentals',
    link: '#',
  },
  {
    name: 'Exclusive Water Sports',
    link: '#',
    dropdown: true,
    products: [
      {
        name: 'Premium Gold Jetski',
        href: '#',
      },
    ],
  },
  {
    name: 'Exotic Pet VIP Experiences',
    link: '#',
  },
  {
    name: 'Services',
    link: '#',
    dropdown: true,
    products: [
      {
        name: 'Chauffer / Airport Transfer',
        href: '#',
      },
      {
        name: 'Photo / Video Shoot',
        href: '#',
      },
      {
        name: 'Coorporate Hire',
        href: '#',
      },
      {
        name: 'Premium Desert Adventure',
        href: '#',
      },
      {
        name: 'Helicopter Rentals',
        href: '#',
      },
      {
        name: 'Private Jet Rentals',
        href: '#',
      },
    ],
  },
  {
    name: 'Contact Us',
    link: '#',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-transparent fixed w-screen top-0 z-20"
      style={{
        background: mobileMenuOpen
          ? ''
          : 'linear-gradient(180deg, #000 0%, rgba(41, 41, 41, 0.00) 100%)',
      }}
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
          {!mobileMenuOpen && (
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <BiMenuAltRight
                className="h-6 w-6"
                aria-hidden="true"
                color="white"
              />
            </button>
          )}
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6">
          {links.map((item, index) => (
            <span key={index}>
              {item.dropdown ? (
                <Popover className="relative">
                  <Popover.Button className="flex items-center gap-x-1 text-sm font-inter leading-6 text-white focus:outline-none">
                    {item.name}
                    <HiOutlineChevronDown
                      className="h-5 w-5 flex-none text-white"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="py-2 absolute right-0 top-full z-10 mt-3  overflow-hidden rounded-sm bg-white shadow-lg ring-1 ring-gray-900/5">
                      {item.products.map((item) => (
                        <div
                          key={item.name}
                          className="py-2 px-7 text-sm leading-6 hover:bg-gray-50 w-full"
                        >
                          <Link
                            href={item.href}
                            className="block text-gray-900 whitespace-nowrap"
                          >
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ) : (
                <Link
                  href={item.link}
                  className="text-sm leading-6 text-white font-inter "
                >
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Richylife Club</span>
              <Image
                width={98.04}
                height={100}
                src="/assets/logos/logo-dark.svg"
                alt="Richylife Club"
                className="aspect-[98.04/100] w-[70px] md:w-[98.04px]"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href={links[0].link}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {links[0].name}
                </Link>
                <Link
                  href={links[1].link}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {links[1].name}
                </Link>
                <Link
                  href={links[2].link}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {links[2].name}
                </Link>
                <Link
                  href={links[3].link}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {links[3].name}
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {links[4].name}
                        <HiOutlineChevronDown
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Link
                  href={links[5].link}
                  className="text-sm  leading-6 text-gray-900"
                >
                  {links[5].name}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
