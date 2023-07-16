import * as React from "react";
import { StyleSheet, Image, Linking } from "react-native";
import { Card, Text, Button } from "react-native-paper";

const ReviewCard = ({ user, review, rating, time, url }) => {
  const openURI = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  let newRating;

  switch (rating) {
    case 5:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/FiveLg.png")} />;
      break;
    case 4.5:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/FourHalfLg.png")} />;
      break;
    case 4:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/FourLg.png")} />;
      break;
    case 3.5:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/ThreeHalfLg.png")} />;
      break;
    case 3:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/ThreeLg.png")} />;
      break;
    case 2.5:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/TwoHalfLg.png")} />;
      break;
    case 2:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/TwoLg.png")} />;
      break;
    case 1.5:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/OneHalfLg.png")} />;
      break;
    case 1:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/OneLg.png")} />;
      break;
    default:
      newRating = <Image style={{ resizeMode: "contain", width: 100 }} source={require("../yelpAssets/ZeroLg.png")} />;
      break;
  }
  return (
    <Card mode="contained" style={styles.outerCard}>
      <Card.Content>
        <Text style={styles.text} variant="titleMedium">
          {user}
        </Text>
        {newRating}
        <Text style={styles.text} variant="titleSmall">
          {time}
        </Text>
        <Text style={styles.text} variant="bodyMedium">
          {review}
        </Text>
      </Card.Content>
      <Card.Content>
        <Button style={styles.seeFullText} textColor="white" mode="text" onPress={openURI}>
          See Full Review...
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  outerCard: {
    marginHorizontal: 24,
    marginVertical: 24,
    backgroundColor: "#664E4C",
  },
  text: {
    color: "white",
  },
  seeFullText: {
    marginTop: 10,
    marginLeft: "auto",
  },
});
export default ReviewCard;
