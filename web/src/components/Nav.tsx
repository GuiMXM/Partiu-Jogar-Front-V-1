import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ElevatedButton from "./Buttons/ElevatedButton";
import OutlinedButton from "./Buttons/OutlinedButton";
import InputType1 from "./Inputs/InputType1";
import Popover from "./PopOver";


export default function Nav() {
    const [user, setUser] = useState<string | null>(null)
    console.log(user)

    const logIn = ()=> {
        console.log("AKii")
        setUser("Liara")
    }

    return (
        <nav className="h-20 bg-[#0C62C4] flex text-white justify-between pl-2 md:pl-8">
            <Link href="/">
                <Image height="45px" width="158px" src="/titulo2.png" alt="titulo" />
            </Link>
            {user ? NavOn() : NavOff(logIn)}
        </nav>

    )
}


function NavOff(login: Function ) {
    return (

        <ul className="flex h-20 items-center gap-3 mx-2  font-sans font-[500] text-base list-none md:gap-9 md:mx-20" >
            <Link href="/sobre" className="cursor-pointer ">
                Sobre
            </Link>
            <div className=" invisible w-0 md:visible md:w-auto ">
                <Link href="#" className="cursor-pointer">
                    Criar Conta
                </Link>
            </div>
            <Popover buttonName="Login" className="h-10 bg-[#F5F5F5] text-black px-7 py-2 rounded hover:bg-[#dcdcdc] ">
                <div className="flex flex-col items-center gap-5 p-7">
                    <h6 className="text-[#636363] font-[500]">Bem Vindo(a) e Vamos Jogar</h6>
                    <form className="flex flex-col gap-3">
                        <InputType1 type="email" placeholder="Email" />
                        <InputType1 type="password" placeholder="Senha" />
                    </form>
                    <ElevatedButton onClick={()=>login()}>
                        Acessar Conta
                    </ElevatedButton>
                    <OutlinedButton>
                        Criar Conta
                    </OutlinedButton>
                    <Link href="#" className="font-[400] text-[#949494]">
                        Esqueceu sua senha?
                    </Link>
                </div>
            </Popover>
        </ul>

    )
}

function NavOn() {
    return <ul className="flex h-20 items-center gap-3 mx-2  font-sans font-[500] text-base list-none md:gap-9 md:mx-20">
        <div className="transition-all duration-300 delay-150 hover:delay-300 hover:text-xl ">
            
        <Link href="#" >
            Favoritas
        </Link>
        </div>
        <Link href="#">
            Horários
        </Link>
        <Link href="#">
            Quadras
        </Link>
        <div className="flex">
            <div className="flex flex-col">
                <span className="text-[#C3F23C]">Liara</span>
                <Link href="#">Minha Conta</Link>
            </div>
        </div>

    </ul>
}