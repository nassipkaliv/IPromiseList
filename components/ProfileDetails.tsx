import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Font from './Font';
import CustomSwitch from './CustomSwitch';

const ProfileDetails: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/avatar.png")} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Hey, Kira!</Text>
        <Text style={styles.dateText}>Thursday, September 21th</Text>
      </View>
      <TouchableOpacity>
        <Image
          source={require('../assets/img/menu.png')}
          style={styles.svgIcon}
        />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 5,
    backgroundColor: 'transparent',
  },
  avatar: {
    width: 120,
    height: 120,
    marginRight: 0,
  },
  textContainer: {
    flex: 1,
    marginLeft: -15,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: Font["Gilroy-Regular"],
    color: '#fff',
    lineHeight: 33.5,
  },
  dateText: {
    fontSize: 12,
    color: '#5A5A5A',
    fontFamily: Font["Gilroy-Regular"],
  },
  svgIcon: {
    width: 16,
    height: 12,
    marginRight: 30,
  },
});

export default ProfileDetails;
