import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Font from "../../components/Font";

interface SwitcherProps {
  value: boolean;
  onChange: () => void;
}

const Switcher: React.FC<SwitcherProps> = ({ value, onChange }) => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(value);

  const handleLogInPress = () => {
    setActiveButton(true);
    onChange();
    
  };

  const handleSignUpPress = () => {
    setActiveButton(false);
    onChange();
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            backgroundColor: activeButton ? '#2FC594' : '#121014',
            borderWidth: !activeButton ? 0 : 1,
          },
        ]}
        onPress={handleLogInPress}
      >
        <Text style={{ color: activeButton ? '#fff' : '#fff' }}>My Promises</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            backgroundColor: !activeButton ? '#2FC594' : '#121014',
            borderWidth: activeButton ? 0 : 1,
          },
        ]}
        onPress={handleSignUpPress}
      >
        <Text style={{ color: !activeButton ? '#fff' : '#fff' }}>Plugins</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: '#3A3839',
    borderRadius: 31,
    overflow: 'hidden',
    marginBottom: 77,
    backgroundColor: 'transparent',
    position: 'absolute',
    marginTop: 150,
    left: '5%',
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 13,
    borderRadius: 28,
    fontFamily: Font["Gilroy-Medium"],
  },
});

export default Switcher;
