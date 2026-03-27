import { useState } from "react"


const Input = () => {
    const [fullname, setFullname] = useState('')
  return (
    <div>
        <input 
            type="text"
            name="fullname"
            placeholder="Enter your fullname..."
            className="py-1 px-3 border rounded"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
        />
        <h1 className="text-2xl font-bold">{fullname}</h1>
    </div>
  )
}

export default Input