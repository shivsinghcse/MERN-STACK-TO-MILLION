import { useState } from "react"

const ToggleLoader = () => {
    const [loader, setLoader] = useState(true)

    const handleLoader = () => {
        setLoader((pvalue) => !pvalue)

        // const x =setTimeout(()=>{
        //     setLoader(false)
        // }, 5000)
        // console.log(x);
    }
  return (
    <div className="">
        {
            loader &&
            <i className="fa fa-spinner fa-spin !text-4xl"></i>
        }
        <br />
        <button className="bg-indigo-600 text-white py-2 px-6 mt-4 rounded-md " onClick={handleLoader}>Toggle</button>
    </div>
  )
}

export default ToggleLoader