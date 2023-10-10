import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Font from '../../../../components/Font';

const NewPromiseDay: React.FC = ({}) => {
  return (
    <View style={styles.container}>
         <ImageBackground 
          source={require("../../../../assets/img/bg2.png")}
          style={styles.backgroundImage}
          />
        <View style={styles.editContainer}>
          <View style={styles.imgs}>
            <Image 
              style={styles.delete}
              source={require("../../../../assets/img/delete.png")}
            />
            <Image 
              style={styles.approve}
              source={require("../../../../assets/img/approve.png")}
            />
          </View>
        </View>
        <View style={styles.promiseContainer}>
          <Text style={styles.title}>New Promise</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  editContainer: {
    position: 'absolute',
    width: '100%',
    marginTop: 70,
    paddingHorizontal: 20,
  },
  imgs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delete: {
    width: 17,
    height: 17,
    left: 0,
  },
  approve: {
    width: 17,
    height: 17,
    right: 0,
  },
  promiseContainer: {
    position: 'absolute',
    marginTop: 80,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 33.5,
  }
});

export default NewPromiseDay;
