import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';

const APP_NAME = 'EggShells 4 Plants';
const FEEDBACK_EMAIL = 'sampsons79@gmail.com';

export default function FeedbackContent() {
  const theme = useTheme();
  const isDark = theme.dark;
  const styles = getStyles(isDark);

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSendFeedback = () => {
    if (!subject.trim()) {
      Alert.alert('Please enter a subject for your feedback.');
      return;
    }

    const emailSubject = `Feedback: ${APP_NAME} - ${subject}`;
    const emailBody = encodeURIComponent(body || 'No message provided.');
    const mailtoLink = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

    Linking.openURL(mailtoLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 Send Feedback</Text>
      <Text style={styles.paragraph}>
        I’d love to hear your thoughts, suggestions, or bug reports. Your feedback helps improve the app and keeps it user-first.
      </Text>

      <Text style={styles.label}>Subject</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Dark mode suggestion"
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        value={subject}
        onChangeText={setSubject}
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Type your feedback here..."
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        value={body}
        onChangeText={setBody}
        multiline
        numberOfLines={6}
      />

      <TouchableOpacity style={styles.button} onPress={handleSendFeedback}>
        <Text style={styles.buttonText}>📧 Send Feedback</Text>
      </TouchableOpacity>
    </View>
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
    paragraph: {
      fontSize: 14,
      lineHeight: 20,
      color: isDark ? '#ddd' : '#000',
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      marginBottom: 4,
      color: isDark ? '#fff' : '#000',
    },
    input: {
      backgroundColor: isDark ? '#1e1e1e' : '#fff',
      borderColor: isDark ? '#555' : '#ccc',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      marginBottom: 12,
      color: isDark ? '#fff' : '#000',
    },
    textArea: {
      height: 120,
      textAlignVertical: 'top',
    },
    button: {
      backgroundColor: '#4CAF50',
      paddingVertical: 12,
      borderRadius: 6,
      alignItems: 'center',
      marginTop: 8,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });