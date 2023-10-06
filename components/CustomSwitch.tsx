import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface CustomSwitchProps {
  value: boolean;
  onChange: () => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            backgroundColor: !value ? '#FFF' : '#121014',
            borderWidth: value ? 1 : 0, 
          },
        ]}
        onPress={() => onChange()}
      >
        <Text style={{ color: !value ? '#000' : '#5C5C5D' }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            backgroundColor: value ? '#FFF' : '#121014',
            borderWidth: !value ? 1 : 0, 
          },
        ]}
        onPress={() => onChange()}
      >
        <Text style={{ color: value ? '#000' : '#5C5C5D' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '90%',
    borderWidth: 1,
    borderColor: '#3A3839',
    borderRadius: 31,
    overflow: 'hidden',
    marginBottom: 77,
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 13,
    borderRadius: 28,
  },
});

export default CustomSwitch;
