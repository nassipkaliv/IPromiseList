import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import CustomSwitch from '../../components/CustomSwitch';
import LinearTextGradient from "expo-linear-gradient";
import GradientText from '../../components/GradientText';
import { useFonts } from 'expo-font';
import Font from '../../components/Font';
import { RootStackParamList } from '../../components/types/types';
import { NativeStackScreenProps } from "@react-navigation/native-stack";



const SettingsScreen = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
         source={require("../../assets/img/bg2.png")}
         style={styles.backgroundImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default SettingsScreen;
