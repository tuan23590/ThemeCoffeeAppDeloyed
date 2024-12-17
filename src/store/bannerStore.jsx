import createStore from 'teaful';
import React from "react";

export const { useStore: useBanners } = createStore({
    banners: [],
});