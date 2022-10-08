import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ElevatedButton from "./Buttons/ElevatedButton";
import OutlinedButton from "./Buttons/OutlinedButton";
import { TextButton } from "./Buttons/TextButton";
import SwipeableTemporaryDrawer from "./Drawer";
import InputType1 from "./Inputs/InputType1";
import Popover from "./PopOver";


export default function Nav() {
    const [user, setUser] = useState<string | null>(null)
    console.log(user)

    const logIn = () => {
        setUser("Liara")
    }

    const logOff = () => {
        setUser(null)
    }

    return (
        <nav className="h-20 bg-[#0C62C4] flex text-white justify-between pl-2 md:pl-8">
            <Link href="/" >
                <Image className="cursor-pointer" height="45px" width="158px" src="/titulo2.png" alt="titulo" />
            </Link>
            <div className="flex-1">
            {user ? NavOn(logOff) : NavOff(logIn)}
            </div>
        </nav>

    )
}

function NavOff(login: Function) {
    const router = useRouter();
    return (
        <div className="flex flex-row-reverse">
            <ul className="flex h-20 items-center gap-3 mx-2  font-sans font-[500] text-base list-none md:gap-9 md:mx-20" >
            <TextButton>
                <Link href="/sobre" className="cursor-pointer ">
                    Sobre
                </Link>
            </TextButton>
            <div className=" invisible w-0 md:visible md:w-auto ">
                <TextButton>
                    <Link href="/cadastro">
                        Criar Conta
                    </Link>
                </TextButton>
            </div>
            <TextButton />
            <Popover buttonName="Login" className="h-10 bg-[#F5F5F5] text-black px-7 py-2 rounded hover:bg-[#dcdcdc] ">
                <div className="flex flex-col items-center gap-5 p-7">
                    <h6 className="text-[#636363] font-[500]">Bem Vindo(a) e Vamos Jogar</h6>
                    <form className="flex flex-col gap-3">
                        <InputType1 type="email" placeholder="Email" />
                        <InputType1 type="password" placeholder="Senha" />
                    </form>
                    <ElevatedButton onClick={() => login()}>
                        Acessar Conta
                    </ElevatedButton>
                    <OutlinedButton onClick={() => {
                        router.push('/cadastro')
                    }}>
                        Criar Conta
                    </OutlinedButton>
                    <Link href="#" className="font-[400] text-[#949494]">
                        Esqueceu sua senha?
                    </Link>
                </div>
            </Popover>
        </ul>
        </div>

    )
}

function NavOn(logOff: Function) {
    return <div className="flex flex-row-reverse ">
        <ul className=" flex h-20 items-center gap-3 mx-2  font-sans font-[500] text-base list-none md:gap-9 md:mx-20 invisible  md:visible  ">

            <TextButton>
                <Link href="#" >
                    Favoritas
                </Link>
            </TextButton>

            <TextButton>
                <Link href="#">
                    Horários
                </Link>
            </TextButton>
            <TextButton>
                <Link href="#">
                    Quadras
                </Link>
            </TextButton>
            <div className="flex">
                <div className="flex flex-col" onClick={() => logOff()}>
                    <span className="text-[#C3F23C] font-[500]">Liara</span>
                    <Link href="#" >Minha Conta</Link>
                </div>
            </div>
        </ul>
        <div className="flex visible   absolute  h-20 items-center mx-2  w-max md:invisible  " >
             
             <SwipeableTemporaryDrawer name="Liara" listOptions={[
                {
                    title: "Minha Conta",
                    route: "/account"
                },{
                    title: "Quadras",
                    route: "/quadras"
                },
                {
                    title: "Horários",
                    route: "/horarios"
                },
                {
                    title: "Favoritos",
                    route: "/favoritos"
                }
            ]} />
             
        </div>
    </div>

}
