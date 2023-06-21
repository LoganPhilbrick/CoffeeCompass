import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const CoffeeCard = ({ name, rating, distance, imageUrl, address, id, count }) => {
  const miles = (distance * 0.000621371192).toFixed(1);

  let newRating;

  switch (rating) {
    case 5:
      newRating = <Image source={require("../yelpAssets/Five.png")} />;
      break;
    case 4.5:
      newRating = <Image source={require("../yelpAssets/FourHalf.png")} />;
      break;
    case 4:
      newRating = <Image source={require("../yelpAssets/Four.png")} />;
      break;
    case 3.5:
      newRating = <Image source={require("../yelpAssets/ThreeHalf.png")} />;
      break;
    case 3:
      newRating = <Image source={require("../yelpAssets/Three.png")} />;
      break;
    case 2.5:
      newRating = <Image source={require("../yelpAssets/TwoHalf.png")} />;
      break;
    case 2:
      newRating = <Image source={require("../yelpAssets/Two.png")} />;
      break;
    case 1.5:
      newRating = <Image source={require("../yelpAssets/OneHalf.png")} />;
      break;
    case 1:
      newRating = <Image source={require("../yelpAssets/One.png")} />;
      break;
    default:
      newRating = <Image source={require("../yelpAssets/Zero.png")} />;
      break;
  }
  return (
    <Card key={id} style={{ margin: 24, shadowColor: "white" }}>
      <Card.Cover source={{ uri: imageUrl }} />
      <Card.Title title={name} titleVariant="headlineMedium" />
      <Card.Content style={styles.reviewContent}>
        {newRating}
        <Text variant="bodyMedium">{` - ${count} reviews`}</Text>
      </Card.Content>
      <Card.Content>
        <Text variant="bodyLarge">{`${miles} mi`}</Text>
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  reviewContent: { flex: 1, flexDirection: "row", alignItems: "center" },
});

export default CoffeeCard;
