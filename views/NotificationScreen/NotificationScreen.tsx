import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Font from '../../components/Font';
import { RootStackParamList } from '../../components/types/types';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProfileDetails from '../../components/ProfileDetails';


const NotificationScreen = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
         source={require("../../assets/img/bg2.png")}
         style={styles.backgroundImage}
      />
      <ProfileDetails />
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

export default NotificationScreen;
