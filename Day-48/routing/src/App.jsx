import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home"
import Pricing from "./components/Pricing"
import LiveBatches from "./components/LiveBatches"
import Tutorial from "./components/Tutorial"
import Login from './components/Login'

import './index.css'
import Navbar from './components/Navbar'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/livebatch' element={<LiveBatches/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/tutorial' element={<Tutorial/>}/>
            <Route path='/login' element={<Login/>}/>
          </Route>
          
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 