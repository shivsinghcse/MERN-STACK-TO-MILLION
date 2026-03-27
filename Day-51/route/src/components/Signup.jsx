import { useState } from "react"

const Signup = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForm =(e) => {
    e.preventDefault()
    const payload = {
      fullname,
      email,
      password
    }

    console.log(payload)
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-120 border border-gray-300 rounded-lg py-4 px-8 bg-white shadow-lg space-y-8">
        <h1 className="text-2xl font-semibold">Register Now</h1>
        <form className="flex flex-col gap-5" onSubmit={handleForm}>
          <input 
            type="text"
            name="fullname"
            placeholder="Enter fullname"
            className="border border-gray-300 py-1 px-3 rounded"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />

          <input 
            type="email"
            name="email"
            placeholder="Enter email"
            className="border border-gray-300 py-1 px-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input 
            type="password"
            name="password"
            placeholder="Enter password"
            className="border border-gray-300 py-1 px-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-indigo-500 text-white text-lg font-semibold py-2 px-6 w-fit rounded-md hover:cursor-pointer">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup