import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import RightArrow from '../assets/icons/RightArrow.svg';
interface buttonProps {
  label: string;
  width?: string;
  clickhandler?: (event: MouseEvent) => void;
}
export const PrimaryButton = ({
  label = 'Login',
  width = '100%',
  clickhandler,
}: buttonProps) => {
  return (
    <View style={{width: width}}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.primaryButton}
        onPress={clickhandler}>
        <View style={styles.buttonLabelContainer}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </View>
        <RightArrow height={32} width={32} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  flexReverse: {
    flexDirection: 'row-reverse',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    color: colors.white,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonLabelContainer: {
    flex: 2,
  },
});
