'use client';
import { useState } from 'react';

const SubscribeToNewsLetter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(0);
  const [message, setMessage] = useState('Email already subscribed');
  const handleSubmit = async (e) => {
    e.preventDefault();

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
    if (res.data.length === 0) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/email-subscriptions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
          body: JSON.stringify({
            data: {
              email: email,
            },
          }),
        }
      );
      if (response.status === 200) {
        setMessage('Thank you for subscribing to our newsletter');
        setSubmitted(1);
      }
      setEmail('');
    } else {
      setSubmitted(2);
      setMessage('Email is already subscribed. Thank you');
    }
  };

  return (
    <div className="flex text-base items-center justify-center gap-4 flex-col w-full">
      <h3 className="text-xl text-white capitalize">
        Subscribe to our Newsletter
      </h3>
      {submitted === 0 ? (
        <div className="w-full md:w-1/2 px-4 ">
          <form
            onSubmit={handleSubmit}
            className="w-full flex py-2 flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent py-2 text-white pl-2 flex-1 border-b border-white outline-none"
            />
            <button
              className="bg-primary text-white rounded-sm text-sm px-6 py-2"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      ) : (
        <div className="text-white bg-gold py-5 px-9 rounded-sm">{message}</div>
      )}
    </div>
  );
};

export default SubscribeToNewsLetter;
