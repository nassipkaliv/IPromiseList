import React, {useState, useEffect} from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export interface SplashScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const LoadingScreen: React.FC = ({ navigation }: SplashScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds (you can replace this with your actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Start");
    }, 6500);

    // Clear the timeout to prevent memory leaks
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (isLoading)
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.backImg}
        source={require("../../assets/img/bgImg.gif")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg: {
    flex: 1,
    resizeMode: 'cover',
  }
});


export default LoadingScreen;