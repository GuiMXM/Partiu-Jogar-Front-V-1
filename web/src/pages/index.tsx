import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DividerText from '../components/DividerText'
import Footer from '../components/Footer'
import Header1 from '../components/Pages/Home/Header1'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Bem vindo Partiu Jogar
        </title>
      </Head>
      <Header1 />
      <DividerText>
        Conseguir um tempo para reunir <br />as pessoas para praticar uma atividade<br /> física sempre foi um problema. É para<br /> isso que nós estamos aqui, lhe ajudar<br /> a conseguir marcar esses momentos<br /> de amizade e saúde.
      </DividerText>

      <div className='flex flex-col mt-10 md:flex-row lg:mt-56'>
        <div className='flex-1 w-1/2'>

          <Image src='/mobile-front-1.png' width='400px' height="450px" />
        </div>
        <div className='flex flex-col justify-around flex-1 mb-10 md:mb-0'>
          <DividerText>Baixe o aplicativo e faça<br /> sua reserva das quadras<br /> no conforto da sua casa.</DividerText>

          <div className='flex flex-row ml-10 mt-2 gap-3  '>
            <div className='w-3 bg-[#C3F23C]'></div>
            <div>
              <h3 className='font-[400] text-base  sm:text-xl lg:text-2xl '>Faça download na:</h3>
              <div className='flex flex-row items-center gap-2 mt-3'>
                <Image width="35px" height="40px" src="/play_store.png" />
                <span className='font-[400] text-base md:text-xl lg:text-2xl'>
                  Play Store
                </span>
              </div>
              <div className='flex flex-row items-center gap-2 mt-3'>
                <Image width="35px" height="40px" src="/apple.png" />
                <span className='font-[400] text-base md:text-xl lg:text-2xl'>
                  Apple Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
