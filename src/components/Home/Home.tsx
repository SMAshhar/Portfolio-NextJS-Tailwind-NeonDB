'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function Main() {
  return (
    <div className="w-full h-screen fixed  bg-slate-900/60 bg-blend-color-dodge ">
      <div className="w-full tracking-widest px-2 lg:flex lg:transform lg:-skew-y-3 h-screen fixed z-10">
        <motion.div
          variants={fadeIn('right', 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="lg:w-1/2 px-2 h-full flex items-end justify-center flex-col lg:p-8">
          <Image
            src={"/portrait.jpeg"}
            alt=""
            width={150}
            height={150}
            className="self-center rounded-full ring-2 ring-purple-500"
          />
          <div className="flex justify-center w-full p-2 text-red-200 text-6xl">Hi!</div>
          <div
            className={`text-white tracking-wider text-2xl lg:text-5xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
          >
             My name is
            <p className="font-extralight px-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Syed Muhammad
              <span className="text-red-500 font-light px-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Ashhar
                <span className="animate animate-ping font-extrabold text-2xl lg:text-7xl px-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  !
                </span>
              </span>
            </p>
            <p className="text-base lg:text-xl px-4 lg:px-16 py-4">
              I will build your next awesome website from scratch using latest
              state of the art technologies. I offer complete solutions with
              front-end, back-end, GPTs, APIs, CMS, payments and much more.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-1/2 h-full hidden lg:flex items-center justify-start pl-8 ">
          <Image src={"/hero-main2.png"} alt="" width={800} height={800} />
        </motion.div>
      </div>
    </div>
  );
}
