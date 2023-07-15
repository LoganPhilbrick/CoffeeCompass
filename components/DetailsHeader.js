import * as React from "react";
import { Appbar } from "react-native-paper";
import { View, Text, Image, FlatList, ImageBackground, StyleSheet, ScrollView } from "react-native";
import BackHeader from "../components/BackActionHeader";

const DetailsHeader = ({ navigation, details }) => {
  return (
    <View>
      <BackHeader navigation={navigation} />
      <ImageBackground source={{ uri: `${details.image_url}` }} resizeMode="cover" style={{ height: 310, direction: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "black", opacity: 0.5 }} />
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 36 }}>{details.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {newRating}
            <Text style={{ color: "white", fontSize: 18 }}>{` - ${details.review_count} reviews`}</Text>
          </View>
          <View>{details.location && <Text style={{ color: "white", fontSize: 18 }}>{`${details.location.address1} ${details.location.city}, ${details.location.state}`}</Text>}</View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailsHeader;
