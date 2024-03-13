'use client'

// component
import Slider from "./Slider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import FollowPointer from "@/utils/FollowPointer";


export default function ServicePage() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center fixed bg-slate-900/80 bg-blend-color-dodge">
            <FollowPointer />
            <div className="xl:w-1/2 px-2 lg:px-16 pt-16 lg:py-12 text-center">
                <motion.p
                    variants={fadeIn('down', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-3xl lg:text-4xl 2xl:text-5xl tracking-widest py-12 font-extralight">
                    What <span className="text-red-500">I</span> Offer?
                </motion.p>
                <motion.p
                    variants={fadeIn('down', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-sm lg:text-xl tracking-widest font-extralight">
                    As a project engineer for 12 years, and a record of OTIF deliveries, I have built a keen eye on getting things done.
                    My expertise spans strategic planning, problem-solving, meticulous execution, facilitating successful project
                    outcomes. I excel in stakeholder management and fostering collaboration, leveraging resilience and adaptability to
                    navigate challenges effectively.
                </motion.p>
            </div>
            <motion.div
                variants={fadeIn('up', 0.7)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full xl:w-2/3 px-2 py-4">
                <Slider />
            </motion.div>
        </div>
    )
}