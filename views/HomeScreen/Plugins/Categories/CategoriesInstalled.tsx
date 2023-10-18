import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ProfileDetails from '../../../../components/ProfileDetails';
import Font from '../../../../components/Font';
import SearchContainer from '../SearchContainer';

const CategoriesInstalled: React.FC = ({ }) => {
  const [installedActive, setInstalledActive] = useState(true);
  const [availableActive, setAvailableActive] = useState(false);
  const [customActive, setCustomActive] = useState(false);

  return (
    <View style={styles.container}>
      <ProfileDetails />
      <SearchContainer />
      <View style={styles.categoryHeader}>
        <Text style={styles.titleLeft}>Category</Text>
        <Text style={styles.titleRight}>Text</Text>
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.categoryRow}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: installedActive ? '#9977DC' : '#343434' },
            ]}
            onPress={() => {
              setInstalledActive(true);
              setAvailableActive(false);
              setCustomActive(false);
            }}
          >
            <Text style={styles.buttonText}>Installed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: availableActive ? '#9977DC' : '#343434' },
            ]}
            onPress={() => {
              setInstalledActive(false);
              setAvailableActive(true);
              setCustomActive(false);
            }}
          >
            <Text style={styles.buttonText}>Available</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: customActive ? '#9977DC' : '#343434' },
            ]}
            onPress={() => {
              setInstalledActive(false);
              setAvailableActive(false);
              setCustomActive(true);
            }}
          >
            <Text style={styles.buttonText}>Custom</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <View style={styles.input}>
            <Text style={styles.checkEnabled}>
              {availableActive ? 'Be happier' : 'Goal achivement basic'}
            </Text>
            <Text style={availableActive ? styles.installedText : styles.checkDisabled}>
              {availableActive ? 'Install' : 'Enabled'}
            </Text>
          </View>
        </View>

        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <View style={styles.input}>
            <Text style={styles.checkEnabled}>
              {availableActive ? 'Boost motivation basic' : 'Goal achivement advanced'}
            </Text>
            <Text style={availableActive ? styles.installedText : styles.checkDisabledTrue}>
              {availableActive ? 'Install' : 'Disabled'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryHeader: {
    position: 'absolute',
    marginTop: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '100%',
  },
  titleLeft: {
    color: '#fff',
    fontFamily: Font['Gilroy-Medium'],
    fontSize: 18,
  },
  titleRight: {
    color: '#fff',
    fontFamily: Font['Gilroy-Medium'],
    fontSize: 18,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    marginTop: 330,
    position: 'absolute',
  },
  categoryRow: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    height: 35,
    width: 115,
    borderRadius: 28,
    backgroundColor: '#9977DC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: Font['Gilroy-Regular'],
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 33.5,
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderColor: '#3A3839',
    height: 46,
  },
  checkEnabled: {
    color: '#fff',
    fontFamily: Font['Gilroy-Regular'],
    fontSize: 14,
  },
  checkDisabled: {
    color: '#2fc594',
    fontFamily: Font['Gilroy-Medium'],
    fontSize: 14,
    textAlign: 'right',
  },
  checkDisabledTrue: {
    color: '#5a5a5a',
    fontFamily: Font['Gilroy-Medium'],
    fontSize: 14,
    textAlign: 'right',
  },
  installedText: {
    color: '#9977DC',
    fontFamily: Font['Gilroy-Medium'],
    fontSize: 14,
    textAlign: 'right',
  },
});

export default CategoriesInstalled;
