import {
  ContactForm,
  HeroSection2,
  PetExperience,
  WhyusPet,
} from '@/components';
import Faq from '@/components/home/faq';

export const metadata = {
  title: 'Private Zoo Visit in Dubai',
  description:
    "Embark on a unique adventure with Richy life Club's Exotic Pet Experience in Dubai. See, touch, and play with exclusive animals up close in a private zoo setting.",
  keywords: [
    'Exotic Pet Experience',
    'Private Zoo Visit Dubai',
    'Exclusive Animal Encounters',
    'Animal Interaction',
    'Play with Exotic Animals',
    'Zoo Tour',
    'Dubai Animal Adventure',
    'Touch and Feel Animals',
    'Petting Zoo Dubai',
    'Animal Enthusiast',
    'Private Animal Sanctuary',
    'Animal Lovers',
    'Dubai Experiences',
    'Unique Adventure',
    'VIP Animal Encounters',
    'Exotic Animal Interaction',
    'Book Private Zoo',
    'Dubai UAE',
    'Richy Life Club',
    'richylife club',
  ],

  openGraph: {
    title: 'Private Zoo Visit in Dubai',
    description:
      "Embark on a unique adventure with Richy life Club's Exotic Pet Experience in Dubai. See, touch, and play with exclusive animals up close in a private zoo setting.",
    siteName: 'Richy life Club',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/petpage/vippetbanner.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/petpage/vippetbanner.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

async function getData() {
  let api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/private-zoos?populate=*`;

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

export default async function PetPage() {
  const data = await getData();

  return (
    <main>
      <HeroSection2
        type="video"
        heading1="Exotic Pet"
        heading2="Experiences"
        subheading={'Journey into the Extraordinary'}
        btntext={'Book an appointment'}
        posterurl="/assets/petpage/vippetbanner.png"
        url="/assets/petpage/pets.mov"
      />
      <PetExperience data={data} />
      <div className="my-9 md:my-16 px-6 max-w-[1200px] mx-auto">
        <WhyusPet />
      </div>
      <Faq category={'pet'} />
      <div className="my-9 md:my-16 px-6">
        <ContactForm title={'Get in touch with us'} />
      </div>
    </main>
  );
}
