import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import Font from '../../../components/Font';

const SearchContainer: React.FC = ({ }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchRow}>
          <View style={styles.searchImgContainer}>
            <Image
              style={styles.searchImg}
              source={require('../../../assets/img/searchImg.png')}
            />
          </View>
          <TextInput
              style={styles.inputContainer}
              placeholderTextColor="#5a5a5a"
              placeholder="Search plugins"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121014',
  },
  searchContainer: {
    marginTop: 230,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    position: 'absolute',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchImgContainer: {
    paddingVertical: 9,
    borderBottomColor: '#2fc594',
    borderBottomWidth: 1,
  },
  searchImg: {
    width: 20,
    height: 20,
    marginRight: 20,
    marginLeft: 10,
  },
  inputContainer: {
    flex: 1,
    height: 40,
    fontFamily: Font['Gilroy-Medium'],
    fontSize: 14,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#3a3839',
  },
});

export default SearchContainer;
