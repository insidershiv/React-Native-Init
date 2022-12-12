import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, ROUTES} from '../../constants';
import Logo from '../../assets/icons/Logo.svg';
import Mail from '../../assets/icons/Mail.svg';
import Password from '../../assets/icons/Password.svg';
import Google from '../../assets/icons/Google.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import {useNavigation} from '@react-navigation/native';
import {
  TextInput,
  Text as PaperText,
  TouchableRipple,
  Switch,
  Button,
} from 'react-native-paper';
import PrimaryButton from '../../components/PrimaryButton';
import theme from '../../theme/theme';
// import colors from '../../constants/colors';

const Login = ({}) => {
  // const {navigation} = props;
  const navigation = useNavigation();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Logo height={60} width={60} />
          </View>
          <Text style={styles.brandName}>EventHub</Text>

          <View>
            <PaperText variant="titleLarge" style={styles.loginContinueTxt}>
              Sign in{' '}
            </PaperText>
            <TextInput
              theme={{roundness: 10, underlineColor: 'gray'}}
              placeholder="Email"
              mode="outlined"
              outlineColor="#E4DFDF"
              style={styles.input}
              left={
                <TextInput.Icon icon={() => <Mail height={20} width={20} />} />
              }
            />
            <TextInput
              theme={{roundness: 10, underlineColor: 'gray'}}
              placeholder="Password"
              mode="outlined"
              outlineColor="#E4DFDF"
              left={
                <TextInput.Icon
                  icon={() => <Password height={20} width={20} color="" />}
                />
              }
              right={
                <TextInput.Icon
                  icon={isPasswordHidden ? 'eye' : 'eye-off'}
                  onPress={() => {
                    setIsPasswordHidden(!isPasswordHidden);
                  }}
                />
              }
              secureTextEntry={isPasswordHidden}
            />
          </View>
          <View style={styles.rememberMe}>
            <TouchableRipple>
              <View>
                <View pointerEvents="none">
                  <Switch value={true} />
                </View>
              </View>
            </TouchableRipple>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => console.log('Pressed')}>
              <PaperText variant="titleSmall" style={styles.forgotPassText}>
                Forgot Password?{' '}
              </PaperText>
            </TouchableOpacity>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
        </View>

        <View style={styles.row}>
          <PrimaryButton label="Sign In" width="85%" />
        </View>
        {/***************** Socail Logins **********************/}
        <View style={[styles.row, {marginTop: 20}]}>
          <PaperText
            variant="titleLarge"
            style={{fontWeight: '700', color: COLORS.gray400}}>
            OR
          </PaperText>
        </View>
        <View style={styles.row}>
          <Button
            icon={() => <Google height={32} width={32} />}
            mode="contained"
            style={styles.socialMediaButton}
            onPress={() => {}}>
            <PaperText variant="titleMedium">Login with Google</PaperText>
          </Button>
        </View>
        <View style={styles.row}>
          <Button
            icon={() => <Facebook height={32} width={32} />}
            mode="contained"
            style={styles.socialMediaButton}
            onPress={() => {}}>
            <PaperText variant="titleMedium">Login with Facebook</PaperText>
          </Button>
        </View>
        <View style={[styles.row, styles.mt20]}>
          <PaperText variant="titleMedium">Don't have an account?</PaperText>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log('pressed signup')}>
            <PaperText
              variant="titleMedium"
              style={{color: theme.colors.primary}}>
              {' '}
              Sign up
            </PaperText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    marginTop: 30,
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.black,
    opacity: 0.9,
  },
  loginContinueTxt: {
    color: COLORS.black,
    marginBottom: 8,
    fontWeight: 'bold',
    textShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
    marginTop: 22,
    fontSize: 28,
  },
  input: {
    marginVertical: 10,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.primary,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
  rememberMe: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  mt20: {
    marginTop: 20,
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
});
