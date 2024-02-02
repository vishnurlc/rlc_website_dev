import { ContactForm, HeroCarousel, PriceComponent } from "@/components";
import qs from "qs";
import ChaufferSpec from "@/components/chaufferservice/ChaufferSpec";

import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";

export async function generateMetadata({ params }) {
  try {
    const car = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-cars?filters[slug][$eq]=${params.slug}&populate=images`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    ).then((res) => res.json());

    return {
      title:
        car.data[0].attributes.name || "| Luxury Chauffeur Service in Dubai",
      description:
        car.data[0].attributes.description ||
        " Luxury Chauffeur Service with Richy life Club",
      openGraph: {
        type: "website",
        title:
          car.data[0].attributes.name || "| Luxury Chauffeur Service in Dubai",
        description:
          car.data[0].attributes.description ||
          " Luxury Chauffeur Service with Richy life Club",
        images: [
          {
            url: `${car.data[0].attributes.images.data[0].attributes.url}`,
            width: 800,
            height: 600,
          },
          {
            url: `${car.data[0].attributes.images.data[0].attributes.url}`,
            width: 300,
            height: 200,
          },
        ],
      },
    };
  } catch (error) {
    console.log(error);
  }
}

async function getData(slug) {
  const queryString = qs.stringify({
    populate: {
      pc: {
        populate: "*",
      },
      pc2: {
        populate: "*",
      },
      images: {
        populate: "*",
      },
    },
  });
  let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-cars?filters[slug][$eq]=${slug.slug}&${queryString}`;

  try {
    const res = await fetch(api, {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
    const data = await res.json();

    if (data == {}) {
      setStatus(true);
    }
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

const page = async ({ params }) => {
  const car = await getData(params);

  return (
    <main className="pt-[108px] md:pt-[128px]">
      <div>
        <HeroCarousel
          data={car.data[0].attributes.images}
          name={car.data[0].attributes.name}
        />
        <div className="pt-4 px-6 flex items-center justify-start md:justify-end gap-5 max-w-[1200px] mx-auto">
          <h2 className="text-right text-xl text-primary">
            From <PriceComponent cost={car.data[0].attributes.price} />
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
              {/* {car.data.attributes.make.data.attributes.make} */}
            </h1>
            <span className=" inline-block my-2 md:my-4 font-inter text-primary font-semibold text-2xl md:text-[40px]">
              {car.data[0].attributes.name}
            </span>
          </div>
          <p className="text-sm md:text-base text-justify md:text-left text-gray-500">
            {car.data[0].attributes.description}
          </p>
        </div>

        {/* <TechnicalSpec car={car} /> */}
        <ChaufferSpec car={car} />
        {/* <CarSpec car={car} /> */}
        {/* <div>
        <h2 className="inline-block mb-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
          Gallery
        </h2>
        <div>
          <GalleryJet />
        </div>
      </div> */}
        {/* transfer price */}
        <div className="md:flex gap-10 justify-center w-full">
          {car.data[0].attributes.pc.length > 1 && (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[780px] w-full">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-primary uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {car.data[0].attributes.pc?.map((e, index) => (
                    <tr
                      className="odd:bg-white even:bg-gray-50 border-b"
                      key={index}
                    >
                      <td className="px-6 py-4">
                        {e.cfs.data[0]?.attributes.name}
                      </td>
                      <td className="px-6 py-4">
                        {" "}
                        {e.cts.data[0]?.attributes.name}
                      </td>
                      <td className="px-6 py-4">{e.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* next tabel */}
            </div>
          )}
          {car.data[0].attributes.pc2.length > 1 && (
            <>
              <div className="md:hidden">
                <h2 className="inline-block my-8 font-inter text-primary font-semibold text-xl md:text-[40px]">
                  Intercity Transfers
                </h2>
              </div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[780px] w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-primary uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        From
                      </th>
                      <th scope="col" className="px-6 py-3">
                        To
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {car.data[0].attributes.pc2?.map((e, index) => (
                      <tr
                        className="odd:bg-white even:bg-gray-50 border-b"
                        key={index}
                      >
                        <td className="px-6 py-4">
                          {e.cfs.data[0]?.attributes.name}
                        </td>
                        <td className="px-6 py-4">
                          {" "}
                          {e.cts.data[0]?.attributes.name}
                        </td>
                        <td className="px-6 py-4">{e.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* next tabel */}
              </div>
            </>
          )}
        </div>

        <ContactForm
          title={"Experience the ultimate Luxury"}
          description={"Book your journey with our luxury car rentals now"}
        />
      </div>
    </main>
  );
};

export default page;

export const generateStaticParams = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-cars`,
    {
      next: {
        revalidate: 40,
      },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );

  const data = await res.json();

  return data.data.map((blog) => ({
    slug: blog.attributes.slug,
  }));
};
