import Image from "next/image";

export default function Header1() {
    return (
        <div className="">
            <div className='flex flex-col lg:block lg:h-[70rem] lg:mt-40'>
                <div className=' m-auto lg:absolute lg:ml-10 lg:mt-20'>
                    <h1 className='flex-none mt-10 font-[400] text-xl text-[#333333] md:text-2xl lg:text-3xl xl:text-4xl '>
                        Reúna os seus <span className=' text-[#93C20C]'>amigos</span> para<br /> conseguir
                        uma quadra e <br /><span className=' inline-block text-[#93C20C]'>jogar aquele racha</span> no<br /> final de semana.
                    </h1>
                    <button className='mt-10 md:mt-40 font-[500] bg-[#C3F23C] px-10 py-4 rounded-lg hover:bg-[#afd936] border-none'>
                        Vamos jogar
                    </button>
                </div >
                <div className='float-right'>
                    <Image height="1100em" width="900em" src="/esportes.png" alt="esportes" />

                </div>

            </div>
        </div>
    )
}