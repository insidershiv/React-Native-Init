import {DefaultTheme} from 'react-native-paper';
import Colors from '../constants/colors';
const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {...DefaultTheme.colors, ...Colors},
  // colors: {
  //   primary: Colors.primary,
  // },
  Text: {
    subtitle: {
      fontWeight: 'bold',
    },
  },
};
export default theme;
