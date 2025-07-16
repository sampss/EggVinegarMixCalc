// 📦 AdMobConfig.ts
import mobileAds, { MaxAdContentRating, TestIds } from 'react-native-google-mobile-ads';

export const BANNER_UNIT_ID = TestIds.BANNER;  // explicit testing - comment out or delete for production.

// export const BANNER_UNIT_ID = __DEV__
//  ? TestIds.BANNER
//  : 'ca-app-pub-2390674268118774~7608573803';

export const AD_REQUEST_OPTIONS = {
  requestNonPersonalizedAdsOnly: true,
};

// ✅ Initializes AdMob SDK and applies request configuration
export async function initializeAdMob(): Promise<void> {
  await mobileAds().setRequestConfiguration({
    maxAdContentRating: MaxAdContentRating.PG,
    tagForChildDirectedTreatment: true,
    tagForUnderAgeOfConsent: true,
    testDeviceIdentifiers: ['EMULATOR'],
  });

  await mobileAds().initialize();
}