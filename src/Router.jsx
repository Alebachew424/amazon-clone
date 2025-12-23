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

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Landing from "./Pages/Landing/Landing";
// import Payement from "./Pages/Payment/Payement";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail"; // Make sure this is the correct path
// import Auth from "./Pages/Auth/Auth";

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/payment" element={<Payement />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/cart" element={<Cart />} />
//         {/* <Route path ="/products/:productId" element={<ProductDetail />} /> */}
        
//         {/* Product Details Route */}
//         <Route path="/products/:productId" element={<ProductDetail />} /> {/* ✅ Product Detail */}

//         {/* Category Results Route */}
//         <Route path="/category/:categoryname" element={<Results />} /> {/* ✅ Category */}
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;


// import { Routes, Route } from "react-router-dom";

// import Landing from "./Pages/Landing/Landing";
// import Payement from "./Pages/Payment/Payement";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
// import Auth from "./Pages/Auth/Auth";

// import {CheckoutProvider} from '@stripe/react-stripe-js/checkout';
// import {loadStripe} from '@stripe/stripe-js';
// import { Stripe } from './../node_modules/@stripe/stripe-js/dist/stripe-js/stripe.d';



// const stripePromise = loadStripe('pk_test_51Sgmwp75gTfyRzTxZIgHqv1HFV0lZjlN5d6ZFiKLsQhDOj7xvrblWbdFQKHry11aDf3dQp48IdUmn27Z9jfzLKF100DFlsRg9L');


// function Routing() {
//   return (
//     <Routes>
//       <Route path="/" element={<Landing />} />
//    <Route path="/auth" element={<Auth />} />
//       <Route path="/payment" element={
        
//         <Element Stripe={stripePromise}> <Payement /></Element>
//         } />
//       <Route path="/orders" element={<Orders />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/products/:productId" element={<ProductDetail />} />
//       <Route path="/category/:categoryname" element={<Results />} />
//     </Routes>
//   );
// }
// export default Routing;


import { Routes, Route } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js'; // FIXED: Import Elements
import { loadStripe } from '@stripe/stripe-js';

import Landing from "./Pages/Landing/Landing";
import Payement from "./Pages/Payment/Payement";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Auth from "./Pages/Auth/Auth";

// Load Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51Sgmwp75gTfyRzTxZIgHqv1HFV0lZjlN5d6ZFiKLsQhDOj7xvrblWbdFQKHry11aDf3dQp48IdUmn27Z9jfzLKF100DFlsRg9L');

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route 
        path="/payment" 
        element={
          <Elements stripe={stripePromise}> {/* FIXED: Wrap with Elements, not Element */}
            <Payement />
          </Elements>
        } 
      />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/category/:categoryname" element={<Results />} />
    </Routes>
  );
}

export default Routing;