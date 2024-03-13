'use client'

// framer motion
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"


export default function Intro() {
    return (

        <div className="px-2 xl:px-16 pt-16 xl:py-12 lg:transform lg:-skew-y-2 text-center lg:text-left">
            <motion.p
                variants={fadeIn('right', 0.7)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-2xl lg:3xl 2xl:text-5xl tracking-widest py-3 xl:py-12 font-extralight">
                My <span className="text-red-500">Projects</span>
            </motion.p>
            <motion.p
                variants={fadeIn('right', 0.7)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-sm lg:text-lg tracking-wider font-extralight">
                Discover a dynamic portfolio showcasing full-stack websites, ecommerce platforms,
                and captivating portfolio sites. Dive into innovative projects that blend creativity
                and functionality seamlessly. Experience the harmonious fusion of technology and artistry
                in a unique music application. Welcome to my diverse array of projects, each crafted to leave a lasting impression.
            </motion.p>
        </div>

    )
}