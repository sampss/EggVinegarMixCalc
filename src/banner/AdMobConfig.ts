import { TestIds } from 'react-native-google-mobile-ads';

// AdMobConfig.ts
export const BANNER_UNIT_ID = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-2390674268118774~7608573803';

export const AD_REQUEST_OPTIONS = {
  requestNonPersonalizedAdsOnly: true,
};