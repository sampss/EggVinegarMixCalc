import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  Modal,
  Pressable,
  Text,
} from 'react-native';
import {
  Provider as PaperProvider,
  MD3LightTheme,
  MD3DarkTheme,
  SegmentedButtons,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import RootNavigator from './src/navigation/RootNavigator';
import { initializeAdMob } from './src/banner/AdMobConfig';
import Banner from './src/banner/Banner';

export default function App() {
  const [isAdMobReady, setIsAdMobReady] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const theme = darkMode ? MD3DarkTheme : MD3LightTheme;
  const backgroundStyle = darkMode ? styles.darkBackground : styles.lightBackground;

  useEffect(() => {
    initializeAdMob().then(() => {
      setIsAdMobReady(true);
    });
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={[styles.wrapper, backgroundStyle]}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          

          {/* Main content with navigation */}
          <View style={styles.content}>
            <RootNavigator darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}/>
          </View>

          {/* Ad banner */}
          {isAdMobReady && <Banner backgroundColor={darkMode ? '#222' : '#d0f0c0'} />}

          {/* Theme selector modal */}
          <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={[styles.modalContent, { backgroundColor: theme.colors.surface }]}>
                <Text style={[styles.modalText, { color: theme.colors.onSurface }]}>
                  Select Theme
                </Text>

                <SegmentedButtons
                  value={darkMode ? 'dark' : 'light'}
                  onValueChange={(value) => {
                    setDarkMode(value === 'dark');
                    setModalVisible(false);
                  }}
                  buttons={[
                    { value: 'light', label: 'Light', icon: 'white-balance-sunny' },
                    { value: 'dark', label: 'Dark', icon: 'moon-waning-crescent' },
                  ]}
                />

                {/* Spacer */}
                <View style={{ height: 24 }} />

                {/* Navigation links */}
                <ModalLinks setModalVisible={setModalVisible} theme={theme} />

                {/* Close button */}
                <View style={{ marginTop: 24 }}>
                  <Pressable
                    onPress={() => setModalVisible(false)}
                    style={styles.closeButton}
                  >
                    <Text style={[styles.linkText, { color: theme.colors.onSurface }]}>
                      Close
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
}

// Extracted modal links for cleaner structure
function ModalLinks({ setModalVisible, theme }) {
  const navigation = useNavigation();

  return (
    <>
      <Pressable
        onPress={() => {
          setModalVisible(false);
          navigation.navigate('Information');
        }}
        style={({ pressed }) => [
          styles.linkButton,
          { backgroundColor: pressed ? theme.colors.surfaceVariant : 'transparent' },
        ]}
      >
        <Text style={[styles.linkText, { color: theme.colors.primary }]}>
          ℹ️ Information Page
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setModalVisible(false);
          navigation.navigate('PrivacyPolicy'); // once implemented
        }}
        style={({ pressed }) => [
          styles.linkButton,
          { backgroundColor: pressed ? theme.colors.surfaceVariant : 'transparent' },
        ]}
      >
        <Text style={[styles.linkText, { color: theme.colors.primary }]}>
          📜 Privacy Policy
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  menuContainer: {
    alignItems: 'flex-end',
    padding: 6,
    height: 44,
  },
  iconButton: {
    padding: 4,
    borderRadius: 12,
  },
  lightBackground: {
    backgroundColor: '#f6f6f6',
  },
  darkBackground: {
    backgroundColor: '#000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    minWidth: 260,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
  linkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 4,
  },
  linkText: {
    fontSize: 16,
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});