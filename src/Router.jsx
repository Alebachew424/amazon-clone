import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/Auth/Signup";
import Payement from "./Pages/Payment/Payement";   // ✅ corrected spelling
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payement />} />   {/* ✅ corrected */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
