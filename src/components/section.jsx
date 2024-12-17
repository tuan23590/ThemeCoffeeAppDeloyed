import { Box, Text } from "zmp-ui";
import React from "react";

const Section = ({ children, title, padding = "all", ...props }) => {
  return (
    <Box
      className={`bg-background ${padding === "all" ? "p-4 space-y-4" : ""} ${
        padding === "title-only" ? "py-4 space-y-4" : ""
      }`}
      {...props}
    >
      <Text.Title className={`${padding === "title-only" ? "px-4" : ""}`}>
        {title}
      </Text.Title>
      {children}
    </Box>
  );
};
export default Section;
