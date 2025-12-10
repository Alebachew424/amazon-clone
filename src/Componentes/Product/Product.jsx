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


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={classes.product_container}>
      <h1>Products</h1>
      {/* remove <ul>, just render cards directly */}
      {products?.map((item) => (
        <ProductCard products={item} key={item.id} />
      ))}
    </div>
  );
}

export default Product;
