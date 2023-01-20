import AsyncStorage from '@react-native-community/async-storage';
import {LoginData} from '../types/interface';
// import logoCfsZippTech from '../assets/images/CFS-ZIPPTechWallet.png';
// import logoZippcard from '../assets/images/logo.png';
// import logoSpacetel from '../assets/images/logoSpacetel.png';
// import whiteLabelConfig from '../../src/whitelabel/WhiteLabelConfig';

// const getCurrentAppLogo = () => {
//   const currentApp = whiteLabelConfig.APP_NAME;
//   switch (currentApp) {
//     case 'CFS-ZIPP Tech Wallet':
//       return require('../assets/images/CFS-ZIPPTechWallet.png');
//     case 'Zippcard Wallet':
//       return require('../assets/images/logo.png');
//     case 'Spacetel':
//       return require('../assets/images/logoSpacetel.png');
//     default:
//       return require('../assets/images/logo.png');
//   }
// };

// const getBaseUrl = () => {
//   const currentApp = whiteLabelConfig.APP_NAME;
//   switch (currentApp) {
//     case 'CFS-ZIPP Tech Wallet':
//       return 'https://prod-wallet.cfsemoney.com';
//     case 'Zippcard Wallet':
//       return 'https://aws-wallet.cfsemoney.com';
//     case 'Spacetel':
//       return 'https://aws-wallet.cfsemoney.com';
//     default:
//       return 'https://aws-wallet.cfsemoney.com';
//   }
// };

// export const getProxyUrl = () => {
//   const currentApp = whiteLabelConfig.APP_NAME;
//   switch (currentApp) {
//     case 'CFS-ZIPP Tech Wallet':
//       return 'wallet.cfszipptech.com';
//     case 'Zippcard Wallet':
//       return `v2wallet.zippcard.net`;
//     case 'Spacetel':
//       return `v2wallet.spacetel.co.uk`;
//     default:
//       return `v2wallet.zippcard.net`;
//   }
// };

export const BASE_URL = 'https://aws-wallet.cfsemoney.com';
// export const APP_LOGO = getCurrentAppLogo();

// export const getProxyUrl = () => PROXY_URL;

export const CORP_WALLET_USER_PROFILE_LIST = [
  'wallet_user',
  'corporate_admin',
  'corporate_staff',
  'pm_admin',
];

export const getLoginData = async () => {
  const loginDataString = await AsyncStorage.getItem('loginData');
  if (!loginDataString) {
    return {} as LoginData;
  }
  return JSON.parse(loginDataString) as LoginData;
};

export const transferTypeList = ['Personal', 'Business'];

export const getIsoCodeFromCurrencyName = (currencyName: string) => {
  return currencyName.substring(0, 2).toLowerCase();
};

export const getPaymentReferenceMaxLimitErrorMessage = () => {
  return 'Max 35 characters ';
};

export const getPaymentReferenceErrorMessage140Characters = () => {
  return 'Max 140 characters ';
};
