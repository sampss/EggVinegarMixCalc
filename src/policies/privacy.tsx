import React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function PrivacyPolicy() {
  const theme = useTheme();
  const isDark = theme.dark;
  const styles = getStyles(isDark);

  const openLink = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Privacy Policy{'\n'}EggShells 4 Plants</Text>
      <Text style={styles.paragraph}><Text style={styles.bold}>Effective Date:</Text> July 18, 2025</Text>
      <Text style={styles.paragraph}><Text style={styles.bold}>Last Updated:</Text> July 18, 2025</Text>

      <Text style={styles.subheading}>Introduction</Text>
      <Text style={styles.paragraph}>
        EggVinegarMixCalc does not collect, store, or share any personal user data. However, the app uses Google AdMob to display ads, which may involve limited data processing by third parties.
      </Text>

      <Text style={styles.subheading}>Children’s Privacy</Text>
      <Text style={styles.paragraph}>We do not knowingly collect personal information from children under the age of 13. If a user identifies as a child:</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}>• Features that allow sharing of identifiable information will be disabled unless parental consent is provided.</Text>
        <Text style={styles.bullet}>• We will obtain parental consent where required by law.</Text>
        <Text style={styles.bullet}>• We will limit data processing to allowable purposes only.</Text>
        <Text style={styles.bullet}>• We will not discriminate against children who choose not to disclose more personal information than necessary.</Text>
      </View>
      <Text style={styles.paragraph}>
        If you're a parent or guardian and believe your child has provided personal information without consent, please contact us immediately. We will promptly delete such data.
      </Text>

      <Text style={styles.subheading}>Advertising and Third-Party Services</Text>
      <Text style={styles.paragraph}>This app uses Google AdMob for advertising. AdMob may use:</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}>• Device identifiers</Text>
        <Text style={styles.bullet}>• Cookies or similar technologies</Text>
        <Text style={styles.bullet}>• Limited device and usage data</Text>
      </View>
      <TouchableOpacity onPress={() => openLink('https://policies.google.com/technologies/ads')}>
        <Text style={styles.link}>Learn more about how Google uses data in its partners' apps</Text>
      </TouchableOpacity>

      <Text style={styles.subheading}>Your Rights</Text>
      <Text style={styles.paragraph}>
        Depending on your location, you may have rights under laws such as the California Consumer Privacy Act (CCPA) and the EU General Data Protection Regulation (GDPR).
      </Text>

      <Text style={styles.subsubheading}>Under the CCPA (California Residents):</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}>• Know what personal information is collected and how it’s used</Text>
        <Text style={styles.bullet}>• Request deletion of your personal information</Text>
        <Text style={styles.bullet}>• Opt out of the sale or sharing of your personal information</Text>
        <Text style={styles.bullet}>• Be free from discrimination for exercising your rights</Text>
        <Text style={styles.bullet}>• Correct inaccurate personal information</Text>
        <Text style={styles.bullet}>• Limit the use of sensitive personal information</Text>
      </View>
      <TouchableOpacity onPress={() => openLink('https://reference.legal/v1/sections/privacy/us-ccpa-consumer-privacy-rights-description/2022-07-12')}>
        <Text style={styles.link}>CCPA Consumer Rights</Text>
      </TouchableOpacity>

      <Text style={styles.subsubheading}>Under the GDPR (EU Residents):</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}>• Access your personal data</Text>
        <Text style={styles.bullet}>• Request erasure (“right to be forgotten”)</Text>
        <Text style={styles.bullet}>• Correct inaccuracies</Text>
        <Text style={styles.bullet}>• Object to processing</Text>
        <Text style={styles.bullet}>• Data portability</Text>
        <Text style={styles.bullet}>• Restrict processing</Text>
      </View>
      <TouchableOpacity onPress={() => openLink('https://reference.legal/v1/sections/privacy/eu-gdpr-data-subject-rights-description/2022-07-12')}>
        <Text style={styles.link}>GDPR Rights Overview</Text>
      </TouchableOpacity>

      <Text style={styles.subheading}>Third-Party Services</Text>
      <Text style={styles.paragraph}>
        Our app may link to or interact with third-party services. Their privacy practices are governed by their own policies. We encourage you to review those policies before engaging with them.
      </Text>

      <Text style={styles.subheading}>Changes to This Policy</Text>
      <Text style={styles.paragraph}>
        We may update this policy periodically. Changes will be posted on our website or within the app. Please check back to stay informed.
      </Text>

      <Text style={styles.subheading}>Contact Us</Text>
      <Text style={styles.paragraph}>If you have questions or concerns about this policy, or wish to exercise your rights, contact:</Text>
      <Text style={styles.paragraph}>📧 <Text style={styles.bold}>Email:</Text> <Text style={styles.link} onPress={() => openLink('mailto:wagle@agilewebsmithing.com')}>wagle@agilewebsmithing.com</Text></Text>
      <Text style={styles.paragraph}>🌐 <Text style={styles.bold}>Website:</Text> <Text style={styles.link} onPress={() => openLink('https://agilewebsmithing.com')}>agilewebsmithing.com</Text></Text>

      <Text style={styles.subheading}>Data Protection Authorities</Text>
      <Text style={styles.paragraph}>
        In certain jurisdictions, you may also contact your local Data Protection Authority if you believe your rights have been violated.
      </Text>
      <TouchableOpacity onPress={() => openLink('https://reference.legal/v1/sections/privacy/data-protection-authority-contact/2022-07-12')}>
        <Text style={styles.link}>EU DPA Directory</Text>
      </TouchableOpacity>
    </View>
  );
}



const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
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