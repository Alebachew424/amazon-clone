// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import DataProvider from './Componentes/DataProvider/DataProvider.jsx'
// import {intitialState,reducer} from './Utility/reducer'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <DataProvider reducer={} intitialState={} >

//       <App />
//     </DataProvider>
   
//   </StrictMode>,
// )


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import DataProvider from './Componentes/DataProvider/DataProvider.jsx';
// import { initialState, reducer } from './Utility/reducer';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <DataProvider reducer={reducer} initialState={initialState}>
//       <App />
//     </DataProvider>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import DataProvider from "./Componentes/DataProvider/DataProvider.jsx";
import { initialState, reducer } from "./Utility/reducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
