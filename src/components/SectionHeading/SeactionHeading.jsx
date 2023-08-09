import React from 'react';

const SeactionHeading = ({ title, description }) => {
  return (
    <div className="text-center max-w-[475px] mx-auto">
      <h3 className="text-primary font-sans text-2xl md:text-4xl font-extrabold">
        {title}
      </h3>
      {description && (
        <p className="text-sm md:text-base font-thin font-inter text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export default SeactionHeading;
