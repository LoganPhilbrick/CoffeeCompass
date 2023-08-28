import * as React from "react";
import { Appbar } from "react-native-paper";

const BackHeader = ({ navigation }) => {
  return (
    <Appbar.Header style={{ backgroundColor: "#66bb6a" }}>
      <Appbar.BackAction color="white" onPress={() => navigation.goBack()} />
      <Appbar.Content titleStyle={{ color: "white" }} title="CoffeeCompass" />
    </Appbar.Header>
  );
};

export default BackHeader;
