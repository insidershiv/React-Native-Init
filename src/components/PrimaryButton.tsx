import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import RightArrow from '../assets/icons/RightArrow.svg';
import theme from '../theme/theme';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
interface buttonProps {
  label: string;
  width?: string;
  clickHandler?: (event: MouseEvent) => void;
  loading?: boolean;
}
export const PrimaryButton = ({
  label = 'Login',
  width = '100%',
  clickHandler,
  loading,
}: buttonProps) => {
  return (
    <View style={{width: width}}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.primaryButton}
        onPress={clickHandler}>
        <View style={styles.buttonLabelContainer}>
          {loading ? (
            <ActivityIndicator
              animating={true}
              color={MD2Colors.white}
              size={20}
            />
          ) : (
            <Text style={styles.buttonLabel}>{label}</Text>
          )}
        </View>
        {/* <RightArrow height={32} width={32} color={colors.primary} /> */}
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
    backgroundColor: theme.colors.primary,
    color: colors.white,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: '#fff',
    textTransform: 'none',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonLabelContainer: {
    flex: 1,
  },
});
