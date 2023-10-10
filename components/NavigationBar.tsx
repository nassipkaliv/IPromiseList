import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

// Screens
import HomeScreen from "../views/HomeScreen/HomeScreen";
import NotificationScreen from "../views/NotificationScreen/NotificationScreen";
import ProfileScreen from "../views/ProfileScreen/ProfileScreen";
import Font from "./Font";

const homeName = "Home";
const notificationName = "Notifications";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, icon }) => {
  return (
    <Image
      source={focused ? icon.active : icon.inactive}
      style={{ width: 24, height: 24 }}
    />
  );
};

function NavigationBar() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          inactiveTintColor: "grey",
          tabBarActiveTintColor: '#fff',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: {
            backgroundColor: '#121014',
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 0,
            fontFamily: Font["Gilroy-Regular"],
          },
          headerShown: false,

          tabBarIcon: ({ focused }) => {
            let iconName;
            let rn = route.name;
            let icon = {};

            if (rn === homeName) {
              icon.active = require('../assets/img/homeIcon.png');
              icon.inactive = require('../assets/img/homeIcon.png');
            } else if (rn === notificationName) {
              icon.active = require('../assets/img/notificationIcon.png');
              icon.inactive = require('../assets/img/notificationIcon.png');
            } else if (rn === profileName) {
              icon.active = require('../assets/img/profileIcon.png');
              icon.inactive = require('../assets/img/profileIcon.png');
            }

            return <TabIcon focused={focused} icon={icon} />;
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
