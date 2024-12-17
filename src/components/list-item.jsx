import { Box, Icon, Text } from "zmp-ui";
import React from "react";

const ListItem = ({ title, subtitle, onClick }) => {
  return (
    <Box flex className="space-x-2" onClick={onClick}>
      <Box className="flex-1 space-y-[2px]">
        <Text size="small" className="font-medium text-sm text-primary">
          {title}
        </Text>
        <Text size="xSmall" className="text-gray">
          {subtitle}
        </Text>
      </Box>
      <Icon icon="zi-chevron-right" />
    </Box>
  );
};

export default ListItem;
