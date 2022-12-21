import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, ForgotPassword, Register, Home, Profile} from '../screens';
import {COLORS, ROUTES} from '../constants';
import Test from '../screens/home/Test';
import BottomTabsNavigation from './BottomTabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// Navigator, Screen, Group
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="TabNavigator" component={BottomTabsNavigation} />
//       <Drawer.Screen name="Home" component={Profile} />
//     </Drawer.Navigator>
//   );
// }

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={() => ({
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: true,
          // headerStyle: {
          //   backgroundColor: COLORS.primary,
          // },
        })}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name={'Test'} component={Test} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
