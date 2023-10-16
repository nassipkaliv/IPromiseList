import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Font from '../../../../components/Font';


const MyPromiseMonth = ({}) => {
  const [month, setMonth] = useState(1); 
  const months = [
    'January 2023', 'September 2023', 'March 2023', 'April 2023', 'May 2023', 'June 2023',
    'July 2023', 'August 2023', 'February 2023', 'October 2023', 'November 2023', 'December 2023'
  ];

  const handleMonthChange = (increment) => {
    if (increment) {
      setMonth((month + 1) % 12);
    } else {
      setMonth((month - 1 + 12) % 12);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <TouchableOpacity onPress={() => handleMonthChange(false)} style={styles.leftArrow}>
          <Image 
            style={styles.leftArrowImg}
            source={require("../../../../assets/img/leftArrow.png")}
          />
        </TouchableOpacity>
        <Text style={styles.monthText}>{months[month]}</Text>
        <TouchableOpacity onPress={() => handleMonthChange(true)} style={styles.rightArrow}>
          <Image 
            style={styles.rightArrowImg}
            source={require("../../../../assets/img/rightArrow.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 250,
    alignItems: 'center',
  },
  slider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftArrow: {
    opacity: 1,
    padding: 80, 
  },
  rightArrow: {
    opacity: 1,
    padding: 80,
  },
  leftArrowImg: {
    width: 8,
    height: 14,
  },
  rightArrowImg: {
    width: 8,
    height: 14,
  },
  monthText: {
    fontFamily: Font["Gilroy-Medium"],
    fontSize: 18,
    color: '#fff',
  },
});

export default MyPromiseMonth;
