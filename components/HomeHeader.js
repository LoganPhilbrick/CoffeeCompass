import * as React from "react";
import { Appbar, Button } from "react-native-paper";
import { Icon } from "react-native-elements";

const HomeHeader = ({ handleClick, loaded }) => {
  return (
    <Appbar.Header style={{ backgroundColor: "#C1D37F" }}>
      <Icon iconStyle={{ margin: 15, color: "white" }} name="local-cafe" />
      <Appbar.Content titleStyle={{ color: "white" }} title="CoffeeCompass" />
      {loaded ? (
        <Button
          mode="elevated"
          textColor="white"
          style={{
            backgroundColor: "#A3B36B",
            marginRight: 10,
          }}
          onPress={() => handleClick()}
        >
          Redo Search
        </Button>
      ) : (
        <></>
      )}
    </Appbar.Header>
  );
};

export default HomeHeader;
