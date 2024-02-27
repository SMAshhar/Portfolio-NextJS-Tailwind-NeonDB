"use client";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// vaiants
import { fadeIn } from "@/utils/variants";
import FollowPointer from "@/utils/FollowPointer";

const ContactComponent = () => {
  return (
    <div className="bg-slate-950/30 rounded-2xl px-4 lg:px-16 py-8 lg:py-16">
      <div className="container z-10 mx-auto text-center xl:text-left flex items-center justify-center">
        <FollowPointer />
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 text-2xl lg:text-4xl"
          >
            Let&lsquo;s <span className="text-red-500">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex flex-col lg:flex-row gap-x-6 w-full z-50">
              <input type="text" placeholder="name" className="input bg-inherit ring-1 ring-purple-500 rounded-s-3xl rounded-e-3xl p-2 mb-6 lg:mb-0 px-4 selection:border-violet-500" />
              <input type="text" placeholder="email" className="input bg-inherit ring-1 ring-purple-500 rounded-s-3xl rounded-e-3xl p-2 px-4 selection:ring-violet-500" />
            </div>
            <input type="text" placeholder="subject" className="input z-50 bg-inherit ring-1 ring-purple-500 rounded-s-3xl rounded-e-3xl p-2 px-4 selection:ring-violet-500" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="message"
              className="textarea bg-inherit ring-1 ring-purple-500 rounded-s-2xl rounded-e-2xl p-2 px-4 selection:ring-violet-500"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red-500 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 py-2">
                Let&lsquo;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;