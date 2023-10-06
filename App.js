import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './views/AuthScreen/LoginScreen';
import StartScreen from './views/StartScreen/StartScreen';
import RegisterScreen from './views/AuthScreen/RegisterScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreen />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
