const env = import.meta.env;
import axios from 'axios'
axios.defaults.baseURL = env.VITE_SERVER
const App = () => {

  const generate = async (e) => {
    try
    {
      e.preventDefault()
      const payload = e.target.data.value
      const result = document.getElementById('result')
      
      const {data: {encryptedData}} = await axios.post('/', {data: payload})
      result.innerText = encryptedData
    }
    catch(err)
    {
      alert(err.response? err.response.data.message : err.message)
    }
  }

  const reset = () => {
    const result = document.getElementById('result')
    const input = document.getElementById('form').data
    
    result.innerText = "Your encrypted string goes here"
    input.value = ''
  }
  return (
    <>
      <div className="bg-gray-200 h-screen flex justify-center items-center shadow-xl">
        <div className="bg-white w-100  rounded-lg p-8 space-y-8">
            <h1 className="text-2xl font-bold text-center">Bcrypt Generator</h1>
            <form className="flex flex-col gap-4" onSubmit={generate} id='form'>
              <input 
                type="text" 
                className="border border-gray-300 p-2 rounded" 
                placeholder="Enter string here"
                name='data'
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

            <div className="bg-green-600 py-2 px-4 rounded text-white break-all" id='result'>
              Your encrypted string goes here
            </div>
        </div>
      </div>
    </>
  )
}

export default App