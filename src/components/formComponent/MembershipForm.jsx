import SeactionHeading from '../SectionHeading/SectionHeading';
import MembershipFormComponent from './MembershipFormComponent';

const MembershipForm = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <SeactionHeading title={title} description={description} />
      <MembershipFormComponent />
    </div>
  );
};

export default MembershipForm;
