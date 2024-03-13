'use client'


// framer motion
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import Skills from "./Skills"
import FollowPointer from "@/utils/FollowPointer"

export default function AboutComponent() {
    return (
        <div className="w-full h-screen lg:flex items-center justify-center fixed bg-slate-900/80 bg-blend-color-dodge">
            <div className="hidden lg:block">
                <FollowPointer />
            </div>
            <div className="lg:w-1/2 px-2 lg:px-16 pt-4 md:pt-16 lg:py-12 lg:transform lg:-skew-y-2 text-center lg:text-left">
                <motion.p
                    variants={fadeIn('right', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-3xl lg:text-5xl tracking-widest py-4 pt-12 font-extralight">
                    Who <span className="text-red-500">am</span> I?
                </motion.p>
                <motion.p
                    variants={fadeIn('right', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-sm lg:text-xl tracking-wider font-extralight">
                    I am a <span className="text-red-500">project engineer</span> by trait, serving in the industry for 12 years.
                    Two years ago, I decided to drop my carrier and start following my dream.
                    This is when I entered the field of <span className="text-red-500">AI</span>. Now, I am a <span className="text-red-500">full-stack developer</span>. With latest
                    technologies like <span className="text-red-500">GPTs, React, NextJS, Tailwind, JWT-Authentication, Stripe, Sanity CRM,
                    NeonDB, Vercel</span> in focus, I can build your full-stack websites, from scratch to deployemnt,
                    with state of the art technologies.
                </motion.p>
            </div>
            <div className="lg:w-1/2 lg:transform lg:skew-y-3 flex lg:h-[90vh] pt-4 md:pt-12 items-center justify-center xl:items-end lg:justify-center inset-x-1/2">
                <Skills />
            </div>
        </div>
    )
}