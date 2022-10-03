import Image from "next/image";
import Link from "next/link";

export default function Nav(){

    return(
        <nav className="h-20 bg-[#0C62C4] flex justify-between pl-8">
            <Link href="/">
            <Image height="45px" width="158px" src="/titulo2.png" alt="titulo" />
            </Link>
            <ul className="flex h-20 items-center gap-9 mx-20 text-white font-sans font-[500] text-base list-none" >
                <Link href="/sobre" className="cursor-pointer">
                    Sobre
                </Link>
                <Link href="#" className="cursor-pointer">
                    Criar Conta
                </Link>
                <button className="h-10 bg-[#F5F5F5] text-black px-7 py-2 rounded hover:bg-[#dcdcdc]" >
                    Login
                </button>
            </ul>
        </nav>
    )
}