import React from 'react';
import FormComponent from './FormComponent';
import SeactionHeading from '../SectionHeading/SectionHeading';

const ContactForm = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-16 ">
      <SeactionHeading title={title} description={description} />
      <FormComponent />
    </div>
  );
};

export default ContactForm;
