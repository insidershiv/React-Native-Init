import React from 'react';
import {Switch} from 'react-native-paper';
import {Platform, StyleSheet} from 'react-native';

interface SwitchProps {
  value: boolean | undefined;
  changeHandler?:
    | (((value: boolean) => void | Promise<void>) & Function)
    | undefined;
  [rest: string]: any;
}
const PaperSwitch = ({value, changeHandler, rest}: SwitchProps) => {
  return (
    <Switch
      value={value}
      style={styles.switch}
      onValueChange={changeHandler}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  switch: {
    transform: [
      {scaleX: Platform.OS === 'ios' ? 0.7 : 1.1},
      {scaleY: Platform.OS === 'ios' ? 0.7 : 1.1},
    ],
  },
});
export default PaperSwitch;
