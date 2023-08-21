import './globals.css';
import { Inter, Poppins, Nunito_Sans } from 'next/font/google';
import { Header } from '@/components';
import Footer from '@/components/layout/Footer';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import Link from 'next/link';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400'],
  variable: '--font-inter',
});

export const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
  variable: '--font-nunito',
});
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: ' --font-poppins',
});

export const metadata = {
  metadataBase: new URL('https://richylifeae.vercel.app'),
  title: {
    default: 'Richylife Club Luxury Experiences in Dubai',
    template: '%s | Richylife Club Luxury Experiences in Dubai ',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${nunito_sans.variable} ${poppins.variable}`}
    >
      <body>
        <Header />
        {children}
        <div className="fixed bottom-[30px] right-[30px] z-20 flex flex-col gap-5">
          <Link
            href="#"
            className="backdrop-blur-md  p-3 block rounded-full  w-[48px] h-[48px] hover:scale-110 transition-all"
          >
            <BsTelephoneFill color="#DCA24B" className="w-full h-full" />
          </Link>
          <Link
            href="#"
            className="backdrop-blur-md p-2 block rounded-full w-[48px] h-[48px] hover:scale-110 transition-all"
          >
            <IoLogoWhatsapp color="#25d366" className="w-full h-full" />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
