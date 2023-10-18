import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import ProfileDetails from '../../../../components/ProfileDetails';
import Font from '../../../../components/Font';


const CategoriesAll: React.FC = ({ }) => {
  
  return (
    <View style={styles.container}>
      <ProfileDetails />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121014',
  },
  
});

export default CategoriesAll;
