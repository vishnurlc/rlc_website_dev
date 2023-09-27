'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './yacht.module.scss';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const ImageCarousel = ({ data }) => {
  const [chunks, setChunks] = useState(8);
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const rows = data
    .map((_, i) => (i % chunks === 0 ? data.slice(i, i + chunks) : null))
    .filter((e) => e);

  const generateRandomWidths = () => {
    return Math.floor(Math.random() * 2) + 1;
  };

  const setNewConstraints = useCallback(() => {
    // if (window.innerWidth < 650) {
    //   setChunks(4);
    // }
  }, []);

  useEffect(() => {
    setNewConstraints();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', setNewConstraints);
    }
    return () => {
      window.removeEventListener('resize', setNewConstraints);
    };
  }, [setNewConstraints]);

  useEffect(() => {
    let ctx = gsap.context((self) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom-=30%',
          end: `top top+=10%`,
          scrub: 2,
        },
      });
      const items = [...ref.current.children];
      items.map((item, index) => {
        tl.from(
          item,
          {
            x: index % 2 === 0 ? '50%' : '-50%',
            opacity: 0.5,
          },
          '<'
        );
      });
    });

    return () => ctx.revert();
  }, [chunks]);
  return (
    <section className={styles.carouselGrid} ref={ref} tabIndex="0">
      {rows.map((item, index) => (
        <div ref={sectionRef} className={styles.carouselRow} key={index}>
          {item.map((img, i) => (
            <Image
              src={img}
              width={300}
              height={300}
              key={i}
              alt={img.alt}
              className={styles.carouselimg}
              data-span={generateRandomWidths()}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ImageCarousel;
