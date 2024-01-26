import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./app/Screens/LoginScreen/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import HomeScreen from "./app/Screens/HomeScreen/HomeScreen";
import TabNavigation from "./app/navigations/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider
      publishableKey="pk_test_YnVzeS1sb3VzZS03Ny5jbGVyay5hY2NvdW50cy5kZXYk"
      tokenCache={tokenCache}
    >
      <View style={styles.container}>
        <SignedIn>
          <Text>You are Signed In</Text>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
