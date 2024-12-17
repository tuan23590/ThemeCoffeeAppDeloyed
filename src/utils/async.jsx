import React from "react";

export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
