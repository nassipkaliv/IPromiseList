import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Font from '../../../../components/Font';

import { RootStackParamList } from '../../../../components/types/types';


const MyPromiseMonth = ({}) => {
  const [month, setMonth] = useState(1); 
  const months = [
    'January 2023', 'September 2023', 'March 2023', 'April 2023', 'May 2023', 'June 2023',
    'July 2023', 'August 2023', 'February 2023', 'October 2023', 'November 2023', 'December 2023'
  ];

  const calendarData = Array.from({ length: 31 }, (_, index) => (index + 1).toString());

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

      <View style={styles.weekDays}>
            <TouchableOpacity style={styles.day}>
              <Text style={styles.textDay}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.day}>
              <Text style={styles.textDay}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.day}>
              <Text style={styles.textDay}>W</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.day}>
              <Text style={styles.textDay}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.day, { backgroundColor: 'transparent' }]}>
              <Text style={styles.textDay}>F</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.day}>
              <Text style={[styles.textDay, { color: '#2FC594' }]}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.day, { backgroundColor: 'transparent' }]}>
                <Text style={[styles.textDay, { color: '#2FC594' }]}>S</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.separatorContainer}>
            <View style={styles.lineSeparator} />
          </View>


          <View style={styles.calendar}>
            {calendarData.map((day) => (
              <TouchableOpacity key={day} style={styles.day}>
                <Text style={styles.textDay}>{day}</Text>
              </TouchableOpacity>
            ))}
          </View>

      <View style={styles.newPromise}>
          <TouchableOpacity style={styles.promiseBtn}>
            <Image style={styles.plus} source={require("../../../../assets/img/newPromise.png")}/>
            <Text style={styles.promiseText}>new promise</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 230,
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
  weekDays: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -50,
    marginBottom: 0,
    paddingHorizontal: 20,
  },
  day: {
    display: 'flex',
    flexDirection: 'row',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,

  },
  textDay: {
    color: '#fff',
    fontSize: 18,
    fontFamily: Font["Gilroy-Bold"],
    paddingHorizontal: 11,
    paddingVertical: 10,
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 0,
  },
  separatorContainer: {
    height: 1,  
    width: '100%',
    paddingHorizontal: 30, 
    alignItems: 'center', 
  },
  lineSeparator: {
    height: 1,
    width: '100%', 
    backgroundColor: '#ffffff',
    position: 'absolute',
  },
  newPromise: {
    justifyContent: 'center',
    marginTop: 50,
  },
  promiseBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  plus: {
    marginVertical: 2,
    width: 15,
    height: 15,
    backgroundColor: 'transparent',
    marginRight: 12,
  },
  promiseText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 18.5,
  },
});

export default MyPromiseMonth;
