import { createSlice } from "@reduxjs/toolkit";

const deliverySlice = createSlice({
  name: "delivery",
  initialState: {
    delivery: [],
  },
  reducers: {
    addDelivery: (state, { payload }) => {
      
      state.delivery.push(payload)
    },

    clearDelivery: (state) => {
      // Add logic to clear user-related data when logging out
      return { ...state, delivery: null };
    },

  },
});

export const { addDelivery, clearDelivery } = deliverySlice.actions;
export default deliverySlice;
