import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
         source={require("../../assets/img/bg.png")}
         style={styles.backgroundImage}
      >
        <Text>Welcome to</Text>
        <Text>I Promise List</Text>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              lineHeight: 20.5,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgroundImage: {
    height: '100%',
    width: 'auto',
  },
  btn: {
    // Style your button here
  }
});
