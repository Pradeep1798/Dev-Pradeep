import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {SCREENS} from './root/RootScreens';
import {navigate} from './root/NavigationService';
import {globalcolor} from 'public/globalcolor';

const Welcome = () => {
  function handleLogIn() {
    navigate(SCREENS.LOGIN);
  }
  function handleSignUp() {
    navigate(SCREENS.SIGNUP);
  }

  return (
    <SafeAreaView style={styles.background}>
      <Image source={require('assets/leftTop.png')} style={styles.topLeft} />
      <Image source={require('assets/RightTop2.png')} style={styles.topRight} />
      <View style={styles.logoContainer}>
        <Image source={require('assets/logoHome.png')} style={styles.logo} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Sparkle & Shine Transform Your Drive with Every Wash!
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Let's Start</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogIn}>
          <Text style={styles.signInText}>
            Already have an account?
            <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 150,
    height: 150,
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 100,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: globalcolor.btnColor,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: globalcolor.white,
    fontSize: 18,
  },
  signInText: {
    color: '#999',
    fontSize: 14,
  },
  signInLink: {
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default Welcome;
