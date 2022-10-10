
import Dialog from '@mui/material/Dialog';
import { useState, forwardRef, useCallback, useImperativeHandle} from 'react'


type Props = {
  open:any
}
export interface ModalHandles{
  openModal:()=>void
}
const Modals: React.ForwardRefRenderFunction <ModalHandles> = ({}:{}, ref:any) => {

  const [visible,setVisible] = useState<boolean>(false)

  const openModal = useCallback(()=>{
    setVisible(true)
  },[])
  
  useImperativeHandle(ref,():any => {
    return {openModal}
  })

  const handleCloseModal = useCallback(()=>{
    setVisible(false)
  },[])

   return (
    <>

    <Dialog 
    open={visible}
    onClose={handleCloseModal}
    maxWidth="xl"
     >
     

     
     
     <div className=' w-[80vw] h-[90vh] z-10 '>
        {/* X close div */}
        <div onClick={handleCloseModal} className="cursor-pointer relative w-[78vw]  ">
          <div className='absolute w-1.5 h-6 bg-black rounded-md rotate-45 right-0 top-2'></div>
          <div className='absolute w-1.5 h-6 bg-black rounded-md -rotate-45 right-0 top-2'></div>
        </div>


        <div className='flex flex-col items-center justify-evenly h-[80vh]'>
          <h1 className='text-6xl text-blue-500 tracking-wide font-semibold'>Parabéns</h1>
          <p className='text-xl tracking-wide'>Sua conta foi criada com sucesso</p>
          <img src="../icons/success.jpg" alt="success" className='w-1/6'/>
        </div>
      </div>
        




    </Dialog>
    
    </>
  )
}

export default forwardRef(Modals)

