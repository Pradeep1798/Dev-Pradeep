import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './RootScreens';
import {RootStackScreens} from './RootStack';
import Splash from 'screens/splash/Splash';
import LogIn from 'screens/LogIn';
import SignUp from 'screens/SignUp';
import Home from 'screens/Home';
import Welcome from 'screens/Info';

const RootPaths = () => {
  const Stack = createNativeStackNavigator<RootStackScreens>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.INFO}
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={LogIn}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={SCREENS.SIGNUP}
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootPaths;
