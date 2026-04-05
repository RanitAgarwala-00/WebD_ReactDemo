

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Products from "./Products";
import Contact from "./Contact";

function App() {
  return (

    <BrowserRouter>

      <Navbar />


      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/products" element={<Products />} />
        <Route path="/contact"  element={<Contact />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;