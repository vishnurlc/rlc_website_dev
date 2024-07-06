import React from "react";

function SectionHeadingTwoLine({
  title,
  title1,
  description,
  title_color,
  mobile,
}) {
  return (
    <div
      className={
        mobile === false
          ? "hidden md:block"
          : "text-left max-w-7xl mx-auto px-6 lg:px-9 pt-[40px]"
      }
    >
      <h2
        className={`${
          title_color ? `text-${title_color}` : "text-primary"
        } font-sans text-2xl md:text-4xl font-extrabold mb-2`}
      >
        {title} <br />
        <span className="text-[#CBB87E] text-3xl md:text-5xl">{title1}</span>
      </h2>
      {description && (
        <p
          className={`${
            title_color ? `text-${title_color}` : "text-[#777777]"
          } text-sm md:text-base font-thin font-inter text-center`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeadingTwoLine;
