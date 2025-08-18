// src/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3Theme } from 'react-native-paper';

import CalciumConverter from '../../CalciumConverter';
import Information from '../screens/Information';
import Donations from '../screens/Donations';
import ScreenWrapper from '../components/ScreenWrapper';
import Policies from '../screens/PoliciesPage';
import Feedback from '../screens/Feedback';


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
        name="Feedback"
        children={() => (
          <ScreenWrapper darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}>
            <Feedback />
          </ScreenWrapper>
        )}
      />
      <Stack.Screen
        name="PoliciesPage"
        children={() => (
          <ScreenWrapper darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}>
            <Policies />
          </ScreenWrapper>
        )}
      />
      <Stack.Screen
        name="Donations"
        children={() => (
          <ScreenWrapper darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}>
            <Donations />
          </ScreenWrapper>
        )}
      />
    </Stack.Navigator>
  );
}