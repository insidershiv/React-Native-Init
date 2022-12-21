import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {COLORS} from '../../constants';

const Profile = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.bgColor,
        }}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
