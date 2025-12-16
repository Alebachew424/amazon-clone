// import React, { useContext } from 'react';
// import LayOut from '../../Componentes/LayOut/LayOut';
// import ProductCard from '../../Componentes/Product/ProductCard';
// import { DataContext } from '../../Componentes/DataProvider/DataProvider';

// function Cart() {
//   const [{ basket,user },dispatch] = useContext(DataContext);

//   return (
//     <LayOut>
//       <section>
//         <div>
//           Your Shopping basket
//           <hr />

//           {basket?.length === 0 ? (
//             <p>Opps! No item in your cart</p>
//           ) : (
//             basket?.map((item, i) => (
//               <ProductCard
//                 key={i}
//                 products={item}
//                 renderDesc={true}
//                 flex={true}
//               />
//             ))
//           )}
//         </div>

//         <div></div>
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;
// import React, { useContext } from "react";
// import LayOut from "../../Componentes/LayOut/LayOut";
// import ProductCard from "../../Componentes/Product/ProductCard";
// import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// import classes from "./Cart.module.css";

// function Cart() {
//   const [{ basket }] = useContext(DataContext);

//   return (
//     <LayOut>
//       <section className={classes.cart}>
//         <div>
// <h2>Your Shopping Basket</h2>
//         <hr />

//         {basket?.length === 0 ? (
//           <p>Oops! No items in your cart</p>
//         ) : (
//           basket?.map((item) => (
//             <ProductCard
//               key={item.id}
//               products={item}
//               renderDesc
//               renderAdd={false}
//               flex
//             />
//           ))
//         )}
//         </div>
        
//         <div></div>
//       </section>
//     </LayOut>
//   );
// }

// // export default Cart;
// import React, { useContext } from "react";
// import LayOut from "../../Componentes/LayOut/LayOut";
// import ProductCard from "../../Componentes/Product/ProductCard";
// import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// import classes from "./Cart.module.css";
// import CurrencyFormat from "../../Componentes/CurrencyFormat/CurrencyFormat";
// import { Link } from "react-router-dom";

// function Cart() {
//   const [{ basket }] = useContext(DataContext);

//   const total = basket.reduce(
//     (amount, item) => amount + item.price,
//     0
//   );

//   return (
//     <LayOut>
//       <section className={classes.cart} className={classes.container}>
//         <div className={classes.cart_container}>
//           <h2>Your Shopping Basket</h2>
//           <hr />

//           {basket?.length === 0 ? (
//             <p>Oops! No items in your cart</p>
//           ) : (
//             basket?.map((item) => (
//               <ProductCard
//                 key={item.id}
//                 products={item}
//                 renderDesc
//                 renderAdd={false}
//                 flex
//               />
//             ))
//           )}
//         </div>

//         {basket?.length !== 0 && (
//           <div>
//             <div className={classes.subtotal}>
//               <p>Subtotal ({basket.length} items)</p>
//               <CurrencyFormat amount={total} />
//             </div>

//             <span>
//               <input type="checkbox" />
//               <small>This order contains a gift</small>
//             </span>

//             <Link to="/payments">Continue to checkout</Link>
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;
import React, { useContext } from "react";
import LayOut from "../../Componentes/LayOut/LayOut";
import ProductCard from "../../Componentes/Product/ProductCard";
import { DataContext } from "../../Componentes/DataProvider/DataProvider";
import classes from "./Cart.module.css";
import CurrencyFormat from "../../Componentes/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

function Cart() {
  const [{ basket }] = useContext(DataContext);

  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount ,
    0
  );

  return (
    <LayOut>
      <section className={`${classes.cart} ${classes.container}`}>
        {/* LEFT SIDE */}
        <div className={classes.cart_container}>
          <h2>Your Shopping Basket</h2>
          <hr />

          {basket?.length === 0 ? (
            <p>Oops! No items in your cart</p>
          ) : (
            basket.map((item) => (
              <ProductCard
                key={item.id}
                products={item}
                renderDesc
                renderAdd={false}
                flex
              />
            ))
          )}
        </div>

        {/* RIGHT SIDE */}
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
