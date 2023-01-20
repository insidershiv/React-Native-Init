import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';

import globalStyles from '../../styles/global';
import BackButton from '../../components/BackButton';
import Mail from '../../assets/icons/Mail.svg';
import PaperTextInput from '../../components/PaperTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import CustomCheckBox from '../../components/CustomCheckbox';

const Register = () => {
  const [isTermsAndConditionsAccepted, setIsTermsAndConditionsAccepted] =
    useState<'checked' | 'unchecked' | 'indeterminate'>('indeterminate');
  const handleTermsAndConditions = () => {
    if (isTermsAndConditionsAccepted === 'checked') {
      setIsTermsAndConditionsAccepted('unchecked');
    } else {
      setIsTermsAndConditionsAccepted('checked');
    }
  };
  return (
    <SafeAreaView style={globalStyles.main}>
      <BackButton />
      <View style={globalStyles.row}>
        <Text
          variant="titleLarge"
          allowFontScaling
          adjustsFontSizeToFit
          style={globalStyles.title}>
          Welcome Back!{' '}
        </Text>
      </View>
      <View style={[globalStyles.row]}>
        <Text
          variant="titleMedium"
          style={[globalStyles.subtitle, {textAlign: 'center'}]}>
          Please provide following details {'\n'} for new account
        </Text>
      </View>
      <PaperTextInput placeHolder="Full Name" mode="outlined" />
      <PaperTextInput placeHolder="Email Address" mode="outlined" />
      <PaperTextInput placeHolder="Password" mode="outlined" />

      <View style={globalStyles.mt20}>
        <CustomCheckBox
          label="By creating your account you have to agree with our Terms and Conditions"
          status={isTermsAndConditionsAccepted}
          onPress={handleTermsAndConditions}
        />
      </View>
      <View style={globalStyles.mt40}>
        <PrimaryButton label="send" />
      </View>
    </SafeAreaView>
  );
};

export default Register;
