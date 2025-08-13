import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function Information() {
  const theme = useTheme();
  const isDark = theme.dark;
  const styles = getStyles(isDark);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📜 Policies</Text>

      <View style={styles.outputBox}>

        <Text style={styles.text}>ℹ️ Privacy Policy</Text>

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
      padding: 14,
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
  });