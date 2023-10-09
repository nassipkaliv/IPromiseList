import React, { useState } from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity, Image, ScrollView, } from 'react-native';
import Font from '../../../components/Font';
import GradientText from '../../../components/GradientText';
import ProfileDetails from '../../../components/ProfileDetails';

const InstalledPlugin: React.FC = ({ }) => {

  const [isInstalled, setIsInstalled] = useState(false);

  const handleInstallClick = () => {
    setIsInstalled(!isInstalled); 
  };

  return (
    <ScrollView style={styles.container}>
      <ProfileDetails />
      <View style={styles.containerHeader}>
        <Image 
          source={require("../../../assets/img/delete.png")}
          style={styles.delete}
        />
        <TouchableOpacity style={styles.checkBtn}>
          <Text style={styles.btnText}>{isInstalled ? 'Enable' : 'Install'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pluginContainer}>
        <View style={styles.pluginHeader}>
          <Text style={styles.pluginTitle}>Plugin Name:</Text>
          <Text style={styles.pluginTopic}>Willpower Development</Text>
            <GradientText colors={['#9BD683', '#FBEC67']} style={styles.checkText}>
              {isInstalled ? 'Installed' : 'Not installed'}
            </GradientText>
        </View>
        
        <View style={styles.pluginDescription}>
          <Text style={styles.pluginTitle}>Description:</Text>
          <Text style={styles.startText}>Simple steps to develop strong willpower.</Text>
          <Text style={styles.paragraph}>
            The main ideas of this plugin are: {"\n"}
            1. Choose your willpower challenge. It might be habit that you want to brake or doing something that you have been avoiding or some other thing that specific only for you. {"\n"}
            2. Start using technics that increase your willpower:
          </Text>
          <View style={styles.listContainer}>
            <View style={styles.list}>
              <Text style={styles.listBullet}>•</Text>
              <Text style={styles.listText}>Practice simple meditation that increases your mindfulness.</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.listBullet}>•</Text>
              <Text style={styles.listText}>Every day track you decisions about your willpower challenge.</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.listBullet}>•</Text>
              <Text style={styles.listText}>When feeling temptation or stress, start doing one of the technics (corresponding tasks in the plugin) that can help you resist temptation and overcome stress.</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.listBullet}>•</Text>
              <Text style={styles.listText}>Every evening write your fillings about willpower during a day to a dairy </Text>
            </View>
          </View>

          <Text style={styles.paragraph}>
            This plugin is based on the Kelly McGonigal book
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.amazon.com/Willpower-Instinct-Self-Control-Works-Matters/dp/1583335080')}>
            <Text style={styles.linkText}>The Willpower Instinct: How Self-Control Works, Why It Matters, and What You Can Do to Get More of It</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pluginTasks}>
          <Text style={styles.pluginTitle}>Tasks:</Text>
          <Text style={styles.startText}>At start date:</Text>
          <View style={styles.tasksList}>
            <Text style={styles.listBullet}>•</Text>
            <Text style={styles.listText}>Choose your willpower challenge</Text>
          </View>
          <Text style={styles.startText}>Daily</Text>
          <View style={styles.tasksList}>
            <Text style={styles.listBullet}>•</Text>
            <Text style={styles.listText}>Meditation on breath</Text>
          </View>
          <View style={styles.tasksList}>
            <Text style={styles.listBullet}>•</Text>
            <Text style={styles.listText}>When feel temptation make 10 slow deep breath</Text>
          </View>
          <View style={styles.tasksList}>
            <Text style={styles.listBullet}>•</Text>
            <Text style={styles.listText}>When feel temptation delay your decision for 10 minutes</Text>
          </View>
          <View style={styles.tasksList}>
            <Text style={styles.listBullet}>•</Text>
            <Text style={styles.listText}>Before go to sleep write your fillings about willpower during a day to a dairy</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121014',
  },
  containerHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 180,
    paddingHorizontal: 20,
  },
  delete: {
    width: 14,
    height: 14,
  },
  checkBtn: {
    margin: 0,
  },
  btnText: {
    color: '#9977DC',
    fontFamily: Font["Gilroy-Medium"],
    fontSize: 14,
    lineHeight: 33.5,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  pluginContainer: {
    paddingHorizontal: 30,
  },
  pluginHeader: {
    marginVertical: 0,
    paddingHorizontal: 0,
  },
  pluginTitle: {
    color: '#5a5a5a',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 33.5,
  },
  pluginTopic: {
    color: '#fff',
    fonSize: 14,
    fontFamily: Font["Gilroy-Medium"],
    lineHeight: 33.5,
  },
  checkText: {
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 33.5,
    opacity: 0,
  },
  pluginDescription: {
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  startText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 33.5,
  },
  paragraph: {
    color: '#fff',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 23.5,
  },
  listContainer: {
    marginBottom: 40,
  },
  list: {
    marginLeft: 120,
    display: 'flex',
    flexDirection: 'row',
  },
  listBullet: {
    marginRight: 5,
    color: '#fff',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 23.5,
  },
  listText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 23.5,
  },
  linkText: {
    color: '#9977DC',
    fontSize: 12,
    fontFamily: Font["Gilroy-Regular"],
    lineHeight: 23.5,
    textDecorationLine: 'underline',
  },
  pluginTasks: {
    marginBottom: 20,
  },
  tasksList: {
    display: 'flex',
    flexDirection: 'row',
  }
});


export default InstalledPlugin;
