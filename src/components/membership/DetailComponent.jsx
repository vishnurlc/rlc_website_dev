import Image from 'next/image';
import React from 'react';
import { RichTextComponent } from '..';
import styles from './mem.module.scss';
const DetailComponent = ({ imagePath, description, heading, order }) => {
  const imageCol = order === 'left' ? '1' : '2';
  const textCol = order === 'left' ? '2' : '1';
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className={`order-${imageCol} col-span-1 md:col-span-3 relative`}>
          <Image
            src={imagePath}
            alt="Image"
            className="object-cover"
            fill
            sizes="70vw"
          />
        </div>
        <div
          className={`order-${textCol} col-span-1 md:col-span-2 px-4 py-6 max-w-[500px] mx-auto`}
        >
          <h2 className="text-gold text-xl md:text-3xl ">{heading}</h2>
          <div className={styles.blogbody}>
            <RichTextComponent bio={description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailComponent;
