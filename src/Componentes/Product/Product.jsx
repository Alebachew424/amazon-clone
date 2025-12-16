// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';

// function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         console.log(res.data);      // log the data
//         setProducts(res.data);      // save products in state
//       })
//       .catch((err) => {
//         console.error(err);         // handle errors
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((item) => (
//             return <ProductCard products={item}  key={item.id}/>
//         })

//       </ul>
//     </div>
//   );
// }

// export default Product;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import classes from './Product.module.css';

// function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         console.log(res.data);
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div className={classes .product_container  }>
//       <h1>Products</h1>
//       <ul>
//         {products?.map((item) => (
//           <ProductCard products={item} key={item.id} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Product;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import classes from './Product.module.css';
// import Loader from '../Loader/Loader';

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false); //  REQUIRED

//   useEffect(() => {
//     // setIsLoading(true); //  NOW VALID

//     axios
//       .get('https://fakestoreapi.com/products')
//       .then((res) => {
//         setProducts(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className={classes.product_container}>
//           <h1>Products</h1>
//           {products.map((item) => (
//             <ProductCard renderAdd={true} products={item} key={item.id} />
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default Product;


import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.product_container}>
          <h1>Products</h1>

          {/* 🔍 SEARCH INPUT */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={classes.search}
          />

          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              products={item}
              renderAdd={true}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Product;
