import Image from 'next/image';

import { SectionHeading } from '..';
import Section2 from './Section2';
import { Button } from '../ui/button/Button';
import AnimatedBtn from '../premiumjetski/AnimatedBtn';

const PetExperience = ({ data }) => {
  return (
    <div className="relative h-auto px-6 py-9 md:p-20">
      <div className="relative z-20 max-w-[1200px] mx-auto">
        <SectionHeading
          title={'Explore a World of Wonders'}
          title_color={'gold'}
        />
        {/* <div className="flex items-center justify-center my-4">
          <AnimatedBtn
            text={'Book an Appointment'}
            styles={'bg-primary text-gold border border-gold '}
          />
        </div> */}
        <Section2 data={data} />
      </div>

      <div className="absolute inset-0 ">
        <Image
          src="/assets/petpage/bg.png"
          alt="Exotic vip pet services Dubai UAE"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[#162428] bg-opacity-95"></div>
    </div>
  );
};

export default PetExperience;
