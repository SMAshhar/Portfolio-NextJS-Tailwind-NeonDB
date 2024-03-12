'use client'
import React from 'react'
import localFont from 'next/font/local'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import toast from 'react-hot-toast'
import Image from 'next/image'

const cal = localFont({
    src: '../../../public/fonts/Jura.ttf',
    display: 'swap',
})

const isValidEmail = (email: string) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );



export default function Form() {

    const [isLoading, setIsLoading] = useState(false)
    const [formatError, setFormatError] = useState('')

    async function onSubmit(formData: any) {
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

        <div className='flex flex-col md:flex-row h-full px-1 justify-center items-center gap-16 bg-gradient-to-b from-cyan-950 via-white to-white'>
            <div className='flex flex-col pt-8'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-sm space-x-2 md:pt-16">
                    <div className="w-full max-w-2xl px-5 py-10 m-auto md:mt-10">
                        <div className='text-4xl md:text-5xl lg:text-5xl py-2 pb-10 text-gray-200 md:text-cyan-950'><div className={cal.className}>Lets Make Something Unique Together.</div></div>

                        <div className='my-4 text-cyan-900 text-justify tracking-wide'>Please fill the following form and we will surely get back to you as soon as we can.</div>
                        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                            <div className="col-span-2">
                                <div className=" relative ">
                                    <input {...register('name', { required: '* Requires name.' })} type="text" className="border-b-2  bg-transparent flex-1 appearance-none border-gray-300 w-full py-2 px-4 text-gray-800 placeholder-gray-500 md:placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent" placeholder="Name" />
                                    <p className='self-start text-red-500 tracking-tighter text-xs italic'>{errors.name?.message as string}</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className=" relative ">
                                    <input {...register('email', { required: '* Requires a valid email address' })} type="text" className="  bg-transparent flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 text-gray-800 placeholder-gray-500 md:placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent" placeholder="Email" />
                                    <p className='self-start text-red-500 tracking-tighter text-xs italic'>{errors.email?.message as string}</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className=" relative ">
                                    <input {...register('subject', { required: '* Requires subject.' })} type="text" className="  bg-transparent flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 text-gray-800 placeholder-gray-500 md:placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent" placeholder="Subject" />
                                    <p className='self-start text-red-500 tracking-tighter text-xs italic'>{errors.subject?.message as string}</p>
                                </div>
                            </div>
                            {/* <div className="col-span-2">
                                <div className=" relative ">
                                    <input {...register('description', { required: '* Requires description.' })} type="text" className="  border-transparent flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent" placeholder="Description" />
                                    <p className='self-start text-red-500 tracking-tighter text-xs italic'>{errors.description?.message as string}</p>
                                </div>
                            </div> */}
                            <div className="col-span-2">
                                <div className="text-gray-700">
                                    <textarea
                                        {...register('description', { required: '* Requires description.' })}
                                        className=" flex-1 appearance-none border-b-2 border-gray-300 w-full py-2 px-4 bg-transparent text-gray-800 placeholder-gray-500 md:placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:border-transparent"
                                        placeholder="Description"
                                        rows={5}
                                    />
                                    <p className='self-start text-red-900 tracking-tighter text-xs italic'>{errors.description?.message as string}</p>
                                </div>
                            </div>
                            <div className="col-span-2 text-right">
                                <button type="submit" className="py-2 px-4 flex bg-cyan-700 hover:bg-cyan-900 focus:ring-cyan-500 focus:ring-offset-cyan-200 text-white w-full transition ease-in duration-200 justify-center items-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   ">
                                    {isLoading ? <Image src='/gif/load.gif' alt='' loading='eager' width={20} height={19} /> : 'Send'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
