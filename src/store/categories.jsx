import createStore from 'teaful';
import React from "react";

export const { useStore: useCategories } = createStore({
    categories: [],
    selectedCategory: "coffee",
});