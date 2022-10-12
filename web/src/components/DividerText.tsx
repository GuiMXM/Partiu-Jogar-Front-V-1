import { HtmlHTMLAttributes, ReactNode } from "react"

interface TextProps extends HtmlHTMLAttributes<TextProps> {
    title?: string,
    children?: ReactNode;
}

export default function DividerText({ title, children }: TextProps) {

    return (
        <div className='flex flex-row ml-10 mt-10 gap-3 lg:mt-2'>
            <div className='w-3 bg-[#C3F23C]'></div>
            <h1 className="font-[400] text-lg text-[#333333] md:text-xl lg:text-2xl xl:text-3xl">{title ? title : children}</h1>
        </div>
    )
}