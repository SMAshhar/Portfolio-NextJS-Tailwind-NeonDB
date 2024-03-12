'use client'
// components
import WorkSlider from "./WorkSlider";
import Intro from "./Intro";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import FollowPointer from "@/utils/FollowPointer";

export default function ProjectPage() {
    return (
        <div className="flex flex-col lg:flex-row w-full xl:pr-24 items-center max-h-[90vh] justify-center">
            <FollowPointer />
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
                className="w-full max-w-[420px] lg:max-w-max lg:w-2/3 xl:w-2/3 px-2 py-4 max-h-[50vh] lg:max-h-[80vh] h-1/2 xl:h-auto flex items-start justify-start skew-y-3">
                <WorkSlider />
            </motion.div>
        </div>
    )
}