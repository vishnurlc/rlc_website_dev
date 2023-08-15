import './globals.css';
import { Inter, Poppins, Nunito_Sans } from 'next/font/google';
import { Header } from '@/components';
import Footer from '@/components/layout/Footer';

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
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <Footer />
      </body>
    </html>
  );
}