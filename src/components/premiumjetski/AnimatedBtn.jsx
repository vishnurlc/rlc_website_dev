'use client';
import React from 'react';

const AnimatedBtn = ({ styles, text }) => {
  return (
    <button className={`px-6 py-2 hover:scale-105 ${styles} transition-all`}>
      {text}
    </button>
  );
};

export default AnimatedBtn;
