import RootLayout from "@/components/rootLayout/RootLayout";
import "./globals.css";
import { Inter, Poppins, Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400"],
  variable: "--font-inter",
});

export const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-nunito",
});
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: " --font-poppins",
});

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEB_URL}`),
  title: {
    default: "Richy Life Club ",
    template: "%s | Richy life Club",
  },
};

export default function Layout({ children, params }) {
  const { lang } = params;
  return (
    <html
      lang="en"
      className={`${inter.variable} ${nunito_sans.variable} ${poppins.variable}`}
    >
      <RootLayout lang={"en"}>{children}</RootLayout>
    </html>
  );
}
