import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
   

      <div className="min-h-screen p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;