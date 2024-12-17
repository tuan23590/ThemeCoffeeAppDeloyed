import createStore from 'teaful';
import React from "react";

export const { useStore: useNotes } = createStore({
    notes: "",
    deliveryTime: null,
    deliveryDate: null,
});