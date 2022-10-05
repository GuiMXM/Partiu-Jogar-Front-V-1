import React from 'react'

type Props = {}

const usuário = (props: Props) => {
  const fieldsetCss = 'border-neutral-300 border-2 rounded-lg items-center w-[350px] focus-within:border-white text-neutral-300 cursor-default focus-within:text-white place-self-center';
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

             <fieldset className={fieldsetCss}> 
                <legend className='ml-2 text-sm px-1  '>Nome</legend>
                  <input type="text" placeholder='' className='outline-none bg-transparent ml-2 w-[350px]' />
             </fieldset> 

             <fieldset className={fieldsetCss}> 
                <legend className='ml-2 text-sm px-1'>Email</legend>
                  <input type="email" placeholder='' className='outline-none bg-transparent ml-2 w-[350px]'/>
             </fieldset>

             <fieldset className={fieldsetCss}> 
                <legend className='ml-2 text-sm px-1'>Celular</legend>
                  <input type="tel" placeholder='' className='outline-none bg-transparent ml-2 w-[350px]'/>
             </fieldset>

             <fieldset className={fieldsetCss}> 
                <legend className='ml-2 text-sm px-1'>CPF</legend>
                  <input type="text" placeholder='' className='outline-none bg-transparent ml-2 w-[350px]'/>
             </fieldset>


             <fieldset className={fieldsetCss}> 
                <legend className='ml-2 text-sm px-1'>Senha</legend>
                  <input type="password" placeholder='' className='outline-none bg-transparent ml-2 w-[350px]'/>
             </fieldset>

            <fieldset className={fieldsetCss}> 
                <legend className='ml-2 text-sm px-1'>Repita a senha</legend>
                  <input type="password" placeholder='' className='outline-none bg-transparent ml-2 w-[350px]'/>
             </fieldset>

             <div className='flex'>
               <input type="checkbox" className=' checked:text-red'/>

               <p className='text-sm ml-1 text-white font-semi-bold'>Você concorda com nossos <span className='text-[#222] '>Termos</span> e <span className='text-[#222]'>Política de privacidade</span></p>
             </div>

              <div className='flex place-content-center bg-gray-200  w-[360px] h-10  rounded-md hover:bg-white duration-300 cursor-pointer'>

               <button type='submit' className='text-blue-600 hover:text-blue-600 bg-transparent font-semi-bold '>Confirmar</button>
              </div>
          
           </form>  
          </div>

          
      </div>
    </>
  )
}

export default usuário