import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, ROUTES} from '../constants';
import {Wallet, Notifications, Home, Profile} from '../screens';
import {View} from 'react-native';
import CustomDrawer from '../components/CustomDrawer';
import UserIcon from '../assets/icons/User.svg';
import MessageIcon from '../assets/icons/Message.svg';
import BookmarkIcon from '../assets/icons/Bookmark.svg';
import CalendarIcon from '../assets/icons/Calendar.svg';
import HelpIcon from '../assets/icons/Help.svg';
import LogoutIcon from '../assets/icons/Logout.svg';
import MailIcon from '../assets/icons/Mail.svg';
import SettingsIcon from '../assets/icons/Settings.svg';
import Contact from '../screens/Contact';
import Message from '../screens/Message';
import Help from '../screens/Help';
import Calendar from '../screens/Calendar';
import Bookmark from '../screens/Bookmark';
import Settings from '../screens/home/Settings';
import colors from '../constants/colors';
import {Text} from 'react-native-paper';
import IonIcons from 'react-native-vector-icons/Ionicons';
import BottomTabsNavigation from './BottomTabNavigator';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      {/* <Drawer.Screen
        name={ROUTES.HOME}
        component={BottomTabsNavigation}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <UserIcon height={25} width={25} color={colors.white} />
          ),
          headerStyle: {
            backgroundColor: colors.tertiary,
            borderBottomLeftRadius: 22,
            borderBottomRightRadius: 22,
            height: 180,
          },
          headerTitleStyle: {
            color: colors.white,
            fontSize: 14,
          },
          headerRight: () => (
            <IonIcons
              name="ios-notifications-outline"
              size={20}
              style={{marginRight: 10}}
              color={colors.white}
            />
          ),
        }}
      /> */}
      <Drawer.Screen
        name={ROUTES.Message}
        component={BottomTabsNavigation}
        options={{
          title: 'Message',
          drawerIcon: ({focused, color, size}) => (
            <MessageIcon height={25} width={25} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.Calendar}
        component={Calendar}
        options={{
          title: 'Calendar',
          drawerIcon: ({focused, color, size}) => (
            <CalendarIcon height={25} width={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.Bookmark}
        component={Bookmark}
        options={{
          title: 'Bookmark',
          drawerIcon: ({focused, color, size}) => (
            <BookmarkIcon height={25} width={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.Contact}
        component={Contact}
        options={{
          title: 'Contact Us',
          drawerIcon: ({focused, color, size}) => (
            <MailIcon height={25} width={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, color, size}) => (
            <SettingsIcon height={25} width={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.Help}
        component={Help}
        options={{
          title: 'Help & FAQs',
          drawerIcon: ({focused, color, size}) => (
            <HelpIcon height={25} width={25} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          title: 'Sign out',
          drawerIcon: ({focused, color, size}) => (
            <Logout height={25} width={25} color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
