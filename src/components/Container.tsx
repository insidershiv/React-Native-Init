import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
const Container = ({children}: {children: ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};
export default Container;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
