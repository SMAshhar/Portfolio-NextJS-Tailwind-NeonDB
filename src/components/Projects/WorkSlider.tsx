'use client'

import React, { useState } from "react";
// data
const workSlides = {
    slides: [
        {
            images: [
                {
                    title: "The Architect Stage",
                    path: "/projects/archStage.png",
                    site: "https://the-architect-stage-nu.vercel.app"
                },
                {
                    title: "ethan smith",
                    path: "/projects/ethanSmith.png",
                    site: "https://ethansmith.vercel.app"
                },
                {
                    title: "The Explorer's Guild",
                    path: "/projects/explorGuild.png",
                    site: "https://explorers-guild.vercel.app"
                },
                {
                    title: "The Pink Lotus",
                    path: "/projects/pinkLotus.png",
                    site: "https://ecommerce-peach-nine.vercel.app"
                },
            ],
        },
        {
            images: [
                {
                    title: "ethan smith",
                    path: "/projects/ethanSmith.png",
                    site: "https://ethansmith.vercel.app"
                },
                {
                    title: "Panaverse DAO",
                    path: "/projects/panaverse.png",
                    site: "https://panaverse-dao-lime-seven.vercel.app"
                },
                {
                    title: "The Pink Lotus",
                    path: "/projects/pinkLotus.png",
                    site: "https://ecommerce-peach-nine.vercel.app"
                },
                {
                    title: "Portfolio",
                    path: "/projects/portfolio.png",
                    site: "https://panaverse-dao-tail-g2wbsp2aa-syedmuhammadashhar-gmailcom.vercel.app"
                },
            ],
        },
    ],
};

// framer motino
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";

export default function WorkSlider() {
    const [website, setwebsite] = useState<string>("");

    const handleClick = (site: string) => {
        setwebsite(site)
        console.log(website)
    }

    return (
        <div className="h-full w-full flex items-center justify-center xl:skew-y-3 ">
            <Swiper
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="max-w-[1100px] flex items-center justify-center lg:relative "
            >
                {workSlides.slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="grid w-full grid-cols-2 grid-rows-2 gap-4 cursor-pointer inset-0  ">
                                {slide.images.map((image, index) => {
                                    return (
                                        <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                                            <button onClick={() => handleClick(image.site)} className="flex items-center justify-centerrelative overflow-hidden group">
                                                {/* images */}
                                                <Image src={image.path} width={800} height={800} alt="" className="rounded-lg" />
                                                {/* overlay gradiant */}
                                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* title */}
                                                <div className="absolute text-center w-full bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                                    <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                                                        {/* title part 1 */}
                                                        <div className="delay-100">LIVE</div>
                                                        {/* title part 1 */}
                                                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                                                        {/* icon */}
                                                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {
                website != '' &&
                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    onClick={()=>handleClick('')}
                    className="absolute flex transition-all w-full h-full p-4 duration-700 items-center justify-center z-30 bg-black/50 overflow-visible">
                    <iframe src={website} title={''} className="w-full h-full" frameBorder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                    <button onClick={() => handleClick('')} className="absolute z-50 top-3 btn rounded-full border border-white/50 max-w-[170px] px-1 py-1 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red-500 group">
                        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                            <RiCloseFill />
                        </span>
                        <RiCloseFill className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
                    </button>
                    <Link href={website} className="absolute z-50  rounded-full border-2 border-white/50 max-w-[270px] px-4 py-1 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red-500 group text-2xl text-red font-extralight text-red-500" >SEE IT TO BELIEVE IT</Link>
                </motion.div>
            }
        </div>
    );
}