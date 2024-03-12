import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Transition from "@/components/Transition/transition";
import Header from "@/components/Header/Header";
import localFont from "next/font/local";
import Image from "next/image";
import TsParticles from "@/utils/TsParticles";


const stellar = localFont({
  src: '../../public/fonts/Stellar-light.otf'
})
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Syed Muhammad Ashhar",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={stellar.className}>
        <div className="fixed top-0 h-7 flex items-center justify-center bg-violet-900 tracking-widest w-full text-white">WORK IN PROGRESS</div>
        <Image
          src="/gero-back.webp"
          alt=""
          width={1920}
          height={1000}
          className="w-full h-full bg-blend-color-dodge absolute -z-10"
        />
        <TsParticles />
        <Header />
        <Nav />
        <Transition />
        {children}
      </body>
    </html>
  );
}
