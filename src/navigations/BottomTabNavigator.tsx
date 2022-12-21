import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Settings} from '../screens';
import DrawerNavigator from './DrawerNavigator';
import colors from '../constants/colors';
import routes from '../constants/routes';
import Explore from '../screens/Explore';
import Events from '../screens/Events';

const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={routes.EXPLORE} component={Explore} />
      <Tab.Screen name={routes.EVENTS} component={Events} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;
