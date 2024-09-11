import React, {useEffect} from 'react';
import {View, Image, StatusBar, SafeAreaView, Button} from 'react-native';
import {replace} from 'screens/root/NavigationService';
import {SCREENS} from 'screens/root/RootScreens';
import styles from './styles';

const SplashScreen = () => {
  useEffect(() => {
    ValidateMove();
  }, []);

  async function ValidateMove() {
    await timeout(3000);
    replace(SCREENS.INFO);
  }

  function timeout(late: number) {
    return new Promise(res => setTimeout(res, late));
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require('assets/leftTop.png')}
        style={[styles.splashImage, styles.topLeft]}
        resizeMode="contain"
      />
      <Image
        source={require('assets/RightTop2.png')}
        style={[styles.splashImage, styles.topRight]}
        resizeMode="contain"
      />
      <Image
        source={require('assets/downRight.png')}
        style={[styles.splashImage, styles.bottomRight]}
        resizeMode="contain"
      />
      <Image
        source={require('assets/logoHome.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
