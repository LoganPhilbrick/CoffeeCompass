import { FlatList, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useEffect, useState } from "react";
import { fetchCoffeeData } from "../api";
import HomeHeader from "../components/HomeHeader";
import CoffeeCard from "../components/CoffeeCard";
import * as Location from "expo-location";

const APIKEY = "yCv9CY1cY47Mguq02W1yh2eZQItWCWdDS3TsX3jP0Ay0-KLogFQw_TnOTlAOyEZ0HT9bSB0W0SzjyGPywt7xXql4JJYHUCfVxP5EPnbAIu5sXDs8facC_V9blOBCZHYx";

const HomePage = () => {
  const [info, setInfo] = useState({});
  const [location, setLocation] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status == "granted") {
        console.log("Permission Granted");
      } else {
        console.log("Permission Denied");
      }
      const loc = await Location.getCurrentPositionAsync();
      setLocation(loc.coords);
    })();
  }, []);

  const handleClick = () => {
    const { longitude, latitude } = location;
    fetchCoffeeData(APIKEY, latitude, longitude)
      .then((data) => {
        console.log(data);
        setInfo(data.businesses);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setLoaded(false);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader style={styles.header} />
      <View style={styles.contentContainer}>
        {!loaded ? (
          <Button style={styles.button} mode="contained" title="button" onPress={() => handleClick()}>
            Begin Search
          </Button>
        ) : (
          <FlatList
            data={info}
            renderItem={({ item }) => (
              <CoffeeCard
                name={item.name}
                rating={item.rating}
                imageUrl={item.image_url}
                address={`${item.location.address1} ${item.location.city}, ${item.location.state}`}
                count={item.review_count}
                distance={item.distance}
                key={item.id}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 36,
    width: 200,
    backgroundColor: "#42a5f5",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomePage;
