import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CalciumConverter from './CalciumConverter';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <CalciumConverter />
      </View>

      <View style={styles.adContainer}>
        <BannerAd
          unitId={__DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111'}
          size={BannerAdSize.BANNER}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  content: {
    flex: 1,
  },
  adContainer: {
    alignItems: 'center', // 🧭 Centers horizontally
    paddingVertical: 10,  // Optional spacing above/below
  },
})
