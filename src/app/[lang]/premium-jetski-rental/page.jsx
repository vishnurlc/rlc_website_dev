import { ContactForm, HeroSection2, WhyusJetski } from "@/components";
import Faq from "@/components/home/faq";
import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
import LocationCard from "@/components/premiumjetski/LocationCard";
import { Button } from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    url: "/assets/jetskipage/jumeirah.webp", // Replace with actual image path
    location: "Jumeriah",
    price: 150,
  },
  {
    url: "/assets/jetskipage/burjalarab.avif", // Replace with actual image path
    location: "Burj Al Arab",
    price: 250,
  },
  {
    url: "/assets/jetskipage/atlantisview.jpeg", // Replace with actual image path
    location: "Atlantis View",
    price: 180,
  },
];

export const metadata = {
  title: "Premium Jetski Rental in Dubai",
  description:
    "Experience the thrill of riding premium jetskis in Dubai&apos;s crystal-clear waters. Book your exclusive jetski adventure with Richy life Club and enjoy adrenaline-pumping watersports.",
  keywords: [
    "Premium Jetski Rental Dubai",
    "Luxury Jetski Hire",
    "Jetski Adventure Dubai",
    "Jetski Rentals Dubai",
    "Luxury Watersports",
    "Jetski Tour Packages",
    "Watersports Activities",
    "Jetski Riding",
    "Dubai jetski rental",
    "Luxury jetski rental in Dubai",
    "Private jetski rental Dubai",
    "Jetski rental packages Dubai",
  ],
  openGraph: {
    title: "Premium Jetski Rental in Dubai",
    description:
      "Experience the thrill of riding premium jetskis in Dubai&apos;s crystal-clear waters. Book your exclusive jetski adventure with Richy life Club and enjoy adrenaline-pumping watersports.",
    siteName: "Richy life Club",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/jetskipage/jetskibanner.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/jetskipage/jetskibanner.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/jetskis?populate=*`,
      {
        next: { revalidate: 40 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("s", error);
    return {};
  }
}

export default async function JetSkiPage() {
  const jetski = await getData();
  return (
    <main className="pt-[100px] md:pt-0">
      <div className="hidden md:block">
        <HeroSection2
          type={"video"}
          heading1={"Luxury Jetski"}
          heading2={"Rental in Dubai"}
          subheading={"Unleash Your Inner Maverick on Jetski"}
          posterurl={"/assets/jetskipage/jetskibanner.png"}
          btntext={"Book your ride"}
          overlay={1}
        />
      </div>
      <div className="bg-black px-6 py-9 md:py-16 ">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-[30vh]  md:h-[50vh] max-h-[700px]">
              <Image
                src="/assets/jetskipage/jetskisample.jpg"
                fill
                alt="Premium jet ski Rental Adrenaline Boost | Richy life Club"
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                sizes="(max-width: 1200px) 50vw , 100vw "
              />
            </div>
            <div className=" flex flex-col items-start justify-center">
              <h3 className="text-2xl md:text-5xl text-gold capitalize font-inter">
                Experience Premium Jetski Tour In Dubai
              </h3>
              <p className="text-gray-300 my-6 ">
                Dive into an electrifying aquatic adventure with our premier
                jetski rental services in Dubai. Prepare to be swept away by a
                wave of exhilaration and anticipation as you embark on an
                unforgettable journey through the sparkling waters of the UAE.
                At our core, we are dedicated to crafting experiences that not
                only meet but exceed your wildest expectations. Get ready to
                submerge yourself in a realm of excitement and exploration,
                where each jetski excursion we offer becomes a cherished and
                indelible memory.
              </p>
            </div>
          </div>

          <div>
            <h3 className=" text-center mb-9 text-2xl md:text-5xl text-gold capitalize font-inter">
              Our Premium Jetski
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
              {jetski.data.map((item, index) => (
                <div className="relative  w-full aspect-[357/406]" key={index}>
                  <Image
                    src={item.attributes.image.data[0].attributes.url}
                    alt={`${item.attributes.name} rental | Richy life Club`}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute p-4 text-white w-full h-fit bg-black bg-opacity-60 bottom-0 left-0 right-0 z-10">
                    <div>
                      <h2 className="uppercase font-medium tracking-wide text-xl font-poppins">
                        {item.attributes.name}
                      </h2>
                      {item.attributes.price && (
                        <span className="text-gray-400 text-sm">
                          Starting from AED {item.attributes.price}
                        </span>
                      )}
                    </div>

                    <Button className="mt-4 px-4 py-2 bg-gold text-white rounded-sm">
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-16">
            <div className="">
              <div className="text-white mb-7">
                <h2 className="text-4xl mb-6">
                  Luxury and Speed
                  <br />
                  Yamaha&apos;s Golden Jetski
                </h2>
                <p className="text-gray-500 text-base tracking-wide ">
                  Introducing the epitome of aquatic opulence - the Yamaha
                  Golden Jetski. This masterpiece of engineering combines sleek
                  design with unparalleled performance, promising an
                  adrenaline-packed ride like no other. Feel the rush as you
                  take control of this powerful beast, capable of reaching a top
                  speed of 67 mph, ensuring an exhilarating ride that will leave
                  you craving for more.
                </p>
              </div>
              <AnimatedBtn
                text={"Book Now"}
                styles={"bg-gold text-white rounded-sm"}
                msg={`I'm writing to you today to inquire about the Golden Jetski. I'm interested in learning more about its specifications, price, and availability.`}
              />
            </div>
            <div className="relative w-full h-full min-h-[250px]">
              <Image
                src={"/assets/premiumgoldjetski/goldenjetski.png"}
                alt="Golden Jetski Rental |Richy life Club UAE "
                fill
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="jetskigradient absolute inset-0"></div>
            </div>
          </div>

          <div className=" flex flex-col gap-8 items-center justify-center w-full">
            <h3 className="text-2xl text-center md:text-5xl text-gold capitalize font-inter">
              Our Service Locations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {locations.map((item, index) => (
                <div className="relative  w-full aspect-[357/406]" key={index}>
                  <Image
                    src={item.url}
                    alt={`Jetski rentatl at ${item.location} | Richy life club UAE`}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute p-4 text-white w-full h-fit bg-black bg-opacity-60 bottom-0 left-0 right-0 z-10">
                    <div>
                      <h2 className="uppercase font-medium tracking-wide text-xl font-poppins">
                        {item.location}
                      </h2>
                      {/* <span className="text-gray-400 text-sm">
                        Starting from AED{item.price}
                      </span> */}
                    </div>

                    <Button className="mt-4 px-4 py-2 bg-primary text-gold">
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-9 md:my-16 px-6 max-w-[1200px] mx-auto hidden">
        <WhyusJetski />
      </div>
      <Faq category={"jetski"} />
      <div className="my-9 md:my-16 px-6">
        <ContactForm
          title={"Get In touch"}
          description={"Experience Elegance & Convenience"}
        />
      </div>
    </main>
  );
}
