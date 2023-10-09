import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Font from "../../components/Font";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.notification1}>
        <View style={styles.notificationHeader}>
          <Text style={styles.date}>
            25.08.2023
          </Text>
          <Image
            source={require("../../assets/img/active.png")}
            style={styles.active}
          />
        </View>
        <Text style={styles.comment}>
          John, you’re crushing it! 🌟 Your dedication to promises
          is inspiring. Keep shining and achieving! 🌙
          #PromiseKeeper
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.notification2}>
        <Text style={styles.date}>
          24.08.2023
        </Text>
        <Text style={styles.comment}>
        John, 3 days of promise-keeping! 🌟 Your consistency is remarkable. Keep nurturing your commitment to success! 🌙
        #PromiseKeeper
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    marginTop: 150,
    width: '100%',
  },
  notification1: {
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'rgba(95, 187, 121, 0.08)',
  },
  notificationHeader: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  active: {
    height: 4,
    width: 4,
    marginLeft: 4, 
  },
  date: {
    fontFamily: Font["Gilroy-Medium"],
    fontSize: 12,
    lineHeight: 33.5,
    color: '#fff',
  },
  comment: {
    color: '#fff',
    fontSize: 14,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 20.5,
  },
  notification2: {
    paddingHorizontal: 20,
  },
});

export default Notifications;
