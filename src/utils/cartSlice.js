import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {

      // redux toolkit uses immer js behind the scene
      //  mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },

    //  Redux toolkit says either mutate the existing state or return a new state
    clearCart: (state, action) => {
      console.log(current(state));
      
      // state.items.length = 0;
          //  or
      return {items:[]};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
