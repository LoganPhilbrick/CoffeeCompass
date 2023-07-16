import * as React from "react";
import { useState } from "react";
import { Appbar, Button } from "react-native-paper";
import { View, Text, ImageBackground } from "react-native";

const DetailsHeader = ({ details, showReviews, setShowReviews }) => {
  return (
    <View>
      <ImageBackground source={{ uri: `${details.image_url}` }} resizeMode="cover" style={{ height: 310, direction: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "black", opacity: 0.5 }} />
        <View style={{ padding: 24 }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 36 }}>{details.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {newRating}
            <Text style={{ color: "white", fontSize: 18 }}>{` - ${details.review_count} reviews`}</Text>
          </View>
          <View>{details.location && <Text style={{ color: "white", fontSize: 18 }}>{`${details.location.address1} ${details.location.city}, ${details.location.state}`}</Text>}</View>
        </View>
      </ImageBackground>
      {showReviews ? (
        <View style={{ flexDirection: "row", justifyContent: "center", margin: 24, marginTop: 48 }}>
          <Button mode="elevated" buttonColor="#F0E2A3" textColor="#664E4C" style={{ borderRadius: 0, height: 60, width: 110, justifyContent: "center" }}>
            Reviews
          </Button>
          <Button mode="elevated" buttonColor="white" textColor="#664E4C" style={{ borderRadius: 0, height: 60, width: 110, justifyContent: "center" }} onPress={() => setShowReviews(false)}>
            Photos
          </Button>
        </View>
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "center", margin: 24, marginTop: 48 }}>
          <Button mode="elevated" buttonColor="white" textColor="#664E4C" style={{ borderRadius: 0, height: 60, width: 110, justifyContent: "center" }} onPress={() => setShowReviews(true)}>
            Reviews
          </Button>
          <Button mode="elevated" buttonColor="#F0E2A3" textColor="#664E4C" style={{ borderRadius: 0, height: 60, width: 110, justifyContent: "center" }}>
            Photos
          </Button>
        </View>
      )}
    </View>
  );
};

export default DetailsHeader;
