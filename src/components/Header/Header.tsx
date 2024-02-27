// next image
import Image from "next/image";
import Link from "next/link";

// social media icons
import { FaInstagram, FaTwitter } from "react-icons/fa";



export default function Header() {
    return (
        <Link href={'/'} className="w-full absolute z-10 flex items-center justify-center py-5 ring-2 ring-offset-2 ring-purple-500">
            <Image src={'/logo2.png'} alt="logo" width={200} height={100} />
        </Link>
    )
}