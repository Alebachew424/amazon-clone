// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React from "react";
import Header from "./Componentes/Header/Header";
import Carousel from "./Componentes/Carousel/Carousel";
import Catagoary from "./Componentes/Catagoary/Catagory";
import Product from "./Componentes/Product/Product";
import Routing from "./Router";
// import Header from "./Components/Header/Header";
import Auth from './Pages/Auth/Auth';

// const App = () => {
//   return (
//     <div className="App">
//       {/* <Header />
//       <Carousel />  
//       <Catagoary />
//       <Product /> */}
//       {/* Other pages/components will go here */}
//       <Routing />
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <div className="App">
      <Routing />
    </div>
  );
};
export default App;