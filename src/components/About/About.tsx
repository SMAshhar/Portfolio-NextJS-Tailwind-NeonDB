import localFont from "next/font/local"

const stellar = localFont({
    src: "../../../public/fonts/Stellar-light.otf",
    display: "swap",
  });


export default function AboutComponent() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-slate-900/80 bg-blend-color-dodge">
            <div className="w-1/2 px-2 lg:px-16 lg:transform lg:-skew-y-2">
                <p className="text-xl lg:text-3xl py-12 tracking-widest font-extralight">
                    Who <span className="text-red-500">am</span> I?
                </p>
                <p className="text-lg lg:text-xl tracking-widest font-extralight">
                    I am a project engineer by trait, serving in the industry for 12 years. 
                    Two years ago, I decided to drop my carrier and start following my dream.  
                    This is when I was introduced to AI. Now, I am a full-stack developer. With latest 
                    technologies like GPTs, React, NextJS, Tailwind, JWT-Authentication, Stripe, Sanity CRM, 
                    NeonDB, Vercel in focus, I can build your full-stack websites, from scratch to deployemnt,
                    with state of the art technologies.
                </p>
            </div>
            <div className="w-1/2">

            </div>
        </div>
    )
}