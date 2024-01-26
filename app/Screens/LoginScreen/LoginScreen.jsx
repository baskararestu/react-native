import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={styles.loginImage}
        source={require("../../../assets/images/login.png")}
      />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: "#ffff", textAlign: "center" }}>
          Let's Find
          <Text style={{ fontWeight: "bold" }}>Profesional Cleaning</Text>
          Service
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{ fontSize: 17, textAlign: "center", color: Colors.PRIMARY }}
          >
            Let's get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: "#000000",
    borderRadius: 10,
  },
  subContainer: {
    minWidth: "100%",
    height: "70%",
    backgroundColor: Colors.PRIMARY_COLOR,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 99,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
