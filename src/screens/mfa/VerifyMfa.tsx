import React, {useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import OtpInputs from 'react-native-otp-inputs';
import {Button, Text} from 'react-native-paper';
import globalStyles from '../../styles/global';
import colors from '../../constants/colors';
import BackButton from '../../components/BackButton';
import PrimaryButton from '../../components/PrimaryButton';
const VerifyMfa = () => {
  const [code, setCode] = useState('');
  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <BackButton />
        <View style={globalStyles.row}>
          <Text variant="titleLarge"> Verify MFA</Text>
        </View>
        <View>
          <OTPInputView
            style={{width: '100%', height: 200}}
            pinCount={6}
            code={code}
            onCodeChanged={code => setCode(code)}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <PrimaryButton label="Verify" />
      </View>
    </SafeAreaView>
  );
};
export default VerifyMfa;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
    marginTop: 0,
  },

  underlineStyleBase: {
    borderWidth: 5,
    color: 'red',
    width: 30,
    height: 45,

    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderRadius: 8,
    borderColor: colors.primary,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
