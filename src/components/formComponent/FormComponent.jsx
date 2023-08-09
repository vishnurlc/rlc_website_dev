'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-[800px] mx-auto w-full px-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1  gap-y-[16px] md:gap-y-[22px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[22px]">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="col-span-1 px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="col-span-1 px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
              placeholder="Last Name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[22px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="col-span-1 px-3 md:px-6 py-3 md:py-5  bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
              placeholder="Email"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="col-span-1 px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
              placeholder="Phone"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className=" px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
            placeholder="Subject"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
            rows="4"
            placeholder="Message"
          />
        </div>
        <div className="flex gap-8 items-center justify-center mt-8 md:mt-16">
          <button
            type="submit"
            className="px-4 md:px-10 py-2 md:py-3 text-white font-medium bg-primary border border-solid border-primary"
          >
            Book Now
          </button>
          <Link
            href={'#'}
            type="submit"
            className="px-4 md:px-10 py-2 md:py-3 flex items-center justify-center font-medium border border-solid border-primary text-primary gap-2"
          >
            <BsWhatsapp />
            <span>Talk to us</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
