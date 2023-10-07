import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../views/HomeScreen/HomeScreen";
import NotificationScreen from "../views/NotificationScreen/NotificationScreen";
import SettingsScreen from "../views/SettingsScreen/SettingsScreen";
import Font from "./Font";

const homeName = "Home";
const notificationName = "Notifications";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: {
              backgroundColor: "#121014",
              width: '100%',
              borderTopLeftRadius: 50, // Adjust as needed for the desired circular appearance
              borderTopRightRadius: 50, // Adjust as needed for the desired circular appearance
          },
          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === notificationName) {
              iconName = focused ? "qr-code" : "md-qr-code-outline";
            } else if (rn === settingsName) {
              iconName = focused
                ? "ios-person-circle"
                : "ios-person-circle-outline";
            }

            // Icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={notificationName} component={NotificationScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationBar;
