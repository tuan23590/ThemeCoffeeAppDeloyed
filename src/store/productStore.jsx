import createStore from 'teaful';
import React from "react";

export const { useStore: useProducts } = createStore({
    products: [],
    keyword: "",
});