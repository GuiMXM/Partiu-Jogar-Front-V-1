
import React from 'react'
import Card from '../../components/Card'

type Props = {}

const index = (props: Props) => {
    const PlaceImage =["../quadra1.jpg","../quadra2.jpg","../quadra3.jpg"]
    
    const Quadras = ["Quadra poliesportiva Edvaldo Carvalho da Silva","Quadra poliesportiva Leônidas Melo","Quadra poliesportiva Edvaldo Carvalho da Silva"]

    const Ruas = ["Rua itaúna, 1515, B.Piauí","Rua Carlos Augusto Cornelsen, 662, B. Nossa Senhora do Carmo","Quadra E Casa 11, B. São Francisco da Guarita"]

    const Icons = {
        Fut: "./icons/Fut.jpg",
        Bsqt: "./icons/Basquete.jpg",
        Volei: "./icons/Volei.jpg"
    }
    
    const Sports = {
        Fut: "Futsal",
        Bsqt: "Basquete",
        Volei: "Volei"
    };



  return (
   <>
         
        <div className="flex flex-col lg:flex-row lg:h-screen  items-center lg:justify-evenly mt-20 lg:mt-0 ">

          <Card Id={1} Place={Quadras[0]} Street={Ruas[0]} PlaceImage={PlaceImage[0]} alt="Quadra1" SportOne={Sports.Fut} IconOne={Icons.Fut} SportTwo={Sports.Bsqt} IconTwo={Icons.Bsqt} />


          <Card Id={2} Place= {Quadras[1]} Street={Ruas[1]} PlaceImage={PlaceImage[1]} alt="Quadra2" SportOne={Sports.Fut} IconOne={Icons.Fut} SportTwo={Sports.Bsqt} IconTwo={Icons.Bsqt} />


          <Card Id={3} Place={Quadras[2]} Street={Ruas[2]} PlaceImage={PlaceImage[2]} alt="Quadra3" SportOne={Sports.Fut} IconOne={Icons.Fut} SportTwo={Sports.Volei} IconTwo={Icons.Volei} />

       
            
            
         </div>

         

        

            




        

    
    </>
  )
}

export default index


