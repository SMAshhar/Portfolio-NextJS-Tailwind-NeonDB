'use client'

// react 
import { useState } from "react";

//data
import { aboutData } from "./Data";

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from "@/utils/variants";

export default function Skills() {

    const [index, setIndex] = useState(0);

    return (
        <motion.div
            variants={fadeIn("left", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] xl:h-[480px] xl:w-1/2"
        >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                {aboutData.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className={`${index === i &&
                                "text-red-500 after:w-[100%] after:bg-red-500 after:transition-all after:duration-300"
                                } cursor-pointer text-sm md:text-base capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-red-500 after:absolute after:-bottom-1 after:left-0`}
                            onClick={() => setIndex(i)}
                        >
                            {item.title}
                        </div>
                    );
                })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                {aboutData[index].info.map((item, i) => {
                    return (
                        <div
                            key={`${item.title}-${i}`}
                            className="flex flex-col text-sm md:text-base md:flex-row max-w-max gap-x-2 items-center text-white/60"
                        >
                            {/* title */}
                            <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                            <div className="hidden md:flex">-</div>
                            <div>{item.stage}</div>
                            <div className="flex gap-x-4">
                                {/* icons */}
                                {item.icons?.map((icon, i) => {
                                    return (
                                        <div key={i} className="text-2xl text-white">
                                            {icon}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    )
}