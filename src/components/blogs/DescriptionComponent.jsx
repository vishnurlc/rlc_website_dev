'use client';

import ReactMarkdown from 'react-markdown';
import styles from './blog.module.scss';
const DescriptionComponent = ({ bio }) => {
  return (
    <div className={styles.blogbody}>
      <ReactMarkdown>{bio}</ReactMarkdown>
    </div>
  );
};

export default DescriptionComponent;
