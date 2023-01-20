import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

export const getDeviceWidth = () => {
  return Dimensions.get('window').width;
};
export const getDeviceHeight = () => {
  return Dimensions.get('window').height;
};

export const isIPhoneXorAbove = () => {
  return Platform.OS === 'ios' && getDeviceHeight() >= 812;
};

export const StatusBarHeight = Platform.select({
  ios: isIPhoneXorAbove() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});

export const getDeviceSize = () => {
  return {
    width: getDeviceWidth(),
    height: getDeviceHeight(),
  };
};

export const getDeviceOrientation = () => {
  return getDeviceWidth() > getDeviceHeight() ? 'landscape' : 'portrait';
};

export const hp = (heightPercent: number | string) => {
  const elemWidth =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  const height =
    getDeviceHeight() >= getDeviceWidth()
      ? getDeviceHeight()
      : getDeviceWidth();
  return PixelRatio.roundToNearestPixel(
    ((height - StatusBarHeight) * elemWidth) / 100,
  );
};

export const wp = (widthPercent: number | string) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  const width =
    getDeviceHeight() <= getDeviceWidth()
      ? getDeviceHeight() / 1.2
      : getDeviceWidth();
  return PixelRatio.roundToNearestPixel(
    (width * elemWidth) / 100,
  ) as unknown as string;
};

// guideline height for standard 5" device screen is 680
export const RFValue = (fontSize: number, standardScreenHeight = 680) => {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height
      ? 0
      : Platform.OS === 'ios'
      ? 78
      : StatusBar.currentHeight
      ? StatusBar.currentHeight
      : 0; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    isIPhoneXorAbove() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export const normalize = (fontSize: number) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;
  const newSize = fontSize * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
