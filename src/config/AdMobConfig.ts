import { TestIds } from 'react-native-google-mobile-ads';

// AdMobConfig.ts
export const BANNER_UNIT_ID = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-3940256099942544/3347511713';

export const AD_REQUEST_OPTIONS = {
  requestNonPersonalizedAdsOnly: true,
};