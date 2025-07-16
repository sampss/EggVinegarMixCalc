import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, SafeAreaView, View } from 'react-native';
import CalciumConverter from './CalciumConverter.tsx';
import { BANNER_UNIT_ID, AD_REQUEST_OPTIONS } from './src/banner/AdMobConfig.ts';
import { BannerAd, BannerAdSize,} from 'react-native-google-mobile-ads';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? styles.darkBackground : styles.lightBackground;

  return (
    <SafeAreaView style={[styles.wrapper, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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
  },
  content: {
    flex: 1,
  },
  lightBackground: {
    backgroundColor: '#f6f6f6',
  },
  darkBackground: {
    backgroundColor: '#000',
  },
    adContainer: {
    alignItems: 'center', // 🧭 Centers horizontally
    paddingVertical: 10,  // Optional spacing above/below
    backgroundColor: '#d0f0c0',
  },
});