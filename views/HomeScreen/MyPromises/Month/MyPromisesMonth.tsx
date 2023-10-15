import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Font from '../../../../components/Font';
import DaySwitcher from '../Day/DaySwitcher';

const MyPromiseMonth = ({}) => {
  const [activeButtonDay, setActiveButtonDay] = useState(false); 

  const handleSwitcherChange = () => {
    setActiveButtonDay(!activeButtonDay);
  };
  
  const [activeButton, setActiveButton] = useState<string>('Day');
  

  return (
    <View style={styles.container}>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    marginTop: 300,
  },
  taskContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
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
    marginLeft: '75%',
    marginTop: 10,
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#3A3839',
    borderStyle: 'solid',
    borderRadius: 11,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderColor: '#3A3839',
    height: 46,
  },
  taskCheckImg: {
    width: 17,
    height: 17,
  },
  taskText: {
    color: '#fff',
    fontFamily: Font["Gilroy-Regular"],
    fontSize: 14,
    lineHeight: 33.5,
    marginLeft: 20,
    paddingTop: 3,
  },
  taskSettingsContainer: {
    marginLeft: 'auto',
  },
  taskSettingsImg: {
    width: 2,
    height: 14,
  },
  taskResetImg: {
    width: 13,
    height: 14,
    marginLeft: 15,
  },
  newPromise: {
    alignItems: 'center',
  },
  promiseBtn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
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
