import CustomTextInput from 'components/CustomTextInput';

import {InputRules} from 'components/IInputRules';
import {globalcolor} from 'public/globalcolor';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {navigate} from './root/NavigationService';
import {SCREENS} from './root/RootScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

const Home = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    getuserName();
  }, []);

  const getuserName = async () => {
    try {
      const userName = await AsyncStorage.getItem('Name');
      console.log(userName);

      if (userName !== null) {
        setName(userName);
      }
    } catch (error) {
      console.error('Error retrieving username:', error);
    }
  };
  function handleLogIn() {
    alert('Logged Out Successfully');
    navigate(SCREENS.LOGIN);
  }

  return (
    <SafeAreaView style={styles.Parent}>
      <View style={styles.container}>
        <Image source={require('assets/logoHome.png')} style={styles.logo} />

        <Text style={styles.welcomeText}>Welcome {name}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogIn}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
    backgroundColor: globalcolor.white,
    flexDirection: 'column',
    height: 'auto',
    alignContent: 'flex-start',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  iteminput: {
    fontSize: 18,
    fontWeight: '400',
    color: globalcolor.black,
    marginTop: 5,
    marginHorizontal: 15,
    marginBottom: 5,
  },
  signInText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  agreeText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: globalcolor.btnColor,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
  },
  buttonText: {
    color: globalcolor.white,
    fontSize: 18,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  forgotPassword: {
    color: '#007BFF',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  orText: {
    color: '#aaa',
    marginVertical: 15,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signUpText: {
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  signUpLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  splashImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: 0,
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'cover',
    transform: [{rotate: '90deg'}],
  },
});

export default Home;
