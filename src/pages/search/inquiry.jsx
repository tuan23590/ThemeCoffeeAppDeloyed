import { useCallback } from "react";
import { Box, Input } from "zmp-ui";
import { useProducts } from "../../store/productStore";
import React from "react";

const Inquiry = () => {
  const [keywords, setKeywords] = useProducts.keyword();

  const handleChange = useCallback(
    (keyword) => {
      setKeywords(keyword)
    },
    [setKeywords]
  );

  return (
    <Box
      p={4}
      pt={6}
      className="bg-white transition-all ease-out flex-none"
      ref={
        (el) => {
          setTimeout(() => {
            if (el) {
              el.style.paddingTop = "8px";
            }
          });
        }
      }
    >
      <Input.Search
        ref={(el) => {
          if (!el?.input?.value) {
            el?.focus();
          }
        }}
        defaultValue={keywords}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Tìm nhanh đồ uống, món mới ..."
        clearable
        allowClear
      />
    </Box>
  );
};

export default Inquiry;
