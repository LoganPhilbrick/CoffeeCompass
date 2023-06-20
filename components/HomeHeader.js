import * as React from "react";
import { Appbar } from "react-native-paper";
import { Icon } from "react-native-elements";

const HomeHeader = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "#42a5f5" }}>
      <Icon iconStyle={{ margin: 15, color: "white" }} name="local-cafe" />
      <Appbar.Content titleStyle={{ color: "white" }} title="CoffeeCompass" />
    </Appbar.Header>
  );
};

export default HomeHeader;
