'use client';
import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useEffect, useState } from 'react';
export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });
    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm  fixed bottom-10 z-30 left-0 right-0 ${
        cookieConsent != null ? 'hidden' : 'flex'
      } px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-gray-700 rounded-lg shadow text-gray-200`}
    >
      <div className="text-center">
        <Link href="/cookie-policy">
          <p>
            We use{' '}
            <span className="font-bold text-sky-400">&nbsp;cookies&nbsp;</span>
            on our site{' '}
          </p>
        </Link>
      </div>
      <div className="flex gap-2">
        <button
          className="px-5 py-2 rounded-md  text-gray-300"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="px-5 py-2 rounded-md bg-gray-900 text-white"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
