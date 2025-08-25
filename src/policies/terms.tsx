import React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function TermsPolicy() {
  const theme = useTheme();
  const isDark = theme.dark;
  const styles = getStyles(isDark);

  const openLink = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Terms of Service</Text>

      <Text style={styles.paragraph}><Text style={styles.bold}>Effective Date:</Text> July 18, 2025</Text>

      <Text style={styles.subheading}>Acceptance of Terms</Text>
      <Text style={styles.paragraph}>
        By using EggShells 4 Plants, you agree to these Terms of Service. If you do not agree, please do not use the app.
      </Text>

      <Text style={styles.subheading}>Intended Use</Text>
      <Text style={styles.paragraph}>
        This app is intended for educational and gardening purposes only. It provides estimated calculations for mixing calcium carbonate with vinegar and is not suitable for medical, commercial, or hazardous chemical applications.
      </Text>

      <Text style={styles.subheading}>No Warranty</Text>
      <Text style={styles.paragraph}>
        EggShells 4 Plants is provided "as is" without warranties of any kind. We do not guarantee accuracy, reliability, or suitability for any specific purpose.
      </Text>

      <Text style={styles.subheading}>Limitation of Liability</Text>
      <Text style={styles.paragraph}>
        We are not liable for any damages or losses resulting from the use or inability to use this app, including but not limited to misuse of calculations or improper application of mixtures.
      </Text>

      <Text style={styles.subheading}>Third-Party Services</Text>
      <Text style={styles.paragraph}>
        This app may display ads or link to third-party services. We are not responsible for the content, privacy practices, or terms of those services.
      </Text>

      <Text style={styles.subheading}>Modifications</Text>
      <Text style={styles.paragraph}>
        We may update these Terms at any time. Continued use of the app after changes means you accept the revised terms.
      </Text>

      <Text style={styles.subheading}>Contact</Text>
      <Text style={styles.paragraph}>
        If you have questions about these Terms, contact us at:
      </Text>
      <Text style={styles.paragraph}>
        📧 <Text style={styles.bold}>Email:</Text>{' '}
        <Text style={styles.link} onPress={() => openLink('mailto:wagle@agilewebsmithing.com')}>
          wagle@agilewebsmithing.com
        </Text>
      </Text>
      <Text style={styles.paragraph}>
        🌐 <Text style={styles.bold}>Website:</Text>{' '}
        <Text style={styles.link} onPress={() => openLink('https://agilewebsmithing.com')}>
          agilewebsmithing.com
        </Text>
      </Text>

    </View>
  );
}



const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      width: '100%',
      padding: 20,
      borderRadius: 8,
      backgroundColor: isDark ? '#1e1e1e' : '#FFE570',
    },
    heading: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: isDark ? '#fff' : '#000',
    },
    subheading: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 8,
      color: isDark ? '#fff' : '#000',
    },
    subsubheading: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 4,
      color: isDark ? '#fff' : '#000',
    },
    paragraph: {
      fontSize: 14,
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: 8,
      color: isDark ? '#ddd' : '#000',
    },
    bulletList: {
      marginBottom: 8,
    },
    bullet: {
      fontSize: 14,
      lineHeight: 20,
      marginLeft: 12,
      marginBottom: 4,
      color: isDark ? '#ddd' : '#000',
    },
    bold: {
      fontWeight: 'bold',
    },
    link: {
      color: '#007AFF',
      textDecorationLine: 'underline',
    },
  });