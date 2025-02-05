'use client';

import Image from 'next/image';
import AnimatedBtn from '../premiumjetski/AnimatedBtn';

const Herosection = ({ url, type, posterurl, alt, btntext }) => {
  return (
    <div className="w-full relative h-[60vh] md:h-screen">
      <div className="w-full h-full  relative aspect-[16:9]">
        {type === 'video' ? (
          <video
            playsInline
            autoPlay
            muted
            loop
            poster={posterurl}
            className="h-full w-full object-cover"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={url}
            fill
            alt={alt || 'Richy life Club UAE'}
            priority
            style={{
              objectFit: 'cover',
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        <AnimatedBtn
          styles=" absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-primary px-6 py-2 bg-opacity-80 rounded-sm text-gold border border-solid border-gold border-opacity-50"
          text={btntext}
          msg={'Hi, I would like to know about your services.'}
        />
        {/* <Button
            variant={"whiteborder"}
            href="#services"
            msg={"Hi, I would like to know about your services."}
            className="uppercase"
          >
            Book Now
          </Button> */}
      </div>
    </div>
  );
};

export default Herosection;
