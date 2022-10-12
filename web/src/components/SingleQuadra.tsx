import DateRangeIcon from '@mui/icons-material/DateRange';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Link from 'next/link';


type Props = {

  IconOne?: string
  IconTwo?: string

  SportOne?: string
  SportTwo?: string

  Id: number
}

const Ruas = ["Rua itaúna, 1515, B.Piauí", "Rua Carlos Augusto Cornelsen, 662, B. Nossa Senhora do Carmo", "Quadra E Casa 11, B. São Francisco da Guarita"]

const Quadras = ["Quadra poliesportiva Edvaldo Carvalho da Silva", "Quadra poliesportiva Leônidas Melo", "Quadra poliesportiva Edvaldo Carvalho da Silva"]

const PlaceImage = ["../quadra1.png", "../quadra2.png", "../quadra3.png"]

export default function SingleQuadra({ IconOne, IconTwo, SportOne, SportTwo, Id }: Props) {

  const theId = Id - 1

  return (
    <>
      <div className="flex flex-col md:flex-row w-screen h-[90vh] items-center justify-evenly space-x-[150px]">


        <div className="flex flex-col items-start mt-48 md:mt-0 ">
          <h1 className="text-4xl font-semibold mb-16">Agendamento</h1>
          <div className='space-y-8'>
            <h2 className="text-3xl max-w-[400px]">{Quadras[theId]} </h2>

            <div className='flex'>
              <img src="../icons/LocPin.png" alt="pin" className="w-[16px] h-[22px] mr-2" />
              <p className=" text-gray-500 font-semibold text-2xl max-w-[282px]">{Ruas[theId]} </p>
            </div>

            <div className='flex flex-col space-y-4'>
              <div className='flex'>
                <DateRangeIcon sx={{ fontSize: 35 }} /> <p className='text-2xl'>4 de Setembro de 2022</p>
              </div>

              <div className='flex'>
                <WatchLaterIcon sx={{ fontSize: 35 }} />
                <p className='text-2xl'>10:00 às 11:00</p>
              </div>
            </div>
            <div className="flex place-self-start items-center justify-center bg-[#3D93F5] w-44 h-12 mt-8 ml-24 rounded-md 
                    hover:shadow-lg hover:shadow-gray-700 hover:bg-blue-600 duration-300 cursor-pointer">

              <Link href={`/quadras/calendario`}>
                <button className="text-white" >Reservar</button>
              </Link>

            </div>

          </div>

        </div>

        <div className="flex flex-col items-start ">
          <img src={PlaceImage[theId]} alt="quadra1" className='min-w-[400px]' />
          <div className="flex flex-col mt-8">

            <p className="mb-4 font-medium">Espaço utilizado para práticas de:</p>

            <div className="flex">
              <img src={IconOne} alt="sport1" className="w-[20px] h-[22px] " />
              <p className="text-base font-medium mb-3 ml-2.5">{SportOne}</p>
            </div>

            <div className="flex">
              <img src={IconTwo} alt="sport2" className="w-[20px] h-[22px]" />

              <p className="text-base font-medium ml-2.5">{SportTwo} </p>
            </div>


          </div>
        </div>

      </div>

    </>
  )
}