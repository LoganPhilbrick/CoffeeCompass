import { FlatList, View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import { fetchCoffeeData } from "../api";
import HomeHeader from "../components/HomeHeader";
import CoffeeCard from "../components/CoffeeCard";
import * as Location from "expo-location";

const APIKEY = "yCv9CY1cY47Mguq02W1yh2eZQItWCWdDS3TsX3jP0Ay0-KLogFQw_TnOTlAOyEZ0HT9bSB0W0SzjyGPywt7xXql4JJYHUCfVxP5EPnbAIu5sXDs8facC_V9blOBCZHYx";

const DATA = [
  {
    name: "Starbucks",
    rating: 3.5,
    imageUrl: "https://picsum.photos/700",
    address: "1234 Main St",
    distance: "4.0 mi",
    id: "1",
  },
];

const HomePage = () => {
  const [info, setInfo] = useState({});
  const [location, setLocation] = useState({});

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />
      <FlatList
        data={info}
        renderItem={({ item }) => <CoffeeCard name={item.name} rating={item.rating} imageUrl={item.imageUrl} address={item.address} distance={item.distance} key={item.id} />}
        keyExtractor={(item) => item.id}
      />
      <Button title="button" onPress={() => handleClick()} />
    </View>
  );
};

export default HomePage;
