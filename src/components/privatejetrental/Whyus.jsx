import React from 'react';
import { SectionHeading } from '..';
import Link from 'next/link';

const Whyus = () => {
  return (
    <div>
      <SectionHeading
        title={'Your Ultimate UAE Private Jet Experience with Richy life Club'}
      />
      <p className="text-center text-gray-500">
        Welcome to Richy life Club, where your journey begins with a touch of
        luxury. We&apos;re not just about renting jets; we&apos;re here to give
        you an experience you&apos;ll remember.
      </p>
      <div className="text-gray-500 my-9">
        <div className="mt-6 flex flex-col gap-6">
          <div>
            <h3 className="text-2xl text-primary mb-4">
              Why Choose Richy life Club for Your UAE Adventure:
            </h3>

            <ul className="pl-4">
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Experience Unmatched Comfort:{' '}
                </span>
                &nbsp; Picture yourself stepping into a private jet designed for
                your comfort. No crowds, no hassles – just relaxation.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Embrace UAE&apos;s Beauty:{' '}
                </span>
                &nbsp;The UAE is a place of wonders, and we want you to savor
                every moment. Whether you&apos;re here for business or leisure,
                our jets ensure you explore the UAE&apos;s splendor.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  It&apos;s All About You:{' '}
                </span>
                &nbsp; Your preferences matter the most. Our jets are tailored
                for you, from spacious cabins to top-class service.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Discover Iconic UAE:{' '}
                </span>
                &nbsp; From the stunning Burj Khalifa to the serene deserts, we
                ensure you experience UAE&apos;s gems like a VIP.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Your Jet Choices:
            </h4>
            <ul className="pl-4">
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">Light Jets:</span>
                &nbsp;Ideal for quick getaways or intimate journeys, our light
                jets offer comfort and convenience.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">Midsize Jets:</span>
                &nbsp;Exploring the UAE? Our midsize jets provide the room and
                luxury you need.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">Heavy Jets:</span>
                &nbsp;Going on a long-haul trip? Our heavy jets redefine luxury,
                making sure you arrive feeling like royalty.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Get Ready for the UAE Experience:
            </h4>
            <p className="text-base">
              Richy life Club isn&apos;t just about renting a jet; it&apos;s
              about giving you a taste of the UAE&apos;s opulence.
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="norefferer"
              >
                Contact{' '}
              </Link>{' '}
              us now for a free quote, and get prepared to elevate your UAE
              experience with the best in private aviation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
