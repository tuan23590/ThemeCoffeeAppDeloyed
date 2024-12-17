import React from "react";
import { getConfig } from "../../utils/config";

export const DisplayPrice = ({ children }) => {
  const symbol = getConfig((config) => config.template.currencySymbol);

  if (getConfig((config) => config.template.prefixCurrencySymbol)) {
    return (
      <>
        {symbol}
        {children.toLocaleString()}
      </>
    );
  } else {
    return (
      <>
        {children.toLocaleString()}
        {symbol}
      </>
    );
  }
};