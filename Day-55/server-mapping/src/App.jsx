import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products')
    setProducts(data)
  }
  return (
    <div className="w-10/12 m-auto p-8">
      <div className='grid grid-cols-4 gap-10'>
        {
          products.map((product) => {
            return (
              <div key={product.id} className='border border-gray-300 rounded-md shadow-lg p-2'>
                <img src={product.image} alt={`product${product.id}`} className='w-full h-55 object-cover'/>
                <h1 className='my-2 text-base font-medium'>{product.title}</h1>
                <p className='font-medium'>₹ {product.price.toFixed(2)}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App