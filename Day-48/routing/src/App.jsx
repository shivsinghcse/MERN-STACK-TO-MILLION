import Home from "./components/Home";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import { BrowserRouter, Route, Routes } from "react-router";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
