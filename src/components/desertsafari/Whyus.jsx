import React from 'react';
import { SectionHeading } from '..';
import Link from 'next/link';

const Whyus = () => {
  return (
    <div>
      <SectionHeading
        title={
          'Richylife Club&apos;s VIP Desert Safari: Dive into Luxury and Adventure'
        }
      />
      <p className="text-center text-gray-500">
        At Richylife Club, we&apos;re all about crafting unforgettable
        adventures with a touch of luxury. Our VIP Desert Safari in Dubai is
        your gateway to an experience like no other.
      </p>
      <div className="text-gray-500 my-9">
        <div className="mt-6 flex flex-col gap-6">
          <div>
            <h3 className="text-2xl text-primary mb-4">
              Why Choose Richylife Club&apos;s VIP Desert Safari:
            </h3>

            <ul className="pl-4">
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Luxury Beyond Compare:{' '}
                </span>
                &nbsp; Picture yourself in a plush Land Cruiser, embarking on a
                thrilling journey through Dubai&apos;s enchanting desert.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Exclusive Comfort:{' '}
                </span>
                &nbsp;We&apos;re all about privacy. Enjoy hotel pick-up and
                drop-off in a shared vehicle, ensuring your comfort throughout.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Adrenaline Rush:{' '}
                </span>
                &nbsp; Brace yourself for an exhilarating dune drive, navigating
                the endless sand dunes, and relishing an adrenaline rush.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Unwind in Style:{' '}
                </span>
                &nbsp; Pause for a stunning sunset with bubbles or date juice
                and chocolates, a moment to cherish and capture.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Authentic Arabian Experience:
                </span>
                &nbsp;Embrace the desert life with a camel ride, Henna
                hand-painting, and the traditional Arabic Qahwa and dates.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Entertainment Extravaganza:
                </span>
                &nbsp;Be enthralled by Arabian Adventures Fire and Dance Show, a
                mesmerizing display of local culture.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Culinary Delights:
                </span>
                &nbsp;Savor a premium three-course BBQ dinner under the stars,
                served at your private table with personal waiter service.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Relaxation and Traditions:
                </span>
                &nbsp;Try the traditional shisha pipe as you sip on premium
                adult beverages, immersing yourself in local customs.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              The Experience:
            </h4>
            <p className="text-base">
              Your journey begins in the late afternoon and lasts until early
              evening. We pick you up in our comfortable Land Cruiser (max 4
              guests sharing) and head towards the desert.
            </p>
            <br />
            <p className="text-base">
              After an adrenaline-pumping dune drive, watch the sun set with
              sparkling date juice and juicy dates, capturing the moment with
              incredible photos.
            </p>
            <br />
            <p className="text-base">
              At our Bedouin-style camp, enjoy privacy in gazebos. Be greeted
              with aromatic Arabic coffee and delightful dates before you hop on
              a camel for a desert stroll or try sandboarding.
            </p>
            <br />
            <p className="text-base">
              Relax and indulge in a sumptuous BBQ dinner under the starlit sky,
              with unlimited soft drinks and premium adult beverages, all served
              at your private table.
            </p>
            <br />
            <p className="text-base">
              As you tantalize your taste buds, local performers offer
              captivating entertainment, immersing you fully in this unique
              experience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Getting Back:
            </h4>
            <p className="text-base">
              We&apos;ll drive you back to your hotel, ensuring you&apos;re safe
              and satisfied, with memories to last a lifetime.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Who Is It For:
            </h4>
            <p className="text-base">
              Our VIP Desert Safari caters to everyone – couples, families,
              kids, single travelers, leisure and business travelers. We have
              child rates for ages 5-11 and adult rates for 12 years and above.
              <br />
              If you&apos;re traveling with children aged 2-5 or under 135cm in
              height, please book a private vehicle and provide their details
              during booking.
              <br />
              Richylife Club&apos;s VIP Desert Safari is your key to an
              unparalleled Dubai adventure. Book now and prepare for an
              unforgettable journey!
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Tips and Good to Know:
            </h4>
            <ul className="pl-4">
              <li className="text-base leading-8">
                Our vehicles accommodate a maximum of four guests. Private VIP
                seating at the campsite is designed for up to four people.
              </li>
              <li className="text-base leading-8">
                Modest dress and comfy walking shoes are recommended.
              </li>
              <li className="text-base leading-8">
                Restrooms are available at the campsite.
              </li>
              <li className="text-base leading-8">
                Sandboarding is weather-dependent and available upon request.
              </li>
              <li className="text-base leading-8">
                Entertainment and beverage service may vary during religious
                holidays.
              </li>
              <li className="text-base leading-8">
                A portion of your fee supports local conservation.
              </li>
            </ul>
          </div>
          <p>
            Embark on the adventure of a lifetime with Richylife Club&apos;s VIP
            Desert Safari. Book today and create memories that will stay with
            you forever!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
