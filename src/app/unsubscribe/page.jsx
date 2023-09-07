'use client';
import React, { useState } from 'react';

const UnsubscribePage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const checkResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/email-subscriptions?filters[email][$eq]=${email}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
        }
      );

      const res = await checkResponse.json();

      if (res.data.length !== 0) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/email-subscriptions/${res.data[0].id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
            },
          }
        );
        if (response.status === 200) {
          setMessage('Unsubscribed successfully');
        }
      } else {
        setMessage(
          'We dont the provided email on system. Kindly check the email id provided'
        );
      }
      setEmail('');
    } catch (error) {
      setMessage('Sorry Something went wrong.');
    }
  };

  return (
    <main className="min-h-[50vh] md:min-h-[70vh]  flex items-center justify-center mx-6 ">
      <div
        className="max-w-[1116px] mx-auto p-6 md:p-11 mt-[100px]"
        style={{
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        }}
      >
        <h1 className="text-xl mb-6">
          <span className="text-red-500">Unsubscribe</span> from Richylife Club
          Newsletter
        </h1>
        <div>
          {!message && (
            <>
              <p className="mb-5 text-base text-gray-500">
                <strong>
                  Please enter your email address below to unsubscribe.
                </strong>
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-between"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent py-2 text-gray-500 pl-2 flex-1 border-b border-primary outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-white ml-4 rounded-sm text-sm px-6 py-2"
                >
                  Unsubscribe
                </button>
              </form>
            </>
          )}
          {message && <p className="mt-2">{message}</p>}
        </div>
      </div>
    </main>
  );
};

export default UnsubscribePage;
