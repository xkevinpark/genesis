// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const navigationRefCopy = useNavigationContainerRef();

  return (
    <NavigationContainer
      ref={navigationRefCopy}
    >
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
