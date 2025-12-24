

// // import React, { useContext } from "react";
// // import classes from "./Payement.module.css";
// // import Layout from "../../Componentes/Layout/Layout";
// // import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// // import ProductCard from "../../Componentes/Product/ProductCard";

// // function Payment() {
// //     const [{ user, basket }] = useContext(DataContext);
    
// //     console.log("Payment - Basket:", basket);
    
// //     // Calculate item count
// //     const itemCount = basket?.reduce((count, item) => {
// //         return count + (item.amount || 1);
// //     }, 0) || 0;
    
// //     // If basket is empty
// //     if (!basket || basket.length === 0) {
// //         return (
// //             <Layout>
// //                 <div className={classes.payment__header}>
// //                     Checkout (0) items
// //                 </div>
                
// //                 <section className={classes.payment}>
// //                     {/* address */}
// //                     <div className={classes.flex}>
// //                         <h3>Delivery Address</h3>
// //                         <div>
// //                             <div>{user?.email || "Guest"}</div>
// //                             <div>123 React Lane</div>
// //                             <div>Chicago, IL</div>
// //                         </div>
// //                     </div>
// //                     <hr />
                    
// //                     {/* Empty basket message */}
// //                     <div className={classes.flex}>
// //                         <h3>Review items and delivery</h3>
// //                         <div style={{ 
// //                             padding: '40px', 
// //                             textAlign: 'center',
// //                             color: '#666',
// //                             backgroundColor: '#f9f9f9',
// //                             borderRadius: '8px',
// //                             marginTop: '20px'
// //                         }}>
// //                             <p style={{ fontSize: '18px', marginBottom: '10px' }}>
// //                                 🛒 Your basket is empty
// //                             </p>
// //                             <p>Add items to your basket to proceed with checkout.</p>
// //                         </div>
// //                     </div>
// //                     <hr />
                    
// //                     {/* card form */}
// //                     <div className={classes.flex}>
// //                         <h3>Payment Method</h3>
// //                         <div>
// //                             {/* stripe magic will go */}
// //                         </div>
// //                     </div>
// //                 </section>
// //             </Layout>
// //         );
// //     }
    
// //     return (
// //         <Layout>
// //             {/* header */}
// //             <div className={classes.payment__header}>
// //                 Checkout ({itemCount}) items
// //             </div>
            
// //             {/* payment method */}
// //             <section className={classes.payment}>
// //                 {/* address */}
// //                 <div className={classes.flex}>
// //                     <h3>Delivery Address</h3>
// //                     <div>
// //                         <div>{user?.email || "Guest"}</div>
// //                         <div>123 React Lane</div>
// //                         <div>Chicago, IL</div>
// //                     </div>
// //                 </div>
// //                 <hr />
                
// //                 {/* product - FIXED: Using correct prop name "products" */}
// //                 <div className={classes.flex}>
// //                     <h3>Review items and delivery</h3>
// //                     <div>
// //                         {basket.map((item) => (
// //                             <ProductCard 
// //                                 key={item.id} 
// //                                 products={item} 
// //                                 flex={true}
// //                                 renderDesc={true}
// //                                 renderAdd={false}
// //                             />
// //                         ))}
// //                     </div>
// //                 </div>
// //                 <hr />
                
// //                 {/* card form */}
// //                 <div className={classes.flex}>
// //                     <h3>Payment Method</h3>
// //                     <div>
// //                         {/* stripe magic will go */}
// //                     </div>
// //                 </div>
// //             </section>
// //         </Layout>
// //     );
// // }

// // export default Payment;


// // import React, { useContext,useState } from "react";
// // import classes from "./Payement.module.css";
// // import Layout from "../../Componentes/Layout/Layout";
// // import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// // import ProductCard from "../../Componentes/Product/ProductCard";
// // import {useStripe, useElement,CardElement} from '@stripe/react-stripe-js';
// // import CurrencyFormat from "../../Componentes/CurrencyFormat/CurrencyFormat";

// // function Payment() {
// //     const [{ user, basket }] = useContext(DataContext);
    
// //     // Debug logs
// //     console.log("User:", user);
// //     console.log("Basket:", basket);
    
// //     // Calculate total items
// //     const totalItem = basket?.reduce((count, item) => {
// //         return count + (item.amount || 1);
// //     }, 0) || 0;

// //      const total = basket.reduce(
// //     (amount, item) => amount + item.price * item.amount,
// //     0
// //   );
// //     const [cardError,setCardError]=useState();
// //     const stripe=useStripe();
// //     const element=useElement();
// //     const handleChange= (e)=>{
// //         console.log(e);

// //         e.error?.message? setCardError(e?.error?.message:''):setCardError('');
// //     }

// //     return (
// //         <Layout>
// //             {/* header */}
// //             <div className={classes.payment__header}>
// //                 Checkout ({totalItem}) items
// //             </div>
            
// //             {/* payment method */}
// //             <section className={classes.payment}>
// //                 {/* address */}
// //                 <div className={classes.flex}>
// //                     <h3>Delivery Address</h3>
// //                     <div>
// //                         <div>{user?.email || "Guest"}</div>
// //                         <div>123 React Lane</div>
// //                         <div>Chicago, IL</div>
// //                     </div>
// //                 </div>
// //                 <hr />
                
// //                 {/* product */}
// //                 <div className={classes.flex}>
// //                     <h3>Review items and delivery</h3>
// //                     <div>
// //                         {basket && basket.length > 0 ? (
// //                             basket.map((item) => (
// //                                 <ProductCard 
// //                                     key={item.id} 
// //                                     products={item} 
// //                                     flex={true} 
// //                                 />
// //                             ))
// //                         ) : (
// //                             <div style={{ 
// //                                 padding: '40px', 
// //                                 textAlign: 'center',
// //                                 color: '#666',
// //                                 backgroundColor: '#f9f9f9',
// //                                 borderRadius: '8px'  // ✅ FIXED: Added comma above this line
// //                             }}>
// //                                 <p style={{ fontSize: '18px', marginBottom: '10px' }}>
// //                                     🛒 Your basket is empty
// //                                 </p>
// //                                 <p>Add items to your basket to proceed with checkout.</p>
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>
// //                 <hr />
                
