// 'use client';
// import React from 'react';
// import { Button } from '../ui/button/Button';
// import Image from 'next/image';
// import AnimatedBtn from '../premiumjetski/AnimatedBtn';

// const Herosection = ({ url, type, posterurl, alt }) => {
//   return (
//     <div className="w-full relative h-full ">
//       <div className="w-full h-50vh md:h-screen min-h-[500px] aspect-[16:9]">
//         {type === 'video' ? (
//           <video
//             playsInline
//             autoPlay
//             muted
//             loop
//             poster={posterurl}
//             className="h-full  absolute top-0 object-cover w-full "
//           >
//             <source src={url} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <Image
//             src={url}
//             fill
//             alt={alt || 'Hero Section Image'}
//             style={{
//               objectFit: 'cover',
//               objectPosition: 'center',
//             }}
//           />
//         )}

//         <div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-10 h-fit">
//           <Button variant={'whiteborder'} href="#services">
//             Book Now
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Herosection;

'use client';
import React from 'react';
import { Button } from '../ui/button/Button';
import Image from 'next/image';
import AnimatedBtn from '../premiumjetski/AnimatedBtn';
import Link from 'next/link';

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
            layout="fill"
            alt={alt || 'Hero Section Image'}
            objectFit="cover"
            objectPosition="center"
            priority
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
