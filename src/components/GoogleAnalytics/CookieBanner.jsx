'use client';
import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if cookie consent has been previously granted or declined
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    setCookieConsent(storedCookieConsent);

    // Show the banner with a delay of 5 seconds
    const timeout = setTimeout(() => {
      if (storedCookieConsent === null) {
        setShowBanner(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [setCookieConsent]);

  const acceptCookies = () => {
    setCookieConsent(true);
    setShowBanner(false);
    setLocalStorage('cookie_consent', 'granted');
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  };

  const declineCookies = () => {
    setCookieConsent(false);
    setShowBanner(false);
    setLocalStorage('cookie_consent', 'denied');
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  };
  return (
    <AnimatePresence>
      {showBanner && cookieConsent === null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="my-10 mx-auto max-w-max flex md:max-w-screen-sm fixed bottom-10 z-30 left-0 right-0 px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-gray-700 rounded-lg shadow text-gray-200"
        >
          <div className="text-center">
            <Link href="/cookie-policy">
              <p>
                We use{' '}
                <span className="font-bold text-sky-400">
                  &nbsp;cookies&nbsp;
                </span>
                on our site{' '}
              </p>
            </Link>
          </div>
          <div className="flex gap-2">
            <button
              className="px-5 py-2 rounded-md text-gray-300"
              onClick={declineCookies}
            >
              Decline
            </button>
            <button
              className="px-5 py-2 rounded-md bg-gray-900 text-white"
              onClick={acceptCookies}
            >
              Allow Cookies
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
