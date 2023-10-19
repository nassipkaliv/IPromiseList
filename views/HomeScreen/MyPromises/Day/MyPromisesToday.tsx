import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Font from '../../../../components/Font';
import DaySwitcher from './DaySwitcher';

const MyPromiseToday = ({}) => {
  const [activeButtonDay, setActiveButtonDay] = useState(false); 

  const handleSwitcherChange = () => {
    setActiveButtonDay(!activeButtonDay);
  };
  
  const [activeButton, setActiveButton] = useState<string>('Day');
  

  return (
    <View style={styles.container}>
       <DaySwitcher value={activeButtonDay} onChange={handleSwitcherChange} />
      <View style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <Text style={styles.date}>24.08.2023</Text>
          <Image style={styles.plusImg} source={require("../../../../assets/img/plus.png")} />
        </View>
        
        
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <View style={styles.input}>
            <Image 
              source={require("../../../../assets/img/taskCheck.png")}
              style={styles.taskCheckImg}
            />
            <Text style={styles.taskText}>Some task 3</Text>
            <View style={styles.taskSettingsContainer}>
              <Image 
                source={require("../../../../assets/img/taskSettings.png")}
                style={styles.taskSettingsImg}
              />
            </View>
          </View>
        </View>

        {/* Second Input */}
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <View style={styles.input}>
            <Image 
              source={require("../../../../assets/img/taskCheck.png")}
              style={styles.taskCheckImg}
            />
            <Image 
              source={require("../../../../assets/img/taskReset.png")}
              style={styles.taskResetImg}
            />
            <Text style={styles.taskText}>Some  recurrent task 2</Text>
            <View style={styles.taskSettingsContainer}>
              <Image 
                source={require("../../../../assets/img/taskSettings.png")}
                style={styles.taskSettingsImg}
              />
            </View>
          </View>
        </View>
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
    marginTop: 120,
  },
  promiseBtn: {
    width: '100%',
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

export default MyPromiseToday;
