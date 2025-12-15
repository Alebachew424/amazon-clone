// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// // import Landing from "./Pages/Landing/Landing";
// // import Signup from "./Pages/Auth/Signup";
// // import Payement from "./Pages/Payment/Payement";   // ✅ corrected spelling
// // import Orders from "./Pages/Orders/Orders";
// // import Cart from "./Pages/Cart/Cart";
// // import Results from "./Pages/Results/Results";

// // function Routing() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Landing />} />
// //         <Route path="/signup" 
// //         element={<Signup />} />
// //         <Route path="/payment" element={<Payement />} />   {/* ✅ corrected */}
// //         <Route path="/orders" element={<Orders />} />
// //         <Route path="/cart" element={<Cart />} />
// //         {/* <Route path ="/category/ :categoryname" element ={<Results />} /> */}

// //         {/* <Route path="/category/:categoryname" element={<Results />} /> */}

// //         <Route path="/results/:categoryname" element={<Results />} />


// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default Routing;



// // src/Router.jsx
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Landing from "./Pages/Landing/Landing";
// import Signup from "./Pages/Auth/Signup";
// import Payement from "./Pages/Payment/Payement";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/payment" element={<Payement />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/cart" element={<Cart />} />
//    <Route path="/products/:productId" element={<ProductDetail />} />


//         {/* ✅ IMPORTANT */}
//         <Route path="/category/:categoryname" element={<Results />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/Auth/Signup";
import Payement from "./Pages/Payment/Payement";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail"; // Make sure this is the correct path

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payement />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Product Details Route */}
        <Route path="/products/:productId" element={<ProductDetail />} /> {/* ✅ Product Detail */}

        {/* Category Results Route */}
        <Route path="/category/:categoryname" element={<Results />} /> {/* ✅ Category */}
      </Routes>
    </Router>
  );
}

export default Routing;
