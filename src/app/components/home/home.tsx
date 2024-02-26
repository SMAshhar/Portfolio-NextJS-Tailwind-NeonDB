import React from "react";
import Image from "next/image";

export default function Main() {
  return (
    <div>
      <Image
        src="/gero-back.webp"
        alt=""
        width={1920}
        height={1000}
        className="w-full h-full bg-blend-color-dodge absolute -z-10"
      />
      <div className="w-full lg:flex h-screen bg-slate-900/60 bg-blend-color-dodge z-10">
        <div className="lg:w-1/2  h-full flex lg:transform lg:-skew-y-3 items-end justify-center flex-col lg:p-8">
          <Image
            src={"/portrait.jpeg"}
            alt=""
            width={150}
            height={150}
            className="self-center rounded-full ring-2 ring-purple-500"
          />
          <div className="flex justify-center w-full p-2">WELCOME!</div>
          <div className="text-white text-xl  lg:text-5xl text-center">
            My name is
            <p className="font-bold p-2">
              Syed Muhammad
              <span className="text-red-500 font-extrabold p-2">
                Ashhar
                <span className="animate animate-pulse text-xl lg:text-7xl p-2">!</span>
              </span>
            </p>
            <p className="text-base lg:text-xl px-16">
              I will build your next awesome website from scratch using latest
              state of the art technologies. I offer complete solutions with
              NextJS, Tailwind, GPTs, FastAPI, CMS, payments and much more.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full hidden lg:flex items-center justify-start ">
          <Image src={"/hero-main (2).png"} alt="" width={500} height={800} />
        </div>
      </div>
    </div>
  );
}
