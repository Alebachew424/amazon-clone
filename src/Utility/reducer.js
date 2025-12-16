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



// import { Type } from "./action.type";

// export const initialState = {
//   basket: [], // ✅ fixed name
// };

// export const reducer = (state, action) => {   // ✅ arrow fixed
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       return {
//         ...state,
      
//         basket: [...state.basket, action.item],
//       };



//     default:
//       return state;
//   }
// };



import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {

    case Type.ADD_TO_BASKET: {
      // check if item already exists
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        return {
          ...state,
          basket: [
            ...state.basket,
            { ...action.item, amount: 1 },
          ],
        };
      }

      // if item exists, increase amount
      const updatedBasket = state.basket.map((item) =>
        item.id === action.item.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );

      return {
        ...state,
        basket: updatedBasket,
      };
    }

    default:
      return state;
  }
};
