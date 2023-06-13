import * as React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { Icon } from "react-native-elements";

const HomeHeader = () => {
  const theme = useTheme();
  return (
    <Appbar.Header style={{ backgroundColor: "#42a5f5" }} statusBarHeight={0}>
      <Icon iconStyle={{ margin: 15, color: "white" }} type="font-awesome" name="coffee" />
      <Appbar.Content titleStyle={{ color: "white" }} title="CoffeeCompass" />
    </Appbar.Header>
  );
};

export default HomeHeader;
