'use client';
import Script from 'next/script';
import * as gtag from '../../lib/gtag';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
const GoogleAnalytics = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathName + searchParams.toString();

    gtag.pageview(url);
  }, [pathName, searchParams]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                 window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());

                 gtag('consent', 'default', {
                    'analytics_storage' : 'denied'
                 })
                 
                 gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                      });`,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
