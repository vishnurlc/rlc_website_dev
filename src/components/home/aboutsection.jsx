import Image from "next/image";

import AboutCounter from "./AboutCounter";
import AnimationImage from "../Animation/AnimationImage";

function Aboutsection() {
  const data = [
    {
      title: "Years Of Experience",
      startNumber: "15",
      endNumber: "30",
      suffix: "",
    },
    {
      title: "Customer Satisfaction",
      startNumber: "30",
      endNumber: "100",
      suffix: "%",
    },
    {
      title: "Concierge Assistance",
      startNumber: "1000",
      endNumber: "2000",
      suffix: "+",
    },
    {
      title: "Private events ",
      startNumber: "80",
      endNumber: "120",
      suffix: "",
    },
    {
      title: "Customized Experiences",
      startNumber: "800",
      endNumber: "1400",
      suffix: "+",
    },
  ];
  return (
    <div className="py-20 bg-white max-w-[1200px]  overflow-hidden mx-auto px-6 flex flex-col gap-9">
      <div className="lg:flex w-full items-center">
        <div className="hidden lg:block relative w-full aspect-square h-auto flex-1">
          <AnimationImage>
            <Image
              src="/assets/home/bugattitop.webp"
              fill
              loading="lazy"
              alt="Blue Bugatti Top View "
              style={{
                objectFit: "contain",
                borderRadius: "5px",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AnimationImage>
        </div>
        <div className="bg-white text-black  md:mx-20 flex-1">
          <h2 className="text-teal-900 text-[42px] font-extrabold leading-10">
            RICHY LIFE <br />
            CLUB{" "}
          </h2>

          <p className="py-10 text-md font-thin text-secondary">
            Richy Life, based in Dubai and Turkey, is a leading provider of
            luxurious holidays. Visit Richy Life for your next fantastic getaway
            from your bustling daily schedule and to live life to the fullest.
            We serve as a substitute for and synonym for the opulent existence.
            There is no better site than Richy Life if you want to have an
            enjoyable vacation away from home. We welcome visitors and travelers
            who want to stay in luxurious villas and opulent bungalows. Our
            acclaimed and exclusive trip packages are available to travelers
            worldwide.
          </p>
          <p className=" text-md font-thin text-secondary">
            At Richy Life, everything is lavish and upscale. The moment you make
            a reservation with us, you begin living a grand and opulent
            existence. High-class automobiles, helicopters, private aircraft,
            and yacht are available to our guests for luxurious and exotic
            excursions. Your time with us will be some of the finest times of
            your life. Your luxury vacations will be planned and mapped out by
            our highly skilled and experienced team of travel experts. Our goal
            is to provide our visitors a vacation like none they&apos;ve had
            before.
          </p>
        </div>
      </div>

      <AboutCounter data={data} />
    </div>
  );
}

export default Aboutsection;
