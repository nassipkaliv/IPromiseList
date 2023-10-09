import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import ProfileDetails from '../../components/ProfileDetails';
import Font from '../../components/Font';

const ProfileScreen: React.FC = ({ }) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <ProfileDetails />
      <View style={styles.editContainer}>
        <View style={styles.imgs}>
          <Image 
            style={styles.delete}
            source={require("../../assets/img/delete.png")}
          />
          <Image 
            style={styles.approve}
            source={require("../../assets/img/approve.png")}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Kira"
            placeholderTextColor="#fff"
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />
          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Got"
            placeholderTextColor="#fff"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="kiragot@gmail.com"
            placeholderTextColor="#fff"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121014'
  },
  editContainer: {
    position: 'absolute',
    marginTop: 180,
    width: '100%',
    paddingHorizontal: 20,
  },
  imgs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delete: {
    width: 14,
    height: 14,
    left: 0,
  },
  approve: {
    width: 14,
    height: 14,
    right: 0,
  },
  textInputs: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  inputLabel: {
    textAlign: 'left',
    color: '#5a5a5a',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 33.5,
    paddingLeft: 10,
  },
  input: {
    height: 57,
    width: '100%',
    marginBottom: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#3A3839',
    borderStyle: 'solid',
    borderRadius: 11,
    fontFamily: Font["Gilroy-Medium"],
    color: '#fff'
  },
});

export default ProfileScreen;
