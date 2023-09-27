'use client';

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
          className="my-10 mx-4 md:mx-auto  max-w-max flex  flex-col md:max-w-screen-md fixed bottom-2 md:bottom-10 z-30 left-0 right-0 px-3 md:px-4 py-3 justify-between items-center  gap-4 bg-white rounded-lg shadow"
        >
          <div className="mb-3">
            <h2 className="text-sm md:text-base font-normal text-gray-600">
              We use cookies to make your experience better
            </h2>
            <p className="text-xs md:text-sm font-light my-2 text-gray-500">
              We use cookies to analyze your website usage, track visitor
              numbers and sources, and enhance user-friendliness. Rest assured,
              no personal info is collected. You can disable cookies in your
              browser, but it may impact some site features
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="px-5 py-2 rounded-md text-gray-500"
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
