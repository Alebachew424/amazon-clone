// import React,{Children, createContext,useReducer} from 'react'
// import { intitialState } from '../../Utility/reducer'
// export const DataContext=createContext()


// const DataProvider =({children,reducer,intitialState})=>{
//     return(
//         <DataContex.Provider value={useReducer(reducer,intitialState)}>
//             {children}
//         </DataContex.Provider>
//     )
// }

// export default DataProvider;



import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
