import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

interface CustomSwitchProps {
  value: boolean;
  onChange: (newValue: boolean) => void; // Pass the newValue to the parent component
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onChange }) => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop

  const handleLogInPress = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
    // Call the onChange function with the new value
    onChange(true);
  };

  const handleSignUpPress = () => {
    // Navigate to the Register screen
    navigation.navigate('Register');
    // Call the onChange function with the new value
    onChange(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            backgroundColor: !value ? '#FFF' : '#121014',
            borderWidth: value ? 0 : 0,
          },
        ]}
        onPress={handleLogInPress} // Call handleLogInPress on Log In button press
      >
        <Text style={{ color: !value ? '#000' : '#5C5C5D' }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            backgroundColor: value ? '#FFF' : '#121014',
            borderWidth: !value ? 0 : 0,
          },
        ]}
        onPress={handleSignUpPress} // Call handleSignUpPress on Sign Up button press
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