// //                 {/* card form */}
// //                 <div className={classes.flex}>
// //                     <h3>Payment Method</h3>
// //                     <div className={classes.payment__card_container}>
// //                         {/* stripe magic will go */}
// //                         <div className={classes.payment_details}>
// //                             <form action="">
// //                                 {/* error */}
// //                                 {cardError && <small style={{ color: 'red' }}>{cardError}</small>}
// //                                 {/* card element */}
// //                                 <CardElement onChange={handleChange} />

// //                                    {/* price */}
                                   
// //                                 <div className={classes.payment__price}>                                  <div>
// //                                         <span style={{ display: "flex", gap: "10px" }}>
// //                                             <p> Total order</p> | <CurrencyFormat amount={total} />
// //                                         </span>
// //                                     </div>
// //                                     <button>Pay Now</button>
// //                                 </div>
// //                             </form>
                            
// //                              </div>
                            
// //                             <p>Stripe payment integration will be added here</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>
// //         </Layout>
// //     );
// // }

// // export default Payment;



// // import React, { useContext, useState } from "react";
// // import classes from "./Payement.module.css";
// // import Layout from "../../Componentes/Layout/Layout";
// // import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// // import ProductCard from "../../Componentes/Product/ProductCard";
// // import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// // import CurrencyFormat from "../../Componentes/CurrencyFormat/CurrencyFormat";
// // import {axiosinstance} from '../../API/axios';

// // function Payment() {
// //     const [{ user, basket }] = useContext(DataContext);
    
// //     // Debug logs
// //     console.log("User:", user);
// //     console.log("Basket:", basket);
    
// //     // Calculate total items
// //     const totalItem = basket?.reduce((count, item) => {
// //         return count + (item.amount || 1);
// //     }, 0) || 0;

// //     // Calculate total price - FIXED: Added optional chaining
// //     const total = basket?.reduce((amount, item) => 
// //         amount + item.price * (item.amount || 1), 0) || 0;

// //     const [cardError, setCardError] = useState('');
// //     const [processing, setProcessing] = useState(false);
// //     const stripe = useStripe();
// //     const elements = useElements(); // FIXED: useElements (not useElement)

