import { configAppView } from "zmp-sdk";

export function matchStatusBarColor(visible) {
  if (visible) {
    configAppView({
      statusBarType: "transparent",
      headerTextColor: "white",
    });
  } else {
    configAppView({
      statusBarType: "transparent",
      headerTextColor: "black",
    });
  }
}
