import React from "react"

interface PropsButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
    children?: React.ReactNode
}

export default function OutlinedButton(props: PropsButton){
    return( 
        <button className="px-10 w-[100%] py-3 outline outline-2 shadow rounded bg-transparent text-[#3D93F5] font-[500] " {...props}>
            {props.children}
        </button>
    )
}   