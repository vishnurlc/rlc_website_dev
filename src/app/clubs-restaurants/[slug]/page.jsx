import { ContactForm, HeroCarousel, PriceComponent } from "@/components";
import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";

export const metadata = {
  title: "Luxury Chauffeur Service in Dubai",
  description:
    "Book a luxury chauffeur service in Dubai for your airport transfers, half and full day car rentals, full Dubai tours, or events pickup and drop",
  keywords: [
    "chauffeur service dubai",
    "luxury chauffeur service dubai",
    " airport transfers dubai",
    "car rentals dubai",
    "full dubai tours",
    "events pickup and drop dubai",
    "Richy Life Club chauffer service",
    "richylife club chauffer service",
  ],

  openGraph: {
    title: "Luxury Chauffeur Service in Dubai",
    description:
      "Book a luxury chauffeur service in Dubai for your airport transfers, half and full day car rentals, full Dubai tours, or events pickup and drop",
    siteName: "Richy life Club",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/chauffeur/hero.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/chauffeur/hero.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

async function getData(slug) {
  let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/club-packages?filters[slug][$eq]=${slug.slug}&populate=*`;

  try {
    const res = await fetch(api, {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

const page = async ({ params }) => {
  const car = await getData(params);
  console.log(car);

  return (
    <main>
      {car?.length !== 0 ? (
        <>
          <div className="md:mt-[100px]">
            <HeroCarousel
              data={car.data[0].attributes.image}
              name={car.data[0].attributes.name}
            />
            <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
              <h2 className="text-right text-xl text-primary">
                <PriceComponent
                  cost={car.data[0].attributes.avg_price_per_person}
                />
                /Person
              </h2>

              <AnimatedBtn
                styles={"rounded-md bg-primary text-white"}
                text={"Book Now"}
                msg={"Hi, I would like to know about your services."}
              />
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto py-10 md:py-16 px-6 flex flex-col gap-8 md:gap-16">
            <div>
              <div>
                <h1 className="text-sm md:text-base text-justify md:text-left text-gray-500">
                  {car.data[0].attributes.place}
                </h1>
                <span className=" inline-block my-2 md:my-4 font-inter text-primary font-semibold text-2xl md:text-[40px]">
                  {car.data[0].attributes.name}
                </span>
              </div>
              <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
                {car.data[0].attributes.description}
              </p>
            </div>

            {/* product detail */}

            <div className="">
              <div className=""></div>
            </div>

            <ContactForm
              title={"Experience the ultimate Luxury"}
              description={"Book your journey with our luxury car rentals now"}
            />
          </div>
        </>
      ) : (
        "loding"
      )}
    </main>
  );
};

export default page;
