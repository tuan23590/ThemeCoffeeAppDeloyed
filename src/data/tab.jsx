import { CartIcon } from "../components/cart-icon";
import { Icon } from "zmp-ui";
import React from "react";

export const tabs = {
  "/": {
    label: "Trang chủ",
    icon: <Icon icon="zi-home" />,
  },
  "/notification": {
    label: "Thông báo",
    icon: <Icon icon="zi-notif" />,
  },
  "/cart": {
    label: "Giỏ hàng",
    icon: <CartIcon />,
    activeIcon: <CartIcon active />,
  },
  "/profile": {
    label: "Cá nhân",
    icon: <Icon icon="zi-user" />,
  },
};

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category", "/result"];
