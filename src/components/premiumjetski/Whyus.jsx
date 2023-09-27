import { SectionHeading } from '..';
import Link from 'next/link';
import { Button } from '../ui/button/Button';
import AnimatedBtn from './AnimatedBtn';

const Whyus = () => {
  return (
    <div>
      <SectionHeading title={'Jet Ski Adventures in Dubai with Richy life'} />
      <p className="text-center text-gray-500">
        Dubai, the city of grandeur, where sky-high buildings touch the clouds
        and luxury knows no bounds. If you&apos;re planning to visit this
        awe-inspiring city, we&apos;ve got an adventure that will make your trip
        truly unforgettable – Jet Skiing on the pristine waters of the Arabian
        Gulf. Welcome to Richy life&apos;s Jet Ski Rental Services in Dubai!
      </p>
      <div className="text-gray-500 my-9">
        <h3 className="text-2xl text-primary mb-4">Why Choose Richy life:</h3>
        <p>
          Dubai is all about pushing the limits, and we&apos;re no different.
          What sets Richy life apart? It&apos;s not just about renting a jet
          ski; it&apos;s about experiencing the thrill of the open sea while
          being in safe hands. We prioritize your safety while ensuring you have
          an exhilarating ride.
        </p>
        <div className="mt-6 flex flex-col gap-6">
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Meet Your Jet Ski:
            </h4>
            <p className="text-base">
              Get ready to ride the waves on our powerful and stable. These
              machines are built for speed (up to 100 km/h) yet are easy to
              handle, making them suitable for both beginners and experienced
              riders. Feel the wind in your hair as you zip across the water.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Why Richy life?
            </h4>

            <ul className="pl-4">
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Best-in-Class Equipment:
                </span>
                &nbsp;Our brand new jet skis have been upgraded for optimal
                performance. They are designed for stability and power, with a
                seating capacity for two.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Personalized Tours:
                </span>
                &nbsp;Whether you&apos;re solo, with friends, or planning a
                corporate event, we offer bespoke tours tailored to your
                preferences, duration, and places you want to explore.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Expert Instructors:
                </span>
                &nbsp;Our instructors are passionate about water sports and are
                dedicated to ensuring your safety and enjoyment.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">
                  Multilingual Team:
                </span>
                &nbsp;With a multicultural team that speaks over 5+ languages,
                we accommodate all your needs to make your experience unique.
              </li>
              <li className="text-base leading-8">
                <span className="font-bold text-gray-600">Safety First:</span>
                &nbsp;While we ensure safety is paramount, we don&apos;t
                compromise on the intensity and excitement of the sport.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              What&apos;s Included:
            </h4>
            <ul className="pl-4">
              <li className="text-base leading-8">
                Your very own jet ski, perfect for solo adventurers or pairs.
              </li>
              <li className="text-base leading-8">
                Safety first! We provide comfortable safety jackets in various
                sizes.
              </li>
              <li className="text-base leading-8">
                Stay refreshed with complimentary water during your ride.
              </li>
              <li className="text-base leading-8">
                Capture the memories! Our tour leader snaps photos and videos
                which we&apos;ll share with you at no extra cost.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 mb-4 text-xl">
              Our Jet Ski Tours:
            </h4>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-600 text-lg">
                30-Minute Jet Ski Tour :
              </h4>
              <p className="text-base">
                Follow our experienced instructor on your own jet ski as you
                cruise to the iconic 7-star hotel, the Burj Al Arab. This
                architectural marvel seems even more majestic when viewed from
                the water. Snap away for some unforgettable photos before we
                head back to the marina, all while having a blast on your jet
                ski.
              </p>
              <AnimatedBtn
                text={'Book 30-min Tour'}
                styles={'bg-primary text-gold rounded-sm my-3'}
                msg={'I would like to book 30 min jetski tour'}
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-600 text-lg">
                1-Hour Jet Ski Tour :
              </h4>
              <p className="text-base">
                Take the reins of your jet ski and lead the way from our marina
                to the world-renowned Burj Al Arab. Enjoy a photo session with
                this Dubai icon. Then, ride along the coastline, taking in the
                stunning Dubai Skyline. We might even spot the opulent yacht of
                His Highness Sheikh Mohammed bin Rashid Al Maktoum. The tour
                continues to the Jumeirah Beach Residence (JBR) before heading
                back to the marina.{' '}
              </p>
              <AnimatedBtn
                text={'Book 1-Hour Tour'}
                styles={'bg-primary text-gold rounded-sm my-3'}
                msg={'I would like to book 1 hour jetski tour'}
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-600 text-lg">
                2-Hour Jet Ski Tour :
              </h4>
              <p className="text-base">
                The ultimate jet ski adventure! You drive your own jet ski from
                our marina to the Burj Al Arab, capturing picture-perfect
                moments. As we ride towards His Highness Sheikh Mohammed bin
                Rashid Al Maktoum island, get ready to marvel at one of the
                world&apos;s top 5 luxurious yachts. We&apos;ll take a beach
                break in front of Jumeirah Beach Residence for more photo ops.
                Next stop, the Palm Jumeirah and the Atlantis Hotel. Return to
                the marina with the Burj Khalifa in sight, having completed your
                tour of Dubai&apos;s iconic landmarks.
              </p>
              <AnimatedBtn
                text={'Book 2-Hour Tour'}
                styles={'bg-primary text-gold rounded-sm my-3'}
                msg={'I would like to book 2 hour jetski tour'}
              />
            </div>
            <p>
              Dubai&apos;s breathtaking skyline takes on a new dimension when
              you experience it from the water. Richy life&apos;s Jet Ski
              Adventures are designed to combine adrenaline-pumping fun with
              safety and awe-inspiring views. Whether you&apos;re a beginner or
              a seasoned rider, our jet ski tours will add an extra layer of
              excitement to your Dubai trip. Book your adventure today and make
              waves in the city of dreams!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
