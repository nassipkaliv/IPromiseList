import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Font from '../../../components/Font';
import DaySwitcher from './Day/DaySwitcher';
import MyPromiseToday from './Day/MyPromisesToday';

interface MyPromiseProps {
  value: boolean;
  onChange: () => void;
}



const MyPromise: React.FC<MyPromiseProps> = ({ value, onChange }) => {

  const [activeButtonDay, setActiveButtonDay] = useState(false); 

  const handleSwitcherChange = () => {
    setActiveButtonDay(!activeButtonDay);
  };
  
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState<string>('Day');

  const buttons = [
    { label: 'Day', image: require('../../../assets/img/circle.png') },
    { label: 'Week', image: require('../../../assets/img/circle.png') },
    { label: 'Month', image: require('../../../assets/img/circle.png') },
  ];

  const handleButtonPress = (label: string) => {
    setActiveButton(label);
    onChange();
  };

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <View key={button.label} style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                borderWidth: activeButton === button.label ? 0 : 0, // Change to 1 when active
              },
            ]}
            onPress={() => handleButtonPress(button.label)}
          >
            <Text style={[styles.btnText, { color: activeButton === button.label ? '#fff' : '#fff' }]}>
              {button.label}
            </Text>
          </TouchableOpacity>
          {activeButton === button.label && <View style={styles.line} />}
          {activeButton === button.label && <Image source={button.image} style={styles.circle} />}
        </View>
      ))}

      <DaySwitcher value={activeButtonDay} onChange={handleSwitcherChange} />
      <MyPromiseToday />
      <View style={styles.newPromise}>
        <TouchableOpacity style={styles.promiseBtn}>
          <Image style={styles.plusImg} source={require("../../../assets/img/newPromise.png")}/>
          <Text style={styles.promiseText}>new promise</Text>
        </TouchableOpacity>
      </View>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 25,
    position: 'absolute',
    marginTop: 230,
    zIndex: 1,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 28,
  },
  btnText: {
    fontSize: 14,
    fontFamily: Font['Gilroy-Medium'],
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: '#2FC594',
  },
  circle: {
    height: 11,
    width: 11,
    marginTop: 3,
  },
  newPromise: {
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 600,
  },
  promiseBtn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  plusImg: {
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

export default MyPromise;
