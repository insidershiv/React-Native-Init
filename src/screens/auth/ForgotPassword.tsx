import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';

import globalStyles from '../../styles/global';
import BackButton from '../../components/BackButton';
import Mail from '../../assets/icons/Mail.svg';
import PaperTextInput from '../../components/PaperTextInput';
import PrimaryButton from '../../components/PrimaryButton';
const ForgotPassword = () => {
  return (
    <SafeAreaView style={globalStyles.main}>
      <BackButton />
      <Text variant="titleLarge" style={globalStyles.title}>
        Reset Password
      </Text>
      <Text variant="bodyLarge" style={globalStyles.mt20}>
        Please enter your email address to request a password reset
      </Text>
      <View style={globalStyles.mt20}>
        <PaperTextInput
          mode="outlined"
          Icon={Mail}
          placeHolder="abc@gmail.com"
        />
      </View>
      <View style={globalStyles.mt40}>
        <PrimaryButton label="send" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
