import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    title?: string
    children?: ReactNode;
}

export default function TextXL(props: TextProps) {

    return (
        <h1 className="font-[600] text-xl text-[#333333] md:text-2xl lg:text-3xl xl:text-4xl">{props.title ? props.title : props.children}</h1>)
}