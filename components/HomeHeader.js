import * as React from "react";
import { Appbar, Button } from "react-native-paper";
import { Icon } from "react-native-elements";

const HomeHeader = ({ handleClick, loaded }) => {
  return (
    <Appbar.Header style={{ backgroundColor: "#66bb6a" }}>
      <Icon iconStyle={{ margin: 15, color: "white" }} name="local-cafe" />
      <Appbar.Content titleStyle={{ color: "white", marginRight: "auto" }} title="CoffeeCompass" />
      {loaded ? (
        <Button
          mode="contained"
          textColor="white"
          style={{
            backgroundColor: "#81c784",
            marginRight: 10,
          }}
          onPress={() => handleClick()}
        >
          Refresh
        </Button>
      ) : (
        <></>
      )}
    </Appbar.Header>
  );
};

export default HomeHeader;
