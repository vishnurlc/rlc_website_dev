import { HeroSection, MembershipForm } from '@/components';

const RichylifeClubMembership = () => {
  return (
    <main>
      <h1 className="sr-only">Be a Member - Richy life Club</h1>
      <HeroSection
        posterurl={'/assets/chauffeur/hero.png'}
        type={''}
        alt="Luxury Car rentals"
        url={'/assets/chauffeur/hero.png'}
        btntext={'Get in touch'}
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
