import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, TextInput, Button, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import globalStyles from '../../styles/global';
import Profile from '../../assets/icons/Profile.svg';
import Mail from '../../assets/icons/Mail.svg';
import Password from '../../assets/icons/Password.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import Google from '../../assets/icons/Google.svg';

import PrimaryButton from '../../components/PrimaryButton';
import BackButton from '../../components/BackButton';
import {COLORS, ROUTES} from '../../constants';

const Register = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <BackButton />
      <Text variant="titleLarge" style={globalStyles.title}>
        Sign up
      </Text>
      <View>
        <TextInput
          theme={{roundness: 10, underlineColor: 'gray'}}
          placeholder="Full name"
          mode="outlined"
          outlineColor="#E4DFDF"
          style={globalStyles.input}
          left={
            <TextInput.Icon icon={() => <Profile height={20} width={20} />} />
          }
        />
      </View>
      <View>
        <TextInput
          theme={{roundness: 10, underlineColor: 'gray'}}
          placeholder="abc@gmail.com"
          mode="outlined"
          outlineColor="#E4DFDF"
          style={globalStyles.input}
          left={<TextInput.Icon icon={() => <Mail height={20} width={20} />} />}
        />
      </View>
      <View>
        <TextInput
          theme={{roundness: 10, underlineColor: 'gray'}}
          placeholder="Password"
          mode="outlined"
          outlineColor="#E4DFDF"
          style={globalStyles.input}
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
      <View>
        <TextInput
          theme={{roundness: 10, underlineColor: 'gray'}}
          placeholder="Confirm password"
          mode="outlined"
          outlineColor="#E4DFDF"
          style={globalStyles.input}
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
      <View style={[globalStyles.row, globalStyles.mt40]}>
        <PrimaryButton
          label="Sign Up"
          width="85%"
          clickhandler={() => console.log('first')}
        />
      </View>
      <View style={[globalStyles.row, globalStyles.mt20]}>
        <Text
          variant="titleLarge"
          style={{fontWeight: '700', color: COLORS.gray400}}>
          OR
        </Text>
      </View>
      <View style={globalStyles.row}>
        <Button
          icon={() => <Google height={32} width={32} />}
          mode="contained"
          style={globalStyles.socialMediaButton}
          onPress={() => {}}>
          <Text variant="titleMedium">Login with Google</Text>
        </Button>
      </View>
      <View style={globalStyles.row}>
        <Button
          icon={() => <Facebook height={32} width={32} />}
          mode="contained"
          style={globalStyles.socialMediaButton}
          onPress={() => {}}>
          <Text variant="titleMedium">Login with Facebook</Text>
        </Button>
      </View>
      <View style={[globalStyles.row, globalStyles.mt20]}>
        <Text variant="titleMedium">Don't have an account?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(ROUTES.LOGIN)}>
          <Text variant="titleMedium" style={{color: theme.colors.primary}}>
            {' '}
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    padding: 16,
  },
});
