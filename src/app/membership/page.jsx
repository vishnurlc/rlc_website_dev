import { DetailComponent, MembershipForm } from '@/components';
import MembershipHerosection from '@/components/herosection/MembershipHeroSection';

const contents = [
  {
    title: ' Premium Membership',
    image: '/assets/membership/image1.webp',
    description: `
   Richy Life Club Membership is an exclusive opportunity for individuals residing in the United Arab Emirates who aspire to elevate both their professional and personal lifestyles through meaningful connections and a thriving community. When you become a part of our prestigious network, you open doors to engage with like-minded individuals from diverse industries and backgrounds. Our calendar is adorned with regular, complimentary members-only events, meticulously designed to foster networking opportunities, enabling you to meet inspiring personalities, exchange ideas, and delve into potential ventures.
   
   
   Moreover, our dedicated lifestyle concierge services team, driven by cutting-edge technology and supported by a digital members app, is right at your fingertips to guarantee a seamless and enriching journey. Whether you seek priority access to exquisite restaurants, beach clubs, opulent hotels, or unforgettable experiences and events, our team is wholeheartedly devoted to ensuring you relish unparalleled privileges and receive the utmost in hospitality.
    `,
  },
  {
    title: `Elevate with Richy Life Club's Exclusive Membership`,
    image: '/assets/membership/general.webp',
    description: `At Richy Life Club, we offer the Premium Membership, designed exclusively for high-achieving individuals, C-level executives, successful entrepreneurs, and high-net-worth individuals. As a Premium member, you're not just a part of a club; you're part of a community that shares your vision for success. Beyond the benefits enjoyed by our other members, you'll gain access to intimate, Premium members-only events. These exclusive gatherings provide the perfect backdrop for networking with like-minded individuals who understand your level of accomplishment and drive.
    
    
We value your time as much as you do. That's why, as a Premium member, we provide you with a dedicated lifestyle manager. This personal concierge is committed to ensuring that every request is handled promptly and efficiently. Whether it's securing reservations at the most prestigious venues, curating bespoke experiences, or managing intricate travel arrangements, your lifestyle manager is dedicated to delivering a tailored experience that embodies your aspirations and desires.
    `,
  },
];

const RichylifeClubMembership = () => {
  return (
    <main>
      <h1 className="sr-only">Be a Member - Richy life Club</h1>
      <MembershipHerosection
        url={'/assets/membership/banner.webp'}
        alt="Richy Life Club Premium Membership Club"
        subheading={'Become a member to'}
        heading1={'Experience'}
        heading2={'The Extraordinary'}
      />

      <div className="mb-16">
        <DetailComponent
          imagePath={contents[0].image}
          description={contents[0].description}
          heading={contents[0].title}
          order={'right'}
        />
        <DetailComponent
          imagePath={contents[1].image}
          description={contents[1].description}
          heading={contents[1].title}
          order={'left'}
        />
      </div>

      <section id="enquiry">
        <div className="mt-5 px-5 md:p-0">
          <MembershipForm
            title={'Membership Enquiry Form'}
            description={
              'Richy Life Club is a monthly or annual subscription with membership fees starting from AED1200 per month or AED10,000 per annum.'
            }
          />
        </div>
      </section>
    </main>
  );
};

export default RichylifeClubMembership;