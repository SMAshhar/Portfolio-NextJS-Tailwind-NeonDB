import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full absolute z-10 flex items-center justify-center py-5 ring-2 ring-offset-2 ring-purple-500">
            <Image src={'/logo2.png'} alt="logo" width={200} height={100} />
        </div>
    )
}