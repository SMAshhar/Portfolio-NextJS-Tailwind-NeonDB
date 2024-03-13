"use client";

import { useState } from "react";
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// vaiants
import { fadeIn } from "@/utils/variants";
import FollowPointer from "@/utils/FollowPointer";
import Image from "next/image";

const isValidEmail = (email: string) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );


const ContactComponent = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [formatError, setFormatError] = useState('')

    async function onSubmit(formData: any) {
        console.log(formData)
        const emailFormat = isValidEmail(formData.email)
        setIsLoading(true)
        if (emailFormat) {
            await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    description: formData.description,
                })
            })
            console.log("successful")
            toast.success(`Submitted Successfully`, {
                icon: '💙',
                style: {
                    borderRadius: '1px',
                    background: '#009999',
                    color: '#fff',
                },
            })
            reset()
        } else {
            toast.error('Please enter a valid email address', {
                icon: '💀',
                style: {
                    borderRadius: '1px',
                    background: '#009999',
                    color: '#fff',

                },
            })
            console.log("failed")
        }
        setIsLoading(false)
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    console.log(errors.email?.message)

    return (
        <div className="bg-slate-950/30 rounded-2xl px-4 lg:px-16 py-4">
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
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex-1 flex flex-col gap-3 w-full mx-auto"
                    >
                        {/* input group */}
                        <div className="flex flex-col lg:flex-row justify-between gap-1 w-full z-50">
                            <input {...register('name', { required: '* Requires name.' })} type="text" placeholder="name" className="input bg-inherit ring-1 ring-purple-500 rounded-s-3xl rounded-e-3xl p-2 mb-2 px-4 selection:border-violet-500" />
                            <p className='self-start text-red-500 tracking-tighter text-xs italic'>{errors.name?.message as string}</p>
                            <input {...register('email', { required: '* Requires a valid email address' })} type="text" placeholder="email" className="input bg-inherit ring-1 w-full ring-purple-500 rounded-s-3xl lg:mb-2 rounded-e-3xl p-2 px-4 selection:ring-violet-500" />
                            <p className='self-start text-red-500 tracking-tighter text-xs italic'>{errors.email?.message as string}</p>

                        </div>
                        <input {...register('subject', { required: '* Requires subject.' })} type="text" placeholder="subject" className="input z-50 bg-inherit ring-1 ring-purple-500 rounded-s-3xl rounded-e-3xl py-2 px-4 selection:ring-violet-500" />
                        <p className='self-start text-red-500 tracking-tighter text-xs italic'>{errors.subject?.message as string}</p>

                        <textarea
                            cols={30}
                            rows={5}
                            placeholder="message"
                            {...register('description', { required: '* Requires description.' })}
                            className="textarea bg-inherit ring-1 ring-purple-500 rounded-s-2xl rounded-e-2xl py-2 px-4 selection:ring-violet-500"
                        ></textarea>
                        <p className='self-start text-red-900 tracking-tighter text-xs italic'>{errors.description?.message as string}</p>

                        <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red-500 group">
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 py-2">
                            {isLoading ? <Image src='/gif/load.gif' alt='' loading='eager' width={20} height={19} /> : "Let's talk"}
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