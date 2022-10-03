import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Bem vindo Partiu Jogar
        </title>
      </Head>
      <div className='relative w-[100%]  mt-40'>
        <div className='absolute ml-10 mt-20'>
          <h1 className=' font-[400] text-4xl  text-[#333333] '>
            Reúna os seus <span className=' text-[#93C20C]'>amigos</span> para<br/> conseguir
            uma quadra e <br/><span className=' inline-block text-[#93C20C]'>jogar aquele racha</span> no<br/> final de semana.
          </h1>
          <button className='mt-40 font-[500] bg-[#C3F23C] px-10 py-4 rounded-lg hover:bg-[#afd936] border-none'>
            Vamos jogar
          </button>
        </div >
        
          <img src="/esportes.png" alt="esportes"  className='float-right'/>
        
      </div>

    </>
  )
}

export default Home
