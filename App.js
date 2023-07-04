import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

const APIKEY = "yCv9CY1cY47Mguq02W1yh2eZQItWCWdDS3TsX3jP0Ay0-KLogFQw_TnOTlAOyEZ0HT9bSB0W0SzjyGPywt7xXql4JJYHUCfVxP5EPnbAIu5sXDs8facC_V9blOBCZHYx";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Details" component={DetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
