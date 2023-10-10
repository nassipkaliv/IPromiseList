import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Font from '../../../../components/Font';

interface DaySwitcherProps {
  value: boolean;
  onChange: () => void;
}

const DaySwitcher: React.FC<DaySwitcherProps> = ({ value, onChange }) => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState<string>('TODAY');

  const buttons = [
    { label: 'YESTERDAY' },
    { label: 'TODAY'},
    { label: 'TOMORROW'},
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
            <Text style={[styles.btnText, { color: activeButton === button.label ? '#fff' : '#5B5A5B' }]}>
              {button.label}
            </Text>
          </TouchableOpacity>
          {activeButton === button.label && <View style={styles.line} />}
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
    position: 'absolute',
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
    fontSize: 12,
    fontFamily: Font['Gilroy-Medium'],
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: '#2FC594',
  },
});

export default DaySwitcher;
