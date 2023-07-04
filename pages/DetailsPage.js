import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { fetchDetails } from "../api";

const APIKEY = "yCv9CY1cY47Mguq02W1yh2eZQItWCWdDS3TsX3jP0Ay0-KLogFQw_TnOTlAOyEZ0HT9bSB0W0SzjyGPywt7xXql4JJYHUCfVxP5EPnbAIu5sXDs8facC_V9blOBCZHYx";

const DetailsPage = ({ navigation, route }) => {
  const [details, setDetails] = useState();

  const handleDetails = () => {
    const id = `${route.params.id}`;
    fetchDetails(APIKEY, id)
      .then((res) => {
        setDetails(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>{details?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsPage;
