import React from 'react'
import Link from 'next/link'

type Props = {}

function Cadastro({}: Props) {
    

  return (
    <>
    <div className="flex flex-col items-center h-11/12 mt-[50px] snap-always">

      <div className="flex md:flex-row md:gap-2 sm:gap-4 sm:flex-col justify-evenly items-center content-center w-11/12 text-[#F5F5F5]  ">

        <Link href="/cadastro/user">
          <div className='flex items-center justify-start bg-[#3D93F5] md:w-[480px] sm:w-[450px] h-[80px] rounded-lg shadow-lg cursor-pointer hover:shadow-lg hover:text-[#FFF] hover:bg-blue-500 hover:shadow-gray-500 duration-300'>
             <h2 className='ml-6 md:text-xl sm:text-lg font-bold tracking-wider'>Cadastro de usuário?</h2>
          </div>
        </Link>

         <Link href="/cadastro/supervisor">
          <div className='flex items-center justify-start bg-[#3D93F5] md:w-[480px] sm:w-[450px] h-[80px] rounded-lg shadow-lg cursor-pointer hover:shadow-lg hover:text-[#FFF] hover:bg-blue-500 hover:shadow-gray-500 duration-300'>
             <h2 className='ml-6 md:text-xl sm:text-lg font-bold tracking-wider'>Cadastro de supervisor?</h2>
         </div>
         </Link>

      </div>

       
         
      

         <img src="../images/título1.png" alt="Título" className="  w-3/6 win-w-[200px] min-h-[170px] lg:mt-auto sm:mt-[50px]"/>
      
       <span className='w-fit h-fit pl-4 pb-[10px] md:mt-0 text-xl font-medium md:ml-96 border-l-[16px] border-[#C3F23C] leading-7  sm:mt-[50px]'>
        Ao realizar o cadastro você <br /> poderá encontrar as melhores <br/> quadras poliesportivas da sua região.</span>

    </div>
        
    </>
  )
}

export default Cadastro