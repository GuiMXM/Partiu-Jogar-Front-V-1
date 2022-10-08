interface PropsButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
    children?: React.ReactNode
}

export function TextButton(props: PropsButton){
    return(
        <button className="
        relative 
        before:content-['']
        before:absolute 
        before:w-[100%] 
        before:h-[4px] 
        before:rounded 
        before:bg-white 
        before:bottom-0
        before:left-0
        before:origin-left
        before:scale-x-[0]
        before:transition-transform
        before:ease-in-out
        hover:before:transition-transform
        hover:before:origin-left
        hover:before:scale-x-[1]
        "
        >{props.children}</button>
    )
}