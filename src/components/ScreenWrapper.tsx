import React from 'react';
import { View, StyleSheet } from 'react-native';
import GearMenu from './GearMenu';
import { MD3Theme } from 'react-native-paper';

type ScreenWrapperProps = {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  theme: MD3Theme;
};

export default function ScreenWrapper({
  children,
  darkMode,
  setDarkMode,
  theme,
}: ScreenWrapperProps) {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <GearMenu darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
  },
  content: {
    flex: 1,
  },
});