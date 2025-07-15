import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, SafeAreaView, View } from 'react-native';
import CalciumConverter from './CalciumConverter.tsx';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? styles.darkBackground : styles.lightBackground;

  return (
    <SafeAreaView style={[styles.wrapper, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <CalciumConverter />
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
});