import createStore from 'teaful';
import React from "react";


export const { useStore: useCartItems } = createStore({
    cartItems: [],
});
  