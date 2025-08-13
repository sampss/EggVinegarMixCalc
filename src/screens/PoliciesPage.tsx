import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const policies = {
  privacy: require('./../policies/privacy.tsx'), 
  terms: require('./../policies/terms.tsx'),
};

export default function Policies() {
  const theme = useTheme();
  const isDark = theme.dark;
  const styles = getStyles(isDark);
  const [selectedPolicy, setSelectedPolicy] = useState<'privacy' | 'terms'>('privacy');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📜 Policies</Text>

      <View style={styles.outputBox}>

          {/* Navigation Links */}
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => setSelectedPolicy('privacy')}>
            <Text
              style={[
                selectedPolicy === 'privacy' ? styles.activeLink : styles.link,
                styles.leftAligned,
              ]}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>

          <Text style={styles.separator}>|</Text>

          <TouchableOpacity onPress={() => setSelectedPolicy('terms')}>
            <Text
              style={[
                selectedPolicy === 'terms' ? styles.activeLink : styles.link,
                styles.rightAligned,
              ]}
            >
              Terms of Service
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.innerContent}>
          <Text style={styles.policyText}>
            {React.createElement(policies[selectedPolicy].default)}
          </Text>
        </View>
        
      </View>
    </ScrollView>
  );
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: isDark ? '#121212' : '#D0F0C0',
      flexGrow: 1,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 12,
      textAlign: 'center',
      color: isDark ? '#fff' : '#000',
    },
    outputBox: {
      backgroundColor: isDark ? '#333' : '#FED800',
      padding: 0,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDark ? '#555' : '#000',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
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
      marginBottom: 8,
    },
    formula: {
      fontSize: 15,
      fontWeight: '600',
      fontStyle: 'italic',
      color: isDark ? '#fff' : '#000',
      marginVertical: 8,
    },
    bullet: {
      fontSize: 14,
      color: isDark ? '#ddd' : '#000',
      marginLeft: 12,
      marginBottom: 4,
    },
    nav: { 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
      //marginBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#000',
    },
    link: { 
      color: '#007AFF', 
      fontWeight: '500', 
      padding: 12,
    },
    activeLink: { 
      color: '#000', 
      fontWeight: '700', 
      padding: 12,
    },
    separator: { 
      marginHorizontal: 8, 
      color: '#888' 
    },
    policyText: { 
      fontSize: 14, 
      lineHeight: 20 
    },
    leftAligned: {
      textAlign: 'center',
      paddingLeft: 24,
    },
    rightAligned: {
      textAlign: 'center',
      paddingRight: 24,
    },
    innerContent: {
      flex: 1,
      padding: 12,
    }
  });