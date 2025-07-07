import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CalciumConverter from './CalciumConverter';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <CalciumConverter />
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
});