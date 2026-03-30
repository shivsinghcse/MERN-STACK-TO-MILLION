import 'remixicon/fonts/remixicon.css'
import 'animate.css';

const Modal = ({children, title, openModal=true, close, footer}) => {
  return (
    <>
        {
            openModal &&
            <div className="fixed top-0 left-0 bg-black/60 w-full h-screen flex justify-center items-center animate__animated animate__fadeIn">
                <div className="relative border border-gray-200 w-6/12 p-8 bg-white shadow-lg rounded-lg space-y-4 animate__animated animate__zoomIn">
                    <h1 className="text-lg font-semibold">{title || 'Modal Title'}</h1>

                    <div className="text-gray-500">
                        {children || 'Content goes here...'}
                    </div>
                    {
                        footer &&

                        <div className="text-gray-500">
                            footer goes here
                        </div>
                    }

                    <button className="text-xl absolute top-2 right-3" onClick={close}>
                        <i className="ri-close-circle-fill"></i>
                    </button>


                </div>
            
            </div>
        }
    </>
  )
}

export default Modal