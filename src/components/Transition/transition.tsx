"use client";
// framer motion
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

//varient
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition: React.FC = () => {
  const route = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={route} className="h-full">
        <>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-full h-full z-30 bg-[#2e2257]"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.1, duration: 0.2, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-full h-full z-20 bg-[#3b2d71]"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-full h-full z-10 bg-[#4b3792]"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
          ></motion.div>
        </>
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
