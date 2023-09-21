import React from 'react';
import { SectionHeading } from '..';
import Link from 'next/link';

const Whyus = () => {
  return (
    <div>
      <SectionHeading
        title={"Discover Dubai from Above with Richylife's Helicopter Tours"}
      />
      <p className="text-center text-gray-500">
        There's no better way to experience Dubai's grandeur and beauty than
        from the sky, and Richylife is your gateway to these breathtaking aerial
        adventures. We offer private charter helicopter services that allow you
        to explore Dubai like never before.
      </p>
      <div className="text-gray-500 my-9">
        <h3 className="text-2xl text-primary mb-4">What Makes Us Special:</h3>
        <p>
          At Richylife, we understand that your journey should be as unique as
          you are. Our private charter helicopter services provide you with the
          opportunity to explore Dubai at your own pace, in your own style.
          Here's why you should choose us:
        </p>
        <div className="mt-6 flex flex-col gap-6">
          <div>
            <ul className="pl-4">
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  High-Quality Fleet:{' '}
                </span>
                &nbsp; Our helicopters are top-of-the-line, ensuring your safety
                and comfort throughout your journey. From VIP and executive
                aircraft to specialized equipment for aerial photography and
                surveying, we have the perfect helicopter for your needs.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Experienced Team:{' '}
                </span>
                &nbsp; Our certified instructors and pilots are highly
                experienced, ensuring that your flight is not only safe but also
                filled with fascinating insights about Dubai's landmarks.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Customized Experiences:{' '}
                </span>
                &nbsp; Whether you're traveling for business, sightseeing, or a
                special event, we tailor our helicopter charters to meet your
                unique requirements.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Convenient Location:{' '}
                </span>
                &nbsp; We are strategically located near Dubai International
                Airport, making your transfer fast and efficient, whether you're
                attending a business meeting or a premier event.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Helicopter Tours:
            </h4>
            <p className="text-base">
              Our helicopter tours are designed to provide you with
              unforgettable views of Dubai's iconic landmarks. Choose from our
              tour options to see the city from a unique perspective:
            </p>
            <ul className="pl-4">
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">Iconic Tour:</span>
                &nbsp;Fly over Palm Jumeirah, Burj Al Arab, Dubai's stunning
                beaches, and the world's tallest building, Burj Khalifa. Marvel
                at the Dubai Canal and other architectural wonders.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">The Palm Tour:</span>
                &nbsp;Witness the Palm Jumeirah, Burj Khalifa, Burj Al Arab,
                Dubai Water Canal, and more. Enjoy the breathtaking views of the
                Jumeirah coastline and the largest UAE flag.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">Vision Tour :</span>
                &nbsp;Explore Dubai's vision with sights like Palm Jumeirah,
                Atlantis Hotel, Burj Khalifa, Dubai Canal, and Old Dubai's
                historic landmarks.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">The Grand Tour:</span>
                &nbsp;Experience the ultimate tour covering Ain Dubai,
                Bluewaters Island, Emirates Hills, Jumeirah Lakes, Dubai Marina,
                Burj Al Arab, Palm Jumeirah, and more.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Booking and Cancellation:
            </h4>
            <p className="text-base">
              Booking with Richylife is flexible and hassle-free. You can choose
              to arrange pickup and drop-off from your hotel or residence. Our
              cancellation policy is designed to accommodate your needs, with
              charges applicable only for last-minute cancellations.
              <br />
              <br />
              Don't miss the opportunity to see Dubai from a whole new
              perspective. Whether you're a visitor or a resident, our
              helicopter tours offer an unparalleled experience. Let Richylife
              be your guide to discovering Dubai's splendor from the skies.
              Contact us today to plan your aerial adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
