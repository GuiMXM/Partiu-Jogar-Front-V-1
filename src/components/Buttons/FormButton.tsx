import React, { useCallback, useRef } from 'react'
import Modals, { ModalHandles } from '../Modals'


type Props = {}

const FormButton = (props: Props) => {
    const modalRef = useRef<ModalHandles>(null)
  const handleOpenModal = useCallback(()=>{
      modalRef.current?.openModal()
  },[])

  return (
    <>
      <div className='flex place-content-center bg-gray-200  w-[360px] h-10  rounded-md hover:bg-white duration-300 cursor-pointer ' onClick={handleOpenModal}>

          <input type="button"  className='text-blue-600 hover:text-blue-600 bg-transparent font-semi-bold cursor-pointer ' onClick={handleOpenModal}value="Confirmar"></input>
       </div>
      <Modals ref={modalRef}/>
    </>
  )
}

export default FormButton