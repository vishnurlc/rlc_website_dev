import React from 'react';
import FaqAccordation from '../ui/accordation/accordation';

function Faq() {
  const faqData = [
    {
      que: 'How Long Does It Take to Ship Orders?',
      ans: `Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel
          pretium lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.
          Elementum pulvinar etiam non quam lacus. Eget nunc scelerisque viverra mauris in. Nam at lectus
          urna duis convallis convallis tellus id. Nunc eget lorem dolor sed. In dictum non consectetur a erat
          nam`,
    },
    {
      que: 'How Long Does It Take to Ship Orders?',
      ans: `Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel
          pretium lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.
          Elementum pulvinar etiam non quam lacus. Eget nunc scelerisque viverra mauris in. Nam at lectus
          urna duis convallis convallis tellus id. Nunc eget lorem dolor sed. In dictum non consectetur a erat
          nam`,
    },
    {
      que: 'how are youy?',
      ans: 'hshshshsh',
    },
    {
      que: 'how are youy?',
      ans: 'hshshshsh',
    },
  ];
  return (
    <div className="bg-white px-5 py-8 md:py-16">
      <div className="flex flex-col gap-6 md:gap-10 max-w-[1200px] mx-auto">
        <h3 className="text-primary font-sans text-3xl md:text-4xl font-extrabold text-center">
          FAQ
        </h3>
        <div className="w-full max-w-4xl mx-auto mb-6">
          <FaqAccordation data={faqData} />
        </div>
      </div>
    </div>
  );
}

export default Faq;
