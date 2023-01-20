import {StyleSheet} from 'react-native';
import {COLORS} from '../constants';
const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    marginBottom: 6,
    fontWeight: 'bold',
    textShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
    marginTop: 22,
    fontSize: 28,
  },
  input: {
    marginVertical: 3,
    paddingTop: 2,
    paddingBottom: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mt20: {
    marginTop: 20,
  },
  mt40: {
    marginTop: 40,
  },
  socialMediaButton: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    width: '85%',
  },
  main: {
    padding: 16,
  },
  subtitle: {
    color: 'rgba(28, 25, 57, 0.8)',
    fontSize: 16,
    fontWeight: '300',
  },
});
export default styles;
