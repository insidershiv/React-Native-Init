import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, IMGS} from '../constants';
import {Text} from 'react-native-paper';

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props} style={{marginLeft: 10}}>
      <SafeAreaView>
        <Image source={IMGS.user} style={styles.userImg} />
        <View>
          <Text variant="labelMedium">Ichigo</Text>
        </View>
        {/* <ImageBackground source={IMGS.bgPattern} style={{height: 140}}>
      </ImageBackground> */}
        <View style={styles.drawerListWrapper}>
          <DrawerItemList {...props} />
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 80,
    height: 80,
    borderRadius: 110 / 2,
    // position: 'absolute',
    // left: 10,
    // bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
