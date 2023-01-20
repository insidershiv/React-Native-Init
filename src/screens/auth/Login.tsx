import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import {COLORS, ROUTES} from '../../constants';
import Logo from '../../assets/icons/Logo.svg';
import Mail from '../../assets/icons/Mail.svg';
import Password from '../../assets/icons/Password.svg';
import Google from '../../assets/icons/Google.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import {useNavigation} from '@react-navigation/native';
import CFSLogo from '../../assets/Spacetel.png';
import {
  TextInput,
  Text as PaperText,
  TouchableRipple,
  Switch,
  Button,
  useTheme,
  Snackbar,
} from 'react-native-paper';
import PrimaryButton from '../../components/PrimaryButton';
// import theme from '../../theme/theme';
import {RFValue, hp, normalize, wp} from '../utils/utils';
import PaperSwitch from '../../components/PaperSwitch';
import globalStyles from '../../styles/global';
import {ApiEndpoint, StatusCode} from '../../types/enum';
import {BASE_URL} from '../../services/common';
import {universalPostRequestWithData} from '../../services/requestHandler';
import {LoginData} from '../../types/interface';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {Login} from '../../redux/slices/userSlice';
// import colors from '../../constants/colors';

const LoginScreen = () => {
  // const {navigation} = props;
  const theme = useTheme();
  const navigation = useNavigation();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState({
    userName: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const login = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const url = `${BASE_URL}/${ApiEndpoint.LOGIN}`;
    const data = {
      username: userDetails.userName,
      password: userDetails.password,
      'white-label': 'v2wallet.spacetel.co.uk',
    };
    const response: any = await universalPostRequestWithData(url, data);

    if (response && response.status === StatusCode.OKAY) {
      const data: LoginData = response.data.data;
      dispatch(Login(data));
      setUserDetails({userName: '', password: ''});
      AsyncStorage.setItem('loginData', JSON.stringify(data));
      navigation.navigate(ROUTES.VERIFY_MFA_DEVICE);
    } else {
      setError('Something went wrong');
    }

    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Facebook height={45} width={45} />
          </View>
          <View style={styles.row}>
            <PaperText
              variant="titleLarge"
              allowFontScaling
              adjustsFontSizeToFit
              style={globalStyles.title}>
              Welcome Back!{' '}
            </PaperText>
          </View>
          <View style={[styles.row]}>
            <PaperText variant="titleMedium" style={globalStyles.subtitle}>
              Sign in to continue
            </PaperText>
          </View>
          {/* <PaperText style={styles.brandName}>Spacetel</PaperText> */}

          <View style={{marginTop: hp(4)}}>
            <TextInput
              theme={{roundness: 10, underlineColor: 'gray'}}
              placeholder="Email"
              mode="outlined"
              outlineColor="#E4DFDF"
              style={styles.input}
              value={userDetails.userName}
              disabled={isLoading}
              onChangeText={email =>
                setUserDetails({...userDetails, userName: email})
              }
              left={
                <TextInput.Icon icon={() => <Mail height={20} width={20} />} />
              }
            />
            <TextInput
              theme={{roundness: 10, underlineColor: 'gray'}}
              placeholder="Password"
              mode="outlined"
              outlineColor="#E4DFDF"
              value={userDetails.password}
              disabled={isLoading}
              onChangeText={value =>
                setUserDetails({...userDetails, password: value})
              }
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
            <View style={styles.rememberMeSwitch}>
              <TouchableRipple>
                <View>
                  <View pointerEvents="none">
                    <PaperSwitch
                      value={rememberMe}
                      onChangeHandler={() => setRememberMe(!rememberMe)}
                    />
                  </View>
                </View>
              </TouchableRipple>
              <PaperText variant="bodyMedium" style={styles.ft400}>
                Remember Me
              </PaperText>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
              <PaperText variant="titleSmall">Forgot Password? </PaperText>
            </TouchableOpacity>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
        </View>

        <View style={[styles.row, {marginTop: hp(5)}]}>
          <PrimaryButton
            label="Sign in My Account"
            clickHandler={login}
            loading={isLoading}
          />
        </View>
        {/***************** Social Logins **********************/}
        {/* <View style={[styles.row, {marginTop: 20 / PixelRatio.get()}]}>
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
            onPress={() => navigation.navigate(ROUTES.REGISTER)}>
            <PaperText
              variant="titleMedium"
              style={{color: theme.colors.primary}}>
              {' '}
              Sign up
            </PaperText>
          </TouchableOpacity>

      </View> */}
        <View style={[styles.row, styles.mt20]}>
          <PaperText variant="titleSmall">Don't have an account?</PaperText>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(ROUTES.REGISTER)}>
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

export default LoginScreen;

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
    // marginTop: 30,
  },
  brandName: {
    fontSize: RFValue(24),
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
    marginTop: hp(2.5),
    fontSize: RFValue(20),
  },
  input: {
    marginVertical: 10,
    textTransform: 'none',
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
    marginBottom: 10,
  },
  mr7: {
    marginRight: 7,
  },
  ft400: {
    fontWeight: '700',
  },
  rememberMe: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  rememberMeSwitch: {
    display: 'flex',
    flexDirection: 'row',
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
    paddingTop: 20 / PixelRatio.get(),
    paddingBottom: 20 / PixelRatio.get(),
    paddingLeft: 15 / PixelRatio.get(),
    paddingRight: 15 / PixelRatio.get(),
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    width: wp('80%'),
  },
});
