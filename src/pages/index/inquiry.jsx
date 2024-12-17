import { Box, Input, useNavigate } from "zmp-ui";
import React from "react";

const Inquiry = () => {
  const navigate = useNavigate();

  return (
    <Box p={4} className="bg-white">
      <Input.Search
        onFocus={() => navigate("/search")}
        placeholder="Tìm nhanh đồ uống, món mới ..."
      />
    </Box>
  );
};


export default Inquiry;
