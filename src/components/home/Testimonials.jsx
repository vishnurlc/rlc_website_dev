import Image from "next/image";

const data = [
  {
    image: "/assets/home/testimonials/1.webp",
    comment:
      "Im a car enthusiast, and Richy Life Club's premium car rentals allowed me to experience some of the finest cars in the world. It's like having a garage of dreams! ",
    name: "- Thrilled Guest",
  },
  {
    image: "/assets/home/testimonials/2.webp",
    comment:
      "Being a UAE resident, Richy Life Club has shown me the hidden gems of my own country through their exclusive services. An amazing way to explore! ",
    name: "- Joyful Adventurer",
  },
  {
    image: "/assets/home/testimonials/3.webp",
    comment:
      "Richy Life Club turned my dream of cruising on a luxury yacht into reality. Their attention to detail and impeccable service made my day truly extraordinary.",
    name: "- Delighted Client",
  },
  {
    image: "/assets/home/testimonials/4.jpeg",
    comment:
      "Renting a car from Richy life was a breeze. Luxury at its finest! Highly recommended.",
    name: "- Happy Customer",
  },
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      {data.map((item, index) => (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2" key={index}>
          <div
            className={`w-full relative h-full min-h-[279px] ${
              index > 1 && "order-1 sm:order-2"
            }`}
            key={index}
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
            className={`${
              index % 2 !== 0
                ? "bg-[#0A212D] text-white"
                : "bg-white text-primary"
            }  ${
              index > 1 && "order-2 sm:order-1"
            } font-inter flex flex-col gap-6 items-start justify-center font-thin p-5`}
            key={`${index}_content`}
          >
            <p className="text-sm">{item.comment}</p>
            <span className="font-medium">{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
