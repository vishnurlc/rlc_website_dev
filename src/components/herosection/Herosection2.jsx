import Image from 'next/image';

import AnimatedHeroText from './AnimatedHeroText';

const Herosection2 = ({
  type,
  url,
  posterurl,
  subheading,
  heading1,
  heading2,
  btntext,
  overlay,
}) => {
  return (
    <div className="w-full h-[60vh] md:h-screen relative">
      <div className="w-full h-full  relative aspect-[16:9]">
        {type === 'video' ? (
          <video
            playsInline
            autoPlay
            muted
            loop
            poster={posterurl}
            className="h-full absolute object-cover top-0 w-full "
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={url}
            fill
            alt="Richy life Club UAE"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority
            sizes="100vw"
          />
        )}
      </div>
      <>
        <AnimatedHeroText
          subheading={subheading}
          heading1={heading1}
          heading2={heading2}
          btntext={btntext}
        />
        {overlay === 1 ? (
          <div className="absolute inset-0 select-none z-0 bg-[#625A4A] bg-opacity-50"></div>
        ) : (
          <div
            className="absolute inset-0 select-none z-1 "
            style={{
              background:
                'linear-gradient(0deg, #162428 0%, rgba(22, 36, 40, 0.00) 100%)',
            }}
          ></div>
        )}
      </>
    </div>
  );
};

export default Herosection2;
