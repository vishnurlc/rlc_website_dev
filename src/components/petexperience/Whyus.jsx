import React from 'react';
import { SectionHeading } from '..';
import Link from 'next/link';

const Whyus = () => {
  return (
    <div>
      <SectionHeading
        title={'Discover the Magic of Exotic Pets with Richylife'}
      />
      <p className="text-center text-gray-500">
        Welcome to Richylife, where we're all about extraordinary experiences,
        even if that means making new furry, feathery, or scaly friends! Our
        Exotic Pet Encounters are all about bringing you face-to-face with some
        of the world's most incredible creatures. It's not just a visit; it's a
        journey into the wild and wonderful.
      </p>
      <div className="text-gray-500 my-9">
        <h3 className="text-2xl text-primary mb-4">What Makes Us Special:</h3>
        <p>
          We're not your ordinary petting zoo. We're passionate about animals
          and their well-being. Our Exotic Pet Encounters focus on ethical and
          respectful animal encounters. We want you to get closer to these
          magnificent creatures while ensuring they are happy and comfortable.
        </p>
        <div className="mt-6 flex flex-col gap-6">
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Meet Our Amazing Animals:
            </h4>
            <p className="text-base">
              Prepare to be amazed as you come face-to-face with our diverse
              collection of exotic animals. From the majestic to the quirky,
              we've gathered an incredible array of creatures from around the
              world. It's a wildlife adventure like no other, right here in
              Dubai.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Learning and Fun Combined:
            </h4>
            <p className="text-base">
              Our Exotic Pet Encounters aren't just about saying hello; they're
              also about getting to know these animals and their stories. Our
              friendly guides are like walking encyclopedias of animal facts.
              You'll leave not just entertained but also a bit wiser about our
              animal friends.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Fun for the Whole Family:
            </h4>
            <p className="text-base">
              Got kids? Great! Our Exotic Pet Encounters are perfect for
              families. It's not every day that you get to introduce your little
              ones to creatures from faraway lands. Get ready for smiles,
              giggles, and stories to tell.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Special Moments, Anyone?
            </h4>
            <p className="text-base">
              Planning a special event? Our Exotic Pet Encounters can turn any
              occasion into a magical memory. Birthdays, anniversaries, or
              popping the big question – it's all better with our furry and
              scaly companions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Booking is a Breeze:
            </h4>
            <p className="text-base">
              Ready to make your wild dreams come true? Booking with us is as
              easy as a walk in the zoo (or even easier). Visit our website,
              pick a date and time that suits you, and you're all set for an
              unforgettable animal adventure. Got questions? We're just a call
              or message away.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">
              Got Questions? We've Got Answers:
            </h4>
            <p className="text-base">
              Curious about what to expect, what to wear, or anything else?
              Check out our<Link href={'/faq'}> FAQ </Link> section for all the
              details. We've covered everything so you can focus on having a
              blast.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600 text-lg">Let's Chat:</h4>
            <p className="text-base">
              Have something specific in mind or just want to say hello? Reach
              out to our friendly team anytime. We're here to make your
              encounter as fantastic as it can be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
