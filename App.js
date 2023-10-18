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
import NewPromise from './views/HomeScreen/MyPromises/NewPromise/NewPromise';
import NewPromiseDay from './views/HomeScreen/MyPromises/NewPromise/NewPromiseDay';
import NewPromiseWeek from './views/HomeScreen/MyPromises/NewPromise/NewPromiseWeek';
import NewPromiseMonth from './views/HomeScreen/MyPromises/NewPromise/NewPromiseMonth';
import EditPromise from './views/HomeScreen/MyPromises/NewPromise/EditPromise';
// Добавьте в return эти скрины чтобы увидеть их

export default function App() {
  const [fontsLoaded] = useFonts(font);

  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
