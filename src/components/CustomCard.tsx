import React from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import colors from '../constants/colors';
import BookmarkIcon from '../assets/icons/Bookmark.svg';
import Group from '../assets/Group.png';
import IonIcons from 'react-native-vector-icons/Ionicons';
const CustomCard = () => {
  const {width} = Dimensions.get('screen');

  const image = require('../assets/Image.png');
  return (
    <View
      style={{
        width: 240,
        padding: 10,
        borderRadius: 16,
        elevation: 20,
        shadowColor: '#52006A',
      }}>
      <View style={{height: '45%'}}>
        <ImageBackground
          source={image}
          style={styles.image}
          imageStyle={{borderRadius: 16}}
          resizeMode="cover">
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderRadius: 10,
                  padding: 8,
                  backgroundColor: 'white',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text variant="titleSmall" style={{color: colors.orange}}>
                    10
                  </Text>
                  <Text variant="titleSmall" style={{color: colors.orange}}>
                    June
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderRadius: 10,
                  padding: 8,
                  backgroundColor: 'white',
                  height: 40,
                }}>
                <BookmarkIcon color={colors.orange} height={18} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{marginLeft: 8, marginTop: 4}}>
        <Text variant="bodyLarge" style={{fontWeight: '500'}}>
          International Band Mu...
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Group} />

          <Button mode="text" icon="plus">
            20 More
          </Button>
        </View>
        <View>
          <IonIcons name="ios-location-sharp" size={20} />
        </View>
      </View>
    </View>
  );
};
export default CustomCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  image: {
    height: '100%',
  },
});
