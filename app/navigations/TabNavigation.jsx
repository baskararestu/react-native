import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import Colors from "../utils/Colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY_COLOR,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
                marginTop: -7,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
                marginTop: -7,
              }}
            >
              Booking
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
                marginTop: -7,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
