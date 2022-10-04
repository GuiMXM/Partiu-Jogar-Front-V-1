import { HtmlHTMLAttributes, ReactNode } from "react"

interface TextProps extends HtmlHTMLAttributes<TextProps> {
    title?: string
    children?: ReactNode;
}

export default function TextXL({ title, children }: TextProps) {

    return (
        <h1 className="font-[600] text-xl text-[#333333] md:text-2xl lg:text-3xl xl:text-4xl">{title ? title: children}</h1>)
}