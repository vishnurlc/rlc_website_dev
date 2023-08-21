'use client';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
const BioComponent = ({ bio, style }) => {
  return <ReactMarkdown className="pl-4">{bio}</ReactMarkdown>;
};

export default BioComponent;
