// import React from 'react'
// import LayOut from '../../Componentes/LayOut/LayOut'

// function Results() {
//   return (
//    <LayOut>
//      <div>
//    Results   
//     </div>
//    </LayOut>
//   )
// }

// export default Results

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import LayOut from '../../Componentes/LayOut/LayOut'
// import axios from axios;

// function Results() {
//   const { categoryname } = useParams(); // ⬅ Get dynamic part from URL
//   const {results,setResults}=useState([]);
//   useEffect(()=>{
//     axios.get ('${productURL}/products/category/${categoryname}')
//   .then((res)=>{
//     console.log(res)
//     setResults(res.data)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

//   }, [])
// console.log(categoryname);

//   return (
//     <LayOut>
//       <div>
//         <h1>Results for: {categoryname}</h1>
//       </div>
//     </LayOut>
//   )
// }

// export default Results


// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import LayOut from '../../Componentes/LayOut/LayOut'
// import axios from "axios";

// const productURL = "http://localhost:5000"; // <-- change to your API

// function Results() {
//   const { categoryname } = useParams();
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${productURL}/products/category/${categoryname}`)
//       .then((res) => {
//         console.log(res.data);
//         setResults(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [categoryname]);

//   return (
//     <LayOut>
//       <section>
//  <div>
//         <h1>Results for: {categoryname}</h1>

//         <div>
//           {results.length === 0 ? (
//             <p>No products found.</p>
//           ) : (
//             results.map((item, index) => (
//               <div key={index}>
//                 <h3>{item.title}</h3>
//                 <img src={item.image} alt={item.title} width="150" />
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       </section>
     
//     </LayOut>
//   );
// }

// export default Results;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import LayOut from "../../Componentes/LayOut/LayOut";
// import { productURL } from "../../API/endPoint"; // ✅ CHECK NAME CAREFULLY

// function Results() {
//   const { categoryname } = useParams();
//   const decodedCategory = decodeURIComponent(categoryname);

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);

//     axios
//       .get(`${productURL}/products/category/${decodedCategory}`)
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Failed to load products");
//         setLoading(false);
//       });
//   }, [decodedCategory]);

//   return (
//     <LayOut>
//       <div style={{ padding: "20px" }}>
//         <h2>{decodedCategory}</h2>

//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
//           {!loading &&
//             products.map((product) => (
//               <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
//                 <img src={product.image} alt={product.title} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
//                 <h4>{product.title}</h4>
//                 <p>${product.price}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </LayOut>
//   );
// }

// export default Results;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import LayOut from "../../Componentes/LayOut/LayOut";
// import { productURL } from "../../API/endPoint";

// function Results() {
//   const { categoryname } = useParams();
//   const decodedCategory = decodeURIComponent(categoryname);  // ✅ Decode the category name

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     setError(false);

//     axios
//       .get(`${productURL}/products/category/${decodedCategory}`)
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(true);
//         setLoading(false);
//       });
//   }, [decodedCategory]);

//   return (
//     <LayOut>
//       <section style={{ padding: "20px" }}>
//         <h2>Category: {decodedCategory}</h2>

//         {loading && <p>Loading products...</p>}
//         {error && <p>Failed to load products.</p>}

//         {!loading && products.length === 0 && !error && (
//           <p>No products found for this category.</p>
//         )}

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//             gap: "20px",
//             marginTop: "20px",
//           }}
//         >
//           {products.map((item) => (
//             <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "6px" }}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: "100%", height: "200px", objectFit: "contain" }}
//               />
//               <h4>{item.title}</h4>
//               <p>${item.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Results;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LayOut from "../../Componentes/LayOut/LayOut";
import { productURL } from "../../API/endPoint";
import Loader from "../../Componentes/Loader/Loader"; // ✅ added

function Results() {
  const { categoryname } = useParams();
  const decodedCategory = decodeURIComponent(categoryname);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // setLoading(true);
    // setError(false);

    axios
      .get(`${productURL}/products/category/${decodedCategory}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [decodedCategory]);

  return (
    <LayOut>
      <section style={{ padding: "20px" }}>
        <h2>Category: {decodedCategory}</h2>

        {loading && <Loader />} {/* ✅ loading added */}

        {error && <p>Failed to load products.</p>}

        {!loading && products.length === 0 && !error && (
          <p>No products found for this category.</p>
        )}

        {!loading && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "6px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
