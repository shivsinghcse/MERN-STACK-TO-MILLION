import "font-awesome/css/font-awesome.min.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from "./components/NotFound"
import Home from "./components/Home"
import Login from './components/Login'
import Signup from "./components/Signup"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App