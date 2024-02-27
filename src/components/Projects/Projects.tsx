'use client'
// components
import WorkSlider from "./Slider";
import Intro from "./Intro";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function ProjectPage() {
    return (
        <div className="flex flex-col xl:flex-row w-full xl:pr-24 items-center justify-center">
            <motion.div
                variants={fadeIn('right', 0.7)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full px-2 py-4 flex items-center justify-center">
                <Intro />
            </motion.div>
            <motion.div
                variants={fadeIn('left', 0.7)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full lg:w-2/3 xl:w-2/3 px-2 py-4 flex items-start justify-start">
                <WorkSlider />
            </motion.div>
        </div>
    )
}