
// // src/Components/Header/Header.jsx
// import React from "react";
// import classes from "./Header.module.css";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import LowerHeader from "./LowerHeader";

// const Header = () => {
//   return (
//     <section className={classes.header_container}>
//       {/* Logo */}
//       <div className={classes.logo_container}>
//         <a href="#">
//           <img
//             src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//             alt="amazon logo"
//           />
//         </a>
//       </div>

//       {/* Delivery */}
//       <div className={classes.delivery}>
//         <span>
//           <SlLocationPin />
//         </span>
//         <div>
//           <p>Deliver to</p>
//           <span>Ethiopia</span>
//         </div>
//       </div>

//       {/* Search */}
//       <div className={classes.search}>
//         <select name="" id="">
//           <option value="">All</option>
//         </select>

//         <input type="text" placeholder="Search products" />

//         <BsSearch size={25} />
//       </div>

//       {/* Language */}
//       <div className={classes.order_container}>
//         <a href="" className={classes.language}>
//           <img
//             src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
//             alt=""
//           />
//         </a>

//         <select name="" id="">
//           <option value="">EN</option>
//         </select>
    

//       {/* Sign In */}
//       <a href="/signin">
//         <div>
//           <p>Hello, Sign In</p>
//           <span>Account & Lists</span>
//         </div>
//       </a>

//       {/* Orders */}
//       <a href="/orders">
//         <div>
//           <p>Returns</p>
//           <span>& Orders</span>
//         </div>
//       </a>

//       {/* Cart */}
//       <a href="/cart" className={classes.cart}>
//         <BiCart size={35} />

//         <span>0</span>
//       </a>
//       </div>
//       <LowerHeader />
//     </section>
//   );
// };

// export default Header;



// import React from "react";
// import classes from "./Header.module.css";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import LowerHeader from "./LowerHeader";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       {/* 🔹 Top Header */}
//       <section className={classes.header_container}>
//         {/* Logo */}
//         <div className={classes.logo_container}>
//           <a to="/">
//             <img
//               src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//               alt="amazon logo"
//             />
//           </a>
//         </div>

//         {/* Delivery */}
//         <div className={classes.delivery}>
//           <span>
//             <SlLocationPin />
//           </span>
//           <div>
//             <p>Deliver to</p>
//             <span>Ethiopia</span>
//           </div>
//         </div>

//         {/* Search */}
//         <div className={classes.search}>
//           <select>
//             <option value="">All</option>
//           </select>

//           <input type="text" placeholder="Search products" />

//           <BsSearch size={25} />
//         </div>

//         {/* Language */}
//         <div className={classes.order_container}>
//           <a className={classes.language}>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
//               alt="US flag"
//             />
//           </a>
//           <select>
//             <option value="">EN</option>
//           </select>
        

//         {/* Sign In */}
//         <a to="/signup" className={classes.link_box}>
//           <p>Hello, Sign In</p>
//           <span>Account & Lists</span>
//         </a>

//         {/* Orders */}
//         <a to="/orders" className={classes.link_box}>
//           <p>Returns</p>
//           <span>& Orders</span>
//         </a>

//         {/* Cart */}
//         <a to="/cart" className={classes.cart}>
//           <BiCart size={35} />
//           <span>0</span>
//         </a>
//         </div>
//       </section>

//       {/* 🔹 LOWER HEADER OUTSIDE */}
//       <LowerHeader />
//     </>
//   );
// };

// export default Header;


// import React from "react";
// import classes from "./Header.module.css";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import LowerHeader from "./LowerHeader";
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataProvider";

// const Header = () => {



//   const [{basket},dispatch]=useContext(DataContext)



//   return (
//     <>
//       <section className={classes.header_container}>

//         {/* Logo */}
//         <div className={classes.logo_container}>
//           <Link to="/">
//             <img
//               src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//               alt="amazon logo"
//             />
//           </Link>
//         </div>

//         {/* Delivery */}
//         <div className={classes.delivery}>
//           <span><SlLocationPin /></span>
//           <div>
//             <p>Deliver to</p>
//             <span>Ethiopia</span>
//           </div>
//         </div>

//         {/* Search */}
//         <div className={classes.search}>
//           <select>
//             <option value="">All</option>
//           </select>

//           <input type="text" placeholder="Search products" />
//           <BsSearch size={25} />
//         </div>

//         {/* Language */}
//         <div className={classes.order_container}>
//           <a className={classes.language}>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
//               alt="US flag"
//             />
//           </a>
//           <select>
//             <option value="">EN</option>
//           </select>

//           {/* Sign In */}
//           <Link to="/signup" className={classes.link_box}>
//             <p>Hello, Sign In</p>
//             <span>Account & Lists</span>
//           </Link>

//           {/* Orders */}
//           <Link to="/orders" className={classes.link_box}>
//             <p>Returns</p>
//             <span>& Orders</span>
//           </Link>

//           {/* Cart */}
//           <Link to="/cart" className={classes.cart}>
//             <BiCart size={35} />
//             <span>{basket.length}</span>
//           </Link>
//         </div>
//       </section>

//       {/* LOWER HEADER */}
//       <LowerHeader />
//     </>
//   );
// };

// export default Header;



// import React, { useContext } from "react";
// import classes from "./Header.module.css";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import LowerHeader from "./LowerHeader";
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataProvider";


// const Header = () => {
//   const [{ basket }] = useContext(DataContext); // ✅ fixed
//   const totalItem=basket?.reduce((amount,item)=>{
//     return item.amount + amount
//   },0)

//   return (
//         <section className={classes.fixed}>  
//       <section className={classes.header_container}>
//         <div className={classes.logo_container}>
//           <Link to="/">
//             <img
//               src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//               alt="amazon logo"
//             />
//           </Link>
//         </div>

//         <div className={classes.delivery}>
//           <span><SlLocationPin /></span>
//           <div>
//             <p>Deliver to</p>
//             <span>Ethiopia</span>
//           </div>
//         </div>

//         <div className={classes.search}>
//           <select>
//             <option value="">All</option>
//           </select>
//           <input type="text" placeholder="Search products" />
//           <BsSearch size={25} />
//         </div>

//         <div className={classes.order_container}>
//           <Link to="/cart" className={classes.cart}>
//             <BiCart size={35} />
//             <span>{totalItem}</span>
//           </Link>
//         </div>
//      </section>


//       <LowerHeader />
//     </section>
//   );
// };

// export default Header;


import React, { useContext } from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";              

const Header = () => {
  const [{user, basket }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>

        {/* LOGO */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
        </div>

        {/* DELIVERY */}
        <div className={classes.delivery}>
          <span><SlLocationPin /></span>
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* SEARCH */}
        <div className={classes.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search products" />
          <BsSearch size={38} />
        </div>

        {/* RIGHT SECTION */}
        <div className={classes.order_container}>

          {/* LANGUAGE */}
          <div className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US flag"
            />
            <select>
              <option value="EN">EN</option>
            </select>
          </div>

          {/* SIGN IN */}
          <Link to={!user && "/auth"} className={classes.link_box}>
          <div>
            {user ? (
              <>
              <p>Hello, {user ?.email?.split('@')[0]}</p>
                     <span onClick={() => auth.signOut()}>Sign Out</span>
              </>
              
            ):(
              <>
               <p>  Hello, Sign in</p>
                  <span>Account & Lists</span>
              </>
           )}
    
          </div>
          </Link>

          {/* ORDERS */}
          <Link to="/orders" className={classes.link_box}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* CART */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>

      {/* LOWER HEADER */}
      <LowerHeader />
    </section>
  );
};

export default Header;
