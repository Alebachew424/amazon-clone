// import React, { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataProvider";

// const ProtectedRoute = ({ children, redirectPath = "/auth", redirectMessage = "Please login to access this page" }) => {
//   const [{ user }] = useContext(DataContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate(redirectPath, { 
//         state: { 
//           msg: redirectMessage,
//           from: window.location.pathname
//         } 
//       });
//     }
//   }, [user, navigate, redirectPath, redirectMessage]);

//   // If user exists, render children
//   if (user) {
//     return children;
//   }
  
//   // Optional: Show loading while checking auth
//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       background: '#f5f5f5'
//     }}>
//       <p>Checking authentication...</p>
//     </div>
//   );
// };

// export default ProtectedRoute;

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children }) => {
  const [{ user }] = useContext(DataContext);
  
  // If no user, redirect to auth page with state
  if (!user) {
    return <Navigate to="/auth" state={{ 
      msg: "Please login to access this page",
      from: window.location.pathname // ✅ This tells auth where to redirect back
    }} replace />;
  }
  
  // If user exists, render children
  return children;
};

export default ProtectedRoute;