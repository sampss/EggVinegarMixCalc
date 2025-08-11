import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CalciumConverter() {
  const [eggshellAmount, setEggshellAmount] = useState<string>('1');
  const [eggshellUnit, setEggshellUnit] = useState<'tbsp' | 'cup' | 'grams'>('tbsp');
  const [acidity, setAcidity] = useState<number>(2); // now a number
  const [vinegarUnit, setVinegarUnit] = useState<'ml' | 'cups'>('cups');
  const [summary, setSummary] = useState<string>('');

  const getEggshellGrams = (): number => {
    const val = parseFloat(eggshellAmount) || 0;
    switch (eggshellUnit) {
      case 'grams': return val;
      case 'tbsp': return val * 5.5;
      case 'cup': return val * 55;
      default: return 0;
    }
  };

  const getAceticPerMl = (): number => acidity / 100;

  const formatVolume = (ml: number): string => {
    return vinegarUnit === 'cups'
      ? `${(ml / 240).toFixed(2)} cups`
      : `${ml.toFixed(0)} mL`;
  };

  useEffect(() => {
    const CaCO3 = getEggshellGrams();
    const idealAcetic = CaCO3 * 1.2;
    const recommendedVinegarMl = idealAcetic / getAceticPerMl();

    let result = `🥚 Estimated calcium carbonate: ${CaCO3.toFixed(2)}g\n`;
    result += `🎯 Required vinegar volume: ${formatVolume(recommendedVinegarMl)} at ${acidity}% acidity`;

    setSummary(result);
  }, [eggshellAmount, eggshellUnit, acidity, vinegarUnit]);

    const [acidityInput, setAcidityInput] = useState(acidity.toString());

  const incrementAcidity = () => {
    const next = Math.min(acidity + 1, 100);
    setAcidity(next);
    setAcidityInput(next.toString());
  };

  const decrementAcidity = () => {
    const next = Math.max(acidity - 1, 1);
    setAcidity(next);
    setAcidityInput(next.toString());
  };


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

      <View style={styles.row}>
        <View style={styles.acidityWrapper}>
          <Text style={styles.label}>Vinegar Acidity (%)</Text>
          <View style={styles.acidityInputRow}>
            <TouchableOpacity onPress={decrementAcidity} style={styles.arrow}>
              <Text style={styles.arrowText}>−</Text>
            </TouchableOpacity>
              <TextInput
                style={styles.acidityInput}
                value={acidityInput}
                keyboardType="numeric"
                onChangeText={(text) => setAcidityInput(text)}
                onBlur={() => {
                  const val = parseInt(acidityInput);
                  if (!isNaN(val)) {
                    const clamped = Math.min(Math.max(val, 1), 100);
                    setAcidity(clamped);
                    setAcidityInput(clamped.toString());
                  } else {
                    setAcidityInput(acidity.toString()); // fallback to last valid
                  }
                }}
              />
            <TouchableOpacity onPress={incrementAcidity} style={styles.arrow}>
              <Text style={styles.arrowText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.unitWrapper}>
          <Text style={styles.label}>Vinegar Output Unit</Text>
          <View style={[styles.pickerWrapper, styles.vinegarUnitPickerWrapper]}>
            <Picker
              selectedValue={vinegarUnit}
              onValueChange={(item) => setVinegarUnit(item)}
              style={[styles.picker, styles.vinegarUnitPicker]}
            >
              <Picker.Item label="Milliliters (ml)" value="ml" />
              <Picker.Item label="Cups" value="cups" />
            </Picker>
          </View>
        </View>
      </View>

      <Text style={styles.output}>{summary}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#D0F0C0', // Tea Green
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
    height: 40, // Match arrow button height
   justifyContent: 'center',
  },
  vinegarUnitPickerWrapper: {
    marginTop: 4,
  },
  picker: {
    height: 52,
    color: '#000',
    fontSize: 12,
    fontFamily: 'System', // or your custom font name
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  vinegarUnitPicker: {
  },
  output: {
    backgroundColor: '#FED800',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 14,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  acidityWrapper: {
    flex: 1,
    marginRight: 10,
  },
  unitWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  acidityInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  acidityInput: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#a9a9a9',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderRadius: 6,
  },
  arrow: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginHorizontal: 4,
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});