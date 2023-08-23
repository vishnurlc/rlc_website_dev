'use client';
import { sendEmail } from '@/lib/emailSend';
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { Button } from '../ui/button/Button';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
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
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Invalid phone number format';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleInputFocus = (name) => {
    // Clear the error for the focused input
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSending(true);
      await sendEmail({ data: formData });
      setTimeout(() => {
        setIsSending(false);
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 2000);
    } else {
      console.log('not done');
    }
  };

  return (
    <div className="max-w-[800px] mx-auto w-full px-0 md:px-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1  gap-y-[px] md:gap-y-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[22px]">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onFocus={() => handleInputFocus('firstName')}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="First Name"
              />
              {formErrors.firstName && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.firstName}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="Last Name"
              />
              {formErrors.lastName && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[22px]">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5  bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="Email"
              />
              {formErrors.email && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.email}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="Phone"
              />
              {formErrors.phone && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.phone}
                </p>
              )}
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className=" px-3 w-full md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
              placeholder="Subject"
            />
            {formErrors.subject && (
              <p className="text-red-400 text-[12px] absolute ">
                *{formErrors.subject}
              </p>
            )}
          </div>
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="px-3 w-full md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
              rows="4"
              placeholder="Message"
            />
            {formErrors.message && (
              <p className="text-red-400 text-[12px] absolute ">
                *{formErrors.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-8 items-center justify-center mt-8 md:mt-16">
          <button
            disabled={isSending}
            type="submit"
            className="px-4 md:px-10 py-2 md:py-3 text-white font-medium bg-primary border border-solid border-primary"
          >
            {isSending ? 'Sending...' : 'Book Now'}
          </button>
          <Button
            variant="secondary"
            href={'#'}
            type="submit"
            className="px-4 md:px-10 py-2 md:py-3 flex items-center justify-center font-medium border border-solid border-primary text-primary gap-2"
          >
            <BsWhatsapp />
            <span>Talk to us</span>
          </Button>
        </div>
      </form>
      {isSubmitted && (
        <div className="mt-4 text-center">
          <p className="text-green-500">Thank you for your submission!</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
