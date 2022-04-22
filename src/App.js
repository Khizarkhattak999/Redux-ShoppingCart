import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import SignUp from "./pages/Signup";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
          <Route path="/details/:_id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
