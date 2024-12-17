import React from "react";

export const DisplayDay = ({ value }) => {
  return (
    <>
      {
        ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"][
          value - 1
        ]
      }
    </>
  );
};