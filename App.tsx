import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './src/theme/theme';
export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
        <AuthNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}
