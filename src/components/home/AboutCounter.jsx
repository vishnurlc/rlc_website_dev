'use client';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
const AboutCounter = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      className=" flex flex-wrap justify-center lg:justify-between gap-6 md:mt-10"
      ref={ref}
    >
      {data.map((e, index) => (
        <div key={index} className="flex-1 min-w-[120px]">
          {isInView ? (
            <CountUp
              start={e.startNumber}
              end={e.endNumber}
              suffix={e.suffix}
              duration={3}
              delay={0}
            >
              {({ countUpRef }) => (
                <div className="flex flex-col items-start md:items-center justify-center">
                  <span
                    ref={countUpRef}
                    className="text-emerald-600 text-5xl md:text-[61.71px] font-black"
                  />
                  <p className="text-black text-sm md:text-xs">{e.title}</p>
                </div>
              )}
            </CountUp>
          ) : null}
        </div>
        // <div
        //   key={index}
        //   className="flex-1 flex flex-col items-start md:items-center justify-center"
        // >
        //   <div className="text-emerald-600 text-5xl md:text-[61.71px] font-black">
        //     {e.number}
        //   </div>
        //   <p className="text-black text-sm md:text-xs">{e.title}</p>
        // </div>
      ))}
    </div>
  );
};

export default AboutCounter;
//
