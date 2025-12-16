// import { Type } from "./action.type"


// export const intitialState={
//     baske:[]
// }

// export const reducer=(state,action){
//     switch (action.type){
//         case Type.ADD_TO_BASKET:
//             return{
//                 ...state,
//                 basket:[...state.basket,action.item]
//             }
//             default:
//                 return state;
//     }

// }



import { Type } from "./action.type";

export const initialState = {
  basket: [], // ✅ fixed name
};

export const reducer = (state, action) => {   // ✅ arrow fixed
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};
