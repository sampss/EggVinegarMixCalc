import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function Information() {
  const theme = useTheme();
  const isDark = theme.dark;
  const styles = getStyles(isDark);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ℹ️ About This App</Text>

      <View style={styles.outputBox}>
        <View style={styles.innerContainer}>
          <Text style={styles.sectionTitle}>What It Does</Text>
          <Text style={styles.paragraph}>
            This app helps you convert crushed eggshells into liquid calcium using vinegar. It calculates the ideal amount of vinegar based on your eggshell quantity and acidity level, giving you a plant-ready solution.
          </Text>

          <Text style={styles.sectionTitle}>Why It Matters</Text>
          <Text style={styles.paragraph}>
            Eggshells are rich in calcium carbonate. When dissolved in vinegar, they produce a pH-neutral liquid containing calcium acetate—a form plants can absorb easily. This is a sustainable, zero-waste way to boost calcium in your garden.
          </Text>

          <Text style={styles.sectionTitle}>The End Result</Text>
          <Text style={styles.paragraph}>
            A gentle, pH-balanced calcium solution that supports root development, fruiting, and overall plant health—without harsh chemicals or synthetic additives.
          </Text>

          <Text style={styles.sectionTitle}>🧪 The Elusive Formula</Text>
          <Text style={styles.paragraph}>
            The amount of vinegar needed depends on the calcium carbonate content of your eggshells and the acidity of your vinegar. The formula used here is:
          </Text>

          <Text style={styles.formula}>
            Required Vinegar (mL) = (Eggshell grams × 1.2) ÷ (Acidity % ÷ 100)
          </Text>

          <Text style={styles.paragraph}>
            This ensures complete reaction with minimal waste, producing calcium acetate and carbon dioxide. The 1.2 multiplier accounts for slight inefficiencies and ensures full conversion.
          </Text>

          <Text style={styles.sectionTitle}>📊 How the Math Works</Text>

          <Text style={styles.paragraph}>1. Convert eggshell quantity to grams:</Text>
          <Text style={styles.bullet}>• 1 tbsp = 5.5g</Text>
          <Text style={styles.bullet}>• 1 cup = 55g</Text>
          <Text style={styles.bullet}>• Grams = grams</Text>

          <Text style={styles.paragraph}>2. Convert vinegar acidity to decimal:</Text>
          <Text style={styles.bullet}>• Example: 5% → 0.05</Text>

          <Text style={styles.paragraph}>3. Calculate required acetic acid:</Text>
          <Text style={styles.bullet}>• Formula: eggshell grams × 1.2</Text>
          <Text style={styles.bullet}>• Example: 10g × 1.2 = 12g acetic acid</Text>

          <Text style={styles.paragraph}>4. Calculate vinegar volume needed:</Text>
          <Text style={styles.bullet}>• Formula: acetic acid ÷ acidity decimal</Text>
          <Text style={styles.bullet}>• Example: 12 ÷ 0.05 = 240 mL vinegar</Text>

          <Text style={styles.paragraph}>5. Format output:</Text>
          <Text style={styles.bullet}>• Cups: 240 mL ÷ 240 = 1.00 cups</Text>
          <Text style={styles.bullet}>• mL: 240 mL</Text>

          <Text style={styles.paragraph}>6. Display summary:</Text>
          <Text style={styles.bullet}>• 🥚 Estimated calcium carbonate: 10.00g</Text>
          <Text style={styles.bullet}>• 🎯 Required vinegar volume: 240 mL at 5% acidity</Text>
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
    innerContainer: {
      padding: 12, 
      backgroundColor: isDark ? '#1e1e1e' : '#FFE135',
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