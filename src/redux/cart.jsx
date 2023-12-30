import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      
      const itemInCart = state.cart.find((item) => item.productId === payload.productId);
      console.log(state.cart)
      console.log(payload)
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push( payload );
      }
    },
    incrementQuantity: (state, { payload }) => {
      const item = state.cart.find((item) => item.productId === payload.productId);

      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, { payload }) => {
      const item = state.cart.find((item) => item.productId === payload.productId);

      if (item) {
        if (item.quantity === 10) {
          // If quantity is 1, remove the item
          state.cart = state.cart.filter((item) => item.productId !== payload.productId);
        } else {
          item.quantity--;
        }
      }
    },
    removeItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.productId !== payload.productId);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;