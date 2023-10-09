import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../views/HomeScreen/HomeScreen";
import NotificationScreen from "../views/NotificationScreen/NotificationScreen";
import ProfileScreen from "../views/ProfileScreen/ProfileScreen";
import Font from "./Font";

const homeName = "Home";
const notificationName = "Notifications";
const profileName = "Profile";

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
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 0,

            fontFamily: Font["Gilroy-Regular"],
          },
          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === notificationName) {
              iconName = focused ? "qr-code" : "md-qr-code-outline";
            } else if (rn === profileName) {
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
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationBar;
