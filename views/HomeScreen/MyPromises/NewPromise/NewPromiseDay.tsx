import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Switch, ScrollView } from 'react-native';
import Font from '../../../../components/Font';
import ScrollPicker from "react-native-wheel-scrollview-picker";



const NewPromiseDay: React.FC = ({}) => {

  const [isDone, setIsDone] = useState(false);
  const [isRepeat, setIsRepeat] = useState(true);

  const toggleSwitch1 = () => setIsDone(previousState => !previousState);
  const toggleSwitch2 = () => setIsRepeat(previousState => !previousState);

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <ImageBackground
          source={require("../../../../assets/img/bg2.png")}
          style={styles.backgroundImage}>
    <ScrollView style={styles.container}>
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
          <View style={styles.textInputs}>
            <Text style={styles.inputLabel}>Title</Text>
              <TextInput
                style={styles.input}
                placeholder="Some task 3"
                placeholderTextColor="#fff"
                onChangeText={(text) => setTaskName(text)}
                value={taskName}
              />
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput
                multiline={true} 
                numberOfLines={5}
                style={styles.bigInput}
                placeholder="Text field in normal state field in normal state field in normal state field in normal state field in normal state field."
                placeholderTextColor="#fff"
                onChangeText={(text) => setTaskDescription(text)}
                value={taskDescription}
              />
          </View>

          <View style={styles.selectDate}>
          <Text style={styles.inputLabel}>Start Date</Text>
          <View style={styles.datePicker}>
            <View style={styles.scrollPickerWrapper}>
              <ScrollPicker
                dataSource={[
                  "Jan", "Febr", "Mar", "Apr",
                  "May", "Jun", "Jul", "Aug",
                  "Sep", "Oct", "Nov", "Dec"
                ]}
                selectedIndex={0} 
                renderItem={(data, index) => {
                  return (
                    <Text style={styles.scrollPickerItem}>{data}</Text>
                  );
                }}
                onValueChange={(data, selectedIndex) => {

                }}
                highlightColor='#fff'
                wrapperHeight={60}
                wrapperBackground="transparent"
                itemHeight={50}
                highlightBorderWidth={1}
              />
            </View>
            
            <View style={styles.scrollPickerWrapper}>
              <ScrollPicker
                dataSource={[
                  "1", "2", "3", "4", "5",
                  "6", "7", "8", "9", "10",
                  "11", "12", "13", "14", "15",
                  "16", "17", "18", "19", "20",
                  "21", "22", "23", "24", "25",
                  "26", "27", "28", "29", "30",
                ]}
                selectedIndex={0} 
                renderItem={(data, index) => {
                  return (
                    <Text style={styles.scrollPickerItem}>{data}</Text>
                  );
                }}
                onValueChange={(data, selectedIndex) => {

                }}
                highlightColor='#fff'
                wrapperHeight={60}
                wrapperBackground="transparent"
                itemHeight={50}
                highlightBorderWidth={1}
              />
            </View>

            <View style={styles.scrollPickerWrapper}>
              <ScrollPicker
                dataSource={[
                  "2023", "2022", "2021", "2020",
                ]}
                selectedIndex={0} 
                renderItem={(data, index) => {
                  return (
                    <Text style={styles.scrollPickerItem}>{data}</Text>
                  );
                }}
                onValueChange={(data, selectedIndex) => {

                }}
                highlightColor='#fff'
                wrapperHeight={60}
                wrapperBackground="transparent"
                itemHeight={50}
                highlightBorderWidth={1}
              />
            </View>
          </View>
        </View>

        <View style={styles.switcher}>
          <Text style={styles.switcherLabel}>Done</Text>
          <Switch
            trackColor={{false: '#9F9F9F', true: '#2FC594'}}
            thumbColor={isDone ? '#FFFFFF' : '#f4f3f4'}
            ios_backgroundColor="#9F9F9F"
            onValueChange={toggleSwitch1}
            value={isDone}
          />
        </View>
        
        <View style={styles.switcher}>
          <Text style={styles.switcherLabel}>Repeat Promise</Text>
          <Switch
            trackColor={{false: '#9F9F9F', true: '#2FC594'}}
            thumbColor={isRepeat ? '#FFFFFF' : '#f4f3f4'}
            ios_backgroundColor="#9F9F9F"
            onValueChange={toggleSwitch2}
            value={isRepeat}
          />
        </View>
        
        <View style={styles.repeatContainer}>
          <Text style={styles.repeatLabel}>Repeat every</Text>
          <View style={styles.scrollPickerRepeat}>
              <ScrollPicker
                dataSource={[
                  "1", "2", "3", "4", "5",
                  "6", "7", "8", "9", "10",
                  "11", "12", "13", "14", "15",
                  "16", "17", "18", "19", "20",
                  "21", "22", "23", "24", "25",
                  "26", "27", "28", "29", "30",
                ]}
                selectedIndex={0} 
                renderItem={(data, index) => {
                  return (
                    <Text style={styles.scrollPickerItem}>{data}</Text>
                  );
                }}
                onValueChange={(data, selectedIndex) => {

                }}
                highlightColor='#fff'
                wrapperHeight={60}
                wrapperBackground="transparent"
                itemHeight={50}
                highlightBorderWidth={1}
              />
            </View>
            <View style={styles.scrollPickerRepeat}>
              <ScrollPicker
                dataSource={[
                  "Days"
                ]}
                selectedIndex={0} 
                renderItem={(data, index) => {
                  return (
                    <Text style={styles.scrollPickerItem}>{data}</Text>
                  );
                }}
                onValueChange={(data, selectedIndex) => {

                }}
                highlightColor='#fff'
                wrapperHeight={60}
                wrapperBackground="transparent"
                itemHeight={50}
                highlightBorderWidth={1}
              />

              
            </View>
        </View>
      
        <View style={styles.endDateContainer}>
          <Text style={styles.endDate}>End Date</Text>
        
          <View style={styles.datePicker}>
            <View style={styles.scrollPickerWrapper}>
              <ScrollPicker
                dataSource={[
                  "Jan", "Febr", "Mar", "Apr",
                  "May", "Jun", "Jul", "Aug",
                  "Sep", "Oct", "Nov", "Dec"
                ]}
                selectedIndex={0} 
                renderItem={(data, index) => {
                  return (
                    <Text style={styles.scrollPickerItem}>{data}</Text>
                  );
                }}
                onValueChange={(data, selectedIndex) => {

                }}
                highlightColor='#fff'
                wrapperHeight={60}
                wrapperBackground="transparent"
                itemHeight={50}
                highlightBorderWidth={1}
              />
            </View>
            
            <View style={styles.scrollPickerWrapper}>
              <ScrollPicker
                dataSource={[
                  "1", "2", "3", "4", "5",
                  "6", "7", "8", "9", "10",
                  "11", "12", "13", "14", "15",
                  "16", "17", "18", "19", "20",
                  "21", "22", "23", "24", "25",
                  "26", "27", "28", "29", "30",
                ]}
                selectedIndex={0} 
                renderItem={(data, index) => {
                  return (
                    <Text style={styles.scrollPickerItem}>{data}</Text>
                  );
                }}
                onValueChange={(data, selectedIndex) => {

                }}
                highlightColor='#fff'
                wrapperHeight={60}
                wrapperBackground="transparent"
                itemHeight={50}
                highlightBorderWidth={1}
              />
            </View>

            <View style={styles.scrollPickerWrapper}>
              <ScrollPicker
                dataSource={[
                  "2023", "2022", "2021", "2020",
                ]}
                selectedIndex={0} 
                renderItem={(data, index) => {
                  return (
                    <Text style={styles.scrollPickerItem}>{data}</Text>
                  );
                }}
                onValueChange={(data, selectedIndex) => {

                }}
                highlightColor='#fff'
                wrapperHeight={60}
                wrapperBackground="transparent"
                itemHeight={50}
                highlightBorderWidth={1}
              />
            </View>
          </View>
        
        </View>
        
      </View>
    </ScrollView>
    </ImageBackground>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    zIndex: 0,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '115%',
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
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 33.5,
    textAlign: 'center',
  },
  textInputs: {
    marginTop: 10,
    paddingHorizontal: 30,
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
    justifyContent: 'center',
    height: 46,
    marginBottom: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#3A3839',
    borderStyle: 'solid',
    borderRadius: 11,
    fontFamily: Font["Gilroy-Medium"],
    color: '#fff',
  },
  bigInput: {
    height: 105,
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#3A3839',
    borderStyle: 'solid',
    borderRadius: 11,
    fontFamily: Font["Gilroy-Medium"],
    color: '#fff',
    fontSize: 14,
    lineHeight: 20.5,
  },
  selectDate: {
    paddingHorizontal: 35,
    marginTop: 15,
  },
  datePicker: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  scrollPickerItem: {
    width: 60,
    backgroundColor: 'transparent',
    fontFamily: Font["Gilroy-Regular"],
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  scrollPickerWrapper: {
    marginRight: 20,
  },
  switcher: {
    marginTop: 20,
    marginHorizontal: 40,
    display: 'flex',
    flexDirection: 'row',
  },
  switcherLabel: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 33.5,
    marginRight: 20,
  },
  repeatContainer: {
    marginHorizontal: 40,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  repeatLabel: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 33.5,
    marginRight: 30,
    marginTop: 10,
  },
  scrollPickerRepeat: {
    marginRight: 40,
  },
  endDateContainer: {
    marginHorizontal: 40,
    marginVertical: 20,
  },

  endDate: {
    color: '#fff',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 33.5,
  }
});

export default NewPromiseDay;
