// 📦 AdMobConfig.ts
import mobileAds, { MaxAdContentRating, TestIds } from 'react-native-google-mobile-ads';
import settings from '../settings/settings.json';
import keys from '../settings/keys.json';

const IS_Test_BUILD =  settings.IS_Test_BUILD; // controls if testing

const BANNER_UNIT_ID_PRODUCTION = keys.ADMOB.BANNER_UNIT_ID_PRODUCTION;

export const BANNER_UNIT_ID = IS_Test_BUILD
  ? TestIds.BANNER
  : BANNER_UNIT_ID_PRODUCTION;

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