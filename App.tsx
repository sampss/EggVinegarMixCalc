import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, SafeAreaView, View, } from 'react-native';
import CalciumConverter from './CalciumConverter.tsx';
import { initializeAdMob, } from './src/banner/AdMobConfig.ts';
import Banner from './src/banner/Banner';


export default function App() {
  const [isAdMobReady, setIsAdMobReady] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? styles.darkBackground : styles.lightBackground;

  useEffect(() => {
    initializeAdMob().then(() => {
      setIsAdMobReady(true);
    });
  }, []);

  return (
    <SafeAreaView style={[styles.wrapper, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <CalciumConverter />
      </View>

      {isAdMobReady && <Banner backgroundColor='#d0f0c0' />}
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
});