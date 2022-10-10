
import React, {  InputHTMLAttributes } from 'react'

interface inputFormProps extends InputHTMLAttributes<HTMLInputElement>{
    name?:string;
    legendtitle: string
}


const FormInput: React.FC<inputFormProps> = (props ) => {
    const fieldsetCss = 'border-neutral-300 border-2 rounded-lg items-center w-[350px] focus-within:border-white text-neutral-300 cursor-default focus-within:text-white';
  return (
    <>
     <fieldset className={fieldsetCss}> 
                <legend className='ml-2 text-sm px-1 '>{props.legendtitle}</legend>
                  <input {... props} className='outline-none bg-transparent ml-2 w-[350px]' />
             </fieldset>
    </>
  )
}


export default FormInput