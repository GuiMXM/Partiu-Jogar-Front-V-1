import React from 'react'
import FormButton from '../../../components/Buttons/FormButton'
import FormInput from '../../../components/Inputs/FormInput'

type Props = {}

const usuário = (props: Props) => {
  
  return (
    
    <>
      <div className='flex flex-row-reverse items-start md:items-center justify-center h-[90vh]   '>

          <section className='hidden md:flex flex-col relative items-start justify-center h-[90vh] w-1/2   '>
            <img src="../images/título1.png" alt="Título" className="  w-5/6 win-w-[200px] min-h-[170px]  sm:mt-[50px]"/>

            <span className='flex md:w-[400px] h-fit  pl-4 pb-[10px] md:mt-0 text-xl font-medium lg:ml-52 border-l-[16px] border-[#C3F23C] leading-7  sm:mt-[50px] '>
           Ao realizar o cadastro você <br /> poderá encontrar as melhores<br/> quadras poliesportivas da sua região.</span>

          </section>

          <div className='flex items-center place-content-center   place-self-center md:place-self-start sm:ml-6 md:ml-44 lg:mt-20 h-[620px] w-[480px] min-w-[430px] bg-[#3D93F5] rounded-xl shadow-gray-600  shadow-lg'>

           <form className=' relative space-y-4 '>
             <h2 className='text-white text-2xl font-bold tracking-[.2rem] mb-8'>Realize seu cadastro:</h2>

             <FormInput legendtitle='Nome' type="text"/> 
             <FormInput legendtitle='Email' type="email"/>
             <FormInput legendtitle='Celular' type="tel"/>
             <FormInput legendtitle='CPF' type="text"/>
             <FormInput legendtitle='Email' type="email"/>
             <FormInput legendtitle='Senha' type="password"/>
             <FormInput legendtitle='Repita a senha' type="password"/>

             <div className='flex'>
               <input type="checkbox" className=' checked:text-red'/>

               <p className='text-sm ml-1 text-white font-semi-bold'>Você concorda com nossos <span className='text-[#222] '>Termos</span> e <span className='text-[#222]'>Política de privacidade</span></p>
             </div>
              <FormButton/>
          
           </form>  
          </div>

          
      </div>
    </>
  )
}

export default usuário