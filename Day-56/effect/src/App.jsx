import 'animate.css';
import { useEffect } from 'react';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    }, 2000)
  }, [])

  useEffect(()=>{
    setTimeout(()=>{
      setModal(true)
    }, 5000)
  }, [])
  
  const showAlert = () => {
    setShow(!show)
  }
  return (
    <div className='w-6/12 p-12 mx-auto mt-6'>
      {
        show &&
        <div className='text-lg bg-green-600 py-2 px-6 rounded-lg flex justify-between items-center animate__animated animate__backInDown'>
          <div>
            <strong>Success! </strong>
            your create operation is successfully performed
          </div>

          <button className='text-white cursor-pointer text-xl' onClick={() => setShow(false)}>
            <i className="ri-close-circle-line"></i>
          </button>
        </div>
      }
      <button className='border-0 bg-blue-500 text-white py-2 px-6 rounded-md mt-8' onClick={showAlert}>Toggle Message</button>

      {
        modal &&
        <div className='w-full h-full bg-black/40 fixed top-0 left-0 animate__animated animate__fadeIn'>
          <div className='animate__animated animate__zoomIn border border-gray-200 bg-white rounded-lg shadow-lg p-8 space-y-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-lg font-semibold'>Privacy Ploicy</h1>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo fuga eos reiciendis, nobis voluptatum laborum illum, temporibus modi voluptates, vitae nisi harum odio veritatis magni dolorum doloribus. Fugiat harum fuga rem, odit corrupti incidunt fugit quas animi, nisi debitis minus porro facere quidem doloremque tempora quasi aspernatur labore vero.</p>

            <button className='fixed top-3 right-3 hover:cursor-pointer' onClick={() => setModal(false)}>
              <i className='ri-close-circle-fill text-lg'></i>
            </button>
          </div>
        </div>
      }
    </div>

    
  )
}

export default App