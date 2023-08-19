'use client';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
const BioComponent = ({ bio, style }) => {
  return (
    <div className={`${style !== '' ? style : 'mt-10'}`}>
      <ReactMarkdown>{bio}</ReactMarkdown>
    </div>
  );
};

export default BioComponent;
