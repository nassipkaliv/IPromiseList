import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import Font from '../../../components/Font';
import GradientText from '../../../components/GradientText';
import ProfileDetails from '../../../components/ProfileDetails';

const InstalledPlugin: React.FC = ({ }) => {


  return (
    <ScrollView style={styles.container}>
      <ProfileDetails />
      <View style={styles.containerHeader}>
        <Image 
          source={require("../../../assets/img/delete.png")}
          style={styles.delete}
        />
        <TouchableOpacity style={styles.checkBtn}>
          <Text style={styles.btnText}>Install</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pluginContainer}>
        <View style={styles.pluginHeader}>
          <Text style={styles.pluginName}>Plugin Name:</Text>
          <Text style={styles.pluginTopic}>Willpower Development</Text>
            <GradientText colors={['#9BD683', '#FBEC67']} style={styles.checkText}>
              Not installed
            </GradientText>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121014',
  },
  containerHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 180,
    paddingHorizontal: 20,
  },
  delete: {
    width: 14,
    height: 14,
  },
  checkBtn: {
    margin: 0,
  },
  btnText: {
    color: '#9977DC',
    fontFamily: Font["Gilroy-Medium"],
    fontSize: 14,
    lineHeight: 33.5,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  pluginContainer: {
    paddingHorizontal: 30,
  },
  pluginHeader: {
    marginVertical: 5,
    paddingHorizontal: 0,
  },
  pluginName: {
    color: '#5a5a5a',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 33.5,
  },
  pluginTopic: {
    color: '#fff',
    fonSize: 14,
    fontFamily: Font["Gilroy-Medium"],
    lineHeight: 33.5,
  },
  checkText: {
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 33.5,
  }
});


export default InstalledPlugin;
