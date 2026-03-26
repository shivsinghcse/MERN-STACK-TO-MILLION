import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
         <Navbar/>
         <div className='px-8'>
            <Outlet />
         </div>
    </>
  )
}

export default Layout