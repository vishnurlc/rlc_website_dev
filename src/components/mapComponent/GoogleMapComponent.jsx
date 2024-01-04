import React from 'react';

const GoogleMapComponent = ({ location }) => {
  return (
    <div>
      <iframe
        src={location}
        style={{
          border: 'none',
          width: '100%',
          minHeight: '150px',
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;
