import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import CustomSwitch from '../../components/CustomSwitch';
import LinearTextGradient from "expo-linear-gradient";
import GradientText from '../../components/GradientText';
import { useFonts } from 'expo-font';
import Font from '../../components/Font';
import { RootStackParamList } from '../../components/types/types';
import { NativeStackScreenProps } from "@react-navigation/native-stack";



const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121014',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Font['Gilroy-Regular'],
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 33.5,
    marginBottom: 42,
    marginTop: 95,
  },
});

export default HomeScreen;
