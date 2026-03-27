const env = import.meta.env;
import axios from 'axios'
import { useState } from 'react';
axios.defaults.baseURL = env.VITE_SERVER


const App = () => {
  const [result, setResult] = useState('Your encrypted string goes here')
  const [data, setData] = useState('')
  
  const generate = async (e) => {
    try
    {
      e.preventDefault()
      const payload = e.target.data.value
      
      const {data: {encryptedData}} = await axios.post('/', {data: payload})
      setResult(encryptedData)
    }
    catch(err)
    {
      alert(err.response? err.response.data.message : err.message)
    }
  }

  const reset = () => {
    setResult('Your encrypted string goes here')
    setData('')
  }
  return (
    <>
      <div className="bg-gray-200 h-screen flex justify-center items-center shadow-xl">
        <div className="bg-white w-100  rounded-lg p-8 space-y-8">
            <h1 className="text-2xl font-bold text-center">Bcrypt Generator</h1>
            <form className="flex flex-col gap-4" onSubmit={generate}>
              <input 
                type="text" 
                className="border border-gray-300 p-2 rounded" 
                placeholder="Enter string here"
                name='data'
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
              <div className='space-x-4'>
                <button className="py-2 px-6 border-0 rounded bg-[dodgerblue] text-white font-semibold w-fit hover:cursor-pointer transition active:scale-95">Generate</button>
                <button 
                  onClick={reset}
                  type='button' 
                  className="py-2 px-6 border-0 rounded bg-rose-500 text-white font-semibold w-fit hover:cursor-pointer transition active:scale-95"
                >Reset</button>
              </div>
            </form>

            <div className="bg-green-600 py-2 px-4 rounded text-white break-all">
              {result}
            </div>
        </div>
      </div>
    </>
  )
}

export default App