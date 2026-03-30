import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Button from "./Button"

const Drawer = ({children, title, openDrawer=true, close}) => {
    
  return (
    <div 
        className='w-1/2 p-8 shadow-lg bg-white border-l border-gray-300 h-full  overflow-hidden z-[10000] fixed top-0  space-y-4' 
        style={{
            right: openDrawer ? 0 : '-50%',
            transition: '0.3s'
        }}
    >
        <h1 className="text-lg font-semibold">{title || 'Drawer Title'}</h1>
        <div className="border-b border-gray-200 -mx-8"/>
        <div className="text-gray-500">{children || 'Content goes here...'}</div>
        <button className="absolute top-2 right-3 text-2xl" title="close" onClick={close}>
            <i className="ri-close-circle-fill"></i>
        </button>
    </div>
  )
}

export default Drawer