import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import ProfileDetails from '../../components/ProfileDetails';
import Switcher from './Switcher';
import MyPromise from './MyPromises/MyPromises';
import DaySwitcher from './MyPromises/Day/DaySwitcher';
import InstalledPlugin from './Plugins/InstalledPlugin';
import MyPromiseToday from './MyPromises/Day/MyPromisesToday';
import MyPromiseTomorrow from './MyPromises/Day/MyPromiseTomorrow';
import MyPromiseWeek from './MyPromises/Week/MyPromisesWeek';
import MyPromiseMonth from './MyPromises/Month/MyPromisesMonth';
import CategoriesAll from './Plugins/Categories/CategoriesAll';
import CategoriesInstalled from './Plugins/Categories/CategoriesInstalled';

const HomeScreen: React.FC = ({ }) => {
  const [activeButton, setActiveButton] = useState(false); 

  const handleSwitcherChange = () => {
    setActiveButton(!activeButton);
  };

  return (
    <ImageBackground 
         source={require("../../assets/img/bg2.png")}
         style={styles.backgroundImage}
    >
    <ScrollView style={styles.container}>
      <ProfileDetails />
      <Switcher value={activeButton} onChange={handleSwitcherChange} />
      {/* <MyPromise value={activeButton} onChange={handleSwitcherChange} />  когда надо включить что то из MyPromise*/} 
      {/* <MyPromiseToday /> */}
      {/* <MyPromiseWeek /> */}
      {/* <MyPromiseMonth /> */}
      {/* <CategoriesAll /> */}
      <CategoriesInstalled />
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;