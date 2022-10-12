import React from 'react'

import {useRouter} from 'next/router'

import SingleQuadra from "../../components/SingleQuadra"

type Props = {}

const quadraId = (props: Props) => {
   const router = useRouter()
   const quadraId = Number(router.query.quadraId )

   const Icons = {
       Fut: "../icons/Fut.png",
       Bsqt: "../icons/Basquete.png",
       Volei: "../icons/Volei.png"
   }
   
   const Sports = {
       Fut: "Futsal",
       Bsqt: "Basquete",
       Volei: "Volei"
   };

  return (
    <>
       {quadraId == 3 ? <SingleQuadra 
       Id={quadraId} 
       IconOne={Icons.Fut} 
       SportOne={Sports.Fut} 
       IconTwo={Icons.Volei} 
       SportTwo= {Sports.Volei} 
       ></SingleQuadra> : 
       <SingleQuadra 
          Id={quadraId}
          IconOne={Icons.Fut}
          SportOne={Sports.Fut}
          IconTwo={Icons.Bsqt}
          SportTwo={Sports.Bsqt} 
       ></SingleQuadra>}
    </>
  )
}

export default quadraId