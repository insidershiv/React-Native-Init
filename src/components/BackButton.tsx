import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import colors from '../constants/colors';

const BackButton = () => {
  const navigate = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <IonIcon name="arrow-back" size={25} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};
export default BackButton;
