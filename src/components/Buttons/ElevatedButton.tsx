import React from "react"

interface PropsButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
    children?: React.ReactNode
}

export default function ElevatedButton(props: PropsButton){
    return( 
        <button className="px-10 w-[100%] py-3  shadow rounded bg-[#3D93F5] text-[#F5F5F5] font-[500] transition-colors hover:bg-[#3684dc]  active:bg-[#3684dc] hover:shadow-md" {...props}>
            {props.children}
        </button>
    )
}