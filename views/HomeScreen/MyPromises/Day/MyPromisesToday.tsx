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
      <View style={styles.tasks}>
        <View style={styles.tasksHeader}>
          <Text style={styles.date}>24.08.2022</Text>
          {/* <Image 
            source={require("/assets/img/plus.png")}
            style={styles.plus}
          /> */}
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  tasks: {
    marginHorizontal: 20,
    width: '100%',
  },
  tasksHeader: {
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
  plus: {
    width: 15,
    height: 15,
  }
});

export default MyPromiseToday;
