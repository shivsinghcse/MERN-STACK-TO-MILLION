import axios from 'axios'
import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import moment from 'moment'
import { useState } from 'react'
import { useEffect } from 'react'

const env = import.meta.env
axios.defaults.baseURL = 'http://localhost:8080'


const App = () => {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [update, setUpdate] = useState(0)
  const [product, setProduct] = useState({
    title: '',
    price: '',
    discount: ''
  })

  useEffect(()=>{
    fecthProducts()
  }, [update])

  const handleChange = (e) => {
    const input = e.target
    const name = input.name 
    const value = input.value 

    setProduct({
      ...product,
      [name]: value
    })
  }

  const createProduct = async (e) => {
    try
    {
      e.preventDefault()
      await axios.post('/', product)
      setUpdate(update + 1)
      e.target.reset()
      setOpen(false)
    }
    catch(err)
    {
      console.log(err);
    }
  } 

  const fecthProducts = async () => {
    try
    {
      const {data} = await axios.get('/')
      setProducts(data)
    }
    catch(err)
    {
      console.log(err);
    }
  }

  const deleteProduct = async (id) => {
    try
    {
      await axios.delete(`/${id}`)
      setUpdate(update + 1)
    }
    catch(err)
    {
      console.log(err);
    }
  }

  return (
    <div className='bg-gray-200 h-screen w-full flex justify-center items-end overflow-hidden'>
      <div className='w-8/12 h-[80%] bg-white rounded-t-4xl animate__animated animate__bounceInUp shadow-lg shadow-blue-300 border-t border-t-32 border-t-blue-800 p-6 space-y-6'>
        <h1 className='text-4xl font-bold text-center text-orange-500 border-b border-gray-300 pb-6 text-shadow-md select-none'>Our Products</h1>

        <div className='flex justify-end mr'>
          <button className='text-lg font-medium border-none bg-blue-600 text-white py-2 px-5 rounded-md flex items-center gap-1 transition duration-300 active:scale-95 hover:cursor-pointer hover:bg-blue-500' onClick={() => setOpen(true)}>
            <i className='ri-add-line'></i>
            New Product 
          </button>
        </div>

        <div className='h-[80%] overflow-auto px-2'>
          <table className='w-full'>
            <thead>
              <tr className='bg-blue-600 text-white sticky top-0'>
                <th className='text-left pl-6 py-2'>Product</th>
                <th>MRP</th>
                <th>Discount</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                products.map((product) => {
                  return (
                    <tr className='border-b border-b-gray-300 text-center text-gray-600' key={product._id}>
                      <td className='pl-6 text-left py-2 capitalize'>{product.title}</td>
                      <td>₹{product.price}</td>
                      <td>{product.discount}%</td>
                      <td>₹{(product.price - (product.price * product.discount)/100).toFixed(2)}</td>
                      <td>{moment(product.createdAt).format('MMM DD YYYY hh:mm A')}</td>
                      <td className='space-x-2'>
                        <button className='bg-green-500 w-8 h-8 text-white rounded-full shadow hover:cursor-pointer hover:bg-green-600 transition duration-300 active:scale-95'>
                          <i className='ri-pencil-line'></i>
                        </button>
                        <button className='bg-rose-500 w-8 h-8 text-white rounded-full shadow hover:cursor-pointer hover:bg-rose-600 transition duration-300 active:scale-95' onClick={() => deleteProduct(product._id)}>
                          <i className='ri-delete-bin-3-line'></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>          
          </table>
        </div>
      </div>
        {
          open &&
          <div className='fixed top-0 left-0 bg-black/50 w-full h-full flex items-center justify-center animate__animated animate__fadIn'>
            <div className='relative w-[35%] py-4 p-8 bg-white shadow-lg rounded-lg space-y-6 animate__animated animate__zoomIn' >
                <h1 className='text-2xl font-semibold text-orange-500'>Add a new Product</h1>
                <form className='flex flex-col gap-5' onSubmit={createProduct}>
                  <input 
                    type="text" 
                    name='title'
                    placeholder='Enter product name'
                    onChange={handleChange}
                    required
                    className='border border-gray-300 py-2 px-3 rounded-md'
                  />

                  <input 
                    type="number" 
                    name='price'
                    placeholder='Enter price'
                    min={0}
                    onChange={handleChange}
                    required
                    className='border border-gray-300 py-2 px-3 rounded-md'
                  />

                  <input 
                    type="number" 
                    name='discount'
                    placeholder='Enter discount'
                    min={0}
                    max={100}
                    onChange={handleChange}
                    required
                    className='border border-gray-300 py-2 px-3 rounded-md'
                  />
                  
                  <button className='border-0 bg-orange-400 text-white text-lg font-medium py-2 px-6 w-fit rounded-md hover:cursor-pointer hover:bg-orange-500 transition active:scale-95'>Add Product</button>
                </form>

                <button className='text-xl absolute top-3 right-5 hover:cursor-pointer' onClick={() => setOpen(false)}>
                  <i className='ri-close-circle-fill'></i>
                </button>
            </div>
          </div>
        }
    </div>
  )
}

export default App