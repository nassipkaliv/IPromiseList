import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import ProfileDetails from '../../components/ProfileDetails';
import Switcher from './Switcher';
import MyPromise from './MyPromises/MyPromises';
import DaySwitcher from './MyPromises/Day/DaySwitcher';
import InstalledPlugin from './Plugins/InstalledPlugin';
import MyPromiseToday from './MyPromises/Day/MyPromisesToday';

const HomeScreen: React.FC = ({ }) => {
  const [activeButton, setActiveButton] = useState(false); 

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
      <MyPromiseToday />
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

export default HomeScreen;