import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import ProfileDetails from '../../../../components/ProfileDetails';
import Switcher from '../../Switcher';
import MyPromise from '../MyPromises';
import DaySwitcher from './DaySwitcher';

const MyPromiseToday = ({}) => {
  const [activeButton, setActiveButton] = useState(false); // Initialize the active button state here

  // Define the onChange function to update the active button state
  const handleSwitcherChange = () => {
    setActiveButton(!activeButton);
  };

  return (
    <View style={styles.container}>
       <ImageBackground 
         source={require("../../assets/img/bg2.png")}
         style={styles.backgroundImage}
      />
      <ProfileDetails />

      <Switcher value={activeButton} onChange={handleSwitcherChange} />
      <MyPromise value={activeButton} onChange={handleSwitcherChange} />
      <DaySwitcher value={activeButton} onChange={handleSwitcherChange} />
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

export default MyPromiseToday;
