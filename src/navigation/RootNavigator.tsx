// src/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3Theme } from 'react-native-paper';

import CalciumConverter from '../../CalciumConverter';
import Information from '../screens/Information';
import PrivacyPolicy from '../screens/PrivacyPolicy'; // if implemented
import ScreenWrapper from '../components/ScreenWrapper';

type RootNavigatorProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  theme: MD3Theme;
};

const Stack = createNativeStackNavigator();

export default function RootNavigator({
  darkMode,
  setDarkMode,
  theme,
}: RootNavigatorProps) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        children={() => (
          <ScreenWrapper darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}>
            <CalciumConverter />
          </ScreenWrapper>
        )}
      />
      <Stack.Screen
        name="Information"
        children={() => (
          <ScreenWrapper darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}>
            <Information />
          </ScreenWrapper>
        )}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        children={() => (
          <ScreenWrapper darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}>
            <PrivacyPolicy />
          </ScreenWrapper>
        )}
      />
    </Stack.Navigator>
  );
}