import { View, Text, Image, FlatList, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { fetchDetails, fetchReviews } from "../api";
import DetailsHeader from "../components/DetailsHeader";
import ReviewCard from "../components/ReviewCard";
import DetailsSkeleton from "../components/DetailsSkeleton";
import BackHeader from "../components/BackActionHeader";
import PhotosMap from "../components/PhotosMap";

const APIKEY = "yCv9CY1cY47Mguq02W1yh2eZQItWCWdDS3TsX3jP0Ay0-KLogFQw_TnOTlAOyEZ0HT9bSB0W0SzjyGPywt7xXql4JJYHUCfVxP5EPnbAIu5sXDs8facC_V9blOBCZHYx";

const DetailsPage = ({ navigation, route }) => {
  const [details, setDetails] = useState({});
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(false);
  const [showReviews, setShowReviews] = useState(true);

  const handleDetails = () => {
    setLoading(true);
    const id = `${route.params.id}`;
    fetchDetails(APIKEY, id)
      .then((res) => {
        setDetails(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchReviews(APIKEY, id)
      .then((res) => {
        setReviews(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleDetails();
  }, []);

  switch (details.rating) {
    case 5:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/FiveLg.png")} />;
      break;
    case 4.5:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/FourHalfLg.png")} />;
      break;
    case 4:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/FourLg.png")} />;
      break;
    case 3.5:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/ThreeHalfLg.png")} />;
      break;
    case 3:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/ThreeLg.png")} />;
      break;
    case 2.5:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/TwoHalfLg.png")} />;
      break;
    case 2:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/TwoLg.png")} />;
      break;
    case 1.5:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/OneHalfLg.png")} />;
      break;
    case 1:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/OneLg.png")} />;
      break;
    default:
      newRating = <Image style={{ resizeMode: "contain", width: 120 }} source={require("../yelpAssets/ZeroLg.png")} />;
      break;
  }

  return loading ? (
    <View style={{ flex: 1 }}>
      <BackHeader navigation={navigation} />
      <View style={styles.skeletonView}>
        <DetailsSkeleton />
      </View>
    </View>
  ) : showReviews ? (
    <View>
      <BackHeader navigation={navigation} />
      <FlatList
        ListHeaderComponent={<DetailsHeader details={details} navigation={navigation} showReviews={showReviews} setShowReviews={setShowReviews} />}
        ListFooterComponent={() => <View style={{ margin: 69 }}></View>}
        data={reviews.reviews}
        renderItem={({ item }) => <ReviewCard user={item.user.name} rating={item.rating} time={item.time_created} url={item.url} review={item.text} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  ) : (
    <View>
      <BackHeader navigation={navigation} />
      <FlatList
        ListHeaderComponent={<DetailsHeader details={details} navigation={navigation} showReviews={showReviews} setShowReviews={setShowReviews} />}
        ListFooterComponent={() => <View style={{ margin: 69 }}></View>}
        data={details.photos}
        renderItem={({ item, index }) => <PhotosMap item={item} index={index} />}
        keyExtractor={(index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonView: { flex: 1, alignItems: "center", marginTop: 25 },
});

export default DetailsPage;
