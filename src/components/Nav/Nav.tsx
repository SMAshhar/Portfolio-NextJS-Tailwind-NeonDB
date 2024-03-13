'use client'
// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2';
import Link from 'next/link';

import { usePathname } from 'next/navigation'
import { ReactElement } from 'react';

type NavData = {
    name: string;
    path: string;
    icon: ReactElement
}[]

// nav data
export const navData: NavData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'projects', path: '/projects', icon: <HiViewColumns /> },
    {
        name: 'testimonials',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope />,
    },
];

export default function Nav() {

    const pathname = usePathname


    return (
        <nav className='flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-full '>
            {/* inner */}
            <div className='flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[50px] lg:h-max py-4 bg-purple-500/30 ring-2 ring-purple-500/40 backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full '>
                {navData.map((link, index) => {
                    return (
                        <Link className={`${link.path === pathname() && 'text-red-500'} relative flex items-center group hover:text-red-500 transition-all duration-300`} href={link.path} key={index}>
                            {/* tolltip */}
                            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                                <div className='bg-white relative flex text-slate-800 items-center px-[6px] rounded-[3px]'>
                                    <div className='text-[12px] leading-none p-1 flex items-center justify-center font-semibold capitalize'>
                                        {link.name}
                                    </div>
                                    {/* triangle */}
                                    <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                                </div>
                            </div>
                            {/* icons */}
                            <div className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{link.icon}</div>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}