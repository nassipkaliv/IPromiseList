import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import GradientText from '../../components/GradientText';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
         source={require("../../assets/img/bg.png")}
         style={styles.backgroundImage}
      >
        <Text style={styles.subTitle}>Welcome to</Text>
        <Text style={styles.title}>I Promise List</Text>
        <View style={styles.details}>
          <TouchableOpacity style={styles.btn}>
            <GradientText colors={['#9BD683', '#FBEC67']} style={styles.btnText}>
              Get Started
            </GradientText>
          </TouchableOpacity>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
            The application helps people become{"\n"}
              happier by achieving their goals
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  subTitle: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 106,
    fontSize: 14,
    lineHeight: 33.5,
    fontFamily: 'Gilroy Regular',
  },
  title: {
    color: '#a0d780',
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 33.5,
  },
  details: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 90,
  },
  btn: {
    width: 178,
    height: 54,
    borderRadius: 60,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 21,
  },
  btnText: {
    fontSize: 20,
    opacity: 0,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: -25,
  },
  descriptionContainer: {
    alignItems: 'center',
  },
  description: {
    color: '#EFEFEF',
    textAlign: 'center',
    fontSize: 14,
  }
});
