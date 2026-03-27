import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((pValue) => pValue + 1)
  }

  const decrement = () => {
    setCount((pValue) => pValue - 1)
  }
  
  return (
    <div className="flex flex-col items-center border border-gray-300 w-70 py-12 rounded-lg shadow-lg gap-6">
        <h1 className="text-4xl">{count}</h1>
        <div className="space-x-4">
            <button className="text-2xl font-bold bg-red-500 py-1 px-6 rounded-lg" onClick={decrement}>-</button>
            <button className="text-2xl font-bold bg-green-500 py-1 px-6 rounded-lg" onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default Counter