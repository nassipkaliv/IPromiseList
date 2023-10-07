import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import CustomSwitch from '../../components/CustomSwitch';
import LinearTextGradient from "expo-linear-gradient";
import GradientText from '../../components/GradientText';
import { useFonts } from 'expo-font';
import Font from '../../components/Font';

const PasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);

  const handleLogin = () => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  const toggleSwitch = () => {
    setIsLogIn((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>I Promise list</Text>

      <CustomSwitch value={isLogIn} onChange={toggleSwitch} />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={!isEnabled}
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        placeholderTextColor="#fff"
        onChangeText={(text) => setConfirmPass(text)}
        value={confirmPass}
        secureTextEntry={!isEnabled}
      />


      <TouchableOpacity style={styles.loginButton}>
        <GradientText colors={['#9BD683', '#FBEC67']} style={styles.loginButtonText}>
          
        </GradientText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121014',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Font['Gilroy-Regular'],
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 33.5,
    marginBottom: 42,
    marginTop: 95,
  },
  input: {
    height: 57,
    width: '90%',
    marginBottom: 18,
    paddingLeft: 27,
    borderWidth: 1,
    borderColor: '#3A3839',
    borderStyle: 'solid',
    borderRadius: 11,
    fontFamily: Font['Gilroy-Medium'],
    color: '#fff'
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 50,
    marginBottom: 20,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '90%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#3A3839',
  },
  orText: {
    color: '#3A3839',
    fontSize: 12,
    marginHorizontal: 10,
    fontFamily: Font['Gilroy-Medium'],
  },
  googleButton: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    height: 57,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#3A3839',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  googleButtonText: {
    color: '#FFF',
    fontSize: 15,
    margin: 12,
    fontFamily: Font['Gilroy-Medium'],
  },
  loginButton: {
    width: '90%',
    height: 54,
    borderRadius: 60,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 48, 
    
  },
  loginButtonText: {
    fontSize: 20,
    opacity: 0,
    fontWeight: 400,
    lineHeight: 20.5,
    fontFamily: Font['Gilroy-Medium'],
  },
});

export default PasswordScreen;
