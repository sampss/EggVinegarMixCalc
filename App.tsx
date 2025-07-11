import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import CalciumConverter from './CalciumConverter';
import { BANNER_UNIT_ID, AD_REQUEST_OPTIONS } from './src/config/AdMobConfig.ts'; 
//'@config/AdMobConfig'

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <CalciumConverter />
      </View>

      <View style={styles.adContainer}>
        <BannerAd
          unitId={BANNER_UNIT_ID}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={AD_REQUEST_OPTIONS}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#d0f0c0',
  },
  content: {
    flex: 1,
  },
  adContainer: {
    alignItems: 'center', // 🧭 Centers horizontally
    paddingVertical: 10,  // Optional spacing above/below
  },
})