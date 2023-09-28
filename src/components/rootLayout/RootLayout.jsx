'use client';
import { CookieBanner, Header } from '@/components';
import Footer from '@/components/layout/Footer';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import Link from 'next/link';
import { CurrencyProvider } from '@/context/currencyContext';
import Script from 'next/script';

const RootLayout = ({ children }) => {
  return (
    <>
      <Script id="gtm-manager-init" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(params) {
    dataLayer.push(arguments);
  }

  if (localStorage.getItem('cookie_consent') === null) {
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
    });
  } else {
    gtag('consent', 'default', JSON.parse(localStorage.getItem('cookie_consent')));
  }
`}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTAG_ID}');
        `}
      </Script>
      <body>
        <CurrencyProvider>
          <Header />
          {children}
          <div className="fixed bottom-[30px] right-[30px] z-20 flex flex-col gap-5">
            <Link
              href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              className="backdrop-blur-md  p-3 block rounded-full  w-[48px] h-[48px] hover:scale-110 transition-all"
            >
              <BsTelephoneFill color="#DCA24B" className="w-full h-full" />
            </Link>
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I would like to know more about Richy life Club Services in UAE?`}
              className="backdrop-blur-md p-2 block rounded-full w-[48px] h-[48px] hover:scale-110 transition-all"
            >
              <IoLogoWhatsapp color="#25d366" className="w-full h-full" />
            </Link>
          </div>
          <Footer />
        </CurrencyProvider>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <CookieBanner />
      </body>
    </>
  );
};

export default RootLayout;
