import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CalciumConverter() {
  const [eggshellAmount, setEggshellAmount] = useState<string>('1');
  const [eggshellUnit, setEggshellUnit] = useState<'tbsp' | 'cup' | 'grams'>('tbsp');
  const [vinegarAmount, setVinegarAmount] = useState<string>('1.6');
  const [vinegarUnit, setVinegarUnit] = useState<'ml' | 'cups'>('cups');
  const [acidity, setAcidity] = useState<string>('2');
  const [summary, setSummary] = useState<string>('');

const getEggshellGrams = useCallback((): number => {
  const val = parseFloat(eggshellAmount) || 0;
  switch (eggshellUnit) {
    case 'grams': return val;
    case 'tbsp': return val * 5.5;
    case 'cup': return val * 55;
    default: return 0;
  }
}, [eggshellAmount, eggshellUnit]);

const getAceticPerMl = useCallback((): number => {
  return (parseFloat(acidity) || 0) / 100;
}, [acidity]);

const getVinegarMl = useCallback((): number => {
  const val = parseFloat(vinegarAmount) || 0;
  return vinegarUnit === 'cups' ? val * 240 : val;
}, [vinegarAmount, vinegarUnit]);

const formatVolume = useCallback((ml: number): string => {
  return vinegarUnit === 'cups'
    ? `${(ml / 240).toFixed(2)} cups`
    : `${ml.toFixed(0)} mL`;
}, [vinegarUnit]);

const formatAceticVolume = useCallback((grams: number): string => {
  const ml = grams / getAceticPerMl();
  return formatVolume(ml);
}, [getAceticPerMl, formatVolume]);

  useEffect(() => {
    const CaCO3 = getEggshellGrams();
    const vinegarMl = getVinegarMl();
    const aceticTotal = vinegarMl * getAceticPerMl();
    const idealAcetic = CaCO3 * 1.2;
    const recommendedVinegarMl = idealAcetic / getAceticPerMl();
    const toleranceMl = 0.25 * 240; // 0.25 cups in mL
    const upperLimitMl = recommendedVinegarMl + toleranceMl;
    const excessMl = aceticTotal - idealAcetic;

    let result = `🥚 Estimated calcium carbonate: ${CaCO3.toFixed(2)}g\n`;
    result += `🍷 Current acetic acid: ${aceticTotal.toFixed(2)}g ≈ ${formatAceticVolume(aceticTotal)} of vinegar\n`;
    result += `🎯 Recommended vinegar volume: ${formatVolume(recommendedVinegarMl)}\n\n`;

    if (aceticTotal < idealAcetic) {
      result += `⚠️ Not enough acid. Increase vinegar volume or use higher acidity.`;
    } else if (vinegarMl > upperLimitMl) {
      result += `⚠️ Too much acid — you've exceeded the safe range. The extra ${excessMl.toFixed(0)} mL (${(excessMl / 240).toFixed(2)} cups) may leave residue harmful to microbes and roots. Dilute or reduce vinegar volume.`;
    } else {
      result += `✔️ Sufficient acid within acceptable range (+/- 0.25 cups). Let sit 2–14 days until bubbling stops.`;
    }

    setSummary(result);
  }, [getAceticPerMl, getEggshellGrams, getVinegarMl, formatAceticVolume, formatVolume]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🥚 Liquid Calcium Calculator</Text>

      <Text style={styles.label}>Eggshell Quantity</Text>
      <TextInput
        style={styles.input}
        value={eggshellAmount}
        onChangeText={setEggshellAmount}
        keyboardType="numeric"
      />
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={eggshellUnit}
          onValueChange={(item) => setEggshellUnit(item)}
          style={styles.picker}
        >
          <Picker.Item label="Tablespoon (tbsp)" value="tbsp" />
          <Picker.Item label="Cup" value="cup" />
          <Picker.Item label="Grams (g)" value="grams" />
        </Picker>
      </View>

      <Text style={styles.label}>Vinegar Quantity</Text>
      <TextInput
        style={styles.input}
        value={vinegarAmount}
        onChangeText={setVinegarAmount}
        keyboardType="numeric"
      />
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={vinegarUnit}
          onValueChange={(item) => setVinegarUnit(item)}
          style={styles.picker}
        >
          <Picker.Item label="Milliliters (ml)" value="ml" />
          <Picker.Item label="Cups" value="cups" />
        </Picker>
      </View>

      <Text style={styles.label}>Vinegar Acidity (%)</Text>
      <TextInput
        style={styles.input}
        value={acidity}
        onChangeText={setAcidity}
        keyboardType="numeric"
      />

      <Text style={styles.output}>{summary}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#d0f0c0',  //'#d0f0c0',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    marginTop: 12,
    fontWeight: '800',
  },
  input: {
    borderWidth: 1,
    borderColor: '#a9a9a9',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom: 8,
    marginTop: 4,
  },
  pickerWrapper: {
    borderRadius: 6,
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  picker: {
    height: 52,
    color: '#333',
    fontSize: 16,
    textAlignVertical: 'center',     // aligns vertically on Android
    includeFontPadding: false,       // removes extra padding from some fonts
  },
  output: {
    backgroundColor: '#FFF09C',     // Sticky note yellow with proper hex
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 14,
    marginTop: 20,
  },
});