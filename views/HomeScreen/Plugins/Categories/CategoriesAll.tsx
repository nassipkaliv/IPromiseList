import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ProfileDetails from '../../../../components/ProfileDetails';
import Font from '../../../../components/Font';
import SearchContainer from '../SearchContainer';

const CategoriesAll: React.FC = ({ }) => {
  return (
    <View style={styles.container}>
      <ProfileDetails />
      <SearchContainer />
      <View style={styles.categoryHeader}>
        <Text style={styles.titleLeft}>Category</Text>
        <Text style={styles.titleRight}>All</Text>
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Goal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Energy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Happiness</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.buttonLong}>
            <Text style={styles.buttonText}>Mindfulness/Willpower</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Common</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Relationships</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Belief</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Motivation</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Health</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Business</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Hobby</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Relaxation</Text>
          </TouchableOpacity>
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
    marginTop: 15,
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
  buttonLong: {
    height: 35,
    width: 235,
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
});

export default CategoriesAll;
