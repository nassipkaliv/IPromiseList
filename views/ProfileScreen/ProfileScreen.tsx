import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import ProfileDetails from '../../components/ProfileDetails';
import Font from '../../components/Font';
import GradientText from '../../components/GradientText';

const ProfileScreen: React.FC = ({ }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState("Pro Plan 👑");
  const [subscriptionAction, setSubscriptionAction] = useState("Unsubscribe...");

  const handleUnsubscribe = () => {
    if (subscriptionAction === "Unsubscribe...") {
      setSubscription("Free");
      setSubscriptionAction("Subscribe to Pro Plan...");
    } else {
      setSubscription("Pro Plan 👑");
      setSubscriptionAction("Unsubscribe...");
    }
  };

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
        
        <TouchableOpacity style={styles.changePass}>
          <GradientText colors={['#9BD683', '#FBEC67']} style={styles.btnText}>
            Change password...
          </GradientText>
        </TouchableOpacity>

        <Text style={styles.subsTitle}>Subscription Plan</Text>
          <View style={styles.subscriptionRow}>
            <Text style={styles.plan}>{subscription}</Text>
            <TouchableOpacity style={styles.subBtn} onPress={handleUnsubscribe}>
              <GradientText colors={['#9BD683', '#FBEC67']} style={styles.btnText}>
                {subscriptionAction}
              </GradientText>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.logoutBtn}>
              <GradientText colors={['#9BD683', '#FBEC67']} style={styles.logoutText}>
                Logout
              </GradientText>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121014',
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
    height: 46,
    width: '100%',
    marginBottom: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#3A3839',
    borderStyle: 'solid',
    borderRadius: 11,
    fontFamily: Font["Gilroy-Medium"],
    color: '#fff',
  },
  changePass: {
    marginLeft: 20,
    marginTop: 10,
    width: '100%',
  },
  btnText: {
    fontSize: 12,
    fontFamily: Font["Gilroy-Medium"],
    lineHeight: 33.5,
    opacity: 0,
    width: '100%',
  },
  subscriptionRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  subsTitle: {
    color: '#5A5A5A',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    marginLeft: 20,
    marginTop: 10,
  },
  subBtn: {
    width: '70%', 
    marginLeft: 80,
    paddingTop: 20,
  },
  plan: {
    color: '#fff',
    fontFamily: Font["Gilroy-Regular"],
    fontSize: 14,
    lineHeight: 33.5,
  },
  logoutBtn: {
    marginLeft: 20,
    marginTop: 20,
  },
  logoutText: {
    fontFamily: Font["Gilroy-Medium"],
    opacity: 0,
    fontSize: 14,
    lineHeight: 33.5
  }
});

export default ProfileScreen;
