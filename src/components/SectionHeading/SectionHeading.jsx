import React from 'react';

const SectionHeading = ({ title, description, title_color }) => {
  return (
    <div className="text-center max-w-[475px] mx-auto">
      <h3
        className={`${
          title_color ? `text-${title_color}` : 'text-primary'
        } font-sans text-2xl md:text-4xl font-extrabold`}
      >
        {title}
      </h3>
      {description && (
        <p
          className={`${
            title_color ? `text-${title_color}` : ''
          } text-sm md:text-base font-thin font-inter text-center`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
