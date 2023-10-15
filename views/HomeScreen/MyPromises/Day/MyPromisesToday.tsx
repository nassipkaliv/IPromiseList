import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import Font from '../../../../components/Font';


const MyPromiseToday = ({}) => {
  const [activeButton, setActiveButton] = useState(false); // Initialize the active button state here

  // Define the onChange function to update the active button state
  const handleSwitcherChange = () => {
    setActiveButton(!activeButton);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <Text style={styles.date}>24.08.2023</Text>
          <Image style={styles.plusImg} source={require("../../../../assets/img/plus.png")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    marginTop: 150,
  },
  taskContainer: {
    marginTop: 200,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  taskHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  date: {
    color: '#5a5a5a',
    fontFamily: Font["Gilroy-Regular"],
    fontSize: 12,
    lineHeight: 33.5,
    
  },
  plusImg: {
    width: 15,
    height: 13,
    marginLeft: '80%',
    marginTop: 5,
  },
});

export default MyPromiseToday;