import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    isPassword?: boolean | null
}

export default function InputType1(props : InputProps){ 
    return(
        <input className="
            p-3
            rounded
            border-[#C4C4C4]
            border-2
            placeholder:font-[500]
        " {...props}/>
    )
}