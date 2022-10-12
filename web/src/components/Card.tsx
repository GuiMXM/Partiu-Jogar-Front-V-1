import React from 'react'
import Link from 'next/link'

type Props = {
  Place?:string
  Street?:string
  PlaceImage?:string
  alt?:string,

  SportOne:string 
  SportTwo?:string
  

  IconOne:string
  IconTwo?:string

  Id:number
  
}



const Card = ({Id,Place,Street,PlaceImage,alt,SportOne,SportTwo,IconOne,IconTwo}: Props) => {
  return (
    <>
    
    <div className="flex flex-col relative items-start mb-16 ml-4 lg:mb-0 lg:ml-0  ">

    <img src={PlaceImage} alt={alt} className="md:w-[420px]
    sm:w-[370px] " />

    <h3 className="w-3/5 mt-4 mb-4 text-lg font-semibold">{Place}</h3>

    <div className="flex">
      <img src="../icons/LocPin.png" alt="pin"  className="w-[16px] h-[22px] mr-2"/> <p className="font-medium text-gray-600 max-w-[420px] ">{Street} </p>
    </div>

    <div className="flex flex-col mt-8">

        <p className="mb-4">Espaço utilizado para práticas de:</p>

        <div className="flex">
            <img src={IconOne} alt="futIcon" className="w-[20px] h-[22px] "/>
            <p className="text-base font-medium mb-3 ml-2.5"> {SportOne} </p>
        </div>

        <div className="flex">
            <img src={IconTwo} alt="basqueteIcon" className="w-[20px] h-[22px]"/>

            <p className="text-base font-medium ml-2.5">{SportTwo} </p>
        </div>

       
        <Link href={`/quadras/${Id}`}>

          <div className="flex place-self-end items-center justify-center bg-[#3D93F5] w-44 h-12 mt-8 ml-24 rounded-md 
           hover:shadow-lg hover:shadow-gray-700 hover:bg-blue-600 duration-300 cursor-pointer">

            <button className="text-white">Reservar</button>

          </div>
        </Link>
    </div>
    
</div>
    </>
  )
}

export default Card