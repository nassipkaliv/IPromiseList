import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './views/AuthScreen/LoginScreen';
import StartScreen from './views/StartScreen/StartScreen';
import RegisterScreen from './views/AuthScreen/RegisterScreen';
import font from './components/font/font';
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PasswordScreen from './views/AuthScreen/PasswordScreen';
import Navigation from './components/AuthNavigator';
import NewPromiseDay from './views/HomeScreen/MyPromises/NewPromise/NewPromiseDay';


export default function App() {
  const [fontsLoaded] = useFonts(font);

  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <NewPromiseDay />
    </SafeAreaProvider>
  );
}
