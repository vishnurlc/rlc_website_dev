import React from "react";
import FaqAccordation from "../ui/accordation/accordation";

function Faq() {
  const faqData = [
    {
      que: "How Long Does It Take to Ship Orders?",
      ans: `Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel
          pretium lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.
          Elementum pulvinar etiam non quam lacus. Eget nunc scelerisque viverra mauris in. Nam at lectus
          urna duis convallis convallis tellus id. Nunc eget lorem dolor sed. In dictum non consectetur a erat
          nam`,
    },
    {
      que: "How Long Does It Take to Ship Orders?",
      ans: `Consectetur a erat nam at. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Vel
          pretium lectus quam id leo in. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.
          Elementum pulvinar etiam non quam lacus. Eget nunc scelerisque viverra mauris in. Nam at lectus
          urna duis convallis convallis tellus id. Nunc eget lorem dolor sed. In dictum non consectetur a erat
          nam`,
    },
    {
      que: "how are youy?",
      ans: "hshshshsh",
    },
    {
      que: "how are youy?",
      ans: "hshshshsh",
    },
  ];
  return (
    <div>
      <div className="bg-white">
        <h3>FAQ</h3>
        <div className="w-full max-w-xl mx-auto bg-white">
          <FaqAccordation data={faqData} />
        </div>
      </div>
    </div>
  );
}

export default Faq;
