import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Font from '../../../components/Font';

interface SwitcherProps {
  value: boolean;
  onChange: () => void;
}

const MyPromise: React.FC<SwitcherProps> = ({ value, onChange }) => {
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
                borderWidth: activeButton === button.label ? 0 : 0, 
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
    marginBottom: 77,
    backgroundColor: 'transparent',
    position: 'absolute',
    marginTop: 230,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default MyPromise;
