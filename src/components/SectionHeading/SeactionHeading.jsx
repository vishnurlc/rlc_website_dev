import React from 'react';

const SeactionHeading = ({ title, description }) => {
  return (
    <div className="text-center max-w-[475px] mx-auto">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SeactionHeading;
