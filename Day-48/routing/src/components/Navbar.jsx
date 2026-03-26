import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className='flex justify-around items-center border border-gray-200 border-t-0 rounded-2xl my-8 shadow-2xl bg-white'>
            <Link className='text-xl font-semibold py-3 text-indigo-600 hover:cursor-pointer hover:underline underline-offset-8 transition duration-300 decoration-green-600 hover:text-green-600' to='/'>Home</Link>
            <Link className='text-xl font-semibold py-3 text-indigo-600 hover:cursor-pointer hover:underline underline-offset-8 transition duration-300 decoration-green-600 hover:text-green-600' to='/livebatch'>Live Batch</Link>
            <Link className='text-xl font-semibold py-3 text-indigo-600 hover:cursor-pointer hover:underline underline-offset-8 transition duration-300 decoration-green-600 hover:text-green-600' to='/pricing'>Pricing</Link>
            <Link className='text-xl font-semibold py-3 text-indigo-600 hover:cursor-pointer hover:underline underline-offset-8 transition duration-300 decoration-green-600 hover:text-green-600' to='/tutorial'>Tutorial</Link>
            <Link className='text-xl font-semibold py-3 text-indigo-600 hover:cursor-pointer hover:underline underline-offset-8 transition duration-300 decoration-green-600 hover:text-green-600' to='/login'>Login</Link>
        </nav>  
    )
}

export default Navbar