import { HeroSection, MembershipForm } from '@/components';
import MembershipHerosection from '@/components/herosection/MembershipHeroSection';

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
      <div className="mt-5 px-5 md:p-0">
        <MembershipForm
          title={'Membership Enquiry Form'}
          description={
            'Richy Life Club is a monthly or annual subscription with membership fees starting from AED1200 per month or AED10,000 per annum.'
          }
        />
      </div>
    </main>
  );
};

export default RichylifeClubMembership;