// //     const handleChange = (e) => {
// //         console.log("Card change:", e);
// //         setCardError(e.error?.message || '');
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         try {
// //             // Create PaymentIntent on the backend
// //             const response = await axiosinstance(
// //                 {
// //                     method: 'post',
// //                     url: `/payments/create?total=${Math.round(total * 100)}`, // amount in cents
// //                 } 
           
// //             });
// //                console.log(response.data

// // // step1
// //         //backend || functions ----->contact to the clients  secret
// //         // step2,,, cliant saide(react side confirmation)
// //         // step 3,,, after the confirmation--->order firestore database BiSave,clear basket
        
// //         if (!stripe || !elements) {
// //             console.error("Stripe not loaded");
// //             return;
// //         }

// //         setProcessing(true);
// //         console.log("Processing payment for amount:", total);

// //         // Here you would:
// //         // 1. Call your backend to create PaymentIntent
// //         // 2. Use stripe.confirmCardPayment()
// //         // 3. Handle success/error

// //         setProcessing(false);
// //     };

// //     return (
// //         <Layout>
// //             {/* header */}
// //             <div className={classes.payment__header}>
// //                 Checkout ({totalItem}) items
// //             </div>
            
// //             {/* payment method */}
// //             <section className={classes.payment}>
// //                 {/* address */}
// //                 <div className={classes.flex}>
// //                     <h3>Delivery Address</h3>
// //                     <div>
// //                         <div>{user?.email || "Guest"}</div>
// //                         <div>123 React Lane</div>
// //                         <div>Chicago, IL</div>
// //                     </div>
// //                 </div>
// //                 <hr />
                
// //                 {/* product */}
// //                 <div className={classes.flex}>
// //                     <h3>Review items and delivery</h3>
// //                     <div>
// //                         {basket && basket.length > 0 ? (
// //                             basket.map((item) => (
// //                                 <ProductCard 
// //                                     key={item.id} 
// //                                     products={item} 
// //                                     flex={true} 
// //                                 />
// //                             ))
// //                         ) : (
// //                             <div style={{ 
// //                                 padding: '40px', 
// //                                 textAlign: 'center',
// //                                 color: '#666',
// //                                 backgroundColor: '#f9f9f9',
// //                                 borderRadius: '8px'
// //                             }}>
// //                                 <p style={{ fontSize: '18px', marginBottom: '10px' }}>
// //                                     🛒 Your basket is empty
// //                                 </p>
// //                                 <p>Add items to your basket to proceed with checkout.</p>
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>
// //                 <hr />
                
// //                 {/* card form */}
// //                 <div className={classes.flex}>
// //                     <h3>Payment Method</h3>
// //                     <div className={classes.payment__card_container}>
// //                         <div className={classes.payment_details}>
// //                             <form onSubmit={handleSubmit}>
// //                                 {/* error */}
// //                                 {cardError && (
// //                                     <div style={{ color: 'red', marginBottom: '10px' }}>
// //                                         <small>{cardError}</small>
// //                                     </div>
// //                                 )}
                                
// //                                 {/* card element */}
// //                                 <div style={{ 
// //                                     padding: '15px', 
// //                                     border: '1px solid #ddd', 
// //                                     borderRadius: '4px',
// //                                     marginBottom: '20px'
// //                                 }}>
// //                                     <CardElement 
// //                                         onChange={handleChange}
// //                                         options={{
// //                                             style: {
// //                                                 base: {
// //                                                     fontSize: '16px',
// //                                                     color: '#424770',
// //                                                     '::placeholder': {
// //                                                         color: '#aab7c4',
// //                                                     },
// //                                                 },
// //                                                 invalid: {
// //                                                     color: '#9e2146',
// //                                                 },
// //                                             },
// //                                         }}
// //                                     />
// //                                 </div>

// //                                 {/* price and button */}
// //                                 <div className={classes.payment__price}>
// //                                     <div>
// //                                         <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
// //                                             <p style={{ margin: 0 }}><strong>Total Order:</strong></p>
// //                                             <CurrencyFormat amount={total} />
// //                                         </span>
// //                                     </div>
// //                                     <button 
// //                                         type="submit"
// //                                         disabled={!stripe || processing || basket?.length === 0}
// //                                         style={{
// //                                             padding: '15px 30px',
// //                                             background: basket?.length > 0 ? '#f0c14b' : '#ccc',
// //                                             border: '1px solid #a88734',
// //                                             borderRadius: '4px',
// //                                             fontSize: '16px',
// //                                             cursor: basket?.length > 0 ? 'pointer' : 'not-allowed',
// //                                             width: '100%',
// //                                             marginTop: '20px'
// //                                         }}
// //                                     >
// //                                         {processing ? "Processing..." : `Pay ${total > 0 ? `$${total.toFixed(2)}` : ''}`}
// //                                     </button>
// //                                 </div>
// //                             </form>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>
// //         </Layout>
// //     );
// // }

// // export default Payment;

// // import React, { useContext, useState } from "react";
// // import classes from "./Payement.module.css";
// // import Layout from "../../Componentes/Layout/Layout";
// // import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// // import ProductCard from "../../Componentes/Product/ProductCard";
// // import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// // import CurrencyFormat from "../../Componentes/CurrencyFormat/CurrencyFormat";
// // import axiosinstance from '../../API/axios'; // Fixed import
// // import { db } from "../../Utility/firebase";

// // function Payment() {
// //     const [{ user, basket }, dispatch] = useContext(DataContext);
    
// //     // Debug logs
// //     console.log("User:", user);
// //     console.log("Basket:", basket);
    
// //     // Calculate total items
// //     const totalItem = basket?.reduce((count, item) => {
// //         return count + (item.amount || 1);
// //     }, 0) || 0;

// //     // Calculate total price
// //     const total = basket?.reduce((amount, item) => 
// //         amount + item.price * (item.amount || 1), 0) || 0;

// //     const [cardError, setCardError] = useState('');
// //     const [processing, setProcessing] = useState(false);
// //     const stripe = useStripe();
// //     const elements = useElements();

// //     const handleChange = (e) => {
// //         console.log("Card change:", e);
// //         setCardError(e.error?.message || '');
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         if (!stripe || !elements) {
// //             console.error("Stripe not loaded");
// //             return;
// //         }

// //         setProcessing(true);
// //         setCardError('');

// //         try {
// //             // Step 1: Create PaymentIntent using axiosinstance
// //             console.log("Creating payment intent for amount:", total);
            
// //             // IMPORTANT: Check which backend is running
// //             // Option A: If using Express backend (http://localhost:5000)
// //             // Option B: If using Firebase Functions (http://127.0.0.1:5001/e-clone-64975/us-central1/api)
            
// //             // Test which backend is available
// //             console.log("Using axiosinstance baseURL:", axiosinstance.defaults.baseURL);
            
// //             const response = await axiosinstance.post('/payments/create', { 
// //                 total: total // Send dollars, backend converts to cents
// //             });
            
// //             console.log("Payment intent response:", response.data);
            
// //             const { clientSecret } = response.data;
            
// //             if (!clientSecret) {
// //                 throw new Error("No client secret received from server");
// //             }

// //             // Step 2: Client-side confirmation
// //             const result = await stripe.confirmCardPayment(clientSecret, {
// //                 payment_method: {
// //                     card: elements.getElement(CardElement),
// //                     billing_details: {
// //                         email: user?.email,
// //                         name: user?.displayName || "Customer",
// //                     },
// //                 },
// //             });

// //             console.log("Payment confirmation result:", result);

// //             // Step 3: Handle the result
// //             if (result.error) {
// //                 setCardError(result.error.message);
// //                 console.error("Payment failed:", result.error);
// //             } else if (result.paymentIntent.status === 'succeeded') {
// //                 console.log("Payment succeeded! PaymentIntent ID:", result.paymentIntent.id);
                
// //                 // Clear basket
// //                 dispatch({ type: "EMPTY_BASKET" });
                
// //                 // Show success message
// //                 alert("Payment successful! Your order has been placed.");







// //                 //order frestore database save ,clear basket 

// //                 await db.collection('users').doc(user?.uid).collection('orders').doc(result.paymentIntent.id).set({
// //                     basket:basket,
// //                     amount:result.paymentIntent.amount,
// //                     created:result.paymentIntent.created,
// //                 });
// //             }
// //         } catch (error) {
// //             console.error("Payment processing error:", error);
            
// //             // Show detailed error
// //             if (error.response) {
// //                 // The request was made and the server responded with a status code
// //                 console.error("Server responded with error:", error.response.data);
// //                 console.error("Status:", error.response.status);
// //                 setCardError(`Server error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
// //             } else if (error.request) {
// //                 // The request was made but no response was received
// //                 console.error("No response received:", error.request);
// //                 setCardError("No response from server. Make sure your backend is running.");
// //             } else {
// //                 // Something happened in setting up the request
// //                 setCardError(error.message || "An error occurred during payment");
// //             }
// //         } finally {
// //             setProcessing(false);
// //         }
// //     };

// //     return (
// //         <Layout>
// //             {/* header */}
// //             <div className={classes.payment__header}>
// //                 Checkout ({totalItem}) items
// //             </div>
            
// //             {/* payment method */}
// //             <section className={classes.payment}>
// //                 {/* address */}
// //                 <div className={classes.flex}>
// //                     <h3>Delivery Address</h3>
// //                     <div>
// //                         <div>{user?.email || "Guest"}</div>
// //                         <div>123 React Lane</div>
// //                         <div>Chicago, IL</div>
// //                     </div>
// //                 </div>
// //                 <hr />
                
// //                 {/* product */}
// //                 <div className={classes.flex}>
// //                     <h3>Review items and delivery</h3>
// //                     <div>
// //                         {basket && basket.length > 0 ? (
// //                             basket.map((item) => (
// //                                 <ProductCard 
// //                                     key={item.id} 
// //                                     products={item} 
// //                                     flex={true} 
// //                                 />
// //                             ))
// //                         ) : (
// //                             <div style={{ 
// //                                 padding: '40px', 
// //                                 textAlign: 'center',
// //                                 color: '#666',
// //                                 backgroundColor: '#f9f9f9',
// //                                 borderRadius: '8px'
// //                             }}>
// //                                 <p style={{ fontSize: '18px', marginBottom: '10px' }}>
// //                                     🛒 Your basket is empty
// //                                 </p>
// //                                 <p>Add items to your basket to proceed with checkout.</p>
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>
// //                 <hr />
                
// //                 {/* card form */}
// //                 <div className={classes.flex}>
// //                     <h3>Payment Method</h3>
// //                     <div className={classes.payment__card_container}>
// //                         <div className={classes.payment_details}>
// //                             <form onSubmit={handleSubmit}>
// //                                 {/* error */}
// //                                 {cardError && (
// //                                     <div style={{ 
// //                                         color: 'red', 
// //                                         marginBottom: '10px',
// //                                         padding: '10px',
// //                                         backgroundColor: '#ffe6e6',
// //                                         borderRadius: '4px'
// //                                     }}>
// //                                         <small><strong>Error:</strong> {cardError}</small>
// //                                     </div>
// //                                 )}
                                
// //                                 {/* Debug info */}
// //                                 <div style={{ 
// //                                     fontSize: '12px',
// //                                     color: '#666',
// //                                     padding: '10px',
// //                                     backgroundColor: '#f0f0f0',
// //                                     borderRadius: '4px',
// //                                     marginBottom: '10px'
// //                                 }}>
// //                                     <p>Backend URL: {axiosinstance.defaults.baseURL}/payments/create</p>
// //                                     <p>Total amount: ${total} (${Math.round(total * 100)} cents)</p>
// //                                 </div>
                                
// //                                 {/* card element */}
// //                                 <div style={{ 
// //                                     padding: '15px', 
// //                                     border: '1px solid #ddd', 
// //                                     borderRadius: '4px',
// //                                     marginBottom: '20px',
// //                                     backgroundColor: 'white'
// //                                 }}>
// //                                     <CardElement 
// //                                         onChange={handleChange}
// //                                         options={{
// //                                             style: {
// //                                                 base: {
// //                                                     fontSize: '16px',
// //                                                     color: '#424770',
// //                                                     '::placeholder': {
// //                                                         color: '#aab7c4',
// //                                                     },
// //                                                 },
// //                                                 invalid: {
// //                                                     color: '#9e2146',
// //                                                 },
// //                                             },
// //                                         }}
// //                                     />
// //                                 </div>

// //                                 {/* price and button */}
// //                                 <div className={classes.payment__price}>
// //                                     <div style={{ 
// //                                         display: "flex", 
// //                                         justifyContent: "space-between",
// //                                         alignItems: "center",
// //                                         marginBottom: '15px'
// //                                     }}>
// //                                         <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
// //                                             Total Order:
// //                                         </p>
// //                                         <CurrencyFormat amount={total} />
// //                                     </div>
// //                                     <button 
// //                                         type="submit"
// //                                         disabled={!stripe || processing || basket?.length === 0}
// //                                         style={{
// //                                             padding: '15px 30px',
// //                                             background: basket?.length > 0 && !processing ? '#f0c14b' : '#ccc',
// //                                             border: '1px solid #a88734',
// //                                             borderRadius: '4px',
// //                                             fontSize: '16px',
// //                                             cursor: basket?.length > 0 && !processing ? 'pointer' : 'not-allowed',
// //                                             width: '100%',
// //                                             marginTop: '10px',
// //                                             fontWeight: 'bold'
// //                                         }}
// //                                     >
// //                                         {processing ? (
// //                                             <>
// //                                                 <span style={{ marginRight: '8px' }}>⏳</span>
// //                                                 Processing...
// //                                             </>
// //                                         ) : (
// //                                             `Pay $${total > 0 ? total.toFixed(2) : '0.00'}`
// //                                         )}
// //                                     </button>
// //                                     <p style={{
// //                                         fontSize: '12px',
// //                                         color: '#666',
// //                                         marginTop: '10px',
// //                                         textAlign: 'center'
// //                                     }}>
// //                                         Test card: 4242 4242 4242 4242
// //                                     </p>
// //                                 </div>
// //                             </form>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>
// //         </Layout>
// //     );
// // }

// // export default Payment;


// import React, { useContext, useState } from "react";
// import classes from "./Payement.module.css";
// import Layout from "../../Componentes/Layout/Layout";
// import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// import ProductCard from "../../Componentes/Product/ProductCard";
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import CurrencyFormat from "../../Componentes/CurrencyFormat/CurrencyFormat";
// import axiosinstance from '../../API/axios';
// import { db } from "../../Utility/firebase";
// import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore methods
// import { useNavigate } from "react-router-dom";

// function Payment() {
//     const [{ user, basket }, dispatch] = useContext(DataContext);
    
//     // Debug logs
//     console.log("User:", user);
//     console.log("Basket:", basket);
    
//     // Calculate total items
//     const totalItem = basket?.reduce((count, item) => {
//         return count + (item.amount || 1);
//     }, 0) || 0;

//     // Calculate total price
//     const total = basket?.reduce((amount, item) => 
//         amount + item.price * (item.amount || 1), 0) || 0;

//     const [cardError, setCardError] = useState('');
//     const [processing, setProcessing] = useState(false);
//     const stripe = useStripe();
//     const elements = useElements();

//    const navigate = useNavigate();

//     const handleChange = (e) => {
//         console.log("Card change:", e);
//         setCardError(e.error?.message || '');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!stripe || !elements) {
//             console.error("Stripe not loaded");
//             return;
//         }

//         setProcessing(true);
//         setCardError('');

//         try {
//             // Step 1: Create PaymentIntent
//             console.log("Creating payment intent for amount:", total);
            
//             const response = await axiosinstance.post('/payments/create', { 
//                 total: total // Send dollars, backend converts to cents
//             });
            
//             console.log("Payment intent response:", response.data);
            
//             const { clientSecret } = response.data;
            
//             if (!clientSecret) {
//                 throw new Error("No client secret received from server");
//             }

//             // Step 2: Client-side confirmation
//             const result = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: elements.getElement(CardElement),
//                     billing_details: {
//                         email: user?.email,
//                         name: user?.displayName || "Customer",
//                     },
//                 },
//             });

//             console.log("Payment confirmation result:", result);

//             // Step 3: Handle the result
//             if (result.error) {
//                 setCardError(result.error.message);
//                 console.error("Payment failed:", result.error);
//             } else if (result.paymentIntent.status === 'succeeded') {
//                 console.log("Payment succeeded! PaymentIntent ID:", result.paymentIntent.id);
                
//                 // Step 4: Save order to Firestore
//                 if (user && db) {
//                     try {
//                         const orderData = {
//                             basket: basket.map(item => ({
//                                 id: item.id,
//                                 title: item.title,
//                                 price: item.price,
//                                 amount: item.amount || 1,
//                                 image: item.image,
//                                 rating: item.rating
//                             })),
//                             amount: result.paymentIntent.amount, // Amount in cents
//                             amountInDollars: (result.paymentIntent.amount / 100).toFixed(2), // For display
//                             created: new Date(result.paymentIntent.created * 1000).toISOString(), // Convert timestamp
//                             timestamp: serverTimestamp(), // Firestore server timestamp
//                             paymentIntentId: result.paymentIntent.id,
//                             status: 'completed',
//                             customerEmail: user.email,
//                             customerId: user.uid,
//                             shippingAddress: {
//                                 email: user.email,
//                                 address: "123 React Lane",
//                                 city: "Chicago, IL"
//                             }
//                         };

//                         console.log("Saving order to Firestore:", orderData);
                        
//                         // Save to Firestore
//                         await setDoc(
//                             doc(db, "users", user.uid, "orders", result.paymentIntent.id),
//                             orderData
//                         );
                        
//                         console.log("✅ Order saved to Firestore successfully!");
//                     } catch (firestoreError) {
//                         console.error("❌ Firestore save error:", firestoreError);
//                         // Don't fail the payment if Firestore save fails
//                         alert("Payment succeeded, but there was an issue saving order details.");
//                     }
//                 } else {
//                     console.warn("User not logged in or Firestore not initialized");
//                 }
                
//                 // Step 5: Clear basket
//                 dispatch({ type: "EMPTY_BASKET" });
                
//                 // Step 6: Show success message
//                 alert("Payment successful! Your order has been placed.");
                
//                 // Optional: Redirect to orders page
//                 // setTimeout(() => {
//                 //     window.location.href = "/orders";
//                 // }, 2000);
//             }

//            navigate('/orders', { 
//     state: { 
//         msg: "You have placed a new order!",
//         paymentId: result.paymentIntent.id, // Useful for order lookup
//         orderAmount: (result.paymentIntent.amount / 100).toFixed(2) // Display amount
//     }
// });
//  } catch (error) {
//             console.error("Payment processing error:", error);
            
//             // Show detailed error
//             if (error.response) {
//                 console.error("Server responded with error:", error.response.data);
//                 console.error("Status:", error.response.status);
//                 setCardError(`Server error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
//             } else if (error.request) {
//                 console.error("No response received:", error.request);
//                 setCardError("No response from server. Make sure your backend is running.");
//             } else {
//                 setCardError(error.message || "An error occurred during payment");
//             }
//         } finally {
//             setProcessing(false);
//         }
//     };

//     return (
//         <Layout>
//             {/* header */}
//             <div className={classes.payment__header}>
//                 Checkout ({totalItem}) items
//             </div>
            
//             {/* payment method */}
//             <section className={classes.payment}>
//                 {/* address */}
//                 <div className={classes.flex}>
//                     <h3>Delivery Address</h3>
//                     <div>
//                         <div>{user?.email || "Guest"}</div>
//                         <div>123 React Lane</div>
//                         <div>Chicago, IL</div>
//                     </div>
//                 </div>
//                 <hr />
                
//                 {/* product */}
//                 <div className={classes.flex}>
//                     <h3>Review items and delivery</h3>
//                     <div>
//                         {basket && basket.length > 0 ? (
//                             basket.map((item) => (
//                                 <ProductCard 
//                                     key={item.id} 
//                                     products={item} 
//                                     flex={true} 
//                                 />
//                             ))
//                         ) : (
//                             <div style={{ 
//                                 padding: '40px', 
//                                 textAlign: 'center',
//                                 color: '#666',
//                                 backgroundColor: '#f9f9f9',
//                                 borderRadius: '8px'
//                             }}>
//                                 <p style={{ fontSize: '18px', marginBottom: '10px' }}>
//                                     🛒 Your basket is empty
//                                 </p>
//                                 <p>Add items to your basket to proceed with checkout.</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <hr />
                
//                 {/* card form */}
//                 <div className={classes.flex}>
//                     <h3>Payment Method</h3>
//                     <div className={classes.payment__card_container}>
//                         <div className={classes.payment_details}>
//                             <form onSubmit={handleSubmit}>
//                                 {/* error */}
//                                 {cardError && (
//                                     <div style={{ 
//                                         color: 'red', 
//                                         marginBottom: '10px',
//                                         padding: '10px',
//                                         backgroundColor: '#ffe6e6',
//                                         borderRadius: '4px'
//                                     }}>
//                                         <small><strong>Error:</strong> {cardError}</small>
//                                     </div>
//                                 )}
                                
//                                 {/* card element */}
//                                 <div style={{ 
//                                     padding: '15px', 
//                                     border: '1px solid #ddd', 
//                                     borderRadius: '4px',
//                                     marginBottom: '20px',
//                                     backgroundColor: 'white'
//                                 }}>
//                                     <CardElement 
//                                         onChange={handleChange}
//                                         options={{
//                                             style: {
//                                                 base: {
//                                                     fontSize: '16px',
//                                                     color: '#424770',
//                                                     '::placeholder': {
//                                                         color: '#aab7c4',
//                                                     },
//                                                 },
//                                                 invalid: {
//                                                     color: '#9e2146',
//                                                 },
//                                             },
//                                         }}
//                                     />
//                                 </div>

//                                 {/* price and button */}
//                                 <div className={classes.payment__price}>
//                                     <div style={{ 
//                                         display: "flex", 
//                                         justifyContent: "space-between",
//                                         alignItems: "center",
//                                         marginBottom: '15px'
//                                     }}>
//                                         <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
//                                             Total Order:
//                                         </p>
//                                         <CurrencyFormat amount={total} />
//                                     </div>
//                                     <button 
//                                         type="submit"
//                                         disabled={!stripe || processing || basket?.length === 0}
//                                         style={{
//                                             padding: '15px 30px',
//                                             background: basket?.length > 0 && !processing ? '#f0c14b' : '#ccc',
//                                             border: '1px solid #a88734',
//                                             borderRadius: '4px',
//                                             fontSize: '16px',
//                                             cursor: basket?.length > 0 && !processing ? 'pointer' : 'not-allowed',
//                                             width: '100%',
//                                             marginTop: '10px',
//                                             fontWeight: 'bold'
//                                         }}
//                                     >
//                                         {processing ? (
//                                             <>
//                                                 <span style={{ marginRight: '8px' }}>⏳</span>
//                                                 Processing...
//                                             </>
//                                         ) : (
//                                             `Pay $${total > 0 ? total.toFixed(2) : '0.00'}`
//                                         )}
//                                     </button>
//                                     <p style={{
//                                         fontSize: '12px',
//                                         color: '#666',
//                                         marginTop: '10px',
//                                         textAlign: 'center'
//                                     }}>
//                                         Test card: 4242 4242 4242 4242 | Exp: 12/34 | CVC: 123
//                                     </p>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </Layout>
//     );
// }

// export default Payment;



// import React, { useContext, useState } from "react";
// import classes from "./Payement.module.css";
// import Layout from "../../Componentes/Layout/Layout";
// import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// import ProductCard from "../../Componentes/Product/ProductCard";
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import CurrencyFormat from "../../Componentes/CurrencyFormat/CurrencyFormat";
// import axiosinstance from '../../API/axios';
// import { db } from "../../Utility/firebase";
// import { doc, setDoc, serverTimestamp } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// function Payment() {
//     const [{ user, basket }, dispatch] = useContext(DataContext);
//     const navigate = useNavigate();
    
//     // Debug logs
//     console.log("User:", user);
//     console.log("Basket:", basket);
    
//     // Calculate total items
//     const totalItem = basket?.reduce((count, item) => {
//         return count + (item.amount || 1);
//     }, 0) || 0;

//     // Calculate total price
//     const total = basket?.reduce((amount, item) => 
//         amount + item.price * (item.amount || 1), 0) || 0;

//     const [cardError, setCardError] = useState('');
//     const [processing, setProcessing] = useState(false);
//     const stripe = useStripe();
//     const elements = useElements();

//     const handleChange = (e) => {
//         console.log("Card change:", e);
//         setCardError(e.error?.message || '');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!stripe || !elements) {
//             console.error("Stripe not loaded");
//             return;
//         }

//         setProcessing(true);
//         setCardError('');

//         try {
//             // Step 1: Create PaymentIntent
//             console.log("Creating payment intent for amount:", total);
            
//             const response = await axiosinstance.post('/payments/create', { 
//                 total: total // Send dollars, backend converts to cents
//             });
            
//             console.log("Payment intent response:", response.data);
            
//             const { clientSecret } = response.data;
            
//             if (!clientSecret) {
//                 throw new Error("No client secret received from server");
//             }

//             // Step 2: Client-side confirmation
//             const result = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: elements.getElement(CardElement),
//                     billing_details: {
//                         email: user?.email,
//                         name: user?.displayName || "Customer",
//                     },
//                 },
//             });

//             console.log("Payment confirmation result:", result);

//             // Step 3: Handle the result
//             if (result.error) {
//                 setCardError(result.error.message);
//                 console.error("Payment failed:", result.error);
//             } else if (result.paymentIntent.status === 'succeeded') {
//                 console.log("Payment succeeded! PaymentIntent ID:", result.paymentIntent.id);
                
//                 // Step 4: Save order to Firestore
//                 if (user && db) {
//                     try {
//                         const orderData = {
//                             basket: basket.map(item => ({
//                                 id: item.id,
//                                 title: item.title,
//                                 price: item.price,
//                                 amount: item.amount || 1,
//                                 image: item.image,
//                                 rating: item.rating
//                             })),
//                             amount: result.paymentIntent.amount, // Amount in cents
//                             amountInDollars: (result.paymentIntent.amount / 100).toFixed(2), // For display
//                             created: new Date(result.paymentIntent.created * 1000).toISOString(), // Convert timestamp
//                             timestamp: serverTimestamp(), // Firestore server timestamp
//                             paymentIntentId: result.paymentIntent.id,
//                             status: 'completed',
//                             customerEmail: user.email,
//                             customerId: user.uid,
//                             shippingAddress: {
//                                 email: user.email,
//                                 address: "123 React Lane",
//                                 city: "Chicago, IL"
//                             }
//                         };

//                         console.log("Saving order to Firestore:", orderData);
                        
//                         // Save to Firestore
//                         await setDoc(
//                             doc(db, "users", user.uid, "orders", result.paymentIntent.id),
//                             orderData
//                         );
                        
//                         console.log("✅ Order saved to Firestore successfully!");
//                     } catch (firestoreError) {
//                         console.error("❌ Firestore save error:", firestoreError);
//                         // Don't fail the payment if Firestore save fails
//                         alert("Payment succeeded, but there was an issue saving order details.");
//                     }
//                 } else {
//                     console.warn("User not logged in or Firestore not initialized");
//                 }
                
//                 // Step 5: Clear basket
//                 dispatch({ type: "EMPTY_BASKET" });
                
//                 // Step 6: Show success message
//                 alert("Payment successful! Your order has been placed.");
                
//                 // Step 7: Navigate to orders page
//                 navigate('/orders', { 
//                     state: { 
//                         msg: "You have placed a new order!",
//                         paymentId: result.paymentIntent.id,
//                         orderAmount: (result.paymentIntent.amount / 100).toFixed(2)
//                     }
//                 });
                
//                 // Return to prevent further execution
//                 return;
//             }


//             //empty the basket after ordered

//             dispatch({ type:Type.EMPTY_BASKET });



//         } catch (error) {
//             console.error("Payment processing error:", error);
            
//             // Show detailed error
//             if (error.response) {
//                 console.error("Server responded with error:", error.response.data);
//                 console.error("Status:", error.response.status);
//                 setCardError(`Server error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
//             } else if (error.request) {
//                 console.error("No response received:", error.request);
//                 setCardError("No response from server. Make sure your backend is running.");
//             } else {
//                 setCardError(error.message || "An error occurred during payment");
//             }
//         } finally {
//             setProcessing(false);
//         }
//     };

//     return (
//         <Layout>
//             {/* header */}
//             <div className={classes.payment__header}>
//                 Checkout ({totalItem}) items
//             </div>
            
//             {/* payment method */}
//             <section className={classes.payment}>
//                 {/* address */}
//                 <div className={classes.flex}>
//                     <h3>Delivery Address</h3>
//                     <div>
//                         <div>{user?.email || "Guest"}</div>
//                         <div>123 React Lane</div>
//                         <div>Chicago, IL</div>
//                     </div>
//                 </div>
//                 <hr />
                
//                 {/* product */}
//                 <div className={classes.flex}>
//                     <h3>Review items and delivery</h3>
//                     <div>
//                         {basket && basket.length > 0 ? (
//                             basket.map((item) => (
//                                 <ProductCard 
//                                     key={item.id} 
//                                     products={item} 
//                                     flex={true} 
//                                 />
//                             ))
//                         ) : (
//                             <div style={{ 
//                                 padding: '40px', 
//                                 textAlign: 'center',
//                                 color: '#666',
//                                 backgroundColor: '#f9f9f9',
//                                 borderRadius: '8px'
//                             }}>
//                                 <p style={{ fontSize: '18px', marginBottom: '10px' }}>
//                                     🛒 Your basket is empty
//                                 </p>
//                                 <p>Add items to your basket to proceed with checkout.</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <hr />
                
//                 {/* card form */}
//                 <div className={classes.flex}>
//                     <h3>Payment Method</h3>
//                     <div className={classes.payment__card_container}>
//                         <div className={classes.payment_details}>
//                             <form onSubmit={handleSubmit}>
//                                 {/* error */}
//                                 {cardError && (
//                                     <div style={{ 
//                                         color: 'red', 
//                                         marginBottom: '10px',
//                                         padding: '10px',
//                                         backgroundColor: '#ffe6e6',
//                                         borderRadius: '4px'
//                                     }}>
//                                         <small><strong>Error:</strong> {cardError}</small>
//                                     </div>
//                                 )}
                                
//                                 {/* card element */}
//                                 <div style={{ 
//                                     padding: '15px', 
//                                     border: '1px solid #ddd', 
//                                     borderRadius: '4px',
//                                     marginBottom: '20px',
//                                     backgroundColor: 'white'
//                                 }}>
//                                     <CardElement 
//                                         onChange={handleChange}
//                                         options={{
//                                             style: {
//                                                 base: {
//                                                     fontSize: '16px',
//                                                     color: '#424770',
//                                                     '::placeholder': {
//                                                         color: '#aab7c4',
//                                                     },
//                                                 },
//                                                 invalid: {
//                                                     color: '#9e2146',
//                                                 },
//                                             },
//                                         }}
//                                     />
//                                 </div>

//                                 {/* price and button */}
//                                 <div className={classes.payment__price}>
//                                     <div style={{ 
//                                         display: "flex", 
//                                         justifyContent: "space-between",
//                                         alignItems: "center",
//                                         marginBottom: '15px'
//                                     }}>
//                                         <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
//                                             Total Order:
//                                         </p>
//                                         <CurrencyFormat amount={total} />
//                                     </div>
//                                     <button 
//                                         type="submit"
//                                         disabled={!stripe || processing || basket?.length === 0}
//                                         style={{
//                                             padding: '15px 30px',
//                                             background: basket?.length > 0 && !processing ? '#f0c14b' : '#ccc',
//                                             border: '1px solid #a88734',
//                                             borderRadius: '4px',
//                                             fontSize: '16px',
//                                             cursor: basket?.length > 0 && !processing ? 'pointer' : 'not-allowed',
//                                             width: '100%',
//                                             marginTop: '10px',
//                                             fontWeight: 'bold'
//                                         }}
//                                     >
//                                         {processing ? (
//                                             <>
//                                                 <span style={{ marginRight: '8px' }}>⏳</span>
//                                                 Processing...
//                                             </>
//                                         ) : (
//                                             `Pay $${total > 0 ? total.toFixed(2) : '0.00'}`
//                                         )}
//                                     </button>
//                                     <p style={{
//                                         fontSize: '12px',
//                                         color: '#666',
//                                         marginTop: '10px',
//                                         textAlign: 'center'
//                                     }}>
//                                         Test card: 4242 4242 4242 4242 | Exp: 12/34 | CVC: 123
//                                     </p>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </Layout>
//     );
// }

// export default Payment;


import React, { useContext, useState } from "react";
import classes from "./Payement.module.css";
import Layout from "../../Componentes/Layout/Layout";
import { DataContext } from "../../Componentes/DataProvider/DataProvider";
import ProductCard from "../../Componentes/Product/ProductCard";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "../../Componentes/CurrencyFormat/CurrencyFormat";
import axiosinstance from '../../API/axios';
import { db } from "../../Utility/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Payment() {
    const [{ user, basket }, dispatch] = useContext(DataContext);
    const navigate = useNavigate();
    
    // Debug logs
    console.log("User:", user);
    console.log("Basket:", basket);
    
    // Calculate total items
    const totalItem = basket?.reduce((count, item) => {
        return count + (item.amount || 1);
    }, 0) || 0;

    // Calculate total price
    const total = basket?.reduce((amount, item) => 
        amount + item.price * (item.amount || 1), 0) || 0;

    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleChange = (e) => {
        console.log("Card change:", e);
        setCardError(e.error?.message || '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe not loaded");
            return;
        }

        setProcessing(true);
        setCardError('');

        try {
            // Step 1: Create PaymentIntent
            console.log("Creating payment intent for amount:", total);
            
            const response = await axiosinstance.post('/payments/create', { 
                total: total // Send dollars, backend converts to cents
            });
            
            console.log("Payment intent response:", response.data);
            
            const { clientSecret } = response.data;
            
            if (!clientSecret) {
                throw new Error("No client secret received from server");
            }

            // Step 2: Client-side confirmation
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName || "Customer",
                    },
                },
            });

            console.log("Payment confirmation result:", result);

            // Step 3: Handle the result
            if (result.error) {
                setCardError(result.error.message);
                console.error("Payment failed:", result.error);
            } else if (result.paymentIntent.status === 'succeeded') {
                console.log("Payment succeeded! PaymentIntent ID:", result.paymentIntent.id);
                
                // Step 4: Save order to Firestore
                if (user && db) {
                    try {
                        const orderData = {
                            basket: basket.map(item => ({
                                id: item.id,
                                title: item.title,
                                price: item.price,
                                amount: item.amount || 1,
                                image: item.image,
                                rating: item.rating
                            })),
                            amount: result.paymentIntent.amount, // Amount in cents
                            amountInDollars: (result.paymentIntent.amount / 100).toFixed(2), // For display
                            created: new Date(result.paymentIntent.created * 1000).toISOString(), // Convert timestamp
                            timestamp: serverTimestamp(), // Firestore server timestamp
                            paymentIntentId: result.paymentIntent.id,
                            status: 'completed',
                            customerEmail: user.email,
                            customerId: user.uid,
                            shippingAddress: {
                                email: user.email,
                                address: "123 React Lane",
                                city: "Chicago, IL"
                            }
                        };

                        console.log("Saving order to Firestore:", orderData);
                        
                        // Save to Firestore
                        await setDoc(
                            doc(db, "users", user.uid, "orders", result.paymentIntent.id),
                            orderData
                        );
                        
                        console.log("✅ Order saved to Firestore successfully!");
                    } catch (firestoreError) {
                        console.error("❌ Firestore save error:", firestoreError);
                        // Don't fail the payment if Firestore save fails
                        alert("Payment succeeded, but there was an issue saving order details.");
                    }
                } else {
                    console.warn("User not logged in or Firestore not initialized");
                }
                
                // Step 5: Clear basket
                dispatch({ type: "EMPTY_BASKET" });
                
                // Step 6: Show success message
                alert("Payment successful! Your order has been placed.");
                
                // Step 7: Navigate to orders page
                navigate('/orders', { 
                    state: { 
                        msg: "You have placed a new order!",
                        paymentId: result.paymentIntent.id,
                        orderAmount: (result.paymentIntent.amount / 100).toFixed(2)
                    }
                });
                
                // Return to prevent further execution
                return;
            }
        } catch (error) {
            console.error("Payment processing error:", error);
            
            // Show detailed error
            if (error.response) {
                console.error("Server responded with error:", error.response.data);
                console.error("Status:", error.response.status);
                setCardError(`Server error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
            } else if (error.request) {
                console.error("No response received:", error.request);
                setCardError("No response from server. Make sure your backend is running.");
            } else {
                setCardError(error.message || "An error occurred during payment");
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <Layout>
            {/* header */}
            <div className={classes.payment__header}>
                Checkout ({totalItem}) items
            </div>
            
            {/* payment method */}
            <section className={classes.payment}>
                {/* address */}
                <div className={classes.flex}>
                    <h3>Delivery Address</h3>
                    <div>
                        <div>{user?.email || "Guest"}</div>
                        <div>123 React Lane</div>
                        <div>Chicago, IL</div>
                    </div>
                </div>
                <hr />
                
                {/* product */}
                <div className={classes.flex}>
                    <h3>Review items and delivery</h3>
                    <div>
                        {basket && basket.length > 0 ? (
                            basket.map((item) => (
                                <ProductCard 
                                    key={item.id} 
                                    products={item} 
                                    flex={true} 
                                />
                            ))
                        ) : (
                            <div style={{ 
                                padding: '40px', 
                                textAlign: 'center',
                                color: '#666',
                                backgroundColor: '#f9f9f9',
                                borderRadius: '8px'
                            }}>
                                <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                                    🛒 Your basket is empty
                                </p>
                                <p>Add items to your basket to proceed with checkout.</p>
                            </div>
                        )}
                    </div>
                </div>
                <hr />
                
                {/* card form */}
                <div className={classes.flex}>
                    <h3>Payment Method</h3>
                    <div className={classes.payment__card_container}>
                        <div className={classes.payment_details}>
                            <form onSubmit={handleSubmit}>
                                {/* error */}
                                {cardError && (
                                    <div style={{ 
                                        color: 'red', 
                                        marginBottom: '10px',
                                        padding: '10px',
                                        backgroundColor: '#ffe6e6',
                                        borderRadius: '4px'
                                    }}>
                                        <small><strong>Error:</strong> {cardError}</small>
                                    </div>
                                )}
                                
                                {/* card element */}
                                <div style={{ 
                                    padding: '15px', 
                                    border: '1px solid #ddd', 
                                    borderRadius: '4px',
                                    marginBottom: '20px',
                                    backgroundColor: 'white'
                                }}>
                                    <CardElement 
                                        onChange={handleChange}
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '16px',
                                                    color: '#424770',
                                                    '::placeholder': {
                                                        color: '#aab7c4',
                                                    },
                                                },
                                                invalid: {
                                                    color: '#9e2146',
                                                },
                                            },
                                        }}
                                    />
                                </div>

                                {/* price and button */}
                                <div className={classes.payment__price}>
                                    <div style={{ 
                                        display: "flex", 
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: '15px'
                                    }}>
                                        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
                                            Total Order:
                                        </p>
                                        <CurrencyFormat amount={total} />
                                    </div>
                                    <button 
                                        type="submit"
                                        disabled={!stripe || processing || basket?.length === 0}
                                        style={{
                                            padding: '15px 30px',
                                            background: basket?.length > 0 && !processing ? '#f0c14b' : '#ccc',
                                            border: '1px solid #a88734',
                                            borderRadius: '4px',
                                            fontSize: '16px',
                                            cursor: basket?.length > 0 && !processing ? 'pointer' : 'not-allowed',
                                            width: '100%',
                                            marginTop: '10px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {processing ? (
                                            <>
                                                <span style={{ marginRight: '8px' }}>⏳</span>
                                                Processing...
                                            </>
                                        ) : (
                                            `Pay $${total > 0 ? total.toFixed(2) : '0.00'}`
                                        )}
                                    </button>
                                    <p style={{
                                        fontSize: '12px',
                                        color: '#666',
                                        marginTop: '10px',
                                        textAlign: 'center'
                                    }}>
                                        Test card: 4242 4242 4242 4242 | Exp: 12/34 | CVC: 123
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Payment;