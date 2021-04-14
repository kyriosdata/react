import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

export default CustomHeaderButton = props => {
  return <HeaderButton {...props} IconComponent={MaterialIcons} />;
};
