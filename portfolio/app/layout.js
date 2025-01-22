import {  Outfit,Ovo,Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight:["400","500","600","700"]
});

const  ovo = Ovo({
  subsets: ["latin"], weight:["400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - UsingNextjs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} ${geistMono.variable} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
