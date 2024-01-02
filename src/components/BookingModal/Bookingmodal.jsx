'use client';
import { useState } from 'react';
import { ModalComponent } from '..';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { sendEmail } from '@/lib/emailSend';
const Bookingmodal = ({ item, setOpen, open }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(
    'Thank you for your submission!'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // Additional fields based on the item
    ...(item === 'car' && {
      deliveryPlace: '',
      bookingFromDate: '',
      returnDate: '',
      bookingFromTime: '',
      bookingToTime: '',
    }),
    ...(item === 'chauffeurService' && {
      pickupDate: '',
      pickupTime: '',
      fromLocation: '',
      toLocation: '',
    }),
    ...(item === 'yacht' && {
      bookingDate: '',
      bookingHours: '',
      bookingTime: '',
      numberOfPax: '',
    }),
    ...(item === 'tourAndExcursion' && {
      bookingDate: '',
      numberOfPax: '',
    }),
    ...(item === 'helicopterBooking' && {
      bookingDate: '',
      bookingTime: '',
      numberOfPax: '',
    }),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date, name) => {
    setFormData((prevData) => ({ ...prevData, [name]: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    // Add your form submission logic here
    try {
      const res = await sendEmail({ data: formData, membership: false });
      if (res === 'success') {
        setTimeout(() => {
          setIsSending(false);
          setIsSubmitted(true);
          setOpen(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            // Additional fields based on the item
            ...(item === 'car' && {
              deliveryPlace: '',
              bookingFromDate: '',
              returnDate: '',
              bookingFromTime: '',
              bookingToTime: '',
            }),
            ...(item === 'chauffeurService' && {
              pickupDate: '',
              pickupTime: '',
              fromLocation: '',
              toLocation: '',
            }),
            ...(item === 'yacht' && {
              bookingDate: '',
              bookingHours: '',
              bookingTime: '',
              numberOfPax: '',
            }),
            ...(item === 'tourAndExcursion' && {
              bookingDate: '',
              numberOfPax: '',
            }),
            ...(item === 'helicopterBooking' && {
              bookingDate: '',
              bookingTime: '',
              numberOfPax: '',
            }),
          });
        }, 2000);
      } else {
        setSubmitMessage('Sorry, Something went wrong!');
      }
    } catch (error) {
      console.log('Error Sending Email', error);
    }
    // Close the form after submission
  };
  if (!open) return null;
  return (
    <ModalComponent open={open} setOpen={setOpen}>
      <div className="bg-white p-8 rounded-md shadow-md ">
        <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Common fields */}
          <>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
          </>

          {item === 'car' && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="deliveryPlace"
                  className="block text-sm font-medium text-gray-700"
                >
                  Delivery Place
                </label>
                <input
                  type="text"
                  id="deliveryPlace"
                  name="deliveryPlace"
                  value={formData.deliveryPlace}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bookingFromDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Booking From Date
                </label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={formData.bookingFromDate}
                  onChange={(date) => handleDateChange(date, 'bookingFromDate')}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bookingFromTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Booking From Time
                </label>
                <DatePicker
                  selected={formData.bookingFromTime}
                  onChange={(date) => handleDateChange(date, 'bookingFromTime')}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="returnDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Return Date
                </label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={formData.returnDate}
                  onChange={(date) => handleDateChange(date, 'returnDate')}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bookingToTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Booking To Time
                </label>
                <DatePicker
                  selected={formData.bookingToTime}
                  onChange={(date) => handleDateChange(date, 'bookingToTime')}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </>
          )}
          {item === 'chauffeurService' && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="pickupDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pickup Date
                </label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={formData.pickupDate}
                  onChange={(date) => handleDateChange(date, 'pickupDate')}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pickupTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pickup Time
                </label>
                <DatePicker
                  selected={formData.pickupTime}
                  onChange={(date) => handleDateChange(date, 'pickupTime')}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="fromLocation"
                  className="block text-sm font-medium text-gray-700"
                >
                  From Location
                </label>
                <input
                  type="text"
                  id="fromLocation"
                  name="fromLocation"
                  value={formData.fromLocation}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="toLocation"
                  className="block text-sm font-medium text-gray-700"
                >
                  To Location
                </label>
                <input
                  type="text"
                  id="toLocation"
                  name="toLocation"
                  value={formData.toLocation}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </>
          )}
          {item === 'yacht' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <div className="mb-4 col-span-1">
                <label
                  htmlFor="bookingDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Booking Date
                </label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={formData.bookingDate}
                  onChange={(date) => handleDateChange(date, 'bookingDate')}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bookingTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Booking Time
                </label>
                <DatePicker
                  selected={formData.bookingTime}
                  onChange={(date) => handleDateChange(date, 'bookingTime')}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4 col-span-1">
                <label
                  htmlFor="bookingHours"
                  className="block text-sm font-medium text-gray-700"
                >
                  Booking Hours (min 3 hours)
                </label>
                <input
                  type="text"
                  id="bookingHours"
                  name="bookingHours"
                  value={formData.bookingHours}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numberOfPax"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Pax
                </label>
                <input
                  type="number"
                  id="numberOfPax"
                  name="numberOfPax"
                  value={formData.numberOfPax}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}
          {item === 'tourAndExcursion' && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="bookingDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Booking Date
                </label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={formData.bookingDate}
                  onChange={(date) => handleDateChange(date, 'bookingDate')}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numberOfPax"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Pax
                </label>
                <input
                  type="number"
                  id="numberOfPax"
                  name="numberOfPax"
                  value={formData.numberOfPax}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </>
          )}
          {item === 'helicopterBooking' && (
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="mb-4 col-span-1">
                <label
                  htmlFor="bookingDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Booking Date
                </label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={formData.bookingDate}
                  onChange={(date) => handleDateChange(date, 'bookingDate')}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4 col-span-1">
                <label
                  htmlFor="bookingTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Booking Time
                </label>
                <DatePicker
                  selected={formData.bookingTime}
                  onChange={(date) => handleDateChange(date, 'bookingTime')}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4 col-span-2">
                <label
                  htmlFor="numberOfPax"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Pax
                </label>
                <input
                  type="number"
                  id="numberOfPax"
                  name="numberOfPax"
                  value={formData.numberOfPax}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="bg-gold text-white  px-4 py-2 rounded-md mt-4"
          >
            {isSending ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {isSubmitted && (
          <div className="mt-4 text-center">
            <p className="text-green-500">{submitMessage}</p>
          </div>
        )}
      </div>
    </ModalComponent>
  );
};

export default Bookingmodal;
