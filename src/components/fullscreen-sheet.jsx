import { Sheet as OrginalSheet } from "zmp-ui";
import { useMatchStatusTextColor } from "../hooks/hooks";
import React from "react";

const Sheet = (props) => {
  useMatchStatusTextColor(props.visible);
  return <OrginalSheet {...props} />;
};

const ActionSheet = (props) => {
  useMatchStatusTextColor(props.visible);
  return <OrginalSheet.Actions {...props} />;
};
export { Sheet, ActionSheet };
