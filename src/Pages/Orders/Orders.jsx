// // Pages/Orders/Orders.jsx - CORRECT VERSION
// import React,{use, UseCotext} from "react";
// import Layout from "../../Componentes/Layout/Layout";
// import { useLocation } from "react-router-dom";
// import {db} from "../../API/firebase";
// import classes from "./Orders.module.css";
// import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// import ProductCard from "../../Componentes/Product/ProductCard";

// // ✅ Method 1: Regular function with export default
// function Orders() {
//      const [{user},dispatch] = UseCotext(DataContext); 
//      const [orders,setOrders] = useState([]);
//      useEffect(() => {
//     if (user) {
//     db.collection('users')
//       .doc(user?.uid)
//       .collection('orders').orderBy('created','desc')
//       .onSnapshot((snapshot) => {
//         console.log(snapshot);
//         setOrders(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//           }))
//         );
//       });
//     } else {
//       setOrders([]);
//     }
    
//     return (
//         <Layout>
//             <section className={classes.container}>
//               <div className={classes.orders_container}>
//                 <h2>Your Orders</h2>
//                 {/* order items */}
//                 {orders?.map((eachorders) ,i) => (
//                   return(
//                     <div>
//                       <hr />
//                       <p> Order ID :{eachorders.id}</p>
//                       {
//                         eachorders.data.basket.map((order)=>(
//                           <ProductCard 
//                           flex ={true}
//                           product={order}
//                           key={order.id}
//                           />
//                         )))
//                       }
//                     </div>
//                   )
//               </div>
//             </section>
//         </Layout>
//     );
// }

// export default Orders; // ✅ THIS LINE IS CRITICAL

// // ✅ Method 2: Export default directly
// // export default function Orders() { ... }


import React, { useState, useEffect, useContext } from "react";
import Layout from "../../Componentes/LayOut/LayOut";
import { useLocation } from "react-router-dom";
import { db } from "../../Utility/firebase"; // Changed from API/firebase to Utility/firebase
import classes from "./Orders.module.css";
import { DataContext } from "../../Componentes/DataProvider/DataProvider";
import ProductCard from "../../Componentes/Product/ProductCard";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";

function Orders() {
    const [{ user }] = useContext(DataContext); // Fixed spelling: useContext not UseCotext
    const [orders, setOrders] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        if (user) {
            // Create reference to user's orders
            const ordersRef = collection(db, "users", user.uid, "orders");
            const q = query(ordersRef, orderBy("timestamp", "desc")); // Use timestamp instead of created
            
            // Listen for real-time updates
            const unsubscribe = onSnapshot(q, (snapshot) => {
                console.log("Orders snapshot:", snapshot);
                const ordersData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }));
                setOrders(ordersData);
            });
            
            // Cleanup subscription
            return () => unsubscribe();
        } else {
            setOrders([]);
        }
    }, [user]);
    
    return (
        <Layout>
            <section className={classes.container}>
                <div className={classes.orders_container}>
                    <h2>Your Orders</h2>
                    
                    {/* Show message from navigation if exists */}
                    {location.state?.msg && (
                        <div style={{
                            background: '#d4edda',
                            color: '#155724',
                            padding: '15px',
                            borderRadius: '8px',
                            marginBottom: '20px'
                        }}>
                            <h3> {location.state.msg}</h3>
                            {location.state.paymentId && (
                                <p><strong>Order ID:</strong> {location.state.paymentId}</p>
                            )}
                            {location.state.orderAmount && (
                                <p><strong>Amount:</strong> ${location.state.orderAmount}</p>
                            )}
                        </div>
                    )}
                    
                    {/* Show orders or empty state */}
                    {orders.length > 0 ? (
                        orders.map((eachOrder, index) => (
                            <div key={eachOrder.id} className={classes.order_item}>
                                <hr />
                                <div className={classes.order_header}>
                                    <p><strong>Order ID:</strong> {eachOrder.id}</p>
                                    <p><strong>Date:</strong> {new Date(eachOrder.data.timestamp?.toDate() || eachOrder.data.created).toLocaleDateString()}</p>
                                    <p><strong>Total:</strong> ${eachOrder.data.amountInDollars || (eachOrder.data.amount / 100).toFixed(2)}</p>
                                    <p><strong>Status:</strong> <span className={classes.status}>{eachOrder.data.status || "Completed"}</span></p>
                                </div>
                                
                                <div className={classes.order_products}>
                                    <h4>Items in this order:</h4>
                                    {eachOrder.data.basket?.map((product) => (
                                        <ProductCard 
                                            key={product.id}
                                            products={product} // Changed from product to products
                                            flex={true}
                                            renderAdd={false}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={classes.empty_orders}>
                            <h3>No orders yet</h3>
                            <p>Your orders will appear here after you make a purchase.</p>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default Orders;