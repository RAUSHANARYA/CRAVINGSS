import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import { Toaster } from "react-hot-toast";

import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import RestaurantDashboard from "./pages/Dashboard/RestaurantDashboard";
import RiderDashboard from "./pages/Dashboard/RiderDashboard";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Toaster />
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            <Route
              path="/restaurant-dashboard"
              element={<RestaurantDashboard />}
            />

            <Route path="/rider-dashboard" element={<RiderDashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
