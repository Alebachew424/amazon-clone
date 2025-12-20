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
// import React from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./Product.module.css";
// import { Link } from "react-router-dom";
// import { TbMapPinX } from "react-icons/tb";
// import { DataContext } from "../DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";

// function ProductCard({ products,flex,renderDesc }) {
//   if (!products) return null;

//   const { id, title, image, price, rating,description } = products;




//   const {state,dispatch}=useContext(DataContext)

//   console.log(state)
//   const addToCart=()=>{
//     dispatch({
//       type:Type.ADD_TO_BASKET,
//       item :{
//         image,title,id,rating,price,description
//       }
//     })

//   }

//   return (
//     // <div className={classes.card_container} ${flex ? classs.product_flexed:''}>
//     <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>

//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>

//       <div>
//         <h3>{title}</h3>

//       {
//           renderDesc && <div style={{ maxWidth: "750px" }}
// > {description} </div>
//       }

//         <div className={classes.rating}>
//           <Rating value={rating?.rate || 0} precision={0.1} readOnly />
//           <small>{rating?.count || 0} reviews</small>
//         </div>

//         <div>
//           <CurrencyFormat amount={price} />
//         </div>

//         <button className={classes.button} onClick={addToCart} >Add to cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


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


import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ products, flex, renderDesc,renderAdd }) {
  if (!products) return null;

  const { id, title, image, price, rating, description } = products;
  const [state, dispatch] = useContext(DataContext); //fixed

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { id, title, image, price, rating, description },
    });
  };

  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flexed : ""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>

        {renderDesc && (
          <div style={{ maxWidth: "750px" }}>{description}</div>
        )}

        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0} reviews</small>
        </div>

        <CurrencyFormat amount={price} />
{
  renderAdd && <button className={classes.button} onClick={addToCart}>
          Add to cart
        </button>
}
        {/* <button className={classes.button} onClick={addToCart}>
          Add to cart
        </button> */}
      </div>
    </div>
  );
}

export default ProductCard;
