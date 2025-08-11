import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from 'react-native-paper';

export default function CalciumConverter() {
  const theme = useTheme();
  const isDark = theme.dark;
  const styles = getStyles(isDark);

  const [eggshellAmount, setEggshellAmount] = useState<string>('1');
  const [eggshellUnit, setEggshellUnit] = useState<'tbsp' | 'cup' | 'grams'>('tbsp');
  const [acidity, setAcidity] = useState<number>(2);
  const [vinegarUnit, setVinegarUnit] = useState<'ml' | 'cups'>('cups');
  const [summary, setSummary] = useState<string>('');
  const [acidityInput, setAcidityInput] = useState(acidity.toString());

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

    let result = `🥚 Estimated calcium carbonate: ${CaCO3.toFixed(2)}g\n\n`;
    result += `🎯 Required vinegar volume: ${formatVolume(recommendedVinegarMl)} at ${acidity}% acidity`;

    setSummary(result);
  }, [eggshellAmount, eggshellUnit, acidity, vinegarUnit]);

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

    <View style={styles.eggRow}>
      <View style={styles.eggInputWrapper}>
        <Text style={styles.label}>Eggshell Quantity</Text>
        <TextInput
          style={styles.input}
          value={eggshellAmount}
          onChangeText={setEggshellAmount}
          keyboardType="numeric"
          placeholder="Enter amount"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
        />
      </View>
      <View style={styles.eggUnitWrapper}>
        <Text style={styles.label}>Eggshell Quantity Unit</Text>
        <View style={[styles.pickerWrapper, styles.eggshellUnitPickerWrapper]}>          
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
      </View>
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
                  setAcidityInput(acidity.toString());
                }
              }}
              placeholderTextColor={isDark ? '#aaa' : '#666'}
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
      marginBottom: 10,
      textAlign: 'center',
      color: isDark ? '#fff' : '#000',
    },
    label: {
      marginTop: 12,
      fontWeight: '800',
      color: isDark ? '#ddd' : '#000',
    },
    input: {
      borderWidth: 1,
      borderColor: isDark ? '#555' : '#a9a9a9',
      padding: 8,
      backgroundColor: isDark ? '#1e1e1e' : 'white',
      color: isDark ? '#fff' : '#000',
      borderRadius: 6,
      marginBottom: 8,
      marginTop: 4,
    },
    pickerWrapper: {
      borderRadius: 6,
      backgroundColor: isDark ? '#2a2a2a' : '#e0e0e0',
      borderWidth: 1,
      borderColor: isDark ? '#444' : '#000',
      marginBottom: 10,
      height: 40,
      justifyContent: 'center',
    },
    vinegarUnitPickerWrapper: {
      marginTop: 4,
    },
    picker: {
      height: 52,
      color: isDark ? '#fff' : '#000',
      fontSize: 12,
      fontFamily: 'System',
      textAlignVertical: 'center',
      includeFontPadding: false,
    },
    vinegarUnitPicker: {},
    output: {
      backgroundColor: isDark ? '#333' : '#FED800',
      color: isDark ? '#fff' : '#000',
      padding: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDark ? '#555' : '#000',
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
      borderColor: isDark ? '#555' : '#a9a9a9',
      backgroundColor: isDark ? '#1e1e1e' : 'white',
      color: isDark ? '#fff' : '#000',
      paddingVertical: 8,
      borderRadius: 6,
    },
    arrow: {
      width: 40,
      height: 40,
      backgroundColor: isDark ? '#444' : '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      marginHorizontal: 4,
    },
    arrowText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#000',
    },
    eggRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    eggInputWrapper: {
      flex: 1,
      marginRight: 8,
    },
    eggUnitWrapper: {
      flex: 1,
      marginLeft: 8,
    },
    eggshellUnitPickerWrapper: {
      marginTop: 4,
      height: 36,
    },
  });
