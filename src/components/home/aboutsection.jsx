import Image from "next/image";

import AboutCounter from "./AboutCounter";
import AnimationImage from "../Animation/AnimationImage";

function Aboutsection({ languageData }) {
  const data = [
    {
      title: languageData.aboutus.aboutcounter.c1,
      startNumber: "15",
      endNumber: "30",
      suffix: "",
    },
    {
      title: languageData.aboutus.aboutcounter.c2,
      startNumber: "30",
      endNumber: "100",
      suffix: "%",
    },
    {
      title: languageData.aboutus.aboutcounter.c3,
      startNumber: "1000",
      endNumber: "2000",
      suffix: "+",
    },
    {
      title: languageData.aboutus.aboutcounter.c4,
      startNumber: "80",
      endNumber: "120",
      suffix: "",
    },
    {
      title: languageData.aboutus.aboutcounter.c5,
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
            {languageData.aboutus.d1}
          </p>
          <p className=" text-md font-thin text-secondary">
            {languageData.aboutus.d2}
          </p>
        </div>
      </div>

      <AboutCounter data={data} />
    </div>
  );
}

export default Aboutsection;
