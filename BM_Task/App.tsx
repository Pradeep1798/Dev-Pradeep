import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootPaths from './src/screens/root/RootPaths';
import {navigationRef} from 'screens/root/NavigationService';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootPaths />
    </NavigationContainer>
  );
};

export default App;
