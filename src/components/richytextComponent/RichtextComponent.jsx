'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
const BioComponent = ({ bio, style, pl }) => {
  return (
    <ReactMarkdown className={`${pl ? 'pl-4' : ''} ${style}`}>
      {bio}
    </ReactMarkdown>
  );
};

export default BioComponent;
