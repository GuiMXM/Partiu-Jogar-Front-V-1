import Image from "next/image";
import { HtmlHTMLAttributes, ReactNode } from "react";

export default function Footer() {
    return (
        <ContinerFooter>
            <div className="flex gap-10 items-center ">
                <Image height="50px" width="50px" src="/ball.png" />
                <span>Mais de 20 espaços<br /> para você jogar</span>
            </div>
            <div className="w-[3px] bg-[#C3F23C]"></div>
            <div className="flex gap-10 items-center ">
                <Image height="50px" width="50px" src="/calender.png" />
                <span>Simples e fácil<br /> de reservar</span>
            </div>
            <div className="w-[3px] bg-[#C3F23C]"></div>
            <div className="flex gap-10 items-center ">
                <Image height="50px" width="50px" className="w-[20px] h-[20px]" src="/watch.png" />
                <span>Escolha seus horários<br /> de preferência</span>
            </div>
        </ContinerFooter>
    )
}

interface AuxProps extends HtmlHTMLAttributes<AuxProps> {
    children: ReactNode;
  }

function ContinerFooter({children}: AuxProps){
    return(
        <div className="flex flex-wrap gap-9  bg-[#0C62C4] p-20 justify-between font-[400] text-white text-base lg:text-2xl">
            {children}
        </div>
    )
}