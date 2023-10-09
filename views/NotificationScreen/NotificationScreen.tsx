import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Font from '../../components/Font';
import { RootStackParamList } from '../../components/types/types';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProfileDetails from '../../components/ProfileDetails';
import Notifications from './Notifications';
import DaySwitcher from '../HomeScreen/MyPromises/Day/DaySwitcher';

const NotificationScreen = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
         source={require("../../assets/img/bg2.png")}
         style={styles.backgroundImage}
      />
      <ProfileDetails />
      <Notifications />
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
});

export default NotificationScreen;
