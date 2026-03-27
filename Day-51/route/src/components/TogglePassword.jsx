import { useState } from "react"

const TogglePassword = () => {
    const [type, setType] = useState('password')
    return (
        <>
            <div className="border w-70 flex items-center gap-1 pr-2 rounded-md focus-within:outline focus-within:outline-1 focus-within:outline-gray-600">
                <input 
                    type={type}
                    name="password"
                    placeholder="********"
                    className="w-full py-2 px-4 focus:outline-none text-base"
                />
                {
                    type === 'password' ?
                    <button className="hover:cursor-pointer h-8 w-8 hover:bg-gray-300 rounded-full">
                        <i className="fa fa-eye" onClick={() => setType('text')} ></i>
                    </button>
                    :
                    <button className="hover:cursor-pointer h-8 w-8 hover:bg-gray-300 rounded-full">
                        <i className="fa fa-eye-slash" onClick={() => setType('password')}></i>
                    </button>
                }
            </div>
        </>
    )
}

export default TogglePassword