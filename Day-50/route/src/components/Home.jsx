import { useState } from "react";

const Home = () => {
    let [show, setShow] = useState(true)
    
  return (
    <>
        <div>Home</div>
        <button onClick={() => setShow(!show)} className="border py-2 px-5">Toggle</button>
        {
            show &&
            <img src="/favicon.svg" width='500' />
        }

    </>
  )
}

export default Home