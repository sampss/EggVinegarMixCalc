import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function DonationsContent() {
  const theme = useTheme();
  const isDark = theme.dark;
  const styles = getStyles(isDark);

  const handleDonatePress = () => {
    Linking.openURL('https://ko-fi.com/wagle');
  };

  return (

      <View style={styles.innerContainer}>
        <Text style={styles.sectionTitle}>Donations</Text>
        <Text style={styles.paragraph}>
            I'm building modular, privacy-first apps that empower users—from personal tools to community-driven platforms.
            Every donation helps me move closer to full-time development and keeps the apps transparent, accessible, and free from paywalls or subscriptions. While I may include non-intrusive ads to help fund development, donations allow me to prioritize user experience, reduce reliance on ad revenue, and stay focused on helping people—not corporations.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleDonatePress}>
          <Text style={styles.buttonText}>☕   Buy Me a Coffee</Text>
        </TouchableOpacity>
      </View>

  );
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: isDark ? '#121212' : '#95dd71',
      flexGrow: 1,
    },
    innerContainer: {
      padding: 12,
      backgroundColor: isDark ? '#1e1e1e' : '#FFE570',  //'#1e1e1e' : '#FFE135',
      borderRadius: 8,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 4,
      color: isDark ? '#fff' : '#000',
    },
    paragraph: {
      fontSize: 14,
      lineHeight: 20,
      color: isDark ? '#ddd' : '#000',
      marginBottom: 12,
    },
    button: {
        backgroundColor: isDark ? '#4CAF50' : '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: isDark ? '#555' : '#000',
        alignItems: 'center',
        marginTop: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });