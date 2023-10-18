import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import LoginScreen from "../views/AuthScreen/LoginScreen";
import RegisterScreen from "../views/AuthScreen/RegisterScreen";
import StartScreen from "../views/StartScreen/StartScreen";
import PasswordScreen from "../views/AuthScreen/PasswordScreen";
import { RootStackParamList } from "./types/types";
import NavigationBar from "./NavigationBar";
import LoadingScreen from "../views/LoadingScreen/LoadingScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen name="Navigation" component={NavigationBar} />
    </Stack.Navigator>
  );
}
