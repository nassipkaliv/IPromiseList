import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
         source={require("../../assets/img/bg2.png")}
         style={styles.backgroundImage}
      />
      <Image
        source={require('../../assets/img/avatar.png')} 
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Hey, Kira!</Text>
        <Text style={styles.dateText}>Thursday, September 21th</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  textContainer: {
    position: 'absolute',
    top: 20,
    left: 200, // Adjust the left position as needed
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Change the color as needed
  },
  dateText: {
    fontSize: 16,
    color: 'white', // Change the color as needed
  },
});

export default HomeScreen;
