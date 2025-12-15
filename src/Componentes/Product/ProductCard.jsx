// import React from 'react';
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from './Product.module.css';

// function ProductCard({ products }) {
//   const { title, image, price, rating } = products;

//   return (
//     <div className={'${classes.card_container'}>
//       <a href="">
//         <img src={image} alt={title} />
//       </a>
//       <div>
//         <h3>{title}</h3>
//         <div className={classes.rating}>
//           {/* rating */}
//           <Rating value={rating.rate} precision={0.1} readOnly />
//           <small>{rating.count} reviews</small>
//         </div>
//         <div>
//           <CurrencyFormat amount={price} />
//         </div>
//         <button>Add to cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


// import React from 'react';
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from './Product.module.css';

// function ProductCard({ products }) {
//   const { title, image, price, rating } = products;

//   return (
//     <div className={classes.card_container}>
//       <a href="">
//         <img src={image} alt={title} />
//       </a>
//       <div>
//         <h3>{title}</h3>
//         <div className={classes.rating}>
//           <Rating value={rating.rate} precision={0.1} readOnly />
//           <small>{rating.count} reviews</small>
//         </div>
//         <div>
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={classes.button}>Add to cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ products }) {
  if (!products) return null;

  const { id, title, image, price, rating } = products;

  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>

        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0} reviews</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;


// import React from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./Product.module.css";
// import { Link } from "react-router-dom";

// function ProductCard({ products }) {
//   if (!products) return null;

//   const { id, title, image, price, rating } = products;

//   return (
//     <div className={classes.card_container}>
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>

//       <div>
//         <h3>{title}</h3>

//         <div className={classes.rating}>
//           <Rating value={rating?.rate || 0} precision={0.1} readOnly />
//           <small>{rating?.count || 0} reviews</small>
//         </div>

//         <CurrencyFormat amount={price} />
//         <button className={classes.button}>Add to cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
