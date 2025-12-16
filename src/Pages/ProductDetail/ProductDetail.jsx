// // import React, { useEffect, useState } from "react";
// // import LayOut from "../../Componentes/LayOut/LayOut";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import { productURL } from "../../API/endPoint";
// // import ProductCard from "../../Componentes/Product/ProductCard";

// // function ProductDetail() {
// //   const { productId } = useParams();
// //   const [product, setProduct] = useState(null);

// //   useEffect(() => {
// //     axios
// //       .get(`${productURL}/products/${productId}`)
// //       .then((res) => {
// //         setProduct(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, [productId]);

// //   return (
// //     <LayOut>
// //       <ProductCard product={product} />
// //     </LayOut>
// //   );
// // }

// // export default ProductDetail;


// import React, { useEffect, useState } from "react";
// import LayOut from "../../Componentes/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productURL } from "../../API/endPoint";
// import ProductCard from "../../Componentes/Product/ProductCard";

// function ProductDetail() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${productURL}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, [productId]); // ✅ FIX 1

//   return (
//     <LayOut>
//       {product && <ProductCard product={product} />} {/* ✅ FIX 2 */}
//     </LayOut>
//   );
// }

// export default ProductDetail;


// import React, { useEffect, useState } from "react";
// import LayOut from "../../Componentes/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productURL } from "../../API/endPoint";
// import ProductCard from "../../Componentes/Product/ProductCard";

// function ProductDetail() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${productURL}/products/${productId}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <LayOut>
//       {product && <ProductCard products={product} />}
//     </LayOut>
//   );
// }

// export default ProductDetail;

import React, { useEffect, useState } from "react";
import LayOut from "../../Componentes/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productURL } from "../../API/endPoint";
import ProductCard from "../../Componentes/Product/ProductCard";
import Loader from "../../Componentes/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // ✅ FIX 1

  useEffect(() => {
    // setIsLoading(true);

    axios
      .get(`${productURL}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false); // ✅ FIX 2 (inside then)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // ✅ FIX 3 (inside catch)
      });
  }, []); // keeping as you requested

  return (
    // <LayOut>
    //   {isLoading && <Loader />}
    //   {product && <ProductCard products={product} />}
    //   flex={true}
    // </LayOut>

 <LayOut>
  {isLoading && <Loader />}
  {product && <ProductCard products={product} flex={true} renderDesc={true} renderAdd={true} />}
</LayOut>


  );
}

export default ProductDetail;
