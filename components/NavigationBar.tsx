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
          tabBarItemStyle: {
            paddingBottom: 0,
            marginVertical: 15,
          },
          tabBarLabelStyle: { fontSize: 12, marginTop: 0, marginBottom: 20,},
          tabBarStyle: {
            height: 160,
            borderTopLeftRadius: 774,
            borderTopRightRadius: 774,
            backgroundColor: '#121014',
            position: 'absolute',
            fontFamily: Font["Gilroy-Regular"],
          },
          tabBarIconStyle: {
            marginBottom: -20,
          },
          headerShown: false,

          tabBarIcon: ({ focused }) => {
            let rn = route.name;
            let icon = {};

            if (rn === homeName) {
              icon.active = require('../assets/img/homeIconActive.png');
              icon.inactive = require('../assets/img/homeIcon.png');
            } else if (rn === notificationName) {
              icon.active = require('../assets/img/notificationIconActive.png');
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
