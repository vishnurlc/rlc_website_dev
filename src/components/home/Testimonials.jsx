import Image from "next/image";

const data = [
  {
    image: "/assets/home/testimonials/1.webp",
    image1: "/assets/premiumdesert/2.png",
    comment:
      "Richy Life Club made renting a convertible in Dubai hassle-free. No outrageous deposits, just straightforward service. The Audi TT I got was top-notch, and their respectful treatment ensures they're my go-to for luxury car rentals now.",
    name: "- Thrilled Guest",
  },
  {
    image: "/assets/home/testimonials/4.jpeg",
    image1: "/assets/premiumdesert/1.png",
    comment:
      "Jetskiing and water sports were a blast, thanks to their seamless arrangements. No hassle, just waves of fun.",
    name: "- Joyful Adventurer",
  },
  {
    image: "/assets/home/testimonials/3.webp",
    image1: "/assets/membership/image2.avif",
    comment:
      "No hidden fees or complications, just smooth sailing. The yacht was impeccable, and their friendly service made it an unforgettable experience",
    name: "- Delighted Client",
  },
  {
    image: "/assets/home/testimonials/2.webp",
    image1: "/assets/membership/image1.webp",
    comment:
      "No fuss, no hefty deposits—just a reliable car ready to roll. Excellent service that's now my go-to for stress-free car rentals",
    name: "- Happy Customer",
  },
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      {data.map((item, index) => (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2" key={item.name}>
          <div
            className={`w-full relative h-full min-h-[279px] ${
              index > 1 && "order-1 sm:order-2"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "10%",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div
            className={`w-full relative h-full min-h-[279px] ${
              index > 1 && "order-1 sm:order-2"
            }`}
            key={index}
          >
            <Image
              src={item.image1}
              alt={item.name}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "10%",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* 
          <div
            className={`${
              index % 2 !== 0
                ? 'bg-[#0A212D] text-white'
                : 'bg-white text-primary'
            }  ${
              index > 1 && 'order-2 sm:order-1'
            } font-inter flex flex-col gap-6 items-start justify-center font-thin p-5`}
            key={`${index}_content`}
          >
            <p className="text-sm">{item.comment}</p>
            <span className="font-medium">{item.name}</span>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
