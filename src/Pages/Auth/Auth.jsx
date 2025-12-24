// import React from 'react';
// import classes from './Auth.module.css';
// import { Link } from 'react-router-dom';
// import {auth} from '../../Utility/firebase';
// import { auth } from './../../Utility/firebase';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// function Auth() {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [error,setError] = useState('');



//   const authHandler = (e) => {
//     e.preventDefault();
//     // Add authentication logic here using auth, email, and password

//     console.log(e.target.name);
//     if(e.target.name === 'signin'){
//       signInWithEmailAndPassword(auth,email,password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//   console.log(error);
//       });
//   }
//   else {
//     createUserWithEmailAndPassword(auth,email,password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       console.log(user);
//     })
//     .catch((error) => {
// console.log(error);
//     });
//   }
//   console.log(password,email);

//   return (
//     <section className={classes.login}>
//       {/* logo */}
//       <Link>
//         <img 
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
//           alt="" 
//         />
//       </Link>

//       {/* form */}
//       <div className={classes.login__container}>
//         <h1>Sign In</h1>
//         <form action="">
//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           <button type="submit" onClick={authHandler} name='signin' className={classes.login__signInButton}>Sign In</button>
//         </form>

//         {/* {Agreement} */}
//         <p>
//           By signing-in you agree to Amazon's Conditions of Use & Sale. Please
//           see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
//           Notice.
//         </p>
//         <button type="submit" onClick={authHandler} name ='signup' className={classes.login__registerButton}>Create your Amazon Account</button>
//       </div>
//     </section>
//   );
// }

// export default Auth;



// import React, { useState } from "react";
// import classes from "./Auth.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../../Utility/firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const authHandler = async (e) => {
//     e.preventDefault();

//     try {
//       if (e.target.name === "signin") {
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//       navigate("/"); // redirect after login
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <section className={classes.login}>
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
//           alt="Amazon"
//         />
//       </Link>

//       <div className={classes.login__container}>
//         <h1>Sign In</h1>

//         <form>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             name="signin"
//             onClick={authHandler}
//             className={classes.login__signInButton}
//           >
//             Sign In
//           </button>
//         </form>

//         {error && <p className={classes.error}>{error}</p>}

//         <button
//           name="signup"
//           onClick={authHandler}
//           className={classes.login__registerButton}
//         >
//           Create your Amazon Account
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Auth;
// import React, { useState, useContext } from "react";
// import classes from "./Auth.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../../Utility/firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");  

//   const[loading,setLoading]= useState (
//     signIn: false,
//     signup: false
//   );

//   const navigate = useNavigate();
//   const [{ user }, dispatch] = useContext(DataContext);

//   const authHandler = async (e) => {
//     e.preventDefault();

//     try {
//       let userCredential;

//       if (e.target.name === "signin") {
//         setLoading({ ...loading, signIn: true });


//         userCredential = await signInWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
        
//       } else {
//         userCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//       }

//       dispatch({
//         type: Type.SET_USER,
//         user: userCredential.user,
//       });
//       .setLoading({ ...loading, signIn: false });

//       navigate("/"); // redirect after login
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <section className={classes.login}>
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
//           alt="Amazon"
//         />
//       </Link>

//       <div className={classes.login__container}>
//         <h1>Sign In</h1>

//         <form>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             name="signin"
//             onClick={authHandler}
//             className={classes.login__signInButton}
//           >
//             Sign In
//           </button>
//         </form>

//         {error && <p className={classes.error}>{error}</p>}

//         <button
//           name="signup"
//           onClick={authHandler}
//           className={classes.login__registerButton}
//         >
//           Create your Amazon Account
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Auth;


// import React, { useState, useContext } from "react";
// import classes from "./Auth.module.css";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { auth } from "../../Utility/firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { DataContext } from "../../Componentes/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";
// import ClipLoader from "react-spinners/ClipLoader";
// import { TextareaAutosize } from "@mui/material";

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const [loading, setLoading] = useState({
//     signIn: false,
//     signUp: false,
//   });

//   const navigate = useNavigate();
//   const navStateData= useLocation();
//   console.log( navStateData);
//   const [{ user }, dispatch] = useContext(DataContext);

//   const authHandler = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       let userCredential;

//       if (e.target.name === "signin") {
//         setLoading({ signIn: true, signUp: false });

//         userCredential = await signInWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//       } else {
//         setLoading({ signIn: false, signUp: true });

//         userCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//       }

//       dispatch({
//         type: Type.SET_USER,
//         user: userCredential.user,
//       });

//       navigate(navStateData?.state?.redirect || "/");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading({ signIn: false, signUp: false });
//     }

  

//   return (
//     <section className={classes.login}>
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
//           alt="Amazon"
//         />
//       </Link>

//       <div className={classes.login__container}>
//         <h1>Sign In</h1>

//         {
//           navStateData?.state?.msg && (
//             <small style={
//               {
//                 padding:"5px",
//                 textAlign:"center",
//                 color:"red",
//                 fontWeight:"bold",
//               }
//             }
//         }

//         <form>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={loading.signIn || loading.signUp}
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             disabled={loading.signIn || loading.signUp}
//           />

//           <button
//             type="submit"
//             name="signin"
//             onClick={authHandler}
//             className={classes.login__signInButton}
//             disabled={loading.signIn}
//           >
//             {loading.signIn ? (
//               <ClipLoader size={18} color="#fff" />
//             ) : (
//               "Sign In"
//             )}
//           </button>
//         </form>

//         {error && <p className={classes.error}>{error}</p>}

//         <button
//           name="signup"
//           onClick={authHandler}
//           className={classes.login__registerButton}
//           disabled={loading.signUp}
//         >
//           {loading.signUp ? (
//             <ClipLoader size={18} color="#000" />
//           ) : (
//             "Create your Amazon Account"
//           )}
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Auth;


import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Componentes/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import ClipLoader from "react-spinners/ClipLoader";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const navigate = useNavigate();
  const location = useLocation();
  console.log("Auth location state:", location.state);
  
  const [{ user }, dispatch] = useContext(DataContext);

  const authHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let userCredential;

      if (e.target.name === "signin") {
        setLoading({ signIn: true, signUp: false });
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        setLoading({ signIn: false, signUp: true });
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      dispatch({
        type: Type.SET_USER,
        user: userCredential.user,
      });

      // ✅ FIX: Check where user came from and redirect appropriately
      const redirectPath = location.state?.from || 
                         location.state?.redirect || 
                         "/orders"; // Default to orders page
      
      console.log("Redirecting to:", redirectPath);
      navigate(redirectPath);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({ signIn: false, signUp: false });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign In</h1>

        {location.state?.msg && (
          <small style={{
            padding: "10px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
            display: "block",
            marginBottom: "15px",
            backgroundColor: "#ffe6e6",
            borderRadius: "4px"
          }}>
            {location.state.msg}
          </small>
        )}

        <form>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading.signIn || loading.signUp}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading.signIn || loading.signUp}
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login__signInButton}
            disabled={loading.signIn || !email || !password}
          >
            {loading.signIn ? (
              <ClipLoader size={18} color="#fff" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {error && <p className={classes.error}>{error}</p>}

        <div className={classes.divider}>
          <span>New to Amazon?</span>
        </div>

        <button
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
          disabled={loading.signUp || !email || !password}
        >
          {loading.signUp ? (
            <ClipLoader size={18} color="#000" />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
      </div>
    </section>
  );
}

export default Auth;