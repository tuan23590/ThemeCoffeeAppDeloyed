import { Box, Button, Text } from "zmp-ui";
import { DisplayPrice } from "../../components/display/price";
import pay from "../../utils/product";
import { calcFinalPrice } from "../../utils/product";
import { useCartItems } from "../../store/cartStore";
import { produce } from "immer";
import React from "react";

const CartPreview = () => {
  const [cartItems] = useCartItems.cartItems();
  console.log(cartItems)

  const quantity = produce(cartItems, draft => {
    return draft.reduce((total, item) => total + item.quantity, 0);
  });
  
  const totalPrice = produce(cartItems, draft => {
    return draft.reduce((total, item) =>
      total + item.quantity * calcFinalPrice(item.product, item.options),
      0
    );
  });

  return (
    <Box flex className="sticky bottom-0 bg-background p-4 space-x-4">
      <Box
        flex
        flexDirection="column"
        justifyContent="space-between"
        className="min-w-[120px] flex-none"
      >
        <Text className="text-gray" size="xSmall">
          {quantity} sản phẩm
        </Text>
        <Text.Title size="large">
          <DisplayPrice>{totalPrice}</DisplayPrice>
        </Text.Title>
      </Box>
      <Button
        type="highlight"
        disabled={!quantity}
        fullWidth

        // check: logic inline

        onClick={() => pay(totalPrice)}
      >
        Đặt hàng
      </Button>
    </Box>
  );
};

export default CartPreview;
