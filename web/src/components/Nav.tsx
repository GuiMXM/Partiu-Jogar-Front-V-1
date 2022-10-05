import Image from "next/image";
import Link from "next/link";
import ElevatedButton from "./Buttons/ElevatedButton";
import OutlinedButton from "./Buttons/OutlinedButton";
import InputType1 from "./Inputs/InputType1";
import Popover from "./PopOver";


export default function Nav() {

    return (
        <nav className="h-20 bg-[#0C62C4] flex text-white justify-between pl-8">
            <Link href="/">
                <Image height="45px" width="158px" src="/titulo2.png" alt="titulo" />
            </Link>
            <ul className="flex h-20 items-center gap-9 mx-20  font-sans font-[500] text-base list-none" >
                <Link href="/sobre" className="cursor-pointer ">
                    Sobre
                </Link>
                <Link href="#" className="cursor-pointer">
                    Criar Conta
                </Link>
                <Popover buttonName="Login" className="h-10 bg-[#F5F5F5] text-black px-7 py-2 rounded hover:bg-[#dcdcdc] ">
                    <div className="flex flex-col items-center gap-5 p-7">
                    <h6 className="text-[#636363] font-[500]">Bem Vindo(a) e Vamos Jogar</h6>
                    <form className="flex flex-col gap-3">
                        <InputType1 type="email" placeholder="Email" />
                        <InputType1 type="password" placeholder="Senha" />
                    </form>

                    <ElevatedButton>
                        Acessar Conta
                    </ElevatedButton>
                    <OutlinedButton>
                        Criar Conta
                    </OutlinedButton>
                </div>
                </Popover>
            </ul>
        </nav>
    )
}



