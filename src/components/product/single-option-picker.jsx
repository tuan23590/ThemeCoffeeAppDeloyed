import PropTypes from "prop-types";
import { Box, Radio, Text } from "zmp-ui";
import React from "react";

const SingleOptionPicker = ({ variant, value, onChange }) => {
  return (
    <Box my={8} className="space-y-2">
      <Text.Title size="small">{variant.label}</Text.Title>
      <Radio.Group
        className="flex-1 grid grid-cols-3 justify-between"
        name={variant.id}

        // check: logic inline

        options={variant.options.map((option) => ({
          value: option.id,
          label: option.label,
        }))}
        value={value}

        // check: duplicate onChange

        onChange={(selectedOption) => {
          onChange(selectedOption);
        }}
      />
    </Box>
  );
};

SingleOptionPicker.propTypes = {
  variant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SingleOptionPicker;
