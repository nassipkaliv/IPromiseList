import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Font from '../../../../components/Font';

const DropdownMenu = ({ visible, onClose }) => {
  return visible ? (
    <View style={styles.dropdownMenu}>
      <Text>Dropdown Menu Content</Text>
      <TouchableOpacity onPress={onClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  ) : null;
};



const MyPromiseTomorrow = ({}) => {
  const [activeButtonDay, setActiveButtonDay] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const handleSwitcherChange = () => {
    setActiveButtonDay(!activeButtonDay);
  };

  const toggleCheckImage = () => {
    setActiveButtonDay(!activeButtonDay);
  };

  const toggleDropdownMenu = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  const taskCheckImages = activeButtonDay
    ? require("../../../../assets/img/taskNoCheck.png")
    : require("../../../../assets/img/taskCheck.png");

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <Text style={styles.date}>25.08.2023</Text>
          <Image style={styles.plusImg} source={require("../../../../assets/img/plus.png")} />
        </View>
        
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <View style={styles.input}>
            <TouchableOpacity onPress={toggleCheckImage}>
              <Image
                source={taskCheckImages}
                style={styles.taskCheckImg}
              />
            </TouchableOpacity>
            <Text style={styles.taskText}>Some task 3</Text>
            <View style={styles.taskSettings}>
            <TouchableOpacity onPress={toggleDropdownMenu} style={styles.taskSettings}>
              <Image
                source={require("../../../../assets/img/taskSettings.png")}
                style={styles.taskSettingsImg}
              />
            </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Second Input */}
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <View style={styles.input}>
            <TouchableOpacity onPress={toggleCheckImage}>
              <Image
                source={taskCheckImages}
                style={styles.taskCheckImg}
              />
            </TouchableOpacity>
            <Image 
              source={require("../../../../assets/img/taskReset.png")}
              style={styles.taskResetImg}
            />
            <Text style={styles.taskText}>Some  recurrent task 2</Text>
            <View style={styles.taskSettings}>
            <TouchableOpacity onPress={toggleDropdownMenu} style={styles.taskSettings}>
              <Image
                source={require("../../../../assets/img/taskSettings.png")}
                style={styles.taskSettingsImg}
              />
            </TouchableOpacity>
            </View>
          </View>
        </View>

      {/* Third Input */}
      <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TouchableOpacity onPress={toggleCheckImage}>
              <Image
                source={taskCheckImages}
                style={styles.taskCheckImg}
              />
            </TouchableOpacity>
            <Image 
              source={require("../../../../assets/img/taskReset.png")}
              style={styles.taskResetImg}
            />
            <Text style={styles.taskText}>Some  recurrent task 1</Text>
            <View style={styles.taskSettings}>
            <TouchableOpacity onPress={toggleDropdownMenu} style={styles.taskSettings}>
              <Image
                source={require("../../../../assets/img/taskSettings.png")}
                style={styles.taskSettingsImg}
              />
            </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>

      <DropdownMenu visible={showDropdownMenu} onClose={() => setShowDropdownMenu(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    marginTop: 150,
  },
  taskContainer: {
    marginTop: 200,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  taskHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  date: {
    color: '#5a5a5a',
    fontFamily: Font["Gilroy-Regular"],
    fontSize: 12,
    lineHeight: 33.5,
  },
  plusImg: {
    width: 15,
    height: 13,
    marginLeft: '75%',
    marginTop: 10,
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
    paddingHorizontal: 15,
    borderColor: '#3A3839',
    height: 46,
  },
  taskCheckImg: {
    width: 17,
    height: 17,
  },
  taskText: {
    color: '#fff',
    fontFamily: Font["Gilroy-Regular"],
    fontSize: 14,
    lineHeight: 33.5,
    marginLeft: 20,
    paddingTop: 3,
  },
  taskSettings: {
    marginLeft: 'auto',
    opacity: 1,
  },
  taskSettingsImg: {
    width: 2,
    height: 14,
  },
  taskResetImg: {
    width: 13,
    height: 14,
    marginLeft: 15,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 50, // Adjust this to position the dropdown correctly
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
});

export default MyPromiseTomorrow;
